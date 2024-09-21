import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from './../../firebase'; // Import Firebase auth
import { onAuthStateChanged } from "firebase/auth"; // Import to monitor authentication state
import "./topbar.css";

const Topbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false); // Track logged-in state
  const navigate = useNavigate();

  const location = useLocation(); // Get current location object from React Router
  const [showDialog, setShowDialog] = useState(
    location.pathname !== "/signin" && location.pathname !== "/register" // Initially hide dialog on other pages
  );

  const handleClick = () => {
    setClick(!click);
    document.querySelector(".topCenter").classList.toggle("active");
  };

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true); // Update logged-in state
        setShowDialog(false); // Hide the sign-in dialog if user is authenticated
      } else {
        setLoggedIn(false); // Ensure logged-out state if user not found
        setShowDialog(location.pathname !== "/signin" && location.pathname !== "/register");
      }
    });

    showButton();
    window.addEventListener("resize", showButton);

    return () => {
      window.removeEventListener("resize", showButton);
      unsubscribe(); // Clean up subscription
    };
  }, [location.pathname]); // Update effect when location.pathname changes

  const handleLogout = () => {
    auth.signOut().then(() => {
      setLoggedIn(false); // Update logged-in state
      setShowDialog(true); // Show sign-in dialog after logging out
      navigate("/signin"); // Navigate to signin page after logout
    });
  };

  const handleSignInClick = () => {
    navigate("/signin"); // Navigate to the sign-in page using useNavigate
  };

  const handleRegisterClick = () => {
    navigate("/register"); // Navigate to the register page
  };

  return (
    <div className="top">
      <div className="topLeft">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFSARcdC_y6lXKYAzohSeA8siOlRl92t8Wjw&usqp=CAU"
              alt="Logo"
              className="logo-image"
            />
            <span>XYZ PHOTOGRAPHY</span>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
        </div>
      </div>
      <div className={`topCenter ${click ? "active" : ""}`}>
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/" onClick={closeMobileMenu}>
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about" onClick={closeMobileMenu}>
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact" onClick={closeMobileMenu}>
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write" onClick={closeMobileMenu}>
              PHOTOS
            </Link>
          </li>
          {loggedIn ? (
            <li className="topListItem">
              <button style={{ backgroundColor: '#333', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '18px' }} onClick={handleLogout}>
                Logout
              </button>
            </li>
          ) : (
            <>
              <li className="topListItem">
                <button style={{ backgroundColor: '#333', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '18px' }} onClick={handleSignInClick}>
                  Sign In
                </button>
              </li>
              <li className="topListItem">
                <button style={{ backgroundColor: '#333', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '18px' }} onClick={handleRegisterClick}>
                  Register
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
      {showDialog && !loggedIn && location.pathname !== "/signin" && location.pathname !== "/register" && (
        <div className="dialog-overlay">
          <div className="dialog-box">
            <h2>Sign In</h2>
            <p>Please sign in to continue.</p>
            <button onClick={handleSignInClick}>Sign In</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Topbar;
