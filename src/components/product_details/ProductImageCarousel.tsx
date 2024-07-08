import { Carousel } from "react-responsive-carousel";
import { ProductComponentProps } from "../../interfaces/IProduct";
import React, { FC } from 'react';

const ProductImageCarousel: FC<ProductComponentProps> = ({ product }) => {
    return (
        <Carousel showArrows={true} emulateTouch={true}>
            {product.detailed_Imgs.filter(item => item.color === "").flatMap(
                item => item.imgs.split(",")).map((img, index) => (
                    <div key={index}>
                        <img src={img} alt={`img-${index}`} style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>
                ))}
        </Carousel>
    );
}

export default ProductImageCarousel;