import React from 'react';
import { connect } from 'react-redux'

const Total = props => {
  console.log("props.car:", props.car)
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
      
    </div>
  );
};

//pull initial state
function mapStateToProps(state){
  return {
    car: state.car,
    additionalPrice: state.additionalPrice
  }
}

//hooks to redux
export default connect(
  mapStateToProps,{}
)(Total)





