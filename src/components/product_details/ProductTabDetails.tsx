import { useEffect } from "react";
import ProductSizeChart from "./ProductSizeChart"

const ProductTabDetails = (product: any) => {

    // useEffect(() => {

    // },[product]);
    return (<section className="section-b-padding pro-page-content">
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
                                    product.videos ?
                                     <div className="embed-responsive embed-responsive-16by9">
                                        <iframe height={630} src={product.videos} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                                    </div> 
                                    : (
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
    </section>)
}

export default ProductTabDetails;