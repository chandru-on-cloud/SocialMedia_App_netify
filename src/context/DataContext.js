import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { format } from "date-fns"; // Import format
import api from "../api/Posts"; // Import api

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [editTitle, seteditTitle] = useState("");
  const [editBody, seteditBody] = useState("");
  const [serarchresult, setSearchresult] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/posts");
        setPosts(response.data);
      } catch {
        console.log("error");
      }
    };
    fetchPosts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss'Z'");
    const newPost = { id, title: postTitle, datetime, body: postBody };
    try {
      const response = await api.post("/posts", newPost);
      const allposts = [...posts, response.data];
      setPosts(allposts);
      setPostTitle("");
      setPostBody("");
      navigate("/");
    } catch {
      console.log("error");
    }
  };

  console.log(posts, "post save");

  useEffect(() => {
    const filteredPosts = posts.filter((post) => {
      return (
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
      );
    });

    setSearchresult(filteredPosts);
  }, [search, posts]);

  const handledelete = async (id) => {
    try {
      await api.delete(`posts/${id}`);
    } catch {
      console.log("error");
    }
    const newposts = posts.filter((post) => post.id !== id);
    setPosts(newposts);
    navigate("/");
  };

  const handleEdit = async (id) => {
    const datetime = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss'Z'");
    const UpdatedPost = { id, title: editTitle, datetime, body: editBody };
    try {
      const response = await api.put(`/posts/${id}`, UpdatedPost);
      setPosts(
        posts.map((post) => (post.id === id ? { ...response.data } : post))
      );
      seteditTitle("");
      seteditBody("");
      navigate("/");
    } catch {
      console.log("error");
    }
  };

  return (
    <DataContext.Provider
      value={{
        search,
        setSearch,
        serarchresult,
        handleSubmit,
        postTitle,
        setPostTitle,
        postBody,
        setPostBody,
        posts,
        handleEdit,
        editBody,
        seteditBody,
        editTitle,
        seteditTitle,
        handledelete,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
