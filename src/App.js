import './App.css';
import Hero from './Hero'
import Navbar from './Navbar'
import Card from './Card'

function App() {
  
  return (
    <div className='container'>
      {/*<Navbar />*/}
      {/*<Hero />*/}
      <Card 
          img="./card-img1.jpg"
          rating={5.0}
          reviewCount={(6)}
          Country="USA"
          title="Life lessons with Katie Zaferes"
          price={(136)}
      />

      
    </div>
  );
}

export default App;
