import DogItem from './DogItem';

export default function DogList({ dogs }) {
  return (<section>
    {
      dogs.map((dog, i) => <DogItem {...dog} key={dog.name + i}/>)
    }
  </section>);
}
