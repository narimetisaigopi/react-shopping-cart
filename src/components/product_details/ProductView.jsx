import { useContext, useEffect, useState } from "react";
import { ProductsStateContext, ProductsDispatchContext ,getProducts } from "../../contexts/ProductsContext";
import { useParams, useHistory } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ProductTabDetails from './ProductTabDetails';
import RelatedProductsList from './RelatedProductsList';
import ProductDetails from "./ProductDetails";

const ProductView = () => {
    const dispatch = useContext(ProductsDispatchContext);
    const { products } = useContext(ProductsStateContext);
    const { id } = useParams();
    const [product, setProduct] = useState(null);


    const [selectedColor, setSelectedColor] = useState("#FF0000");

    console.log(`${JSON.stringify(product)}`);

    const history = useHistory(); // Get history object from react-router-dom

    // Handle back button click
    const goBack = () => {
        history.push('/'); // Navigate back to previous screen
    };

    useEffect(() => {
        if (products && products.length > 0) {
            const foundProduct = products.find(p => p.id.toString() === id);
            if (foundProduct) {
                setProduct(foundProduct);
            }
        } else {
            getProducts(dispatch);
        }
    },[products, id, dispatch]);

    return product ? (
        <div>
            <button className="btn btn-back" onClick={goBack}>
                <i className="fa fa-arrow-left mr-2" /> Back
            </button>
            <section className="section-tb-padding pro-page">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 col-lg-12 col-md-12 col-xs-12 pro-image">
                            <div className="row">
                                <div className="col-lg-6 col-xl-6 col-md-6 col-12 col-xs-12 larg-image">
                                    {
                                        product.detailed_Imgs ? <Carousel showArrows={true} emulateTouch={true}>
                                            {product.detailed_Imgs.filter(item => item.color === selectedColor).flatMap(
                                                item => item.imgs.split(",")).map((img, index) => (
                                                    <div key={index}>
                                                        <img src={img} alt={`img-${index}`} style={{ maxWidth: '100%', height: 'auto', backgroundColor: 'grey' }} />
                                                    </div>
                                                ))}
                                        </Carousel> : <div>No Images</div>
                                    }
                                </div>
                                <div className="col-lg-6 col-xl-6 col-md-6 col-12 col-xs-12 pro-info">
                                    <ProductDetails product={product} setSelectedColor={setSelectedColor} selectedColor={selectedColor} />
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
    ) : <div>Loading..</div>;
}

export default ProductView;