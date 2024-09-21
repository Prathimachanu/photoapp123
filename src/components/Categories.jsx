import { categories } from "../data";
import "../components/Categories.css"
import { Link } from "react-router-dom";

const Categories = () => {
    return (
      <div id="categories" className="categories">
        <h1>Discover the World Through Photography</h1>
        <div className="categories_list">
          {categories?.slice(1, 7).map((category, index) => (
            <Link to={`/${category.label}`} key={index}>
              <div className="category">
                <img src={category.img} alt={category.label} />
                <div className="overlay"></div>
                <div className="category_text">
                  <div className="category_text_icon">{category.icon}</div>
                  <p>{category.label}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  };
  
export default Categories;