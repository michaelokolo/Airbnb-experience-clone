import './App.css';
import Hero from './Hero'
import Navbar from './Navbar'
import Card from './Card'
import Contact from './Contact';
import Joke from './Joke'
function App() {
  
  return (
    <div className='container'>
      {/*<Navbar />*/}
      {/*<Hero />*/}
      {/*<Card />*/}
     {/*<Contact
          img="./contact-img1.jpg"
          name="Mr. Whiskerson"
          phone="(212)555-1234"
          email="mr.whiskaz@atnap.meow"
      />
      <Contact 
          img="./contact-img2.jpg"
          name="Mr. Anderseson"
          phone="(212)966-1234"
          email="mr.anderseson@atnap.meow"
      />
      <Contact 
          img="./contact-img3.jpg"
          name="Mr. Jackson"
          phone="(346)966-1004"
          email="mr.Jackson@atnap.meow"
      />
      <Contact 
           img="./contact-img4.jpg"
           name="Mr. Mikealson"
           phone="(356)706-1004"
           email="mr.mikealson@atnap.meow"
      />*/} 
      

      <Joke 
        setup="I got my daughter a fridge for her birthday"
        punchline="I can't wait to see her face light up when he opens it."
      />
      <Joke 
        setup="How did th hacker escape th police?"
        punchline="He just ransonware"
      />
      <Joke 
        setup="Why don't pirates travel on mountain roads?"
        punchline="Scurvy"
      />
      <Joke 
        setup="Why do bees stay in the hive in the winter"
        punchline="Swarm."
      />
      <Joke 
        setup="WHat's the best thing about Switzerland?"
        punchline="I don't know, but the flag is a big plus!"
      />

      
    </div>
  );
}

export default App;
