export default function FoodItem({ name, serves, favorited }) {
  return (<div>
    <p>{name} is a dish that serves {serves} people</p>
    <p>This is {favorited.name}s favorite food, he has {favorited.hair} hair and is {favorited.age} years old</p>
  </div>);
}
