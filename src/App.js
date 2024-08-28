
import './App.css';
import indexheader from "../src/images/indexheader.avif";
import zomatologo from "../src/images/zomatologo.avif";
import orderoption1 from "../src/images/ordreoption/orderopt1.avif";
import orderoption2 from "../src/images/ordreoption/orderopt2.avif";
import orderoption3 from "../src/images/ordreoption/orderopt3.avif";
import collection1 from "../src/images/collection/collection1.avif";
import collection2 from "../src/images/collection/collection2.avif";
import collection3 from "../src/images/collection/collection3.avif";
import collection4 from "../src/images/collection/collection4.avif";
import mobscreen from "../src/images/collection/mobscreen.png";
import zomatofooterlogo from "../src/images/zomato black logo.avif";



function App() {
  return (
    <>
  

    
    <div className="App">
      <div className="index">
        <div>  
    <img src={indexheader}
         alt="headerimg"
         className="headerimg"/>

      <nav className="navbar" >
        <ul className='navlist' >
        <li>
          <div className='navtxt1'>
            <a href="#" >Get the App</a>
          </div>
        </li>
        <li><a href="#" className="navtxt2">Investor Relations</a></li>
        <li><a href="#" className="navtxt3">Add restaurant</a></li>
        <li><a href="#" className="navtxt4">Log in</a></li>
        <li><a href="#" className="navtxt5">Sign up</a></li>
        </ul>
      </nav>




   </div>
     
    
       <div>
          <img src={zomatologo} alt="zomatologo" className="zomatologo"/>

            <div className="headertxt"> Discover the best food & drinks in Pune</div>
            
            
           
              
            <div className='searchbar'>
              <select className='locationdrop'> 
             
                <option> 📍 Pune</option>
                <option>Mumbai</option>
                <option>Goa</option>
                <option>Junnar</option>
                <option>Nashik</option>
              </select>
              <input type="search" placeholder="Search for restaurant,cuisine or a dish" className="search"/>
              </div>
      </div> 
       
         <div className="middlecontent">
          
          { <div className="orderopt"> 
            <div className="opt1">
            
                <img src={orderoption1} alt="orderopt1" className="optimg1"/>             
              <p className="orderonline">Ordre Online</p>
              <p className="stayhome">Stay home and order to your doorstep</p>
            
            </div>
            
            <div className="opt2">
              <a href="#">
                <img src={orderoption2} alt="orderoption2" className="optimg2"/>
              </a>
              <p className="Dining">Dining</p>
              <p className="View">View the city's favourite dining venues</p>
          </div>
          
          <div className="opt3">
            <a href="#">
              <img src={orderoption3} alt="ordreoption3" className="optimg3"/>
            </a>
            <p className="Nightlife">Dining</p>
            <p className="Explore">Explore the city's top nightlife outlets</p>
        </div> 

      </div> }
     
      { <div className="collection">
        <p className="collectiontxt1" >
          Collections</p>
        
        <p className="collectiontxt2">Explore curated list of top restaurents,cafes,pubs and bars in Pune,based on trends
          <a href="#" className="Allcolltxt">All collection in Pune<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
          </svg></a>
        </p>
      </div> }
        
      
      <div className="colcard">
        <a href='./orderOnline.jsx'>
        <div className="colcard1">
           <img src={collection1}
                alt="collection1"
                className="colimg1"/>
                 <p><a href="#" className="colcardtxt">Top Trending Spots
                <br/> 39 Places
                </a>
                </p> 
        </div>
        </a>
        <div className="colcard2">
          <img src={collection2}
                alt="collection2"
                className="colimg2"/>
                <p><a href="#" 
                      className="colcardtxt">Newly Opened Places
                <br/> 9 Places
                </a>
                </p>
        </div>
        
        <div className="colcard3">
          <img src={collection3}
                alt=""
                className="colimg3"/>
                <a href="#"
                       className="colcardtxt">Romantic Dinning Places
                <br/> 27 Places
                </a>
                
        </div>
        
        <div className="colcard4">
          <img src={collection4}
          alt="collection4"
          className="colimg4"/>
           <p> <a href="#" 
                 className="colcardtxt"> Best Insta-worthy Places
          <br/> 27 Places
          </a>
          </p> 
        </div>
      </div>
      </div> 
     
      { <div className="storeloc">
        <p className="loctaglinetxt">Popular localities in and around <a href="#" className="locationtxt">Pune</a></p>

      <div className="storeloccard">
        
        <div className="storeloccard1">
           <p className="loc">Banner</p>
          
           <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi-bi-caret-right-fill" viewBox="0 0 16 16">
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
          </svg></a>
           
          <p className="places">654 places</p>
        </div>
      

        <div className="storeloccard2">
          <p className="loc">Viman Nagar</p>
         
          <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi-bi-caret-right-fill"       viewBox="0 0 16 16">
           <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
         </svg></a>
          
         <p className="places">636 places</p>
       </div>


       <div className="storeloccard3">
        <p className="loc">Hinjawadi</p>
       
        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi-bi-caret-right-fill" viewBox="0 0 16 16">
         <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
       </svg></a>
        
       <p className="places">1290 places</p>
     </div>

     <div className="storeloccard4">
      <p className="loc">Koregaon Park</p>
     
      <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi-bi-caret-right-fill" viewBox="0 0 16 16">
       <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
     </svg></a>
      
     <p className="places">235 places</p>
   </div>


   <div className="storeloccard5">
    <p className="loc">Wakad</p>
   
    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi-bi-caret-right-fill" viewBox="0 0 16 16">
     <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
   </svg></a>
    
   <p className="places">943 places</p>
 </div>

  <div className="storeloccard6">
  <p className="loc">Kothrud</p>
 
  <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi-bi-caret-right-fill" viewBox="0 0 16 16">
   <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
 </svg></a>
  
 <p className="places">767 places</p>
</div>


<div className="storeloccard7">
  <p className="loc">Koregaon Park</p>
 
  <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi-bi-caret-right-fill" viewBox="0 0 16 16">
   <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
 </svg></a>
  
 <p className="places">235 places</p>
</div>


<div className="storeloccard8">
<p className="loc">Wakad</p>

<a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi-bi-caret-right-fill" viewBox="0 0 16 16">
 <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg></a>

<p className="places">943 places</p>
</div>

<div className="storeloccard9">
<p className="loc">Kothrud</p>

<a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi-bi-caret-right-fill" viewBox="0 0 16 16">
<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg></a>

<p className="places">767 places</p>
</div>
        
      </div>
      
    </div> }



    {/* / GET app section  */}
     <div className="getapp">
     
      <img src={mobscreen} className="mobscreen" alt="Image is not available"/>
      <p className="getapptxt">Get the Zomato app</p>
     
      <p className="getapppara"> We will send you a link,open it on your phone to download <br/>the app</p>
      
       <div className="getappradiobtn">
     
        <input type="radio" id="email" name="applink"/>
        <label for="email" className="getappemailtxt">Email</label>

        <input type="radio" id="phone" name="applink"/>
        <label for="phone" className="getappphonetxt">Phone</label>

        <input type="email" className="emailinput" placeholder="Email"/>
        
        <button onclick="" className="shareinputbtn">Share App Link</button>
    </div>
     
    
  </div> 
    
       <p className='exploretxt'>
        Explore options near me
       </p>

       <div className='optnearme'>
       <details className='optnearme1'>
         <summary className='heading'>Popular cuisines near me</summary>
          <p className='optionlist'>
             <br/>Beverages food near meBiryani food near meBurger food near meChinese food near meCoffee food near meDesserts food near meIce Cream food near meKebab food near meMaharashtrian food near meMomos food near meMughlai food near meNorth Indian food near mePizza food near meRolls food near meSandwich food near meSeafood food near meShake food near meSichuan food near meSouth Indian food near meStreet food near me
             </p>
         </details>

         <details className='optnearme2'>
         <summary className='heading'>Popular restaurant types near me</summary>
          <p className='optionlist'>
             <br/>Bakeries near meBars near meBeverage Shops near meBhojanalya near meCafés near meCasual Dining near meClubs near meCocktail Bars near meConfectioneries near meDessert Parlors near meDhabas near meFine Dining near meFood Courts near meFood Trucks near meIrani Cafes near meKiosks near meLounges near meMicrobreweries near mePaan Shop near mePubs near meQuick Bites near meSweet Shops near me
             </p>
         </details>

         <details className='optnearme3'>
         <summary className='heading'>Popular cuisines near me</summary>
          <p className='optionlist'>
             <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
             </p>
         </details>


         <details className='optnearme5'>
         <summary className='heading'>Top Restaurant Chains</summary>
          <p className='optionlist'>
             <br/>Domino'sDunkin' DonutsFaasosKFCMcDonald'sParadiseBiryaniSubwayWOW! Momo
             </p>
         </details>

         <footer className='footer'>
            
            <div className='footerdiv'>
              <img src={zomatofooterlogo} alt='zomatofooterlogo'/>
            </div>

          </footer>


    </div>
      
    </div>
    
    
     
    
   
  
    
    
    
    </div>
    
    
  </>
  );
  
}

export default App;

