import './App.css';
import Hero from './Hero'
import Navbar from './Navbar'
import Card from './Card'
import carddata from './data'

function App() {
  const cardElements = carddata.map(data => {
    return <Card
              key = {data.id}
              {...data}
            /> 
  })

  
  return (
    <div className='container'>
      <Navbar />
      <Hero />
      <section className='cards-list'>
        {cardElements}
      </section>
      
    </div>
  );
}

export default App;
