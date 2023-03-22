import React from 'react'
import './FeaturedProducts.css'
import img1 from '../../Assets/products/f1.jpg'
import img2 from '../../Assets/products/f2.jpg'
import img3 from '../../Assets/products/f3.jpg'
import img4 from '../../Assets/products/f4.jpg'
import img5 from '../../Assets/products/f5.jpg'
import img6 from '../../Assets/products/f6.jpg'
import img7 from '../../Assets/products/f7.jpg'
import img8 from '../../Assets/products/f8.jpg'

const FeaturedProducts = () => {
  return (
    <>
      {/* <!-- ====================FEATURED PRODUCTS SECTION==================== --> */}

      <section id="product1" className="section-p1">
        <h2>Featured Products</h2>
        <p>Summer Collection New Modern Desins</p>
        <div className="pro-container">
          <div className="pro">
            <img src={img1} alt="" />
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut T-Shirts</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>$78</h4>
            </div>
            <a href="#"><i className="fas fa-shopping-cart cart"></i></a>
          </div>

          <div className="pro">
            <img src={img2} alt="" />
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut T-Shirts</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>$78</h4>
            </div>
            <a href="#"><i className="fas fa-shopping-cart cart"></i></a>
          </div>

          <div className="pro">
            <img src={img3} alt="" />
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut T-Shirts</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>$78</h4>
            </div>
            <a href="#"><i className="fas fa-shopping-cart cart"></i></a>
          </div>

          <div className="pro">
            <img src={img4} alt="" />
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut T-Shirts</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>$78</h4>
            </div>
            <a href="#"><i className="fas fa-shopping-cart cart"></i></a>
          </div>

          <div className="pro">
            <img src={img5} alt="" />
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut T-Shirts</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>$78</h4>
            </div>
            <a href="#"><i className="fas fa-shopping-cart cart"></i></a>
          </div>

          <div className="pro">
            <img src={img6} alt="" />
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut T-Shirts</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>$78</h4>
            </div>
            <a href="#"><i className="fas fa-shopping-cart cart"></i></a>
          </div>

          <div className="pro">
            <img src={img7} alt="" />
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut T-Shirts</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>$78</h4>
            </div>
            <a href="#"><i className="fas fa-shopping-cart cart"></i></a>
          </div>

          <div className="pro">
            <img src={img8} alt="" />
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut T-Shirts</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>$78</h4>
            </div>
            <a href="#"><i className="fas fa-shopping-cart cart"></i></a>
          </div>
        </div>
      </section>

    </>
  )
}

export default FeaturedProducts
