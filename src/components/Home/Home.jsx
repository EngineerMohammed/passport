import React from "react";
import "./home.css";
import { posts } from "../../data.js";
import Card from "../Card";
const Home = () => {
  return (
    <div className="home">
      {posts.map((post) => (
        <Card post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Home;
