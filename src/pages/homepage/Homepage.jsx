import { useLocation } from "react-router";
import Header from "../../components/header/Header";

import "./homepage.css";
import Categories from "../../components/Categories";
import Follow from "../Follow/Follow";

export default function Homepage() {
  const location = useLocation();
  console.log(location);
  return (
    <>
       <Header />
   
      <div className="home">
   
    <Categories/>
       <Follow/> 
    
      </div>
    </>
  );
}