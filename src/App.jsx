import Logo from "./img/logo.png"
import homim from "./img/home img.png"
import history from "./img/our hisyory.png"
import contact from "./img/Profile 1.png"
import notification from "./img/Notification 1.png"
import qaychi from "./img/qaychi.png"
import electroQaychi from "./img/electric-razor 1.png"
import tozalagichlar from "./img/cleanser 1.png"
import barber1 from "./img/barber-1.jpg"
import barber2 from "./img/baerber-2.webp"
import barber3 from "./img/barber-3.webp"
import barber4 from "./img/barber-4.jpg"
import barber5 from "./img/barber-5.jpg"
import barber6 from "./img/barber-6.webp"
import facebook from "./img/facebook.png"
import twitter from "./img/twitter.png"
import google from "./img/google.png"
function App() {
  
  window.onscroll = () =>{
       
    }
  return (
    <div>
    <header>
        <div className="wrapper">
            <nav>
                <ul>
                    <li><a href="#"><img className="logo" src={Logo} alt="" /></a></li>
                </ul>

                <ul>
                    <li><a className="active" href="#hero">Home</a></li>
                    <li><a href="#history">History</a></li>
                    <li><a href="#servise">Service</a></li>
                    <li><a href="#gallery">Gallary</a></li>
                </ul>
                <ul>
                    
                </ul>
                <img className="icons" src={contact}/>
                <img className="icons" src={notification}/>
                <ul>
                    <a className="btn first" href="#">Appoinmtent</a>
                </ul>
            </nav>
            <section id="hero" className="hero-section">
                <div className="left">
                    <h1><span>Hairstyle</span>Reflects <br /> The Personality <br /> Inside You</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at.</p>
                    <a class="btn second" href="#">Get started</a>
                </div>
                <div className="right">
                    <img className="hom-img" src={homim}/>
                </div>
           </section>
            </div>
    </header>
            <section className="history-section" id="history">
           <div className="wrapper">
                <div className="left">
                  <img className="history-img" src={history}/>
                </div>
                <div className="right">
                  <h1>Our <span>History</span></h1>
                  <p>It is a long established fact that a reader will be <br />  distracted by the readable content of a page <br /> when looking at.</p>
                  <p>It is a long established fact that a reader will be <br />  distracted by the readable content of a page <br /> when looking at.</p>
                  <a className="btn third desktop-btn" href="#">learn more</a>
                </div>
                <a className="btn third mobile-btn" href="#">learn more</a>
           </div>
            </section>
           <section id="servise" className="services">
         <div className="wrapper">
              <h1>Servises We <br /><span>Provide</span></h1>
              <div className="servise-cards">
                <div className="servise-card">
                  <img src={qaychi}/>
                  <div className="info">
                    <h3 className="title">Hair Cut</h3>
                    <h5>long established fact that a re <br /> acted by the readable content of <br /> hen looking at.</h5>
                  </div>
                </div>
                <div className="servise-card">
                  <img src={electroQaychi}/>
                  <div className="info">
                    <h3 className="title">Beard Cut</h3>
                    <h5>long established fact that a re <br /> acted by the readable content of <br /> hen looking at.</h5>
                  </div>
                </div>
                <div className="servise-card">
                  <img src={tozalagichlar}/>
                  <div className="info">
                    <h3 className="title">Fecial Pack</h3>
                    <h5>long established fact that a re <br /> acted by the readable content of <br /> hen looking at.</h5>
                  </div>
                </div>
              </div>
          </div>
           </section>
            <section id="gallery" className="gallery-section">
              <div className="wrapper">
              <h1>Our  <span>Gallery</span></h1>
              <div className="images">
                <img className="barber" src={barber1}/>
                <img className="barber" src={barber2}/>
                <img className="barber" src={barber3}/>
                <img className="barber" src={barber4}/>
                <img className="barber" src={barber5}/>
                <img className="barber" src={barber6}/>
              </div>
              <br /><br /><br />
              <a href="#"className="btn" >View All</a>
          </div>
            </section>

          <footer>
            <div className="wrapper">
            <img className="footer-img" src={Logo}/>
            <p>It is a long established fact that a reader will be <br /> distracted by the readable </p>
            </div>
          </footer>
      
          <div className="wrapper">
          <div className="icon-section">
            <div className="items">
            <div className="item">
            <img src={facebook}/>
            </div>
            <div className="item">
            <img src={twitter}/>
            </div>
            <div className="item">
            <img src={google}/>
            </div>
            </div>
            <br />
            <hr />
            <br /><br />
          </div>
          </div>

            
                
                
             
  
         
       
    </div>
  );
}
export default App;