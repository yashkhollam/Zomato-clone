
import React,{Component} from 'react';
import kfcimg from './images/fooditemimg/KFC.jpg'
import Dominoimg from './images/fooditemimg/Domino Pizza.avif'
import LunchBox from './images/fooditemimg/lunchbox.avif';
import McDonalod from './images/fooditemimg/Mcdonaldimg.avif';
import SUBway from './images/fooditemimg/Subway.avif';
import thali from './images/fooditemimg/thali.avif';
import Hotel_Sandeep from './images/fooditemimg/hotel Sandeep.avif';
 

function orderOnline(){
    
     
    return(
        <div>
             <div className="orderOnline">
     <div className="ordercategory">
       <p className="orderfoodtxt">Order food online in Pune</p> 
        <div className="orderitems">
           
            <div className="orderitem1">
                
              <img src={kfcimg} alt="" className="foodimg"/>
               
               <p className="discount">Flat 10% OFF</p> 
               <p className="brandname">KFC</p>
               <p className="rating">3.9</p>
                <p className="discription">Burger, Rolls, Fast Food</p> 
                <p className="price">₹300</p>
              <p className="arivaltime">34 min..</p>
            </div>

          
            <div className="orderitem2">
                <img src={Dominoimg} alt="" className="foodimg"/> 
               <p className="brandname">Dominos Pizza</p>
               <p className="rating">3.9</p>
                <p className="discription">Pizza,Fast Food</p> 
                <p className="price">₹350</p>
              <p className="arivaltime">20 min..</p>  
              </div>

              
              <div className="orderitem3">
                <img src={Hotel_Sandeep} alt="" className="foodimg"/> 
                <p className="discount">Flat 15% OFF</p> 
               <p className="brandname">Hotel Sandeep</p>
               <p className="rating">1.0</p>
                <p className="discription">Maharashtrian,..</p> 
                <p className="price">₹300</p>
              <p className="arivaltime">34 min..</p>   
              </div>

            
              <div className="orderitem4">
                <img src={LunchBox} alt="" className="foodimg"/>
                <p className="discount">Flat 15% OFF</p> 
                <p className="brandname">LunchBox - Meals and Thalis </p>
                <p className="rating">3.9</p>
                 <p className="discription">North Indian, Biryani, Mughlai</p> 
                 <p className="price">₹150</p>
               <p className="arivaltime">40 min..</p>     
              </div>
            
              <div className="orderitem5">
                <img src={McDonalod} alt="" className="foodimg"/> 
                <p className="discount">Flat 5% OFF</p>  
               <p className="brandname">McDonald's</p>
               <p className="rating">2.0</p>
                <p className="discription">Burger, Fast Food, Desserts, Wraps</p> 
                <p className="price">₹300</p>
              <p className="arivaltime">1 hr..</p>  
              </div>
        

              <div className="orderitem6">
                <img src={SUBway} alt="" className="foodimg"/>  
                <p className="discount">Flat 20% OFF</p> 
                <p className="brandname">SUBway</p>
                <p className="rating">4.5</p>
                 <p className="discription">Burger, Rolls, Fast Food</p> 
                 <p className="price">₹300</p>
               <p className="arivaltime">34 min..</p>  
                  
              </div>

              

              <div className="orderitem7">
                <img src={thali} alt="" className="foodimg"/> 
                <p className="discount">Flat 20% OFF</p> 
                <p className="brandname">Surve's Pure Non-Veg</p>
                <p className="rating">4.0</p>
                 <p className="discription">Maharashtrian, North India</p> 
                 <p className="price">₹300</p>
               <p className="arivaltime">34 min..</p>  
              </div>


              <div className="orderitem7">
                <img src={thali} alt="" className="foodimg"/> 
                <p className="discount">Flat 20% OFF</p> 
                <p className="brandname">Surve's Pure Non-Veg</p>
                <p className="rating">4.0</p>
                 <p className="discription">Maharashtrian, North India</p> 
                 <p className="price">₹300</p>
               <p className="arivaltime">34 min..</p>  
              </div>

              <div className="orderitem7">
                <img src={thali} alt="" className="foodimg"/> 
                <p className="discount">Flat 20% OFF</p> 
                <p className="brandname">Surve's Pure Non-Veg</p>
                <p className="rating">4.0</p>
                 <p className="discription">Maharashtrian, North India</p> 
                 <p className="price">₹300</p>
               <p className="arivaltime">34 min..</p>  
              </div>
        </div>
     </div>
    </div>
        </div>
    );
}

export default orderOnline;