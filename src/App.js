import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import courseData from './fake';
import './App.css';
import Header from './components/Header/Header';

function App() {
  console.log(courseData);
  return (
    <div className="">
        <Header></Header>
    </div>
  );
}

export default App;
