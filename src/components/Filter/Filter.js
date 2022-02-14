import React from "react";
import getProductCategory from '../../services/AppService';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import "./Filter.css";

const filter = () => {
    const options = [
        'one', 'two', 'three'
      ];
      const defaultOption = options[0];
      
    return (
        <div className="Filter"> 
            <h3 className="Label"> Filters </h3>
            <div className="button-group"> 
            <Dropdown controlClassName="button" options={getProductCategory} placeholder="Products" />
            <Dropdown controlClassName="button" options={getProductCategory} placeholder="State" />
            <Dropdown controlClassName="button" options={getProductCategory} placeholder="City" />

           {/*  <button className="button"> Products </button>
            <button className="button"> State </button>
            <button className="button"> City </button> */}
            </div>
           


        </div>
    )
};

export default filter;