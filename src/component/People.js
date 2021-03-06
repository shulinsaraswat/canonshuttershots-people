import React, {useState,useEffect} from 'react';
import Sidebar from './Sidebar';
import '../css/people.css';
import Scroll from './BackTopButton';
import NavbarSmall from './NavbarSmall';
import Footer from './Footer';
import people from '../images/people.jpeg';
import pp1 from '../images/people/pp1.jpeg';
import pp2 from '../images/people/pp2.jpeg';
import pp3 from '../images/people/pp3.jpeg';
import pp4 from '../images/people/pp4.jpeg';
import pp6 from '../images/people/pp6.jpeg';
import pp7 from '../images/people/pp7.jpeg';
import pp8 from '../images/people/pp8.jpg';
import pp9 from '../images/people/pp9.jpeg';
import pp10 from '../images/people/pp10.jpeg';
import pp11 from '../images/people/pp11.jpg';
import pp12 from '../images/people/pp12.jpeg';
import pp13 from '../images/people/pp13.jpeg';
import pp14 from '../images/people/pp14.jpeg';
import pp15 from '../images/people/pp15.jpeg';
import pp16 from '../images/people/pp16.jpeg';
import pp17 from '../images/people/pp17.jpeg';

export default function People(){
    return(
        <div>
            <Sidebar/>
            <NavbarSmall/>
            <Scroll showBelow={250} />
            <div className="jumbotron jumbotron-fluid" 
            style={{
                height:'230px', 
                //marginTop:'45px', 
                background:' linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.7) 35%, rgba(0,0,0,0.1) 100%),url("https://remingtonsolar.com/wp-content/uploads/banner-background.jpg") right no-repeat', 
                marginBottom: '0', 
                color: 'white', 
                backgroundSize:' cover'}}> 
                <div className="container1" > 
                    <h2 className="display-4 banner-pp">
                    People </h2> 
                    <hr className="line-pp"></hr><br/>
                </div> 
            </div><br/>
            <div className="background-pp">
            <div className="container"><br/>
            <div className="row row-cols-1 row-cols-md-3 body-pp">
                <div className="col mb-4">
                    <div className="card box-pp hovereffect">
                    <img src={pp1} className="card-img-top" alt="People1"/>
                    <div class="overlay">
                        <h2>Vellore, India</h2>
                        <p>
                            <span>Quarry Lake<br/>Canon 450D</span>
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-pp hovereffect">
                    <img src={pp2} className="card-img-top" alt="People2"/>
                    <div class="overlay">
                        <h2>Goa, India</h2>
                        <p>
                            <span>Vagator Beach<br/>Canon 650D</span>
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-pp hovereffect">
                    <img src={pp3} className="card-img-top" alt="People3"/>
                    <div class="overlay">
                        <h2>Goa, India</h2>
                        <p>
                            <span>Aguada Fort<br/>Canon 450D</span>
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-pp pp4 hovereffect">
                    <img src={pp4} className="card-img-top" alt="People4"/>
                    <div class="overlay">
                        <h2>Vellore, India</h2>
                        <p>
                            <span>Quarry Lake<br/>Canon 450D</span>
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-pp hovereffect">
                    <img src={people} className="card-img-top" alt="People5"/>
                    <div class="overlay">
                        <h2>Goa, India</h2>
                        <p>
                            <span>Aguada Fort<br/>Canon 450D</span>
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-pp pp6 hovereffect">
                    <img src={pp6} className="card-img-top" alt="People16"/>
                    <div class="overlay">
                        <h2>Mount Abu, India</h2>
                        <p>
                            <span>Toad Rock<br/>Canon 450D</span>
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-pp pp13 hovereffect">
                    <img src={pp13} className="card-img-top" alt="People7"/>
                    <div class="overlay">
                        <h2>Vellore, India</h2>
                        <p>
                            <span>Quarry Lake<br/>Canon 450D</span>
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-pp hovereffect">
                    <img src={pp8} className="card-img-top" alt="People8"/>
                    <div class="overlay">
                        <h2>Bangalore, India</h2>
                        <p>
                            <span>Social Cafe<br/>Canon 450D</span>
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-pp pp9 hovereffect">
                    <img src={pp9} className="card-img-top" alt="People9"/>
                    <div class="overlay">
                        <h2>Goa, India</h2>
                        <p>
                            <span>Vagator Beach<br/>Canon 650D</span>
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-pp pp10 hovereffect">
                    <img src={pp10} className="card-img-top" alt="People10"/>
                    <div class="overlay">
                        <h2>Goa, India</h2>
                        <p>
                            <span>Vagator Beach<br/>Canon 450D</span>
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-pp hovereffect">
                    <img src={pp11} className="card-img-top" alt="People11"/>
                    <div class="overlay">
                        <h2>Bangalore, India</h2>
                        <p>
                            <span>UB City<br/>Canon 450D</span>
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-pp pp12 hovereffect">
                    <img src={pp12} className="card-img-top" alt="People12"/>
                    <div class="overlay">
                        <h2>Mount Abu, India</h2>
                        <p>
                            <span>Toad Rock<br/>Canon 450D</span>
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-pp pp7 hovereffect">
                    <img src={pp7} className="card-img-top" alt="People13"/>
                    <div class="overlay">
                        <h2>Mount Abu, India</h2>
                        <p>
                            <span>Nakki Lake<br/>Canon 450D</span>
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-pp pp15 hovereffect">
                    <img src={pp15} className="card-img-top" alt="People14"/>
                    <div class="overlay">
                        <h2>Goa, India</h2>
                        <p>
                            <span>Aguada Fort<br/>Canon 450D</span>
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-pp pp14 hovereffect">
                    <img src={pp14} className="card-img-top" alt="People15"/>
                    <div class="overlay">
                        <h2>Mount Abu, India</h2>
                        <p>
                            <span>Nakki Lake<br/>Canon 450D</span>
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-pp pp17 hovereffect">
                    <img src={pp17} className="card-img-top" alt="People16"/>
                    <div class="overlay">
                        <h2>Vellore, India</h2>
                        <p>
                            <span>VIT University<br/>Canon 450D</span>
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col mb-4"></div>
                <div className="col mb-4">
                    <div className="card box-pp pp16 hovereffect">
                    <img src={pp16} className="card-img-top" alt="People17"/>
                    <div class="overlay">
                        <h2>Vellore, India</h2>
                        <p>
                            <span>Quarry Lake<br/>Canon 450D</span>
                        </p>
                    </div>
                    </div>
                </div>
            </div>
            </div>
            </div><hr style={{width:'75%'}}></hr>
            <Footer/>
        </div>
    );
}