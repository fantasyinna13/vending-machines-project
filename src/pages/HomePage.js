import HomePageCarousel from "../components/HomePageCarousel";
import React from "react";
import AppNavbar from "../components/AppNavbar";
import LearnMore from "../components/LearnMore";
import LoginCard from "../components/LoginCard";
import GlowingComponent from "../components/GlowingComponent";
import QuoteComponent from "../components/QuoteComponent";
import CardsComp from "../components/CardsComp";

function HomePage(){

   
    return (
       
         <div className="homePage">
            
        
    <div className="row">
        <div className="col-12">
            <HomePageCarousel/> 
            <QuoteComponent/>
            <div className="divForSomeButton">
            <button className="someButton">
            Благодарение на<b> Bianca Coffee </b>можете да добавяте следните неща:
            </button>
            </div>
            <CardsComp/>
           
           
        </div>
        </div>
       
        </div>
      
    )

}

export default HomePage;