import FoodItem from './FoodItem';

export default function FoodList({ foods }) {
  return (<div>
    {
      foods.map((food, i) => <FoodItem {...food} key={food.name + i} />)
    }
  </div>);
}
