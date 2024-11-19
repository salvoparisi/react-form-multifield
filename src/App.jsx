import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import list from './list.jsx'

function App() {
  const [list, setList] = useState(["titolo 1", "titolo 2", "titolo 3", "titolo 4"]);
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      setList([...list, title]);
    }
  };

  const handleDelete = (indexToDelete) => {
    setList(list.filter((title, index) => index !== indexToDelete));
  };

  return (
    <>
      <div className="container">
        <h1>To Do List</h1>
        <form onSubmit={handleSubmit} className='d-flex'>
          <input
            className='form-control w-25 h-25'
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="submit" className='mx-3 mb-3 btn btn-primary'>invia</button>
        </form>
        <div>
          <ul className="list-group">
            {list.map((title, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {title}
                <button
                  className="btn btn-primary"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;

