import { useContext, useState } from "react";
import { ProductsStateContext } from "../../contexts/ProductsContext";
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import ProductTabDetails from './ProductTabDetails';
import RelatedProductsList from './RelatedProductsList';
import ProductDetails from "./ProductDetails";



const ProductView = () => {
    const { products } = useContext(ProductsStateContext);
    const { id } = useParams();
    const product = products.find(p => p.id.toString() === id);

    const [selectedColor, setSelectedColor] = useState("#FF0000");

    console.log(`product ${JSON.stringify(product)}`);

    const zoomHandler = (e) => {
    }
    return (
        <div>
            <section className="section-tb-padding pro-page">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 col-lg-12 col-md-12 col-xs-12 pro-image">
                            <div className="row">
                                <div className="col-lg-6 col-xl-6 col-md-6 col-12 col-xs-12 larg-image">

                                    <Carousel showArrows={true} emulateTouch={true}>
                                        {product.thumbnail_Imgs.filter(item => item.color === selectedColor).flatMap(
                                            item => item.imgs.split(",")).map((img, index) => (
                                                <div key={index}>
                                                    <img src={img} alt={`img-${index}`} style={{ maxWidth: '100%', height: 'auto' }} />
                                                </div>
                                            ))}
                                    </Carousel>

                                </div>

                                <div className="col-lg-6 col-xl-6 col-md-6 col-12 col-xs-12 pro-info">
                                    <ProductDetails product={product} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ProductTabDetails product={product} />
            <RelatedProductsList product={product} />
            <a href="/" className="scroll" id="top">
                <span><i className="fa fa-angle-double-up" /></span>
            </a>
            <div className="mm-fullscreen-bg" />
        </div>
    );
}

export default ProductView;