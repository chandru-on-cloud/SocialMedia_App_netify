import { Link } from "react-router-dom";

const Post = ({ post }) => {
  if (!post) {
    return null;
  }

  return (
    <article>
      <Link to={`/post/${post.id}`}>
        <h2>{post.title}</h2>
        <p>{post.datetime}</p>
        <p>
          {post.body.length <= 25
            ? post.body
            : post.body.substring(0, 25) + "..."}
        </p>
      </Link>
    </article>
  );
};

export default Post;
