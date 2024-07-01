import { useContext } from "react";
import { ProductsStateContext } from "../contexts/products";
import { useParams } from 'react-router-dom';
import ProductSizeChart from './ProductSizeChart';

const ProductView = () => {
    const { products } = useContext(ProductsStateContext);
    const { id } = useParams();
    const product = products.find(p => p.id.toString() === id);

    const zoomHandler = (e) => {
    }

    console.log(`ProductView ${JSON.stringify(product)}`);
    return (
        <div>
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
                                        <input type="text" name="search" placeholder="Search product." />
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
                                            <li className="side-wrap wishlist-wrap">
                                                <a href="wishlist.html" className="header-wishlist">
                                                    <span className="wishlist-icon"><i className="icon-heart" /></span>
                                                    <span className="wishlist-counter">0</span>
                                                </a>
                                            </li>
                                            <li className="side-wrap cart-wrap">
                                                <div className="shopping-widget">
                                                    <div className="shopping-cart">
                                                        <a href="/" className="cart-count">
                                                            <span className="cart-icon-wrap">
                                                                <span className="cart-icon"><i className="icon-handbag" /></span>
                                                                <span id="cart-total" className="bigcounter">5</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
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
                <div className="mini-cart">
                    <a href="/" className="shopping-cart-close"><i className="ion-close-round" /></a>
                    <div className="cart-item-title">
                        <p>
                            <span className="cart-count-desc">There are</span>
                            <span className="cart-count-item bigcounter">4</span>
                            <span className="cart-count-desc">Products</span>
                        </p>
                    </div>
                    <ul className="cart-item-loop">
                        <li className="cart-item">
                            <div className="cart-img">
                                <a href="product.html">
                                    <img src="image/cart-img.jpg" alt="cart-image" className="img-fluid" />
                                </a>
                            </div>
                            <div className="cart-title">
                                <h6><a href="product.html">Fresh apple 5kg</a></h6>
                                <div className="cart-pro-info">
                                    <div className="cart-qty-price">
                                        <span className="quantity">1 x </span>
                                        <span className="price-box">$250.00 USD</span>
                                    </div>
                                    <div className="delete-item-cart">
                                        <a href="empty-cart.html"><i className="icon-trash icons" /></a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="cart-item">
                            <div className="cart-img">
                                <a href="product.html">
                                    <img src="image/cart-img02.jpg" alt="cart-image" className="img-fluid" />
                                </a>
                            </div>
                            <div className="cart-title">
                                <h6><a href="product.html">Natural grassbean 4kg</a></h6>
                                <div className="cart-pro-info">
                                    <div className="cart-qty-price">
                                        <span className="quantity">1 x </span>
                                        <span className="price-box">$300.00 USD</span>
                                    </div>
                                    <div className="delete-item-cart">
                                        <a href="empty-cart.html"><i className="icon-trash icons" /></a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="cart-item">
                            <div className="cart-img">
                                <a href="product.html">
                                    <img src="image/cart-img03.jpg" alt="cart-image" className="img-fluid" />
                                </a>
                            </div>
                            <div className="cart-title">
                                <h6><a href="product.html">Organic coconut juice 5ltr</a></h6>
                                <div className="cart-pro-info">
                                    <div className="cart-qty-price">
                                        <span className="quantity">1 x </span>
                                        <span className="price-box">$250.00 USD</span>
                                    </div>
                                    <div className="delete-item-cart">
                                        <a href="empty-cart.html"><i className="icon-trash icons" /></a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="cart-item">
                            <div className="cart-img">
                                <a href="product.html">
                                    <img src="image/cart-img04.jpg" alt="cart-image" className="img-fluid" />
                                </a>
                            </div>
                            <div className="cart-title">
                                <h6><a href="product.html">Orange juice 5ltr</a></h6>
                                <div className="cart-pro-info">
                                    <div className="cart-qty-price">
                                        <span className="quantity">1 x </span>
                                        <span className="price-box">$350.00 USD</span>
                                    </div>
                                    <div className="delete-item-cart">
                                        <a href="empty-cart.html"><i className="icon-trash icons" /></a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul className="subtotal-title-area">
                        <li className="subtotal-info">
                            <div className="subtotal-titles">
                                <h6>Sub total:
                                </h6>
                                <span className="subtotal-price">$750.00 USD</span>
                            </div>
                        </li>
                        <li className="mini-cart-btns">
                            <div className="cart-btns">
                                <a href="cart.html" className="btn btn-style2">View cart</a>
                                <a href="checkout-1.html" className="btn btn-style2">Checkout</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </header>
            <section className="section-tb-padding pro-page">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 col-lg-12 col-md-12 col-xs-12 pro-image">
                            <div className="row">
                                <div className="col-lg-6 col-xl-6 col-md-6 col-12 col-xs-12 larg-image">
                                    <div className="tab-content">
                                        <div className="tab-pane fade show active" id="image-11">
                                            <a href="/" className="long-img">
                                                <figure className="zoom" onMouseMove={zoomHandler} style={{ backgroundImage: 'url(image/pro-page-image/pro-page-image.jpg)' }}>
                                                    <img src="image/pro-page-image/pro-page-image.jpg" className="img-fluid" alt="" />
                                                </figure>
                                            </a>
                                        </div>
                                        <div className="tab-pane fade" id="image-22">
                                            <a href="/" className="long-img">
                                                <figure className="zoom" onMouseMove={zoomHandler} style={{ backgroundImage: 'url(image/pro-page-image/prro-page-image01.jpg)' }}>
                                                    <img src="image/pro-page-image/prro-page-image01.jpg" className="img-fluid" alt="" />
                                                </figure>
                                            </a>
                                        </div>
                                        <div className="tab-pane fade" id="image-33">
                                            <a href="/" className="long-img">
                                                <figure className="zoom" onMouseMove={zoomHandler} style={{ backgroundImage: 'url(image/pro-page-image/pro-page-image1-1.jpg)' }}>
                                                    <img src="image/pro-page-image/pro-page-image1-1.jpg" className="img-fluid" alt="" />
                                                </figure>
                                            </a>
                                        </div>
                                        <div className="tab-pane fade" id="image-44">
                                            <a href="/" className="long-img">
                                                <figure className="zoom" onMouseMove={zoomHandler} style={{ backgroundImage: 'url(image/pro-page-image/pro-page-image1.jpg)' }}>
                                                    <img src="image/pro-page-image/pro-page-image1.jpg" className="img-fluid" alt="" />
                                                </figure>
                                            </a>
                                        </div>
                                        <div className="tab-pane fade" id="image-55">
                                            <a href="/" className="long-img">
                                                <figure className="zoom" onMouseMove={zoomHandler} style={{ backgroundImage: 'url(image/pro-page-image/pro-page-image2.jpg)' }}>
                                                    <img src="image/pro-page-image/pro-page-image2.jpg" className="img-fluid" alt="" />
                                                </figure>
                                            </a>
                                        </div>
                                        <div className="tab-pane fade" id="image-66">
                                            <a href="/" className="long-img">
                                                <figure className="zoom" onMouseMove={zoomHandler} style={{ backgroundImage: 'url(image/pro-page-image/pro-page-image2-2.jpg)' }}>
                                                    <img src="image/pro-page-image/pro-page-image2-2.jpg" className="img-fluid" alt="" />
                                                </figure>
                                            </a>
                                        </div>
                                        <div className="tab-pane fade" id="image-77">
                                            <a href="/" className="long-img">
                                                <figure className="zoom" onMouseMove={zoomHandler} style={{ backgroundImage: 'url(image/pro-page-image/pro-page-image3.jpg)' }}>
                                                    <img src="image/pro-page-image/pro-page-image3.jpg" className="img-fluid" alt="" />
                                                </figure>
                                            </a>
                                        </div>
                                        <div className="tab-pane fade" id="image-88">
                                            <a href="/" className="long-img">
                                                <figure className="zoom" onMouseMove={zoomHandler} style={{ backgroundImage: 'url(image/pro-page-image/pro-page-image03.jpg)' }}>
                                                    <img src="image/pro-page-image/pro-page-image03.jpg" className="img-fluid" alt="" />
                                                </figure>
                                            </a>
                                        </div>
                                    </div>
                                    <ul className="nav nav-tabs pro-page-slider owl-carousel owl-theme">
                                        <li className="nav-item items">
                                            <a className="nav-link active" data-bs-toggle="tab" href="#image-11"><img src="image/pro-page-image/image1.jpg" className="img-fluid" alt="" /></a>
                                        </li>
                                        <li className="nav-item items">
                                            <a className="nav-link" data-bs-toggle="tab" href="#image-22"><img src="image/pro-page-image/image2.jpg" className="img-fluid" alt="iamge" /></a>
                                        </li>
                                        <li className="nav-item items">
                                            <a className="nav-link" data-bs-toggle="tab" href="#image-33"><img src="image/pro-page-image/image3.jpg" className="img-fluid" alt="" /></a>
                                        </li>
                                        <li className="nav-item items">
                                            <a className="nav-link" data-bs-toggle="tab" href="#image-44"><img src="image/pro-page-image/image4.jpg" className="img-fluid" alt="" /></a>
                                        </li>
                                        <li className="nav-item items">
                                            <a className="nav-link" data-bs-toggle="tab" href="#image-55"><img src="image/pro-page-image/image5.jpg" className="img-fluid" alt="" /></a>
                                        </li>
                                        <li className="nav-item items">
                                            <a className="nav-link" data-bs-toggle="tab" href="#image-66"><img src="image/pro-page-image/image6.jpg" className="img-fluid" alt="" /></a>
                                        </li>
                                        <li className="nav-item items">
                                            <a className="nav-link" data-bs-toggle="tab" href="#image-77"><img src="image/pro-page-image/image8.jpg" className="img-fluid" alt="" /></a>
                                        </li>
                                        <li className="nav-item items">
                                            <a className="nav-link" data-bs-toggle="tab" href="#image-88"><img src="image/pro-page-image/image7.jpg" className="img-fluid" alt="" /></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-6 col-xl-6 col-md-6 col-12 col-xs-12 pro-info">
                                    <h4>{product.name}</h4>
                                    <div className="rating">
                                        {[...Array(5)].map((star, index) => {
                                            if (index < Math.floor(product.rating)) {
                                                return <i key={index} className="fa fa-star d-star" />;
                                            } else if (index === Math.floor(product.rating) && product.rating % 1 !== 0) {
                                                return <i key={index} className="fa fa-star-half-o d-star" />;
                                            } else {
                                                return <i key={index} className="fa fa-star-o d-star" />;
                                            }
                                        })}
                                    </div>
                                    <p>{product.num_of_ratings} ratings</p>
                                    <div className="pro-availabale">
                                        <span className="available">Availability:</span>
                                        {
                                            product.availability === "Y" ? (<span className="pro-instock">In stock</span>) :
                                                (<span className="pro-instock">In stock</span>)
                                        }
                                    </div>
                                    <div className="pro-price">
                                        <span className="new-price">${product.price}</span>
                                        <span className="old-price"><del>${product.price}</del></span>
                                        <div className="Pro-lable">
                                            <span className="p-discount">-8%</span>
                                        </div>
                                    </div>
                                    <span className="pro-details">Hurry up! only <span className="pro-number">7</span> products left in stock!</span>
                                    <p>{product.short_description}</p>
                                    {product.sizes && <div className="pro-items">
                                        <span className="pro-size">Size:</span>
                                        <ul className="pro-wight">
                                            {
                                                product.sizes && product.sizes.map((item, index) => (
                                                    <li key={index} className="active">
                                                        <a href="/">{item}</a>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>}
                                    {
                                        product.size_color && <div className="product-color">
                                            <span className="color-label">Color:</span>
                                            <span className="color">
                                                {
                                                    product.size_color && product.size_color.map((item, index) => (
                                                        <li key={index} className="active">
                                                            <a href="/"> <div className="color-circle" style={{ backgroundColor: item.color }}></div></a>
                                                        </li>
                                                    ))
                                                }
                                            </span>
                                        </div>
                                    }

                                    <div className="pro-qty">
                                        <span className="qty">Quantity:</span>
                                        <div className="plus-minus">
                                            <span>
                                                <a href="/" className="minus-btn text-black">-</a>
                                                <input type="text" name="name" defaultValue={1} />
                                                <a href="/" className="plus-btn text-black">+</a>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="pro-btn">
                                        <a href="wishlist.html" className="btn btn-style1"><i className="fa fa-heart" /></a>
                                        <a href="cart.html" className="btn btn-style1"><i className="fa fa-shopping-bag" /> Add to cart</a>
                                        <a href="checkout-1.html" className="btn btn-style1">Buy now</a>
                                    </div>
                                    <div className="share">
                                        <span className="share-lable">Share:</span>
                                        <ul className="share-icn">
                                            <li><a href="/"><i className="fa fa-facebook" /></a></li>
                                            <li><a href="/"><i className="fa fa-twitter" /></a></li>
                                            <li><a href="/"><i className="fa fa-instagram" /></a></li>
                                            <li><a href="/"><i className="fa fa-pinterest" /></a></li>
                                        </ul>
                                    </div>
                                    <div className="pay-img">
                                        <a href="checkout-1.html">
                                            <img src="image/pay-image.jpg" className="img-fluid" alt="pay-image" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-b-padding pro-page-content">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="pro-page-tab">
                                <ul className="nav nav-tabs">
                                    <li className="nav-item">
                                        <a className="nav-link active" data-bs-toggle="tab" href="#tab-1">Description</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="tab" href="#tab-2">Reviews</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="tab" href="#tab-3">Video</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="tab" href="#tab-5">Size chart</a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane fade show active" id="tab-1">
                                        <div className="tab-1content">
                                            <h4>More details</h4>
                                            <ul className="tab-description">
                                                <li>{product.description}</li>
                                                {/* <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                                                <li>Lorem Ipsum has been the ‘s standard dummy text. Lorem Ipsumum is simply dummy text.</li>
                                                <li>type here your detail one by one li more add</li>
                                                <li>has been the industry’s standard dummy text ever since. Lorem Ips</li>
                                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ‘s standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is simply dummy text.</li> */}
                                            </ul>
                                        </div>
                                        <div className="tab-2content">
                                            <h4>Key specification</h4>
                                            <ul className="tab-description">
                                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                                                <li>Lorem Ipsum has been the ‘s standard dummy text. Lorem Ipsumum is simply dummy text.</li>
                                                <li>type here your detail one by one li more add</li>
                                                <li>has been the industry’s standard dummy text ever since. Lorem Ips</li>
                                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ‘s standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is simply dummy text.</li>
                                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ‘s standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is simply dummy text.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade show" id="tab-2">
                                        <h4 className="reviews-title">Customer reviews</h4>
                                        <div className="customer-reviews t-desk-2">
                                            <span className="p-rating">
                                                <i className="fa fa-star e-star" />
                                                <i className="fa fa-star e-star" />
                                                <i className="fa fa-star e-star" />
                                                <i className="fa fa-star e-star" />
                                                <i className="fa fa-star e-star" />
                                            </span>
                                            <p className="review-desck">Based on 2 reviews</p>
                                            <a href="#add-review" data-bs-toggle="collapse">Write a review</a>
                                        </div>
                                        <div className="review-form collapse" id="add-review">
                                            <h4>Write a review</h4>
                                            <form>
                                                <label>Name</label>
                                                <input type="text" name="name" placeholder="Enter your name" />
                                                <label>Email</label>
                                                <input type="text" name="mail" placeholder="Enter your Email" />
                                                <label>Rating</label>
                                                <span>
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </span>
                                                <label>Review title</label>
                                                <input type="text" name="mail" placeholder="Review title" />
                                                <label>Add comments</label>
                                                <textarea name="comment" placeholder="Write your comments" defaultValue={""} />
                                            </form>
                                        </div>
                                        <div className="customer-reviews">
                                            <span className="p-rating">
                                                <i className="fa fa-star e-star" />
                                                <i className="fa fa-star e-star" />
                                                <i className="fa fa-star e-star" />
                                                <i className="fa fa-star e-star" />
                                                <i className="fa fa-star-o" />
                                            </span>
                                            <h4 className="review-head">he also good and high product see like look</h4>
                                            <span className="reviews-editor">kelin patel <span className="review-name">on</span> fab 5, 2021</span>
                                            <p className="r-description">he also good and high product see like look</p>
                                        </div>
                                        <div className="customer-reviews">
                                            <span className="p-rating">
                                                <i className="fa fa-star e-star" />
                                                <i className="fa fa-star e-star" />
                                                <i className="fa fa-star e-star" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                            </span>
                                            <h4 className="review-head">he also good and fresh fruit organic product see like look</h4>
                                            <span className="reviews-editor">Melvin louis <span className="review-name">on</span> fab 5, 2021</span>
                                            <p className="r-description">he also good and fresh fruit organic product see like look</p>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade show" id="tab-3">
                                        {
                                            product.videos ? <div className="embed-responsive embed-responsive-16by9">
                                                <iframe height={630} src={`https://www.youtube.com/embed/${product.videos.split('v=')[1].split('&')[0]}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                                            </div> : (
                                                <h1>No Video</h1>
                                            )
                                        }
                                    </div>
                                    <div className="tab-pane fade show" id="tab-5">
                                        <div className="more-description table-responsive">
                                            <ProductSizeChart />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-b-padding pro-releted">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="section-title">
                                <h2>Related Products</h2>
                            </div>
                            {/* <div className="releted-products owl-carousel owl-theme"> */}
                            <div className="" style={{ flexDirection: 'row' }}>
                                {
                                    // product.related_products.map((item,index) => (<ProductviewRelatedItem id={item}/>))
                                    product.related_products.map((item, index) => (<div><h1>{item}</h1></div>))
                                }
                                {/* <div className="items">
                                    <div className="tred-pro">
                                        <div className="tr-pro-img">
                                            <a href="product.html">
                                                <img className="img-fluid" src="image/pro/pro-img-2.jpg" alt="pro-img1" />
                                                <img className="img-fluid additional-image" src="image/pro/pro-img-02.jpg" alt="additional image" />
                                            </a>
                                        </div>
                                        <div className="Pro-lable">
                                            <span className="p-text">New</span>
                                        </div>
                                        <div className="pro-icn">
                                            <a href="wishlist.html" className="w-c-q-icn"><i className="fa fa-heart" /></a>
                                            <a href="cart.html" className="w-c-q-icn"><i className="fa fa-shopping-bag" /></a>
                                            <a href="/" className="w-c-q-icn" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fa fa-eye" /></a>
                                        </div>
                                    </div>
                                    <div className="caption">
                                        <h3><a href="product.html">Fresh &amp; healty food</a></h3>
                                        <div className="rating">
                                            <i className="fa fa-star e-star" />
                                            <i className="fa fa-star e-star" />
                                            <i className="fa fa-star e-star" />
                                            <i className="fa fa-star e-star" />
                                            <i className="fa fa-star e-star" />
                                        </div>
                                        <div className="pro-price">
                                            <span className="new-price">$126.00 USD</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="items">
                                    <div className="tred-pro">
                                        <div className="tr-pro-img">
                                            <a href="product.html">
                                                <img className="img-fluid" src="image/pro/pro-img-3.jpg" alt="pro-img1" />
                                                <img className="img-fluid additional-image" src="image/pro/pro-img-03.jpg" alt="additional image" />
                                            </a>
                                        </div>
                                        <div className="Pro-lable">
                                            <span className="p-discount">-20%</span>
                                        </div>
                                        <div className="pro-icn">
                                            <a href="wishlist.html" className="w-c-q-icn"><i className="fa fa-heart" /></a>
                                            <a href="cart.html" className="w-c-q-icn"><i className="fa fa-shopping-bag" /></a>
                                            <a href="/" className="w-c-q-icn" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fa fa-eye" /></a>
                                        </div>
                                    </div>
                                    <div className="caption">
                                        <h3><a href="product.html">Fresh apple</a></h3>
                                        <div className="rating">
                                            <i className="fa fa-star c-star" />
                                            <i className="fa fa-star c-star" />
                                            <i className="fa fa-star c-star" />
                                            <i className="fa fa-star-o" />
                                            <i className="fa fa-star-o" />
                                        </div>
                                        <div className="pro-price">
                                            <span className="new-price">$130.00 USD</span>
                                            <span className="old-price"><del>$150.00 USD</del></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="items">
                                    <div className="tred-pro">
                                        <div className="tr-pro-img">
                                            <a href="product.html">
                                                <img className="img-fluid" src="image/pro/pro-img-4.jpg" alt="pro-img1" />
                                                <img className="img-fluid additional-image" src="image/pro/pro-img-04.jpg" alt="additional image" />
                                            </a>
                                        </div>
                                        <div className="Pro-lable">
                                            <span className="p-text">New</span>
                                        </div>
                                        <div className="pro-icn">
                                            <a href="wishlist.html" className="w-c-q-icn"><i className="fa fa-heart" /></a>
                                            <a href="cart.html" className="w-c-q-icn"><i className="fa fa-shopping-bag" /></a>
                                            <a href="/" className="w-c-q-icn" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fa fa-eye" /></a>
                                        </div>
                                    </div>
                                    <div className="caption">
                                        <h3><a href="product.html">Fresh litchi 100% organic</a></h3>
                                        <div className="rating">
                                            <i className="fa fa-star e-star" />
                                            <i className="fa fa-star e-star" />
                                            <i className="fa fa-star e-star" />
                                            <i className="fa fa-star e-star" />
                                            <i className="fa fa-star e-star" />
                                        </div>
                                        <div className="pro-price">
                                            <span className="new-price">$117.00 USD</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="items">
                                    <div className="tred-pro">
                                        <div className="tr-pro-img">
                                            <a href="product.html">
                                                <img className="img-fluid" src="image/pro/pro-img-5.jpg" alt="pro-img1" />
                                                <img className="img-fluid additional-image" src="image/pro/pro-img-05.jpg" alt="additional image" />
                                            </a>
                                        </div>
                                        <div className="Pro-lable">
                                            <span className="p-discount">-12%</span>
                                        </div>
                                        <div className="pro-icn">
                                            <a href="wishlist.html" className="w-c-q-icn"><i className="fa fa-heart" /></a>
                                            <a href="cart.html" className="w-c-q-icn"><i className="fa fa-shopping-bag" /></a>
                                            <a href="/" className="w-c-q-icn" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fa fa-eye" /></a>
                                        </div>
                                    </div>
                                    <div className="caption">
                                        <h3><a href="product.html">Vegetable tomato fresh</a></h3>
                                        <div className="rating">
                                            <i className="fa fa-star b-star" />
                                            <i className="fa fa-star b-star" />
                                            <i className="fa fa-star-o" />
                                            <i className="fa fa-star-o" />
                                            <i className="fa fa-star-o" />
                                        </div>
                                        <div className="pro-price">
                                            <span className="new-price">$133.00 USD</span>
                                            <span className="old-price"><del>$145.00 USD</del></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="items">
                                    <div className="tred-pro">
                                        <div className="tr-pro-img">
                                            <a href="product.html">
                                                <img className="img-fluid" src="image/pro/pro-img-6.jpg" alt="pro-img1" />
                                                <img className="img-fluid additional-image" src="image/pro/pro-img-06.jpg" alt="additional image" />
                                            </a>
                                        </div>
                                        <div className="Pro-lable">
                                            <span className="p-discount">-21%</span>
                                        </div>
                                        <div className="pro-icn">
                                            <a href="wishlist.html" className="w-c-q-icn"><i className="fa fa-heart" /></a>
                                            <a href="cart.html" className="w-c-q-icn"><i className="fa fa-shopping-bag" /></a>
                                            <a href="/" className="w-c-q-icn" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fa fa-eye" /></a>
                                        </div>
                                    </div>
                                    <div className="caption">
                                        <h3><a href="product.html">Natural grassbean</a></h3>
                                        <div className="rating">
                                            <i className="fa fa-star c-star" />
                                            <i className="fa fa-star c-star" />
                                            <i className="fa fa-star c-star" />
                                            <i className="fa fa-star-o" />
                                            <i className="fa fa-star-o" />
                                        </div>
                                        <div className="pro-price">
                                            <span className="new-price">$139.00 USD</span>
                                            <span className="old-price"><del>$160.00 USD</del></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="items">
                                    <div className="tred-pro">
                                        <div className="tr-pro-img">
                                            <a href="product.html">
                                                <img className="img-fluid" src="image/pro/pro-img-7.jpg" alt="pro-img1" />
                                                <img className="img-fluid additional-image" src="image/pro/pro-img-07.jpg" alt="additional image" />
                                            </a>
                                        </div>
                                        <div className="Pro-lable">
                                            <span className="p-discount">-10%</span>
                                        </div>
                                        <div className="pro-icn">
                                            <a href="wishlist.html" className="w-c-q-icn"><i className="fa fa-heart" /></a>
                                            <a href="cart.html" className="w-c-q-icn"><i className="fa fa-shopping-bag" /></a>
                                            <a href="/" className="w-c-q-icn" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fa fa-eye" /></a>
                                        </div>
                                    </div>
                                    <div className="caption">
                                        <h3><a href="product.html">Fresh dryed almod (50gm)</a></h3>
                                        <div className="rating">
                                            <i className="fa fa-star e-star" />
                                            <i className="fa fa-star e-star" />
                                            <i className="fa fa-star e-star" />
                                            <i className="fa fa-star e-star" />
                                            <i className="fa fa-star e-star" />
                                        </div>
                                        <div className="pro-price">
                                            <span className="new-price">$580.00 USD</span>
                                            <span className="old-price"><del>$590.00 USD</del></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="items">
                                    <div className="tred-pro">
                                        <div className="tr-pro-img">
                                            <a href="product.html">
                                                <img className="img-fluid" src="image/pro/pro-img-8.jpg" alt="pro-img1" />
                                                <img className="img-fluid additional-image" src="image/pro/pro-img-08.jpg" alt="additional image" />
                                            </a>
                                        </div>
                                        <div className="Pro-lable">
                                            <span className="p-text">New</span>
                                        </div>
                                        <div className="pro-icn">
                                            <a href="wishlist.html" className="w-c-q-icn"><i className="fa fa-heart" /></a>
                                            <a href="cart.html" className="w-c-q-icn"><i className="fa fa-shopping-bag" /></a>
                                            <a href="/" className="w-c-q-icn" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fa fa-eye" /></a>
                                        </div>
                                    </div>
                                    <div className="caption">
                                        <h3><a href="product.html">Orange juice (5ltr)</a></h3>
                                        <div className="rating">
                                            <i className="fa fa-star b-star" />
                                            <i className="fa fa-star b-star" />
                                            <i className="fa fa-star-o" />
                                            <i className="fa fa-star-o" />
                                            <i className="fa fa-star-o" />
                                        </div>
                                        <div className="pro-price">
                                            <span className="new-price">$93.00 USD</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="items">
                                    <div className="tred-pro">
                                        <div className="tr-pro-img">
                                            <a href="product.html">
                                                <img className="img-fluid" src="image/pro/pro-img-9.jpg" alt="pro-img1" />
                                                <img className="img-fluid additional-image" src="image/pro/pro-img-09.jpg" alt="additional image" />
                                            </a>
                                        </div>
                                        <div className="Pro-lable">
                                            <span className="p-discount">-12%</span>
                                        </div>
                                        <div className="pro-icn">
                                            <a href="wishlist.html" className="w-c-q-icn"><i className="fa fa-heart" /></a>
                                            <a href="cart.html" className="w-c-q-icn"><i className="fa fa-shopping-bag" /></a>
                                            <a href="/" className="w-c-q-icn" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fa fa-eye" /></a>
                                        </div>
                                    </div>
                                    <div className="caption">
                                        <h3><a href="product.html">Organic coconet (5ltr) juice</a></h3>
                                        <div className="rating">
                                            <i className="fa fa-star d-star" />
                                            <i className="fa fa-star d-star" />
                                            <i className="fa fa-star d-star" />
                                            <i className="fa fa-star d-star" />
                                            <i className="fa fa-star-o" />
                                        </div>
                                        <div className="pro-price">
                                            <span className="new-price">$167.00 USD</span>
                                            <span className="old-price"><del>$179.00 USD</del></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="items">
                                    <div className="tred-pro">
                                        <div className="tr-pro-img">
                                            <a href="product.html">
                                                <img className="img-fluid" src="image/pro/pro-img-10.jpg" alt="pro-img1" />
                                                <img className="img-fluid additional-image" src="image/pro/pro-img-010.jpg" alt="additional image" />
                                            </a>
                                        </div>
                                        <div className="Pro-lable">
                                            <span className="p-text">New</span>
                                        </div>
                                        <div className="pro-icn">
                                            <a href="wishlist.html" className="w-c-q-icn"><i className="fa fa-heart" /></a>
                                            <a href="cart.html" className="w-c-q-icn"><i className="fa fa-shopping-bag" /></a>
                                            <a href="/" className="w-c-q-icn" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fa fa-eye" /></a>
                                        </div>
                                    </div>
                                    <div className="caption">
                                        <h3><a href="product.html">Shrimp jumbo (5Lb)</a></h3>
                                        <div className="rating">
                                            <i className="fa fa-star c-star" />
                                            <i className="fa fa-star c-star" />
                                            <i className="fa fa-star c-star" />
                                            <i className="fa fa-star-o" />
                                            <i className="fa fa-star-o" />
                                        </div>
                                        <div className="pro-price">
                                            <span className="new-price">$230.00 USD</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="items">
                                    <div className="tred-pro">
                                        <div className="tr-pro-img">
                                            <a href="product.html">
                                                <img className="img-fluid" src="image/pro/pro-img-11.jpg" alt="pro-img1" />
                                                <img className="img-fluid additional-image" src="image/pro/pro-img-011.jpg" alt="additional image" />
                                            </a>
                                        </div>
                                        <div className="Pro-lable">
                                            <span className="p-text">New</span>
                                        </div>
                                        <div className="pro-icn">
                                            <a href="wishlist.html" className="w-c-q-icn"><i className="fa fa-heart" /></a>
                                            <a href="cart.html" className="w-c-q-icn"><i className="fa fa-shopping-bag" /></a>
                                            <a href="/" className="w-c-q-icn" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fa fa-eye" /></a>
                                        </div>
                                    </div>
                                    <div className="caption">
                                        <h3><a href="product.html">Sp.red fresh guava</a></h3>
                                        <div className="rating">
                                            <i className="fa fa-star d-star" />
                                            <i className="fa fa-star d-star" />
                                            <i className="fa fa-star d-star" />
                                            <i className="fa fa-star d-star" />
                                            <i className="fa fa-star-o" />
                                        </div>
                                        <div className="pro-price">
                                            <span className="new-price">$45.00 USD</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="items">
                                    <div className="tred-pro">
                                        <div className="tr-pro-img">
                                            <a href="product.html">
                                                <img className="img-fluid" src="image/pro/pro-img-12.jpg" alt="pro-img1" />
                                                <img className="img-fluid additional-image" src="image/pro/pro-img-012.jpg" alt="additional image" />
                                            </a>
                                        </div>
                                        <div className="Pro-lable">
                                            <span className="p-discount">-25%</span>
                                        </div>
                                        <div className="pro-icn">
                                            <a href="wishlist.html" className="w-c-q-icn"><i className="fa fa-heart" /></a>
                                            <a href="cart.html" className="w-c-q-icn"><i className="fa fa-shopping-bag" /></a>
                                            <a href="/" className="w-c-q-icn" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fa fa-eye" /></a>
                                        </div>
                                    </div>
                                    <div className="caption">
                                        <h3><a href="product.html">Fresh mussel (500g)</a></h3>
                                        <div className="rating">
                                            <i className="fa fa-star d-star" />
                                            <i className="fa fa-star d-star" />
                                            <i className="fa fa-star d-star" />
                                            <i className="fa fa-star d-star" />
                                            <i className="fa fa-star-o" />
                                        </div>
                                        <div className="pro-price">
                                            <span className="new-price">$245.00 USD</span>
                                            <span className="old-price"><del>$270.00 USD</del></span>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="quick-view">
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Product quickview</h5>
                                <a href="/" data-bs-dismiss="modal" aria-label="Close"><i className="ion-close-round" /></a>
                            </div>
                            <div className="quick-veiw-area">
                                <div className="quick-image">
                                    <div className="tab-content">
                                        <div className="tab-pane fade show active" id="image-1">
                                            <a href="/" className="long-img">
                                                <img src="image/pro-page-image/pro-page-image.jpg" className="img-fluid" alt="" />
                                            </a>
                                        </div>
                                        <div className="tab-pane fade show" id="image-2">
                                            <a href="/" className="long-img">
                                                <img src="image/pro-page-image/prro-page-image01.jpg" className="img-fluid" alt="" />
                                            </a>
                                        </div>
                                        <div className="tab-pane fade show" id="image-3">
                                            <a href="/" className="long-img">
                                                <img src="image/pro-page-image/pro-page-image1-1.jpg" className="img-fluid" alt="" />
                                            </a>
                                        </div>
                                        <div className="tab-pane fade show" id="image-4">
                                            <a href="/" className="long-img">
                                                <img src="image/pro-page-image/pro-page-image1.jpg" className="img-fluid" alt="" />
                                            </a>
                                        </div>
                                        <div className="tab-pane fade show" id="image-5">
                                            <a href="/" className="long-img">
                                                <img src="image/pro-page-image/pro-page-image2.jpg" className="img-fluid" alt="" />
                                            </a>
                                        </div>
                                        <div className="tab-pane fade show" id="image-6">
                                            <a href="/" className="long-img">
                                                <img src="image/pro-page-image/pro-page-image2-2.jpg" className="img-fluid" alt="" />
                                            </a>
                                        </div>
                                        <div className="tab-pane fade show" id="image-7">
                                            <a href="/" className="long-img">
                                                <img src="image/pro-page-image/pro-page-image3.jpg" className="img-fluid" alt="" />
                                            </a>
                                        </div>
                                        <div className="tab-pane fade show" id="image-8">
                                            <a href="/" className="long-img">
                                                <img src="image/pro-page-image/pro-page-image03.jpg" className="img-fluid" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <ul className="nav nav-tabs quick-slider owl-carousel owl-theme">
                                        <li className="nav-item items">
                                            <a className="nav-link active" data-bs-toggle="tab" href="#image-1"><img src="image/pro-page-image/image1.jpg" className="img-fluid" alt="" /></a>
                                        </li>
                                        <li className="nav-item items">
                                            <a className="nav-link" data-bs-toggle="tab" href="#image-2"><img src="image/pro-page-image/image2.jpg" className="img-fluid" alt="iamge" /></a>
                                        </li>
                                        <li className="nav-item items">
                                            <a className="nav-link" data-bs-toggle="tab" href="#image-3"><img src="image/pro-page-image/image3.jpg" className="img-fluid" alt="" /></a>
                                        </li>
                                        <li className="nav-item items">
                                            <a className="nav-link" data-bs-toggle="tab" href="#image-4"><img src="image/pro-page-image/image4.jpg" className="img-fluid" alt="" /></a>
                                        </li>
                                        <li className="nav-item items">
                                            <a className="nav-link" data-bs-toggle="tab" href="#image-5"><img src="image/pro-page-image/image5.jpg" className="img-fluid" alt="" /></a>
                                        </li>
                                        <li className="nav-item items">
                                            <a className="nav-link" data-bs-toggle="tab" href="#image-6"><img src="image/pro-page-image/image6.jpg" className="img-fluid" alt="" /></a>
                                        </li>
                                        <li className="nav-item items">
                                            <a className="nav-link" data-bs-toggle="tab" href="#image-7"><img src="image/pro-page-image/image8.jpg" className="img-fluid" alt="" /></a>
                                        </li>
                                        <li className="nav-item items">
                                            <a className="nav-link" data-bs-toggle="tab" href="#image-8"><img src="image/pro-page-image/image7.jpg" className="img-fluid" alt="" /></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="quick-caption">
                                    <h4>Fresh organic reachter</h4>
                                    <div className="quick-price">
                                        <span className="new-price">$350.00 USD</span>
                                        <span className="old-price"><del>$399.99 USD</del></span>
                                    </div>
                                    <div className="quick-rating">
                                        <i className="fa fa-star c-star" />
                                        <i className="fa fa-star c-star" />
                                        <i className="fa fa-star c-star" />
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                    </div>
                                    <div className="pro-description">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and</p>
                                    </div>
                                    <div className="pro-size">
                                        <label>Size: </label>
                                        <select>
                                            <option>1 ltr</option>
                                            <option>3 ltr</option>
                                            <option>5 ltr</option>
                                        </select>
                                    </div>
                                    <div className="plus-minus">
                                        <span>
                                            <a href="/" className="minus-btn text-black">-</a>
                                            <input type="text" name="name" defaultValue={1} />
                                            <a href="/" className="plus-btn text-black">+</a>
                                        </span>
                                        <a href="cart.html" className="quick-cart"><i className="fa fa-shopping-bag" /></a>
                                        <a href="wishlist.html" className="quick-wishlist"><i className="fa fa-heart" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <a href="/" className="scroll" id="top">
                <span><i className="fa fa-angle-double-up" /></span>
            </a>
            <div className="mm-fullscreen-bg" />
        </div>
    );
}

export default ProductView;