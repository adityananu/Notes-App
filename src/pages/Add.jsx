import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../Api/api";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Add = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [markUp, setMarkUp] = useState("");

  const navigate = useNavigate();

  const data = {
    title: title,
    author: author,
    markUp: markUp,
  };
  
  const addNotes = () => {
    axios.post(api, data).then(navigate("/"));
  };

  return (
    <>
      <div className="add_ele">
        <div>
          Title:{" "}
          <input
            type="text"
            className="input_type"
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          Author:
          <input
            type="text"
            className="input_type"
            onChange={(e) => setAuthor(e.target.value)}
          />
          <br />
          <br />
          Write Notes: <br /> <br />{" "}
          <ReactQuill value={markUp} onChange={setMarkUp} /> <br />
          <button onClick={addNotes} className="edit">
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default Add;
