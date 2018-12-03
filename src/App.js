import React, { Component } from 'react';
import './App.css';
import ProductItem          from './ProductItem';
import AddProduct           from './AddProduct';
import Table                from './component/Table';




const products = [
  {
    article: 'le livre de l\'intranquilité',
    reference: 214235
  },
  {
    article: 'blz',
    reference: 123432
  }
]




localStorage.setItem('products',JSON.stringify(products))

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: JSON.parse(localStorage.getItem('products'))
    };
    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }
  componentWillMount() {
    const products = this.getProducts();

    this.setState({ products });
  }

  getProducts() {
    return this.state.products;
  }

  onAdd(article, reference) {
    const products = this.getProducts();

    products.push({
      article,
      reference
    });
    this.setState({ products });
  
  }

  

  onDelete(article) {
    const products = this.getProducts();

    const filteredProducts = products.filter(product => {
      return product.article !== article;
    });
   this.setState({ products: filteredProducts });
  }

  onEditSubmit(article, reference, originalName) {
    let products = this.getProducts();

    products = products.map(product => {
      if (product.article === originalName) {
        product.article = article;
        product.reference = reference;
      }

      return product;
    });

    this.setState({ products });

  }

  render() {
    return (
      <div className="App">
        <h1 class="titre">Gestionnaire de stock</h1>

        <AddProduct
          onAdd={this.onAdd} 
        
        />
        {
          
            this.state.products.map(product => {
              return(
               <ProductItem
                 key={product.article}
                 {...product}
                 onDelete={this.onDelete}
                 onEditSubmit={this.onEditSubmit}
               />
              );
            })
          }
        
          <Table />
        
      </div>
    );
  }
}



export default App;
