import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import initialList from './list.jsx'

function App() {
  console.log(initialList);

  const [list, setList] = useState(initialList);
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
        <div className='d-flex flex-wrap justify-content-between'>

          {list.map((obj, index) => (
            <div key={index} className='max-w'>
              <img src={obj.image} alt="" />
              <h3>{obj.title}</h3>
              <p className='min-h'>{obj.description}</p>
              <div className='d-flex justify-content-between'>
                <div className="tags">
                  {obj.tags.map((tag, index) => {
                    return <span className='me-3 btn btn-primary' key={index}>{tag}</span>
                  })}
                </div>
                <span className='btn btn-warning'>{obj.category}</span>
              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  );
}

export default App;

