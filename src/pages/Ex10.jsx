import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import { usuarios } from "../data/dados";

export default function Ex10() {
  const [usuarioId, setUsuarioId] = useState(1);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${usuarioId}/posts`)
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, [usuarioId]);

  return (
    <div className="page">
      <h1 className="title">Exercício 10</h1>
      <p className="subtitle">Filtro de Posts por Usuário</p>

      <select className="select" value={usuarioId} onChange={(e) => setUsuarioId(Number(e.target.value))}>
        {usuarios.map((usuario) => (
          <option key={usuario.id} value={usuario.id}>{usuario.nome}</option>
        ))}
      </select>

      <div className="list">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}