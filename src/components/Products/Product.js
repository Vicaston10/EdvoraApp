import React from 'react'
import './Product.css';
import Image from '../../assets/images/Rectangle.png';

const product = (props) => { 
    return (
<div className="Product"> 
            <div>
                <div className='ProductDetail'>
                    <img src={Image} width="70" height="70"></img>
                    <div className='ProductInfo'>
                        <text className='ProductTextBold'>{props.product.product_name}</text> <br/>
                        <text className='ProductTextGrey'>{props.product.brand_name}</text><br/>
                        <text className='ProductTextBold'>${props.product.price}</text> <br/>
                    </div>
                </div>
            </div>
            <div className='ProductSummary'>
                <span ProductTextGrey>{props.product.address.city}</span>
                <span ProductTextGrey>Date: {new Date(props.product.date).toLocaleDateString()} </span>
            </div>
            <span className='ProductTextGrey ProductionDescription'>{props.product.discription}</span>
       </div>
        )
}

export default product;