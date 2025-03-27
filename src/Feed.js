import PostPage from "./Postpage";

const Feed = ({ posts }) => {
  return (
    <>
      {posts.map((post) => {
        console.log(post, "Feed inside post");
        return <PostPage key={post.id} post={post} />;
      })}
    </>
  );
};

export default Feed;