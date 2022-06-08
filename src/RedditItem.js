export default function RedditItem({ author, num_comments, subreddit, title }) {
  return (<div>
    <h1>{author}</h1> <p>has {num_comments} comments on their post</p> <h3>{title}</h3> <p>in r/{subreddit}</p>
  </div>);
}