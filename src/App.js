import './App.css';
import Logo from "./images/logo.png"
import first from "./images/1.png"
import second from "./images/2.png"
import third from "./images/3.png"
function App() {
  return (
    <>
    <header class="logo">
      <img src={Logo} />
    </header>
    <section class="hero">
        <div class="image">
        <img src={first} />
        </div>
        <div class="content">
            <div class="text-box1">
                <p><b>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</b></p>
                <ul>
                    <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                    <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
                </ul>
            </div>
            <img src={second} />
            <div class="text-box2">
                <p>Government of India has awarded the <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
            </div>
        </div>
    </section>
    <section class="box-container">
        <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. 
        </p>
        <img src={third} />
        <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
    </section>
    <footer class="footer">
        <h3><b>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</b></h3>
        <div class="box">
            <p>CHEMICALS & PROCESS <span></span>POWER WATER & WASTE WATER <span></span>OILS & GAS PHARMA <span></span> SUGARS & DISTILLERIES <span></span> PAPER & PULP <span></span> MARINE & DEFENCE <span></span> METAL & MINING <span></span> FOOD & BEVERAGE <span></span> PETROCHEMICAL & REFINERIES <span></span> SOLAR <span></span> BUILDING <span></span> HVAC <span></span> FIRE FIGHTING <span></span> AGRICULTURE & RESIDENTIAL</p>
        </div>
    </footer>
    <div class="social">
        <div class="contact">
            <a href="#"><i class="fa-solid fa-phone"></i>Toll free 1800 200 1234</a>
        </div>
        <div class="contact">
            <a href="#"><i class="fa-brands fa-facebook"></i>www.facebook.com/cripumps</a>
        </div>
        <div class="contact">
            <a href="#"><i class="fa-solid fa-globe"></i>www.crigroups.com</a>
        </div>
    </div>
    </>
  );
}

export default App;
