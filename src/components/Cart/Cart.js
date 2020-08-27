import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const Cart = (props) => {
   console.log( props.coursesCart);
  let totalPrice= props.coursesCart.reduce((total, course) => total+course.price, 0);
    return (
      
            <div className="card bg-light mb-3 fixed"style={{ width:'20 rem'}}>
                <div className="card-header text-center">
                    <h4>Order Summary</h4>
                    </div>
            <div className="card-body text-center">
             <h5 className="card-title text-info">Items ordered : {props.coursesCart.length}</h5>
             <h4 className="card-text text-danger">Order Total:	${totalPrice.toFixed(1)}</h4>
            </div>
          </div>
          
    );
};

export default Cart;