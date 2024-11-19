import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import initialList from './list.jsx';

function App() {
  const [list, setList] = useState(initialList);
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    description: "",
    category: "",
    tags: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.image.trim() &&
      formData.title.trim() &&
      formData.description.trim() &&
      formData.category.trim()
    ) {
      setList([
        {
          image: formData.image,
          title: formData.title,
          description: formData.description,
          category: formData.category,
          tags: formData.tags.split(',').map(tag => tag.trim()),
        },
        ...list,
      ]);
      setFormData({
        image: "",
        title: "",
        description: "",
        category: "",
        tags: "",
      });
    }
  };

  const handleDelete = (indexToDelete) => {
    setList(list.filter((_, index) => index !== indexToDelete));
  };

  return (
    <>
      <div className="container">
        <h1>To Do List</h1>
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-2">
            <input
              type="text"
              className="form-control"
              name="image"
              placeholder="URL Immagine"
              value={formData.image}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              className="form-control"
              name="title"
              placeholder="Titolo"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <textarea
              className="form-control"
              name="description"
              placeholder="Descrizione"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              className="form-control"
              name="category"
              placeholder="Categoria"
              value={formData.category}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              className="form-control"
              name="tags"
              placeholder="Tag (separati da virgola)"
              value={formData.tags}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">Aggiungi</button>
        </form>

        <div className="d-flex flex-wrap justify-content-between">
          {list.map((obj, index) => (
            <div key={index} className="max-w position-relative border p-3">
              <button
                className="btn btn-danger position-absolute end-0 top-0 m-1"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
              <img src={obj.image} alt="" className="img-fluid" />
              <h3>{obj.title}</h3>
              <p className="min-h">{obj.description}</p>
              <div className="d-flex justify-content-between align-items-center mt-2">
                <div className="tags">
                  {obj.tags.map((tag, index) => (
                    <span key={index} className="me-2 badge bg-primary">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="badge bg-warning text-dark">{obj.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
