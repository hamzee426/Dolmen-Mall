
import Navbar from '../Widgets/Navbar'
import css from './initial_page.module.css'
import './initial_page.css'
import banner from '../graphics/dmbanner.png'
import bckimage from '../graphics/5-visit.png'
import React, { useState, useEffect } from 'react';
import Data from "./PagesBeforeLogin/utils/content.json"
import email from '../graphics/mailicon.png'
import phone from '../graphics/callicon.png'
import service from '../graphics/smsicon.png'
import whatsapp from '../graphics/whatsappicon.png'


 export default function initial_page() {
  return (
    <>
    <Navbar/>
    <Content/>
    <Footer/>
    </>
  )
}


function Content(){

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch({Data})
      .then(response => response.json())
      .then(jsonData => setData(jsonData));
  }, []);

  return(
    <>
    
    <h3 className={css.heading}>DOLMEN CARD MANAGEMENT SYSTEM</h3>
    <p className={css.paracss}>{Data.para1}</p>
    <img className={css.banner} src={banner} alt="DMBanner"/>
    <h3 className={css.heading}>ABOUT US</h3>
    <p className={css.paracss}>{Data.para2}</p>
    <img className={css.banner} src={bckimage} alt="DMBanner"/>
    
    </>
  );
}


function Contactus()
{

  return(
    <>
    
    <div >
    <div style={{ display: 'flex', alignItems: 'center' }} className={css.upicon}>
      <img src={phone} alt="phoneicon" className={css.icon}/>
      <span style={{ marginLeft: '20px' }} >{Data.contact.ptcl}</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center' }} className={css.upicon}>
      <img src={service} alt="smsicon" className={css.icon}/>
      <span style={{ marginLeft: '20px' }} >{Data.contact.service}</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center' }} className={css.upicon}>
      <img src={whatsapp} alt="whatsappicon" className={css.icon}/>
      <span style={{ marginLeft: '20px' }} >{Data.contact.phone}</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center' }} className={css.upicon}>
      <img src={email} alt="emailicon" className={css.icon}/>
      <span style={{ marginLeft: '20px' }} >{Data.contact.email}</span>
    </div>
    </div>
    
    </>
  );

}


function Footer()
{
  return(
    <>
    <div className={css.footer}>
    <footer>
    <h3 className={css.hash}> --</h3>
    <h3 className={css.contact}>CONTACT US</h3>
      <Contactus/>
      <h3 className={css.hash}> --</h3>
      <h3 className={css.hash}> --</h3>
    </footer>
    </div>
    </>
  );
}