export default function BossItem({ name, gameOfOrigin, attacks }) {
  return (<div>
    <p>This is {name}</p>
    <p>They are from {gameOfOrigin}</p>
    <p>This is a list of their attacks: <br/>
      {attacks}</p>
  </div>);
}
