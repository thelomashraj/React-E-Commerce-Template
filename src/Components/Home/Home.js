import React from 'react'
import FeaturedProducts from '../Featured Products/FeaturedProducts'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import NewArrivals from '../New Arrivals/NewArrivals'
import NewsLetters from '../NewsLetters/NewsLetters'
import Services from '../Services/Services'
import './Home.css'

const Home = () => {
  return (
    <>
      <Navbar />


      {/* <!-- ====================HERO SECTION==================== --> */}

      <section id="hero">
        <h4>Trade-in-offer</h4>
        <h2>Super value deals</h2>
        <h1>On all products</h1>
        <p>Save more with coupons & up to 70% off!</p>
        <button>Shop Now</button>
      </section>


      <Services />

      <FeaturedProducts />

      {/* <!-- ====================CTA SECTION==================== --> */}

      <section id="banner" className="section-m1">
        <h4>Repair Services</h4>
        <h2>Up to <span>70% off</span> - All t-Shirts & Accessories</h2>
        <button className="normal">Explore More</button>
      </section>


      <NewArrivals />



      {/* <!-- ====================CTA BANNER SECTION==================== --> */}

      <section id="sm-banner" className="section-p1">
        <div className="banner-box">
          <h4>crazy deals</h4>
          <h2>buy 1 get 1 free</h2>
          <span>The best classic dress is on sale at cara</span>
          <button className="white">Learn More</button>
        </div>
        <div className="banner-box banner-box2">
          <h4>spring/summer</h4>
          <h2>upcoming season</h2>
          <span>The best classic dress is on sale at cara</span>
          <button className="white">Collection</button>
        </div>
      </section>

      {/* <!-- ====================BANNER3 SECTION==================== --> */}

      <section id="banner3">

        <div className="banner-box">
          <h2>SEASONAL SALE</h2>
          <h3>Winter Collection -50% OFF</h3>
        </div>

        <div className="banner-box banner-box2">
          <h2>NEW FOOTWEAR COLLECTION</h2>
          <h3>Spring/Summer 2022</h3>
        </div>

        <div className="banner-box banner-box3">
          <h2>T-SHIRTS</h2>
          <h3>New Trendy Prints</h3>
        </div>
      </section>


      <NewsLetters />

      <Footer />
    </>
  )
}

export default Home
