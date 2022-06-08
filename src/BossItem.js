export default function BossItem({ name, gameOfOrigin, attacks }) {
  return (<div>
    <h1>This is {name}</h1>
    <p>They are from {gameOfOrigin}</p>
    <p>This is a list of their attacks: <br/>
      {attacks}</p>
  </div>);
}
