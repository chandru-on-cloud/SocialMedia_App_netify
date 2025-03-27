import React from "react";
import { Link } from "react-router-dom";
function PageLayout() {
  return (
    <>
      <Link to="post/1">Post 1</Link>
      <br></br>
      <Link to="post/2">Post 2</Link>
      <br></br>
      <Link to="post/3">Post 3</Link>
    </>
  );
}

export default PageLayout;
