import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Card, CardText,
    CardBody,
} from 'reactstrap';



function Product({ onAddToCartClick, price, title, id, serialNumber, Manufacturer, Category, image, Description }) {
    return (
        <>
            <div className="Product">

                <Card>
                    <h6 className="Product-title">{title}</h6>
                    <CardBody>
                        <div>{image}</div>
                        <CardText>{Description}</CardText>
                        <div className="Product-ID">Product ID: {id}</div>
                        <div className="Serial-Number">Serial Number: {serialNumber}</div>
                        <div className="Manufacturer">Manufacturer: {Manufacturer}</div>
                        <div className="Category">Category: {Category}</div>
                        <div className="Product-Price">${price}</div>
                        <button className="btn btn-primary Product-buy-button" onClick={onAddToCartClick}>Add to Cart</button>
                    </CardBody>
                </Card>


            </div>
        </>
    );
};


export default Product;

