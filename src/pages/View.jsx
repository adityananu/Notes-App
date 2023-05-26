import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";
import { api } from "../Api/api";
import { AiFillPlusCircle } from "react-icons/ai";
import parse from "html-react-parser";
import Shimmer from "./Shimmer";

function View() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    try {
      const response = await axios.get(api);
      const data = response.data;
      const postList = Object.keys(data).map((key) => ({
        id: key,
        title: data[key].title,
        author: data[key].author,
        markUp: data[key].markUp,
      }))
      setData(postList);
    } catch (error) {
      console.error(error);
    }
  }


  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://notesapp-e5078-default-rtdb.firebaseio.com/notes/${id}.json`);
      setData(data.filter((post) => post.id !== id));
    } catch (error) {
      console.log(error.message);
    }
  };

  console.log(data);

  return (
    <div className="mainEhe">
      <div className="from">
        <nav> <h2>Notes-App</h2> </nav>
        <aside className="toAdjust">
          <Link to="/add">
            <AiFillPlusCircle className="hyper" />
          </Link>
        </aside>
      </div>
      <div className="second">
        {data.length === 0 ? (
          <Shimmer />
        ) : (
          data.map((note) => (
            <div className="notes_content" key={note.id}>
              <div className="inner">
                Title: {note.title}
                <br />
                Author: {note.author}
              </div>
              Content : <br />
              <div className="content">{parse(`${note.markUp}`)}</div>
              <div className="but">
                <button className="del" onClick={() => handleDelete(note.id)}>
                  Delete
                </button>
                <Link to={`/singleView/${note.id}`}>
                  <button className="fully">SingleView</button>
                </Link>
                <Link to={`/edit/${note.id}`}>
                  <button className="edit">Edit</button>
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default View;
