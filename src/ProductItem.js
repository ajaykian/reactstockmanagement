import React, { Component } from 'react';




class ProductItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEdit: false
        };
     this.onDelete = this.onDelete.bind(this); 
     this.onEdit = this.onEdit.bind(this);
     this.onEditSubmit = this.onEditSubmit.bind(this);  
    }

    onDelete() {
        const { onDelete, article } = this.props;
        onDelete(article);
    }

    onEdit() {
        this.setState({ isEdit: true });
    }

    onEditSubmit(event) {
       event.preventDefault();

       this.props.onEditSubmit( this.articleInput.value, this.referenceInput.value, this.props.article);

       this.setState({ isEdit: false })
    }
 render() {
     const { article, reference } = this.props;
    return (
        <div>
            {
             this.state.isEdit
                 ? (
                 <form class="grille" onSubmit={this.onEditSubmit}>
                    <input placeholder="article" ref={articleInput => this.articleInput = articleInput} defaultValue={article} />
                    <input placeholder="reference" ref={referenceInput => this.referenceInput = referenceInput} defaultValue={reference} />
                    <button class="btn"><i class="fas fa-pencil-alt"></i></button>
                </form>
             )
             : (
                <div>
                <span>{article}</span> 
                {` | `} 
                <span>{reference}</span>
                {` | `} 
                <button class="btn" onClick={this.onEdit}><i class="fas fa-pencil-alt"></i></button>
                {` | `}
                <button class="btn1" onClick={this.onDelete}><i class="fas fa-trash-alt"></i></button>
                </div>
            )
         }
      </div>
    );
  }
}
 
export default ProductItem;
