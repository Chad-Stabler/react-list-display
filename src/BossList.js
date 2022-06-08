import BossItem from './BossItem';

export default function BossList({ bosses }) {
  return (<section>
    {
      bosses.map((boss, i) => <BossItem {...boss} key={boss.name + i} />)
    }
  </section>);
}
