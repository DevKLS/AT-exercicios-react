import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";

export default function Ex09() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="page">
      <h1 className="title">Exercício 09</h1>
      <p className="subtitle">Lista de Posts de Usuário</p>
      <div className="list">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}