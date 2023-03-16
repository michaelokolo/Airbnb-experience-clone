import './App.css';
import Hero from './Hero'
import Navbar from './Navbar'
import Card from './Card'
import Joke from './Joke'
import jokesData from './jokesData';
import carddata from './data'

function App() {
  const cardElements = carddata.map(data => {
    return <Card 
            img={data.coverImg}
            rating={data.stats.rating}
            reviewCount={data.stats.reviewCount}
            location = {data.location}
            title = {data.title}
            price={data.price} 
          /> 
  })

  
  return (
    <div className='container'>
      {/*<Navbar />*/}
      {/*<Hero />*/}
      {cardElements}
      
    </div>
  );
}

export default App;
