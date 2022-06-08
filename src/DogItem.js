export default function DogItem({ name, age, big }) {
  return <div>{name} is {age} years old, and big = {String(big)}</div>;
}
