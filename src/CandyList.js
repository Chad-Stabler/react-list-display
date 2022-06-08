import CandyItem from './CandyItem';


export default function CandyList({ candies }) {
  return <section>
    {
      candies.map((candy, i) => <CandyItem candy={candy} key={candy + i}/>)
    }
  </section>;
}
