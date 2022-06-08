import CandyItem from './CandyItem';


export default function CandyList({ candies }) {
  return <div>
    {
      candies.map((candy, i) => <CandyItem candy={candy} key={candy + i}/>)
    }
  </div>;
}
