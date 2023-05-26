import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { api } from "../Api/api";

const Edit = () => {
  const [title, setTitle] = useState("");
  const [markUp, setMarkUp] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    // axios.get(`${api}/${id}`).then((res) => {
    axios.get(`https://notesapp-e5078-default-rtdb.firebaseio.com/notes/${id}.json`).then((res) => {
      setTitle(res.data.title);
      setAuthor(res.data.author);
      setMarkUp(res.data.markUp);
    });
  }, []);

  const data = {
    title: title,
    author: author,
    markUp: markUp,
  };
  const editNotes = () => {
    // axios.put(`${api}/${id}`, data).then(navigate("/"));
    axios.put(`https://notesapp-e5078-default-rtdb.firebaseio.com/notes/${id}.json`, data).then(navigate("/"));
  };
  return (
    <div className="add_ele">
      <div>
        Title:
        <input
          value={title}
          className="input_type"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        Author:
        <input
          value={author}
          className="input_type"
          type="text"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <br />
        <br />
        Write Notes:
        <br />
        <br />
        <ReactQuill value={markUp} onChange={setMarkUp} />
        <br />
        <button onClick={editNotes} className="edit">
          Save
        </button>
      </div>
    </div>
  );
};

export default Edit;
