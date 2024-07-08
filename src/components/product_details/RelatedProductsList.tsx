import { ProductComponentProps } from "../../interfaces/IProduct";
import ProductviewRelatedItem from "./ProductviewRelatedItem";
import React, { FC } from 'react';

const RelatedProductsList : FC<ProductComponentProps> = ({product}) => {
return (
    <section className="section-b-padding pro-releted">
    <div className="container">
        <div className="row">
            <div className="col">
                <div className="section-title">
                    <h2>Related Products</h2>
                </div>


                <div className="container" style={{ "display": "flex", "justifyContent": "space-between", "gap": "10px" }} >
                    {
                        product.related_products.map((item, index) => (<ProductviewRelatedItem key={item} id={item.toString()} />))
                    }
                </div>
            </div>
        </div>
    </div>
</section>
);
}

export default RelatedProductsList;