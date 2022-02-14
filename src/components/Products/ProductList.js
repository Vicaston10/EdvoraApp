import React from 'react';
import Product from './Product';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'
import './Product.css';

const productList = (props) => { 
    return (
   
   <div> 
        <div className="ProductCategory"> 
        <p>{props.productCategory}</p>
            <hr className='ProductHorizontal'/>
           <div className="ProductList"> 
           {
                 props.products.map((product) => (
                    <Product product={product}></Product>
                 )) 
           }
         
            
            </div> 
        </div>    
    </div>
    )
 };

export default productList;