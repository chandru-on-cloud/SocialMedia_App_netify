import { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import DataContext from "../src/context/DataContext"; // Use default import

const EditPost = () => {
  const { posts, handleEdit, editBody, seteditBody, editTitle, seteditTitle } =
    useContext(DataContext);
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  useEffect(() => {
    if (post) {
      seteditTitle(post.title);
      seteditBody(post.body);
    }
  }, [post, seteditTitle, seteditBody]);

  return (
    <>
      {editTitle && (
        <>
          <h2>Edit Post</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="editTitle">Title</label>
            <input
              id="editTitle"
              type="text"
              required
              value={editTitle}
              onChange={(e) => seteditTitle(e.target.value)}
            />
            <label htmlFor="editBody">Body</label>
            <textarea
              id="editBody"
              required
              value={editBody}
              onChange={(e) => seteditBody(e.target.value)}
            />
            <button type="button" onClick={() => handleEdit(post.id)}>
              Submit
            </button>
          </form>
        </>
      )}
      {!editTitle && (
        <>
          <h2>Post Not Found</h2>
          <p>
            <Link to="/">Visit Our Homepage</Link>
          </p>
        </>
      )}
    </>
  );
};

export default EditPost;
