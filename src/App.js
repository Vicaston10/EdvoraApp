import React, { Component } from 'react';
import Filter from './components/Filter/Filter';
import ProductList from './components/Products/ProductList';
import getProducts from './services/AppService';
import './App.css';
import axios from 'axios'

class App extends Component {

  state = {
    baseUrl: "https://assessment-edvora.herokuapp.com",
    products: []
  }

  filter = filteredProduct => {
    console.log(filteredProduct);
    this.setState({
      products: filteredProduct

    });
  };

  componentDidMount() {
    axios.get(this.state.baseUrl)
    .then(res => {
        localStorage.setItem("EDVORAPRODUCTS", JSON.stringify(res.data))
      var result = this.groupProductByName(res.data, 'product_name')
        if (result) {
          // add message to local state if not empty
          this.setState({ products: [...this.state.products, result] });
      } else {
          // clear messages when empty message received
          this.setState({ products: [] });
      }
    })
  }

  
  groupProductByName = (list, key) => {
    return list.reduce((hash, obj) => ({...hash, [obj[key]]:( hash[obj[key]] || [] ).concat(obj)}), {})
}

  render() {
  return (
    <div className="App">
      <main className="App-main">
       <Filter filterProducts={this.filter}> </Filter>
       <div className="ProductSection"> 
       <h2> Edvora </h2>
       <p> Products</p> 
  
        <div>{console.log(this.state.products)}</div>
        {this.state.products.map(products => (
        //  console.log(product)
         Object.keys(products).map((key, index) => (
          <ProductList key={index} productCategory={key} products={products[key]}></ProductList>
      ))
            ))}
       </div>
      </main>
    </div>
  );
}
}

export default App;
