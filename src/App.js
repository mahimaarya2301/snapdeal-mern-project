import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt, faShoppingCart, faUser, faSearch, faChartLine, faShieldAlt, faBars, faHeart } from '@fortawesome/free-solid-svg-icons'

/**
* @author
* @function App
**/

import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
* @author
* @class App
**/
//We have to create a class component

class App extends Component {
  //1. Properties
  state = {
    x: '',
    y: '',
    z: 'd-none'
  }
  //2. Constructor

  //3. Method
  handleScroll = () => {
    console.log('ok ' + window.scrollY);
    if (window.scrollY >= 50) {
      //Add
      //position-fixed top-0 start-0 
      this.setState({ x: 'position-fixed top-0 start-0' });
    } else {
      //Remove
      this.setState({ x: '' });
    }
    if (window.scrollY >= 787) {
      this.setState({ y: 'position-fixed aside d-none' });
      this.setState({ z: 'd-block' });
    } else {
      this.setState({ z: 'd-none' });

    }
  }
  asideNavShow = () => {
    this.setState({ y: 'position-fixed aside d-block' });
  }
  componentDidMount() {
    //THis method method will be called when page/component is loaded
    //object.method();
    window.addEventListener('scroll', this.handleScroll);
  }
  render() {
    return (
      <div>
        <div className="modal cartModel" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-xl" style={{ 'top': 53 + 'px' }}>
            <div className="modal-content">
              <div className="text-center position-relative">
                <h5 className="modal-title p-3 mt-3 text-secondary" id="exampleModalLabel">Shopping Cart is empty!</h5>
                <h5 className="modal-title p-3 text-secondary" id="exampleModalLabel22">BROWSE CATEGORIES</h5>
                <button type="button" className="btn-close position-absolute" style={{ 'right': 30 + 'px', 'top': 30 + 'px' }} data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <ul class="list-unstyled">
                  <li><a href="#">Appliances</a></li>
                  <li><a href="#">Appliances</a></li>
                  <li><a href="#">Appliances</a></li>
                  <li><a href="#">Appliances</a></li>
                  <li><a href="#">Appliances</a></li>
                  <li><a href="#">Appliances</a></li>
                  <li><a href="#">Appliances</a></li>
                  <li><a href="#">Appliances</a></li>
                  <li><a href="#">Appliances</a></li>
                  <li><a href="#">Appliances</a></li>
                  <li><a href="#">Appliances</a></li>
                  <li><a href="#">Appliances</a></li>
                  <li><a href="#">Appliances</a></li>
                  <li><a href="#">Appliances</a></li>
                  <li><a href="#">Appliances</a></li>
                  <li><a href="#">Appliances</a></li>
                  <li><a href="#">Appliances</a></li>
                  <li><a href="#">Appliances</a></li>
                  <li><a href="#">Appliances</a></li>
                  <li><a href="#">Appliances</a></li>
                  <li><a href="#">Appliances</a></li>
                  <li><a href="#">Appliances</a></li>
                  <li><a href="#">Appliances</a></li>
                  <li><a href="#">Appliances</a></li>
                </ul>
              </div>
              <div className="modal-footer d-flex justify-content-center">
                <button type="button" className="btn btn-danger btn-lg ps-5 pe-5">Start Shopping Now</button>

              </div>
              <p className="text-center">
                <span className="me-3"><FontAwesomeIcon icon={faShieldAlt} /> Safe and Secure Payments </span>
                <span><FontAwesomeIcon icon={faShieldAlt} /> 100% Payment Protection, Easy Returns Policy</span>
              </p>
            </div>
          </div>
        </div>
        <header>
          <div className="a_header_top">
            <div className="container p-0">
              <span className="text-white">India's Fastest Online Shopping Destination</span>
              <ul className="nav float-end">
                <li className="nav-item">
                  <a className="nav-link p-1 ps-3 active text-white" aria-current="page" href="#">Gift Cards</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link p-1 ps-3 text-white" href="#">Help Center</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link p-1 ps-3 text-white" href="#">Sell On Snapdeal</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link p-1 ps-3 text-white" href="#" ><FontAwesomeIcon icon={faMobileAlt} /> Download App</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={'a_header_bottom w-100 ' + this.state.x}>
            <div className="container">
              <div className="row">
                <div className="col-2">
                  <a href="#" className="btn mt-2 p-0 float-start">
                    <img src="./logo.png" />
                  </a>
                  <a href="#" onMouseMove={this.asideNavShow} className={'mt-3 btn btn-sm btn-light float-end ' + this.state.z}> <FontAwesomeIcon icon={faBars} /> </a>
                </div>
                <div className="col-7">
                  <form className="mt-3 a_hform">
                    <div className="row m-0">
                      <div className="col-md-10 p-0 position-relative">
                        <input placeholder="Search products &amp; brands" className="ps-5 h-100 rounded-0 form-control" />
                        <div className="bg-white inputBox w-100 position-absolute">
                          <h6 className="ps-3 mt-3"><FontAwesomeIcon icon={faChartLine} /> Trending Searches</h6>
                          <ul className="list-unstyled">
                            <li className="nav-item">
                              <a className="nav-link" href="#">Shoes For Girls</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">Baby Girls Froks</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">Boy Shoes</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">Saree below 1000</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">Plazzo pant</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">Silk Saree</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">One Piece Dress</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">Full TShirt Men</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-2 p-0">
                        <div class="d-grid">
                          <button class="btn btn-dark rounded-0" type="submit"><FontAwesomeIcon icon={faSearch} /> Search</button>
                        </div>

                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-3">
                  <ul className="nav a_hbot_nav float-end">
                    <li className="nav-item border-start border-end">
                      <a href="#" className="nav-link text-white" data-bs-toggle="modal" data-bs-target="#exampleModal">Cart <FontAwesomeIcon className="fs-5" icon={faShoppingCart} /></a>
                    </li>
                    <li className="nav-item">
                      <a className="pt-3 pb-3 text-white a_bl rounded-top" href="#">Sign in
                        <span className="fauserbox"><FontAwesomeIcon className="fs-5" icon={faUser} /></span>
                      </a>
                      <ul className="nav rounded-bottom">
                        <li className="nav-item">
                          <a className="nav-link active" aria-current="page" href="#">Active</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="a_main pb-5">
          <div className="container p-0 a_main1 mt-3">
            <div className="row m-0 a_main1_b1 ">
              <div className={'bg-white col-2 pe-0 pt-3 pb-3 ' + this.state.y}>
                <h6 className="fs-6 fw-light">TOP CATEGORIES</h6>
                <ul className=" nav flex-column asidenav">
                  <li className="nav-item">
                    <a className="nav-link" href="#"><img className="me-1" width="25" src="https://n3.sdlcdn.com/imgs/d/h/3/Discount_Right_icon-f5105.png" />All Offers</a>
                    <div className="position-absolute top-0 asidenav_righbox">
                      <div className="row m-0 h-100">
                        <div className="col-3 tbdr">
                          <ul className="nav flex-column">
                            <li className="nav-item">
                              <a className="nav-link active" aria-current="page" href="#">Active</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-3 tbdr">B</div>
                        <div className="col-3 tbdr">C</div>
                        <div className="col-3 tbdr">Banner</div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#"><img className="me-1" width="25" src="https://n3.sdlcdn.com/imgs/d/h/3/Discount_Right_icon-f5105.png" />Modile &amp; Tables</a>
                    <div className="position-absolute top-0 asidenav_righbox">B</div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#"><img className="me-1" width="25" src="https://n3.sdlcdn.com/imgs/d/h/3/Discount_Right_icon-f5105.png" />Electronics</a>
                    <div className="position-absolute top-0 asidenav_righbox">C</div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#"><img className="me-1" width="25" src="https://n3.sdlcdn.com/imgs/d/h/3/Discount_Right_icon-f5105.png" />Computer &amp; Gaming</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#"><img className="me-1" width="25" src="https://n3.sdlcdn.com/imgs/d/h/3/Discount_Right_icon-f5105.png" />Home &amp; Kitchen</a>
                  </li>
                </ul>
                <h6 className="fs-6">MORE CATEGORIES</h6>
                <ul className=" nav flex-column asidenav asidenav2">
                  <li className="nav-item">
                    <a className="nav-link" href="#">Men's Fasion</a>
                    <div className="position-absolute top-0 asidenav_righbox">A</div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Men's Fasion</a>
                    <div className="position-absolute top-0 asidenav_righbox">B</div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Men's Fasion</a>
                    <div className="position-absolute top-0 asidenav_righbox">C</div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Men's Fasion</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Men's Fasion</a>
                  </li>
                </ul>
              </div>
              <div className="col-10">
                <div className="a_slider row">
                  <div className="col-10">
                    <div id="carouselExampleIndicators" className="carousel slide h-100" data-bs-ride="carousel">
                      <div className="bg-white carousel-indicators m-0 justify-content-center">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active m-0" aria-current="true" aria-label="Slide 1">Boy's Tees</button>
                        <button className="m-0" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2">Women's Tees</button>
                        <button className="m-0" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3">Polo T-Shirts</button>
                        <button className="m-0" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 3">Sports Wear</button>
                        <button className="m-0" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 3">Men's Sports Wear</button>
                      </div>
                      <div className="carousel-inner h-100 bg-danger">
                        <div className="carousel-item active">
                          <img src="./images/slider/1.jpg" className="h-100 w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                          <img src="./images/slider/2.jpg" className="h-100 w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                          <img src="./images/slider/3.jpg" className="h-100 w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                          <img src="./images/slider/4.jpg" className="h-100 w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                          <img src="./images/slider/5.jpg" className="h-100 w-100" alt="..." />
                        </div>
                      </div>
                      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                  <div className="col-2">

                  </div>
                </div>
                <div className="a_trending_products"></div>
              </div>
            </div>
          </div>
          <div className="container-fluid a_main2"></div>
        </div>
        <footer>
          <div className="container-fluid bg-white a_foot1">
            <div className="row ps-5 pe-5 border-top border-bottom" style={{ 'height':200+'px' }}>
              <div className="col-3 p-0 border-start border-end ">
                <a href="#" className="btn btn-danger w-100 h-100 rounded-0">
                  <div className="a_fspritebox"></div>
                </a>
              </div>
              <div className="col-3 p-0 border-start border-end">
                <a href="#" className="btn btn-danger w-100 h-100 rounded-0">A</a>
              </div>
              <div className="col-3 p-0 border-start border-end">
                <a href="#" className="btn btn-danger w-100 h-100 rounded-0">A</a>
              </div>
              <div className="col-3 p-0 border-start border-end">
                <a href="#" className="btn btn-danger w-100 h-100 rounded-0">A</a>
              </div>
            </div>
          </div>
          <div className="container a_foot2">
          <nav aria-label="breadcrumb">
              <ol class="breadcrumb mb-0">
                <li className=""><a href="#">Mobile Accessories: </a></li>
                <li className="ms-2 breadcrumb-item"><a href="#">Mobile Covers</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb mb-0">
                <li className=""><a href="#">Mobile Accessories: </a></li>
                <li className="ms-2 breadcrumb-item"><a href="#">Mobile Covers</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb mb-0">
                <li className=""><a href="#">Mobile Accessories: </a></li>
                <li className="ms-2 breadcrumb-item"><a href="#">Mobile Covers</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb mb-0">
                <li className=""><a href="#">Mobile Accessories: </a></li>
                <li className="ms-2 breadcrumb-item"><a href="#">Mobile Covers</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb mb-0">
                <li className=""><a href="#">Mobile Accessories: </a></li>
                <li className="ms-2 breadcrumb-item"><a href="#">Mobile Covers</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb mb-0">
                <li className=""><a href="#">Mobile Accessories: </a></li>
                <li className="ms-2 breadcrumb-item"><a href="#">Mobile Covers</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb mb-0">
                <li className=""><a href="#">Mobile Accessories: </a></li>
                <li className="ms-2 breadcrumb-item"><a href="#">Mobile Covers</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb mb-0">
                <li className=""><a href="#">Mobile Accessories: </a></li>
                <li className="ms-2 breadcrumb-item"><a href="#">Mobile Covers</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb mb-0">
                <li className=""><a href="#">Mobile Accessories: </a></li>
                <li className="ms-2 breadcrumb-item"><a href="#">Mobile Covers</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb mb-0">
                <li className=""><a href="#">Mobile Accessories: </a></li>
                <li className="ms-2 breadcrumb-item"><a href="#">Mobile Covers</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
              </ol>
            </nav>
            <h4 className="text-dark">ABOUT SNAPDEAL</h4>
            <p>About Snapdeal – India’s Ultimate Online Shopping Site Snapdeal’s vision is to create India’s most reliable and frictionless commerce ecosystem that creates life-changing experiences for buyers and sellers. In February 2010, Kunal Bahl along with Rohit Bansal, started Snapdeal.com - India’s largest online shopping marketplace, with the widest assortment of 35 million plus products across 800 plus diverse categories from over 125,000 regional, national, and international brands and retailers. With millions of users and more than 300,000 sellers, Snapdeal is the online shopping site for Internet users across the country, delivering to 6000+ cities and towns in India. In its journey till now, Snapdeal has partnered with several global marquee investors and individuals such as SoftBank, BlackRock, Temasek, Foxconn, Alibaba, eBay Inc., Premji Invest, Intel Capital, Bessemer Venture Partners, Mr. Ratan Tata, among others. Online Shopping – A Boon The trend of online shopping is becoming a household name and so is Snapdeal. Snapdeal is the preferred choice of hundreds of thousands of online shoppers given its mammoth assortment of 15 million+ products, quick delivery even to the remotest corners of the country, and daily deals, discounts & offers to make products available at slashed down prices to our valuable customers. Get Started! Shop Online Today at Snapdeal If you have been missing out on all the fun of online shopping thinking it requires one to be a technology aficionado then we have good news for you. Shopping online particularly at Snapdeal is a child’s play; all you need is a mobile phone or laptop or tablet with Internet connection to get started. Simply log into Snapdeal.com and browse through the wide assortment of products across categories. Once you have zeroed in on your favorite products, simply place the order by filling in the details; the products will be delivered right at your doorstep. Fulfill Your Entrepreneurial Dreams! Sell Today at Snapdeal Thanks to easy-to-understand, flexible policies and SD Advisors to help sellers at each step, anyone from a manufacturer to wholesaler to retailer can sell on Snapdeal. Begin your entrepreneurial journey with Snapdeal as a seller by filling a simple registration form here. Once the registration process is done, you can start selling your products to the entire country by sitting at your home or office. Doesn't it sound thrilling? Of course, it is and the excitement will build up with every order you receive! Start selling at Snapdeal today and see your business reach staggering heights. Shop on the Go – Install Snapdeal App Today! You can shop for your favourite products at Snapdeal even on the go using Snapdeal App. Available for both Android and Apple users, the app can be downloaded from Google Play Store and Apple App Store respectively. The app is quick, user-friendly, and enables shoppers buy products with a breeze. What's more, get timely notifications on your phone or tablet so that you don't miss amazing deals and offers. Download the app right now and experience how fun it is to shop on your mobile!</p>
          </div>
          <div className="container-fluid bg-white p-0 a_foot3">
            <div className="row m-0 h-100">
              <div className="col-10 p-0 pt-2 tbdr">
                <span>Copyright © 2020, Snapdeal Private Limited (formerly Jasper Infotech Private Limited). All Rights Reserved</span>
              </div>
              <div className="col-2 p-0 pt-2  text-end tbdr ">Made with <FontAwesomeIcon className="text-danger a_heart" icon={faHeart} /> in india</div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}


App.propTypes = {}
export default App
