import React, { useContext } from "react";
import Feed from "./Feed";
import DataContext from "../src/context/DataContext";

const Home = () => {
  const { posts, serarchresult } = useContext(DataContext);
  return (
    <main>
      {posts.length > 0 ? <Feed posts={serarchresult} /> : <h1>No posts</h1>}
    </main>
  );
};

export default Home;
