import RedditItem from './RedditItem';

export default function RedditList({ reddit }) {
  return (<section>
    {
      reddit.data.children.map((post, i) => <RedditItem {...post.data} key={i} />)
    }
  </section>);
}