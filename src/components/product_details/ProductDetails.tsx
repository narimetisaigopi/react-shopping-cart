import { addToCart, CartDispatchContext, CartStateContext, removeFromCart, removeToCart } from "../../contexts/CartContext";
import { ProductComponentProps } from "../../interfaces/IProduct";
import { FC, useContext, useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface SizeColorDetails {
    color: string;
    size: string;
    availeble: string;
    price: number;
    mrp: number;
    discountPer: number;
}

interface ProductDetailsProps extends ProductComponentProps {
    setSelectedColor: (color: string) => void;
    selectedColor: string
}

const ProductDetails: FC<ProductDetailsProps> = ({ product, setSelectedColor, selectedColor }) => {

    const [selectedSize, setSelectedSize] = useState("");

    const dispatch = useContext(CartDispatchContext);

    const { items } = useContext(CartStateContext);

    useEffect(() => {
        if (product && product.size_color) {
            setSelectedSize(product.size_color[0].size);
        }
    }, [
        product, selectedColor, setSelectedColor
    ])

    const getSelectedSizeDetails = (): SizeColorDetails | undefined => {
        if(product && selectedColor && selectedSize && product.size_color){
            var data = product.size_color.find((e) => e.size === selectedSize && e.color === selectedColor);
            return data;
        }
        
    }

    const handleAddToCart = (e: any) => {
        e.preventDefault();
        const addedProduct = { ...product, quantity: 1 };
        addToCart(dispatch, addedProduct);
    };

    const handleRemoveToCart = (e: any) => {
        e.preventDefault();
        removeFromCart(dispatch, product.id);
    }

    const isAddedToCart = () => {
        var res = items.find((e: any) => e.id === product.id);
        res = res !== undefined
        return res;
    }

    return (
        <div>
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
                        (<span className="pro-instock">Not Available</span>)
                }
            </div>
            <div className="pro-price">
                <span className="new-price">${getSelectedSizeDetails() != null ? getSelectedSizeDetails()?.price : product.price}</span>
                <span className="old-price"><del>${getSelectedSizeDetails() != null ? getSelectedSizeDetails()?.mrp : product.price}</del></span>
                <div className="Pro-lable">
                    <span className="p-discount">{getSelectedSizeDetails()!= null ? getSelectedSizeDetails()?.discountPer : 0}%</span>
                </div>
            </div>
            <span className="pro-details">Hurry up! only <span className="pro-number">1</span> products left in stock!</span>
            <p>{product.short_description}</p>
            {product.size_color && <div className="pro-items">
                <span className="pro-size">Size:</span>
                <ul className="pro-wight">
                    {
                        product.size_color && product.size_color.map((item, index) => (
                            <li key={index} onClick={(e) => {
                                e.preventDefault();
                                setSelectedSize(item.size);
                            }}>
                                <a href="/" className={selectedSize === item.size ? 'active' : ''} style={{
                                    border: selectedSize === item.size ? '1px solid black' : 'none',
                                    padding: '5px 10px',
                                }}>{item.size}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>}
            {
                product.size_color && <div className="product-color">
                    <span className="color-label">Color:</span>
                    <span className="color">
                        {product.size_color && product.size_color.map((item, index) => (
                            <li key={index} style={{ display: 'inline-block', margin: '5px' }} onClick={(e) => {
                                e.preventDefault();
                                console.log(`${item.color}`);
                                setSelectedColor(item.color);
                            }}>
                                    <div style={{
                                         backgroundColor: item.color,
                                         width: '30px',
                                         height: '30px',
                                         borderRadius: '50%',
                                         display: 'flex',
                                         justifyContent: 'center',
                                         alignItems: 'center',
                                         margin: '3px',
                                         border: selectedColor === item.color ? '3px solid #000' : 'none',
                                         padding: '3px', // Adjust padding to create gap
                                    }}></div>
                                {/* </a> */}
                            </li>
                        ))}
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
                {
                    !isAddedToCart() ? (<a href="cart.html" className="btn btn-style1" onClick={handleAddToCart}><i className="fa fa-shopping-bag" /> Add to cart</a>) :
                        (<a href="cart.html" className="btn btn-style1" onClick={handleRemoveToCart}><i className="fa fa-shopping-bag" /> Remove from cart</a>)
                }

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
    );
}

export default ProductDetails;

