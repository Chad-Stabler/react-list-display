import DogItem from './DogItem';

export default function DogList({ dogs }) {
  return (<div>
    {
      dogs.map((dog, i) => <DogItem {...dog} key={dog.name + i}/>)
    }
  </div>);
}
