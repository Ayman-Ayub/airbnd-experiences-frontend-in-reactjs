import React from 'react'
import './App.css';
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Cards from './components/Cards'
import img from './img/image 12.png'
import img1 from './img/th.jpg'
import img2 from './img/h.jpg'
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
       <Hero/>
       <Cards
       img={img}
       rating="5.0"
       reviewCount={6}
       country="USA"
       title="Life lesson with Katie zaferes"
       price={136}
       />

<Cards
       img={img1}
       rating="5.0"
       reviewCount={6}
       country="USA"
       title="Learn about buisness card"
       price={200}
       />

<Cards
       img={img2}
       rating="5.0"
       reviewCount={6}
       country="USA"
       title="Learn about photography"
       price={150}
       />
    </div>
  );
}

export default App;
