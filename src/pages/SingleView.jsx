import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../Api/api";
import "../App.css";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

const SingleView = () => {
  const [vision, setVision] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    // axios.get(`${api}/${id}`).then((res) => {
    axios.get(`https://notesapp-e5078-default-rtdb.firebaseio.com/notes/${id}.json`).then((res) => {
      setVision(res.data);
    });
  }, []);

  return (
    <div>
      <div className="add_ele">
        <div>
        Title :{vision.title} <br />
        Author :{vision.author}
        </div>
        <div className="label">{parse(`${vision.markUp}`)}</div>
      <Link to="/">
      <button  className="edit final">Back</button>
      </Link>
      </div>
    </div>
  );
};

export default SingleView;
