import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import courseData from './fake';
import './App.css';
import Header from './components/Header/Header';
import Course from './components/Course/Course';
import Cart from './components/Cart/Cart';

function App() {
  let [courses, setCourses] = useState(courseData);
  let [coursesCart, setCoursesCart] = useState([]);
  const addToCartHandler = (singleCourseInformation) => {
    let allSelectedCourses=[...coursesCart,singleCourseInformation];
    setCoursesCart(allSelectedCourses);
    console.log(allSelectedCourses);
}
  return (
    <div className="">
      <Header></Header>
      <div className="container">
        <div className="row">
          <div className="col-md-9 pt-3">
            <div className="row">
            {
                courses.map((singleCourse)=><Course singleCourse={singleCourse} addToCartHandler={addToCartHandler} ></Course>)
              }
            </div>
            </div>
            <div className="col-md-3 fixed-tops">
                <Cart coursesCart={coursesCart}></Cart>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
