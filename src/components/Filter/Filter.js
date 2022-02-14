import React from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import "./Filter.css";

const filter = (props) => {

    const getProductCategory = ()=> {
            let products = JSON.parse(localStorage.getItem("EDVORAPRODUCTS"));
            const uniqueProduct = [...new Set( products.map(obj => obj.product_name)) ];
            return uniqueProduct
       }

       
    const getStates = ()=> {
        let products = JSON.parse(localStorage.getItem("EDVORAPRODUCTS"));
        const uniqueProduct = [...new Set( products.map(obj => obj.address.state)) ];
        return uniqueProduct
       }

       const getCities = ()=> {
        let products = JSON.parse(localStorage.getItem("EDVORAPRODUCTS"));
        const uniqueProduct = [...new Set( products.map(obj => obj.address.city)) ];
        return uniqueProduct
       }

       const filterProducts = (filterText, e)=> {
            let products = JSON.parse(localStorage.getItem("EDVORAPRODUCTS"));
            if (filterText == "PRODUCT") {
                let values= products.filter(item => item.product_name == e.label);
                localStorage.setItem("EDVORAPRODUCTS", JSON.stringify(values))
               let filter = groupProductByName(values, 'product_name')
              props.filterProducts(filter)
            }

            if (filterText == "CITY") {
                let values= products.filter(item => item.address.city == e.label);
                localStorage.setItem("EDVORAPRODUCTS", JSON.stringify(values))
               let filter = groupProductByName(values, 'product_name')
              props.filterProducts(filter)
            }

            if (filterText == "STATE") {
                let values= products.filter(item => item.address.state == e.label);
                localStorage.setItem("EDVORAPRODUCTS", JSON.stringify(values))
               let filter = groupProductByName(values, 'product_name')
              props.filterProducts(filter)
            }
       }

      const groupProductByName = (list, key) => {
          let data = []
        data.push(list.reduce((hash, obj) => ({...hash, [obj[key]]:( hash[obj[key]] || [] ).concat(obj)}), {}))
        return data
    }
    

      
    return (
        <div className="Filter"> 
            <h3 className="Label"> Filters </h3>
            <div className="button-group">
            <Dropdown controlClassName="button" options={getProductCategory()} onChange={e => filterProducts("PRODUCT", e)} placeholder="Products" />
            <Dropdown controlClassName="button" options={getStates()} onChange={e => filterProducts('STATE', e)} placeholder="State" />
            <Dropdown controlClassName="button" options={getCities()} onChange={e => filterProducts("CITY", e)} placeholder="City" />
            </div>
           


        </div>
    )
};

export default filter;