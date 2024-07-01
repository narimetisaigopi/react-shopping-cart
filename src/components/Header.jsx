import React, { useContext } from "react";
// import classNames from "classnames";
// import { Link } from "react-router-dom";
// import {
//   CartStateContext,
//   CartDispatchContext,
//   toggleCartPopup
// } from "../contexts/cart";
import { CommonDispatchContext, setSearchKeyword } from "../contexts/CommonContext";
import CartPreview from "../components/CartPreview";
import HeaderCartCount from '../components/HeaderCartCount';

const Header = (props) => {
  // const { items: cartItems, isCartOpen } = useContext(CartStateContext);
  const commonDispatch = useContext(CommonDispatchContext);
  // const cartDispatch = useContext(CartDispatchContext);
  // const cartQuantity = cartItems.length;
  // const cartTotal = cartItems
  //   .map((item) => item.price * item.quantity)
  //   .reduce((prev, current) => prev + current, 0);

  const handleSearchInput = (event) => {
    return setSearchKeyword(commonDispatch, event.target.value);
  };

  // const handleCartButton = (event) => {
  //   event.preventDefault();
  //   return toggleCartPopup(cartDispatch);
  // };

  // return (
  //   <header>
  //     <div className="container">
  //       <div className="brand">
  //         <Link to="/">
  //           <img
  //             className="logo"
  //             src="https://res.cloudinary.com/sivadass/image/upload/v1493547373/dummy-logo/Veggy.png"
  //             alt="Veggy Brand Logo"
  //           />
  //         </Link>
  //       </div>

  //       <div className="search">
  //         <a
  //           className="mobile-search"
  //           href="#"
  //           // onClick={this.handleMobileSearch.bind(this)}
  //         >
  //           <img
  //             src="https://res.cloudinary.com/sivadass/image/upload/v1494756966/icons/search-green.png"
  //             alt="search"
  //           />
  //         </a>
  //         <form action="#" method="get" className="search-form">
  //           <a
  //             className="back-button"
  //             href="#"
  //             // onClick={this.handleSearchNav.bind(this)}
  //           >
  //             <img
  //               src="https://res.cloudinary.com/sivadass/image/upload/v1494756030/icons/back.png"
  //               alt="back"
  //             />
  //           </a>
  //           <input
  //             type="search"
  //             placeholder="Search for Vegetables and Fruits"
  //             className="search-keyword"
  //             onChange={handleSearchInput}
  //           />
  //           <button
  //             className="search-button"
  //             // onClick={this.handleSubmit.bind(this)}
  //           />
  //         </form>
  //       </div>

  //       <div className="cart">
  //         <div className="cart-info">
  //           <table>
  //             <tbody>
  //               <tr>
  //                 <td>No. of items</td>
  //                 <td>:</td>
  //                 <td>
  //                   <strong>{cartQuantity}</strong>
  //                 </td>
  //               </tr>
  //               <tr>
  //                 <td>Sub Total</td>
  //                 <td>:</td>
  //                 <td>
  //                   <strong>{cartTotal}</strong>
  //                 </td>
  //               </tr>
  //             </tbody>
  //           </table>
  //         </div>
  //         <a className="cart-icon" href="#" onClick={handleCartButton}>
  //           <img
  //             className={props.cartBounce ? "tada" : " "}
  //             src="https://res.cloudinary.com/sivadass/image/upload/v1493548928/icons/bag.png"
  //             alt="Cart"
  //           />
  //           {cartQuantity ? (
  //             <span className="cart-count">{cartQuantity}</span>
  //           ) : (
  //             ""
  //           )}
  //         </a>
  //         <CartPreview />
  //       </div>
  //     </div>
  //   </header>
  // );
  return (
    <header className="header-area">
      <div className="header-main-area">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="header-main">
                <div className="header-element logo">
                  <a href="index1.html">
                    <img src="image/logo1.png" alt="logo-image" className="img-fluid" />
                  </a>
                </div>
                <div className="header-element search-wrap">
                  <input type="text" name="search" onChange={handleSearchInput} placeholder="Search product." />
                  <a href="search.html" className="search-btn"><i className="fa fa-search" /></a>
                </div>
                <div className="header-element right-block-box">
                  <ul className="shop-element">
                    <li className="side-wrap nav-toggler">
                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent">
                        <span className="line" />
                      </button>
                    </li>
                    <li className="side-wrap user-wrap">
                      <div className="acc-desk">
                        <div className="user-icon">
                          <a href="account.html" className="user-icon-desk">
                            <span><i className="icon-user" /></span>
                          </a>
                        </div>
                        <div className="user-info">
                          <span className="acc-title">Account</span>
                          <div className="account-login">
                            <a href="register.html">Register</a>
                            <a href="login.html">Log in</a>
                          </div>
                        </div>
                      </div>
                      <div className="acc-mob">
                        <a href="account.html" className="user-icon">
                          <span><i className="icon-user" /></span>
                        </a>
                      </div>
                    </li>
                    {/* <li className="side-wrap wishlist-wrap">
                      <a href="wishlist.html" className="header-wishlist">
                        <span className="wishlist-icon"><i className="icon-heart" /></span>
                        <span className="wishlist-counter">0</span>
                      </a>
                    </li> */}
                    <HeaderCartCount></HeaderCartCount>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom-area">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="main-menu-area">
                <div className="main-navigation navbar-expand-xl">
                  <div className="box-header menu-close">
                    <button className="close-box" type="button"><i className="ion-close-round" /></button>
                  </div>
                  <div className="navbar-collapse" id="navbarContent">
                    <div className="megamenu-content">
                      <div className="mainwrap">
                        <ul className="main-menu">
                          <li className="menu-link parent">
                            <a href="index1.html" className="link-title">
                              <span className="sp-link-title">Home</span>
                              <i className="fa fa-angle-down" />
                            </a>
                            <a href="#collapse-home" data-bs-toggle="collapse" className="link-title link-title-lg">
                              <span className="sp-link-title">Home</span>
                              <i className="fa fa-angle-down" />
                            </a>
                            <ul className="dropdown-submenu sub-menu collapse" id="collapse-home">
                              <li className="submenu-li">
                                <a href="index1.html" className="submenu-link">Vegist home 01</a>
                              </li>
                              <li className="submenu-li">
                                <a href="https://spacingtech.com/html/vegist-final/vegist-rtl/index1.html" className="submenu-link">Vegist home 01 (RTL)</a>
                              </li>
                              <li className="submenu-li">
                                <a href="https://spacingtech.com/html/vegist-final/vegist-box/index1.html" className="submenu-link">Vegist home 01 (BOX)</a>
                              </li>
                              <li className="submenu-li">
                                <a href="index2.html" className="submenu-link">Vegist home 02</a>
                              </li>
                              <li className="submenu-li">
                                <a href="index3.html" className="submenu-link">Vegist home 03</a>
                              </li>
                              <li className="submenu-li">
                                <a href="index4.html" className="submenu-link">Vegist home 04</a>
                              </li>
                              <li className="submenu-li">
                                <a href="index5.html" className="submenu-link">Vegist home 05</a>
                              </li>
                              <li className="submenu-li">
                                <a href="index6.html" className="submenu-link">Vegist home 06</a>
                              </li>
                              <li className="submenu-li">
                                <a href="index7.html" className="submenu-link">Vegist home 07</a>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-link parent">
                            <a href="/" className="link-title">
                              <span className="sp-link-title">Shop</span>
                              <i className="fa fa-angle-down" />
                            </a>
                            <a href="#collapse-mega-menu" data-bs-toggle="collapse" className="link-title link-title-lg">
                              <span className="sp-link-title">Shop</span>
                              <i className="fa fa-angle-down" />
                            </a>
                            <ul className="dropdown-submenu mega-menu collapse" id="collapse-mega-menu">
                              <li className="megamenu-li parent">
                                <h2 className="sublink-title">Fresh food</h2>
                                <a href="#collapse-sub-mega-menu" data-bs-toggle="collapse" className="sublink-title sublink-title-lg">
                                  <span>Fresh food</span>
                                  <i className="fa fa-angle-down" />
                                </a>
                                <ul className="dropdown-supmenu collapse" id="collapse-sub-mega-menu">
                                  <li className="supmenu-li"><a href="product.html">Fruit &amp; nut</a></li>
                                  <li className="supmenu-li"><a href="product.html">Snack food</a></li>
                                  <li className="supmenu-li"><a href="product.html">Organics nut gifts</a></li>
                                  <li className="supmenu-li"><a href="product.html">Non-dairy</a></li>
                                  <li className="supmenu-li"><a href="product.html">Mayonnaise</a></li>
                                  <li className="supmenu-li"><a href="product.html">Milk almond</a></li>
                                </ul>
                              </li>
                              <li className="megamenu-li parent">
                                <h2 className="sublink-title">Mixedfruits</h2>
                                <a href="#collapse-fruits-menu" data-bs-toggle="collapse" className="sublink-title sublink-title-lg">
                                  <span>Mixedfruits</span>
                                  <i className="fa fa-angle-down" />
                                </a>
                                <ul className="dropdown-supmenu collapse" id="collapse-fruits-menu">
                                  <li className="supmenu-li"><a href="product.html">Oranges</a></li>
                                  <li className="supmenu-li"><a href="product.html">Coffee creamers</a></li>
                                  <li className="supmenu-li"><a href="product.html">Ghee beverages</a></li>
                                  <li className="supmenu-li"><a href="product.html">Ranch salad</a></li>
                                  <li className="supmenu-li"><a href="product.html">Hemp milk</a></li>
                                  <li className="supmenu-li"><a href="product.html">Nuts &amp; seeds</a></li>
                                </ul>
                              </li>
                              <li className="megamenu-li parent">
                                <h2 className="sublink-title">Bananas &amp; plantains</h2>
                                <a href="#collapse-banana-menu" data-bs-toggle="collapse" className="sublink-title sublink-title-lg">
                                  <span>Bananas &amp; plantains</span>
                                  <i className="fa fa-angle-down" />
                                </a>
                                <ul className="dropdown-supmenu collapse" id="collapse-banana-menu">
                                  <li className="supmenu-li"><a href="product.html">Fresh gala</a></li>
                                  <li className="supmenu-li"><a href="product.html">Fresh berries</a></li>
                                  <li className="supmenu-li"><a href="product.html">Fruit &amp; nut</a></li>
                                  <li className="supmenu-li"><a href="product.html">Fifts mixed fruits</a></li>
                                  <li className="supmenu-li"><a href="product.html">Oranges</a></li>
                                  <li className="supmenu-li"><a href="product.html">Oranges</a></li>
                                </ul>
                              </li>
                              <li className="megamenu-li parent">
                                <h2 className="sublink-title">Apples berries</h2>
                                <a href="#collapse-apple-menu" data-bs-toggle="collapse" className="sublink-title sublink-title-lg">
                                  <span>Apples berries</span>
                                  <i className="fa fa-angle-down" />
                                </a>
                                <ul className="dropdown-supmenu collapse" id="collapse-apple-menu">
                                  <li className="supmenu-li"><a href="product.html">Pears produce</a></li>
                                  <li className="supmenu-li"><a href="product.html">Bananas</a></li>
                                  <li className="supmenu-li"><a href="product.html">Natural grassbeab</a></li>
                                  <li className="supmenu-li"><a href="product.html">Fresh green orange</a></li>
                                  <li className="supmenu-li"><a href="product.html">Fresh organic reachter</a></li>
                                  <li className="supmenu-li"><a href="product.html">Balckberry 100%organic</a></li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-link parent">
                            <a href="grid-list.html" className="link-title">
                              <span className="sp-link-title">Collection</span>
                              <i className="fa fa-angle-down" />
                            </a>
                            <a href="#collapse-banner-menu" data-bs-toggle="collapse" className="link-title link-title-lg">
                              <span className="sp-link-title">Collection</span>
                              <i className="fa fa-angle-down" />
                            </a>
                            <ul className="dropdown-submenu banner-menu collapse" id="collapse-banner-menu">
                              <li className="menu-banner">
                                <a href="grid-list.html" className="menu-banner-img"><img src="image/menu-banner01.jpg" alt="menu-image" className="img-fluid" /></a>
                                <a href="grid-list.html" className="menu-banner-title"><span>Bestseller</span></a>
                              </li>
                              <li className="menu-banner">
                                <a href="grid-list.html" className="menu-banner-img"><img src="image/menu-banner02.jpg" alt="menu-image" className="img-fluid" /></a>
                                <a href="grid-list.html" className="menu-banner-title"><span>Special product</span></a>
                              </li>
                              <li className="menu-banner">
                                <a href="grid-list.html" className="menu-banner-img"><img src="image/menu-banner03.jpg" alt="mneu" className="img-fluid" /></a>
                                <a href="grid-list.html" className="menu-banner-title"><span>Featured product</span></a>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-link parent">
                            <a href="/" className="link-title">
                              <span className="sp-link-title">Pages</span>
                              <i className="fa fa-angle-down" />
                            </a>
                            <a href="#collapse-page-menu" data-bs-toggle="collapse" className="link-title link-title-lg">
                              <span className="sp-link-title">Pages</span>
                              <i className="fa fa-angle-down" />
                            </a>
                            <ul className="dropdown-submenu sub-menu collapse" id="collapse-page-menu">
                              <li className="submenu-li">
                                <a href="about-us.html" className="submenu-link">About us</a>
                              </li>
                              <li className="submenu-li">
                                <a href="/" className="g-l-link"><span>Account</span> <i className="fa fa-angle-right" /></a>
                                <a href="#account-menu" data-bs-toggle="collapse" className="sub-link"><span>Account</span> <i className="fa fa-angle-down" /></a>
                                <ul className="collapse blog-style-1" id="account-menu">
                                  <li>
                                    <a href="order-history.html" className="sub-style"><span>Order</span></a>
                                    <a href="order-history.html" className="blog-sub-style"><span>Order</span></a>
                                    <a href="profile.html" className="sub-style"><span>Profile</span></a>
                                    <a href="profile.html" className="blog-sub-style"><span>Profile</span></a>
                                    <a href="pro-addresses.html" className="sub-style"><span>Address</span></a>
                                    <a href="pro-addresses.html" className="blog-sub-style"><span>Address</span></a>
                                    <a href="pro-wishlist.html" className="sub-style"><span>Wishlist</span></a>
                                    <a href="pro-wishlist.html" className="blog-sub-style"><span>Wishlist</span></a>
                                    <a href="pro-tickets.html" className="sub-style"><span>My tickets</span></a>
                                    <a href="pro-tickets.html" className="blog-sub-style"><span>My tickets</span></a>
                                  </li>
                                </ul>
                              </li>
                              <li className="submenu-li">
                                <a href="billing-info.html" className="submenu-link">Billing info</a>
                              </li>
                              <li className="submenu-li">
                                <a href="cancellation.html" className="submenu-link">Cancellation</a>
                              </li>
                              <li className="submenu-li">
                                <a href="cart.html" className="submenu-link">Cart page</a>
                              </li>
                              <li className="submenu-li">
                                <a href="coming-soon.html" className="submenu-link">Coming-soon</a>
                              </li>
                              <li className="submenu-li">
                                <a href="faq%27s.html" className="submenu-link">Faq's</a>
                              </li>
                              <li className="submenu-li">
                                <a href="forgot-password.html" className="submenu-link">Forgot passowrd</a>
                              </li>
                              <li className="submenu-li">
                                <a href="order-complete.html" className="submenu-link">Order complete</a>
                              </li>
                              <li className="submenu-li">
                                <a href="tracking.html" className="submenu-link">Track page</a>
                              </li>
                              <li className="submenu-li">
                                <a href="contact.html" className="submenu-link">Contact us</a>
                              </li>
                              <li className="submenu-li">
                                <a href="payment-policy.html" className="submenu-link">Payment policy</a>
                              </li>
                              <li className="submenu-li">
                                <a href="privacy-policy.html" className="submenu-link">privacy policy</a>
                              </li>
                              <li className="submenu-li">
                                <a href="return-policy.html" className="submenu-link">Return policy</a>
                              </li>
                              <li className="submenu-li">
                                <a href="terms-conditions.html" className="submenu-link">Terms &amp; conditions</a>
                              </li>
                              <li className="submenu-li">
                                <a href="wishlist.html" className="submenu-link">Wishlist</a>
                              </li>
                              <li className="submenu-li">
                                <a href="sitemap.html" className="submenu-link">Sitemap</a>
                              </li>
                              <li className="submenu-li">
                                <a href="fnf-page.html" className="submenu-link">4 not 4</a>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-link parent">
                            <a href="/" className="link-title">
                              <span className="sp-link-title">Blogs</span>
                              <i className="fa fa-angle-down" />
                            </a>
                            <a href="#blog-style" data-bs-toggle="collapse" className="link-title link-title-lg">
                              <span className="sp-link-title">Blogs</span>
                              <i className="fa fa-angle-down" />
                            </a>
                            <ul className="dropdown-submenu sub-menu collapse" id="blog-style">
                              <li className="submenu-li">
                                <a href="/" className="g-l-link"><span>Blog grid</span> <i className="fa fa-angle-right" /></a>
                                <a href="#blog-style03" data-bs-toggle="collapse" className="sub-link"><span>Blog grid</span> <i className="fa fa-angle-down" /></a>
                                <ul className="collapse blog-style-1" id="blog-style03">
                                  <li>
                                    <a href="/" className="sub-style"><span>Blog style 1</span><i className="fa fa-angle-right" /></a>
                                    <a href="#grid1" data-bs-toggle="collapse" className="blog-sub-style"><span>Blog style 1</span><i className="fa fa-angle-right" /></a>
                                    <ul className="grid-style collapse" id="grid1">
                                      <li><a href="blog-style-1-3-grid.html">Blog 3 grid</a></li>
                                      <li><a href="blog-style-1-left-3-grid.html">Left blog 3 grid</a></li>
                                      <li><a href="blog-style-1-right-3-grid.html">Right blog 3 grid</a></li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href="/" className="sub-style"><span>Blog style 2</span><i className="fa fa-angle-right" /></a>
                                    <a href="#grid2" data-bs-toggle="collapse" className="blog-sub-style"><span>Blog style 2</span><i className="fa fa-angle-right" /></a>
                                    <ul className="grid-style collapse" id="grid2">
                                      <li><a href="blog-style-2-3-grid.html">Blog 3 grid</a></li>
                                      <li><a href="blog-style-2-left-3-grid.html">Left blog 3 grid</a></li>
                                      <li><a href="blog-style-2-right-3-grid.html">Right blog 3 grid</a></li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href="/" className="sub-style"><span>Blog style 3</span><i className="fa fa-angle-right" /></a>
                                    <a href="#grid3" data-bs-toggle="collapse" className="blog-sub-style"><span>Blog style 3</span><i className="fa fa-angle-right" /></a>
                                    <ul className="grid-style collapse" id="grid3">
                                      <li><a href="blog-style-3-grid.html">Blog 3 grid</a></li>
                                      <li><a href="blog-style-3-left-grid-blog.html">Left blog 3 grid</a></li>
                                      <li><a href="blog-style-3-right-grid-blog.html">Right blog 3 grid</a></li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href="/" className="sub-style"><span>Blog style 4</span><i className="fa fa-angle-right" /></a>
                                    <a href="#grid4" data-bs-toggle="collapse" className="blog-sub-style"><span>Blog style 4</span><i className="fa fa-angle-right" /></a>
                                    <ul className="grid-style collapse" id="grid4">
                                      <li><a href="blog-style-5-3-grid.html">Blog 3 grid</a></li>
                                      <li><a href="blog-style-5-left-3-grid.html">Left blog 3 grid</a></li>
                                      <li><a href="blog-style-5-right-3-grid.html">Right blog 3 grid</a></li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href="/" className="sub-style"><span>Blog style 5</span><i className="fa fa-angle-right" /></a>
                                    <a href="#grid5" data-bs-toggle="collapse" className="blog-sub-style"><span>Blog style 5</span><i className="fa fa-angle-right" /></a>
                                    <ul className="grid-style collapse" id="grid5">
                                      <li><a href="blog-style-6-3-grid.html">Blog 3 grid</a></li>
                                      <li><a href="blog-style-6-left-3-grid.html">Left blog 3 grid</a></li>
                                      <li><a href="blog-style-6-right-3-grid.html">Right blog 3 grid</a></li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href="/" className="sub-style"><span>Blog style 6</span><i className="fa fa-angle-right" /></a>
                                    <a href="#grid6" data-bs-toggle="collapse" className="blog-sub-style"><span>Blog style 6</span><i className="fa fa-angle-right" /></a>
                                    <ul className="grid-style collapse" id="grid6">
                                      <li><a href="blog-style-7-3-grid.html">Blog 3 grid</a></li>
                                      <li><a href="blog-style-7-left-grid-blog.html">Left blog 3 grid</a></li>
                                      <li><a href="blog-style-7-right-grid-blog.html">Right blog 3 grid</a></li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                              <li className="submenu-li">
                                <a href="/" className="g-l-link"><span>Blog list</span> <i className="fa fa-angle-right" /></a>
                                <a href="#blog-style01" data-bs-toggle="collapse" className="sub-link"><span>Blog list</span> <i className="fa fa-angle-down" /></a>
                                <ul className="collapse blog-style-1" id="blog-style01">
                                  <li>
                                    <a href="/" className="sub-style"><span>Blog style 1</span><i className="fa fa-angle-right" /></a>
                                    <a href="#list-1" data-bs-toggle="collapse" className="blog-sub-style"><span>Blog style 1</span><i className="fa fa-angle-right" /></a>
                                    <ul className="grid-style collapse" id="list-1">
                                      <li><a href="blog-style-1-list.html">Blog list</a></li>
                                      <li><a href="blog-style-1-left-list.html">Left blog list</a></li>
                                      <li><a href="blog-style-1-right-list.html">Right blog list</a></li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href="/" className="sub-style"><span>Blog style 2</span><i className="fa fa-angle-right" /></a>
                                    <a href="#list-22" data-bs-toggle="collapse" className="blog-sub-style"><span>Blog style 2</span><i className="fa fa-angle-right" /></a>
                                    <ul className="grid-style collapse" id="list-22">
                                      <li><a href="blog-style-2-list.html">Blog list</a></li>
                                      <li><a href="blog-style-2-left-list.html">Left blog list</a></li>
                                      <li><a href="blog-style-2-right-list.html">Right blog list</a></li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href="/" className="sub-style"><span>Blog style 3</span><i className="fa fa-angle-right" /></a>
                                    <a href="#list-33" data-bs-toggle="collapse" className="blog-sub-style"><span>Blog style 3</span><i className="fa fa-angle-right" /></a>
                                    <ul className="grid-style collapse" id="list-33">
                                      <li><a href="blog-style-3-list.html">Blog list</a></li>
                                      <li><a href="blog-style-3-left-list-blog.html">Left blog list</a></li>
                                      <li><a href="blog-style-3-right-list-blog.html">Right blog list</a></li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href="/" className="sub-style"><span>Blog style 4</span><i className="fa fa-angle-right" /></a>
                                    <a href="#list-44" data-bs-toggle="collapse" className="blog-sub-style"><span>Blog style 4</span><i className="fa fa-angle-right" /></a>
                                    <ul className="grid-style collapse" id="list-44">
                                      <li><a href="blog-style-5-list-blog.html">Blog list</a></li>
                                      <li><a href="blog-style-5-left-list.html">Left blog list</a></li>
                                      <li><a href="blog-style-5-right-list.html">Right blog list</a></li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href="/" className="sub-style"><span>Blog style 5</span><i className="fa fa-angle-right" /></a>
                                    <a href="#list-55" data-bs-toggle="collapse" className="blog-sub-style"><span>Blog style 5</span><i className="fa fa-angle-right" /></a>
                                    <ul className="grid-style collapse" id="list-55">
                                      <li><a href="blog-style-6-list-blog.html">Blog list</a></li>
                                      <li><a href="blog-style-6-left-list-blog.html">Left blog list</a></li>
                                      <li><a href="blog-style-6-right-list-blog.html">Right blog list</a></li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href="/" className="sub-style"><span>Blog style 6</span><i className="fa fa-angle-right" /></a>
                                    <a href="#list-66" data-bs-toggle="collapse" className="blog-sub-style"><span>Blog style 6</span><i className="fa fa-angle-right" /></a>
                                    <ul className="grid-style collapse" id="list-66">
                                      <li><a href="blog-style-7-list-blog.html">Blog list</a></li>{/*list*/}
                                      <li><a href="blog-style-7-left-list-blog.html">Left blog list</a></li>{/*list*/}
                                      <li><a href="blog-style-7-right-list-blog.html">Right blog list</a></li>{/*list*/}
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                              <li className="submenu-li">
                                <a href="/" className="g-l-link"><span>Blog details</span> <i className="fa fa-angle-right" /></a>
                                <a href="#blog-style02" data-bs-toggle="collapse" className="sub-link"><span>Blog Details</span> <i className="fa fa-angle-down" /></a>
                                <ul className="collapse blog-style-1 ex-width" id="blog-style02">
                                  <li>
                                    <a href="/" className="sub-style"><span>Blog details style 1</span><i className="fa fa-angle-right" /></a>
                                    <a href="#list-11" data-bs-toggle="collapse" className="blog-sub-style"><span>Blog details style 1</span><i className="fa fa-angle-right" /></a>
                                    <ul className="grid-style collapse" id="list-11">
                                      <li><a href="blog-style-1-details.html">Blog details</a></li>
                                      <li><a href="blog-style-1-left-details.html">Left blog details</a></li>
                                      <li><a href="blog-style-1-right-details.html">Right blog details</a></li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href="/" className="sub-style"><span>Blog details style 2</span><i className="fa fa-angle-right" /></a>
                                    <a href="#list2" data-bs-toggle="collapse" className="blog-sub-style"><span>Blog details style 2</span><i className="fa fa-angle-right" /></a>
                                    <ul className="grid-style collapse" id="list2">
                                      <li><a href="blog-style-2-details.html">Blog details</a></li>
                                      <li><a href="blog-style-2-left-details.html">Left blog details</a></li>
                                      <li><a href="blog-style-2-right-details.html">Right blog details</a></li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href="/" className="sub-style"><span>Blog details style 3</span><i className="fa fa-angle-right" /></a>
                                    <a href="#list3" data-bs-toggle="collapse" className="blog-sub-style"><span>Blog details style 3</span><i className="fa fa-angle-right" /></a>
                                    <ul className="grid-style collapse" id="list3">
                                      <li><a href="blog-style-3-details.html">Blog details</a></li>
                                      <li><a href="blog-style-3-left-blog-details.html">Left blog details</a></li>
                                      <li><a href="blog-style-3-right-blog-details.html">Right blog details</a></li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href="/" className="sub-style"><span>Blog details style 4</span><i className="fa fa-angle-right" /></a>
                                    <a href="#list4" data-bs-toggle="collapse" className="blog-sub-style"><span>Blog details style 4</span><i className="fa fa-angle-right" /></a>
                                    <ul className="grid-style collapse" id="list4">
                                      <li><a href="blog-style-5-details.html">Blog details</a></li>
                                      <li><a href="blog-style-5-left-details.html">Left blog details</a></li>
                                      <li><a href="blog-style-5-right-details.html">Right blog details</a></li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href="/" className="sub-style"><span>Blog details style 5</span><i className="fa fa-angle-right" /></a>
                                    <a href="#list5" data-bs-toggle="collapse" className="blog-sub-style"><span>Blog details style 5</span><i className="fa fa-angle-right" /></a>
                                    <ul className="grid-style collapse" id="list5">
                                      <li><a href="blog-style-6-details.html">Blog details</a></li>
                                      <li><a href="blog-style-6-left-details-blog.html">Left blog details</a></li>
                                      <li><a href="blog-style-6-right-details-blog.html">Right blog details</a></li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href="/" className="sub-style"><span>Blog details style 6</span><i className="fa fa-angle-right" /></a>
                                    <a href="#list6" data-bs-toggle="collapse" className="blog-sub-style"><span>Blog details style 6</span><i className="fa fa-angle-right" /></a>
                                    <ul className="grid-style collapse" id="list6">
                                      <li><a href="blog-style-7-details.html">Blog details</a></li>
                                      <li><a href="blog-style-7-left-details.html">Left blog details</a></li>
                                      <li><a href="blog-style-7-right-details.html">Right blog details</a></li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                              <li className="submenu-li">
                                <a href="/" className="g-l-link"><span>Center blog</span> <i className="fa fa-angle-right" /></a>
                                <a href="#center-blog" data-bs-toggle="collapse" className="sub-link"><span>Center blog</span> <i className="fa fa-angle-down" /></a>
                                <ul className="collapse blog-style-1" id="center-blog">
                                  <li>
                                    <a href="blog-style-1-center-blog.html" className="sub-style"><span>Blog style 1</span></a>
                                    <a href="blog-style-1-center-blog.html" className="blog-sub-style"><span>Blog style 1</span></a>
                                    <a href="blog-style-2-center-blog.html" className="sub-style"><span>Blog style 2</span></a>
                                    <a href="blog-style-2-center-blog.html" className="blog-sub-style"><span>Blog style 2</span></a>
                                    <a href="blog-style-3-center-blog.html" className="sub-style"><span>Blog style 3</span></a>
                                    <a href="blog-style-3-center-blog.html" className="blog-sub-style"><span>Blog style 3</span></a>
                                    <a href="blog-style-5-center-blog.html" className="sub-style"><span>Blog style 4</span></a>
                                    <a href="blog-style-5-center-blog.html" className="blog-sub-style"><span>Blog style 4</span></a>
                                    <a href="blog-style-6-center-blog.html" className="sub-style"><span>Blog style 5</span></a>
                                    <a href="blog-style-6-center-blog.html" className="blog-sub-style"><span>Blog style 5</span></a>
                                    <a href="blog-style-7-center-blog.html" className="sub-style"><span>Blog style 6</span></a>
                                    <a href="blog-style-7-center-blog.html" className="blog-sub-style"><span>Blog style 6</span></a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-link parent">
                            <a href="/" className="link-title">
                              <span className="sp-link-title">Feature</span>
                              <i className="fa fa-angle-down" />
                            </a>
                            <a href="#feature1" data-bs-toggle="collapse" className="link-title link-title-lg">
                              <span className="sp-link-title">Feature</span>
                              <i className="fa fa-angle-down" />
                            </a>
                            <ul className="dropdown-submenu mega-menu collapse" id="feature1">
                              <li className="megamenu-li parent">
                                <h2 className="sublink-title">Header style</h2>
                                <a href="#feature01" data-bs-toggle="collapse" className="sublink-title sublink-title-lg">
                                  <span>Header style</span>
                                  <i className="fa fa-angle-down" />
                                </a>
                                <ul className="dropdown-supmenu collapse" id="feature01">
                                  <li className="supmenu-li"><a href="header-style-1.html">Header style 1</a></li>
                                  <li className="supmenu-li"><a href="header-style-2.html">Header style 2</a></li>
                                  <li className="supmenu-li"><a href="header-style-3.html">Header style 3</a></li>
                                  <li className="supmenu-li"><a href="header-style-4.html">Header style 4</a></li>
                                  <li className="supmenu-li"><a href="header-style-5.html">Header style 5</a></li>
                                  <li className="supmenu-li"><a href="header-style-6.html">Header style 6</a></li>
                                  <li className="supmenu-li"><a href="header-style-7.html">Header style 7</a></li>
                                </ul>
                              </li>
                              <li className="megamenu-li parent">
                                <h2 className="sublink-title">Footer style</h2>
                                <a href="#feature02" data-bs-toggle="collapse" className="sublink-title sublink-title-lg">
                                  <span>Footer style</span>
                                  <i className="fa fa-angle-down" />
                                </a>
                                <ul className="dropdown-supmenu collapse" id="feature02">
                                  <li className="supmenu-li"><a href="footer-style-1.html">Footer style 1</a></li>
                                  <li className="supmenu-li"><a href="footer-style-2.html">Footer style 2</a></li>
                                  <li className="supmenu-li"><a href="footer-style-3.html">Footer style 3</a></li>
                                  <li className="supmenu-li"><a href="footer-style-4.html">Footer style 4</a></li>
                                  <li className="supmenu-li"><a href="footer-style-5.html">Footer style 5</a></li>
                                  <li className="supmenu-li"><a href="footer-style-6.html">Footer style 6</a></li>
                                  <li className="supmenu-li"><a href="footer-style-7.html">Footer style 7</a></li>
                                </ul>
                              </li>
                              <li className="megamenu-li parent">
                                <h2 className="sublink-title">Product details</h2>
                                <a href="#feature03" data-bs-toggle="collapse" className="sublink-title sublink-title-lg">
                                  <span>Product details</span>
                                  <i className="fa fa-angle-down" />
                                </a>
                                <ul className="dropdown-supmenu collapse" id="feature03">
                                  <li className="supmenu-li"><a href="product.html">Product details style 1</a></li>
                                  <li className="supmenu-li"><a href="product-style-2.html">Product details style 2</a></li>
                                  <li className="supmenu-li"><a href="product-style-3.html">Product details style 3</a></li>
                                  <li className="supmenu-li"><a href="product-style-4.html">Product details style 4</a></li>
                                  <li className="supmenu-li"><a href="product-style-5.html">Product details style 5</a></li>
                                  <li className="supmenu-li"><a href="product-style-6.html">Product details style 6</a></li>
                                  <li className="supmenu-li"><a href="product-style-7.html">Product details style 7</a></li>
                                </ul>
                              </li>
                              <li className="megamenu-li parent">
                                <h2 className="sublink-title">Other style</h2>
                                <a href="#feature04" data-bs-toggle="collapse" className="sublink-title sublink-title-lg">
                                  <span>Other style</span>
                                  <i className="fa fa-angle-down" />
                                </a>
                                <ul className="dropdown-supmenu collapse" id="feature04">
                                  <li className="supmenu-li"><a href="checkout-1.html">Checkout style 1</a></li>
                                  <li className="supmenu-li"><a href="checkout-2.html">Checkout style 2</a></li>
                                  <li className="supmenu-li"><a href="checkout-3.html">Checkout style 3</a></li>
                                  <li className="supmenu-li"><a href="cart.html">Cart style 1</a></li>
                                  <li className="supmenu-li"><a href="cart-2.html">Cart style 2</a></li>
                                  <li className="supmenu-li"><a href="cart-3.html">Cart style 3</a></li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-link">
                            <a href="/" className="link-title">
                              <span className="sp-link-title">Buy vegist <span className="hot">Hot</span></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CartPreview></CartPreview>
    </header>
  )
};

export default Header;
