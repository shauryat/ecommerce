import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';



const ProductInfo = ({item}) => {
    const { name, price, imageUrl } = item;
    return (
        <div>
           <h1> {name} </h1>

        </div>
    );
};

export default connect(ProductInfo);