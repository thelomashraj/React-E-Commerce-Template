import React from 'react'
import './Services.css'
import img1 from '../../Assets/features/f1.png'
import img2 from '../../Assets/features/f2.png'
import img3 from '../../Assets/features/f3.png'
import img4 from '../../Assets/features/f4.png'
import img5 from '../../Assets/features/f5.png'
import img6 from '../../Assets/features/f6.png'

const Services = () => {
  return (
    <>

      <section id="feature" className="section-p1">

        <div className="fe-box">
          <img src={img1} alt="Free Shipping" />
          <h6>Free Shipping</h6>
        </div>

        <div className="fe-box">
          <img src={img2} alt="Online Order" />
          <h6>Online Order</h6>
        </div>

        <div className="fe-box">
          <img src={img3} alt="Save Money" />
          <h6>Save Money</h6>
        </div>

        <div className="fe-box">
          <img src={img4} alt="Promotions" />
          <h6>Promotions</h6>
        </div>

        <div className="fe-box">
          <img src={img5} alt="Happy Sell" />
          <h6>Happy Sell</h6>
        </div>

        <div className="fe-box">
          <img src={img6} alt="F24/7 Support" />
          <h6>F24/7 Support</h6>
        </div>
      </section>
    </>
  )
}

export default Services
