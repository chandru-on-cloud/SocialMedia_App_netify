import Headers from "./Haeadder";
import Nav from "./Nav";
import About from "./About";
import Home from "./Home";
import Footer from "./Footer";
import NewPost from "./NewPost";
import PostPage from "./Postpage";
import Missing from "./Missing";
import { Routes, Route } from "react-router-dom";
import React from "react";
import PostpageView from "./PostpageView";
import EditPost from "./EditPost";
import { DataProvider } from "../src/context/DataContext";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Headers title="Social Media app" />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/post">
            <Route index element={<NewPost />} />
            <Route path=":id" element={<PostpageView />} />
          </Route>
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="*" element={<Missing />} />
        </Routes>
        <Footer />
        <PostPage />
      </DataProvider>
    </div>
  );
}

export default App;
