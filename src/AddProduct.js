import React, { Component } from 'react';




class AddProduct extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.onAdd(this.articleInput.value, this.referenceInput.value);

    this.articleInput.value = '';
    this.referenceInput.value = '';
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
          <h3 class="subtitle">Ajouter un article</h3>
          <input placeholder="article" ref={articleInput => this.articleInput = articleInput} />
          <input placeholder="références" ref={referenceInput => this.referenceInput = referenceInput} />
          <button class="btn"><i class="fas fa-plus"></i></button>

          <hr />
      </form>

    );
  }
}
 
export default AddProduct;
