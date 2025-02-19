import React from 'react';
import "./header.css";
import {Link} from "react-router-dom";
import enc from "../../assets/enc.jpeg";
import img from "../../assets/img.png"

const Header = () => {
  return (
    <div className='scr__header section__padding'>
      <div className='scr__header-content'>
        <h2 className='gradient__text'>Secure your future with trusted financial management</h2>
        <h4>Manage your investment portfolios, inheritances, deposits, and transfers – all with the highest security</h4>
        <p>SecureTransit Experts in handling inheritance funds</p>
      </div>
      <div className='scr__header-btn'>
        <button className='scr__header-btn'>
         <Link to='/signup'>Get Started</Link>
        </button>
        <section className='scr__section section__padding'>
          <div className='scr__section-img'>
            <img src={enc} alt='encrypted' className='enc'/>
            <img src={img} alt='secured' />
          </div>
        </section>
      </div>
    </div>
  )
}

export default Header;