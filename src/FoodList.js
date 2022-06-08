import FoodItem from './FoodItem';

export default function FoodList({ foods }) {
  return (<section>
    {
      foods.map((food, i) => <FoodItem {...food} key={food.name + i} />)
    }
  </section>);
}
