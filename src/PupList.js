import PupItem from './PupItem';

export default function PupList({ puppers }) {
  return <section>
    {
      puppers.data.children.map((post, i) => <PupItem {...post.data} key={post.data.author + i} />)
    }
  </section>;
}