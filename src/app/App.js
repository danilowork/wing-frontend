import React from 'react';
import styles from './App.module.css';
import Screen from './Screen';
import MainMenu from './MainMenu';

import Info from 'notifications/Info';
import Warning from 'notifications/Warning';
import star_icon from './img/star.png';

const App = () => (
  <div className={styles.App}>
    <MainMenu />
    <div className={styles.container}>
      <Info name="general" />
      <Warning name="general" />


      <Screen />
    </div>

      <div class="wrapper">
          <div class="section1">
            <div class="container">
             <div class="section1-heding">
                 <a href="#"><i class="fa fa-long-arrow-left"></i></a>
                 <h4>Select an insurance plan</h4>
             </div>

             <div class="section1-content">
                <div class="row">

                    <div class="col-lg-4 col-md-4 col-sm-4 padd-le">
                       <div class="wing-section wing-section1">
                       <div class="wing-section-top">
                             <h4>Wing Extended warranty</h4>
                             <h5>Starting at</h5>
                             <p>$0.96</p>
                             <h6>Terms, Fees, and more info</h6>
                             <button>Select</button>
                        </div>
                        <div class="wing-section-bottom">
                             <h4>Protects your device against</h4>
                             <ul>
                                <li class="wing-li"><span><i class="fa fa-check"></i></span> <span class="wing-span"> Malfunction(after the original manufacture's warranty expires)</span></li>

                             </ul>

                             <div class="wing-section-bottom-footer">
                                <p>Repair deductible: $24.50</p>
                                <p>Replacement deductible: $49.00</p>

                             </div>

                        </div>
                       </div>
                    </div>
                     <div class="col-lg-4 col-md-4 col-sm-4">
                      <div class="wing-section wing-section2">
                      <img src={star_icon} alt="star icon" className="star_icon" />
                       <div class="wing-section-top">
                             <h4>Wing Device Protection Plus</h4>
                             <h5>Starting at</h5>
                             <p>$5.95</p>
                             <h6>Terms, Fees, and more info</h6>
                             <button>Select</button>
                        </div>
                        <div class="wing-section-bottom">
                             <h4>Protects your device against</h4>
                             <ul>
                                <li><span><i class="fa fa-check"></i></span>  Accidental damage</li>
                                <li><span><i class="fa fa-check"></i></span>  Loss and theft</li>
                                <li><span><i class="fa fa-check"></i></span>  Malfunction</li>
                                <li><span><i class="fa fa-check"></i></span>  Water damage</li>
                                <li><span><i class="fa fa-check"></i></span>  broken screens</li>

                             </ul>

                             <div class="wing-section-bottom-footer">
                                <p>Repair deductible: $24.50</p>
                                <p>Replacement deductible: $49.00</p>

                             </div>

                        </div>
                       </div>
                    </div>
                     <div class="col-lg-4 col-md-4 col-sm-4 padd-rig">
                     <div class="wing-section wing-section3">
                       <div class="wing-section-top">
                             <h4>Wing Device Protection </h4>
                             <h5>Starting at</h5>
                             <p>$4.99</p>
                             <h6>Terms, Fees, and more info</h6>
                             <button>Select</button>
                        </div>
                        <div class="wing-section-bottom">
                             <h4>Protects your device against</h4>
                             <ul>
                                 
                                <li><span><i class="fa fa-check"></i></span>  Accidental damage</li>
                                <li><span><i class="fa fa-check"></i></span>  Loss and theft</li>
                                <li><span><i class="fa fa-check"></i></span>  Malfunction</li>
                                <li><span><i class="fa fa-check"></i></span>  Water damage</li>
                                <li><span><i class="fa fa-check"></i></span>  broken screens</li>

                             

                             </ul>

                             <div class="wing-section-bottom-footer">
                                <p>Repair deductible: $24.50</p>
                                <p>Replacement deductible: $49.00</p>

                             </div>

                        </div>
                       </div>
                    </div>


                </div>
             </div>
             </div>
          </div>
      </div>
  </div>
);

export default App;
