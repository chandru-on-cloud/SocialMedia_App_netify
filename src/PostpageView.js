import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../src/context/DataContext";

const PostpageView = () => {
  const { posts, handledelete } = useContext(DataContext);
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  return (
    <>
      <article>
        {post && (
          <>
            <h2>{post.title}</h2>
            <p>{post.datetime}</p>
            <p>{post.body}</p>
            <Link to={`/edit/${post.id}`}>
              <button>Edit</button>
            </Link>

            <button onClick={() => handledelete(post.id)}>Delete</button>
          </>
        )}
        {!post && <p>Post not found</p>}
      </article>
    </>
  );
};
export default PostpageView;
