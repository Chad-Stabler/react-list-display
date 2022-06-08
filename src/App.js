import { candies } from './candies-data.js';
import CandyList from './CandyList';
import { dogs } from './dogs-data.js';
import DogList from './DogList';
import { foods } from './foods-data.js';
import FoodList from './FoodList';
import { bosses } from './bosses-data.js';
import BossList from './BossList';
import { reddit } from './reddit-data.js';
import RedditList from './RedditList';
import { puppers } from './rarepups-data.js';
import PupList from './PupList';

import './App.css';
// import your arrays here

function App() {
  return (
    <div className="App">
      <CandyList candies={candies}/>
      <DogList dogs={dogs}/>
      <FoodList foods={foods}/>
      <BossList bosses={bosses}/>
      <RedditList reddit={reddit}/>
      <PupList puppers={puppers}/>
    </div>
  );
}

export default App;
