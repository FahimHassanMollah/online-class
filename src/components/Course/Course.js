import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Course.css';

const Course = (props) => {
    console.log(props);
    let {name,instructor,picture,price}=props.singleCourse;
    
    return (

        <div className="col-md-4 d-flex pb-4">
            <div className="card flex-fill box"  >
                <img src={picture} className="card-img-top" alt="" />
                <div className="card-body h-100">
                     <h6 className="card-title text-dark">{name}</h6>
                      <p className="card-text text-secondary">Instructor : {instructor}</p>
                     <h5 className="text-danger">${price}</h5>
                </div>
                <div className="card-footer border-0 bg-white">
                    <button onClick={props.addToCartHandler.bind(this,props.singleCourse)} className="btn btn-dark btn-block">Enroll now</button>
                </div>
            </div>
        </div>

    );
};

export default Course;