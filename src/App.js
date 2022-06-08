import logo from './logo.svg';
import { candies } from './candies-data.js';
import CandyList from './CandyList';
import { dogs } from './dogs-data.js';
import DogList from './DogList';
import { foods } from './foods-data.js'
import FoodList from './FoodList';
import './App.css';
// import your arrays here

function App() {
  return (
    <div className="App">
      <CandyList candies={candies}/>
      <DogList dogs={dogs}/>
      <FoodList foods={foods}/>
    </div>
  );
}

export default App;
