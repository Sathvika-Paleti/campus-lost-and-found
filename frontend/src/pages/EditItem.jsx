import { useState } from "react";
import axios from "axios";

function EditItem() {
  const [itemId, setItemId] = useState("");
  const [item, setItem] = useState({
    title: "",
    description: "",
    category: "",
    location: "",
    status: "Lost",
    image: "",
  });

  const handleChange = (e) => {
    setItem({
      ...item,
      [e.target.name]: e.target.value,
    });
  };

  const updateItem = async (e) => {
    e.preventDefault();

    if (itemId === "") {
      alert("Please enter Item ID");
      return;
    }

    try {
      await axios.put(
        `http://127.0.0.1:8000/items/${itemId}`,
        item
      );

      alert("Item Updated Successfully!");

      setItemId("");

      setItem({
        title: "",
        description: "",
        category: "",
        location: "",
        status: "Lost",
        image: "",
      });

    } catch (error) {
      console.log(error);
      alert("Update Failed");
    }
  };

  return (
    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-md-7">

          <div className="card shadow">

            <div className="card-header bg-warning">
              <h3>Edit Item</h3>
            </div>

            <div className="card-body">

              <form onSubmit={updateItem}>

                <div className="mb-3">
                  <label>Item ID</label>
                  <input
                    type="number"
                    className="form-control"
                    value={itemId}
                    onChange={(e) => setItemId(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label>Title</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    value={item.title}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label>Description</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    name="description"
                    value={item.description}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label>Category</label>
                  <input
                    type="text"
                    className="form-control"
                    name="category"
                    value={item.category}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label>Location</label>
                  <input
                    type="text"
                    className="form-control"
                    name="location"
                    value={item.location}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label>Status</label>
                  <select
                    className="form-control"
                    name="status"
                    value={item.status}
                    onChange={handleChange}
                  >
                    <option>Lost</option>
                    <option>Found</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label>Image</label>
                  <input
                    type="text"
                    className="form-control"
                    name="image"
                    value={item.image}
                    onChange={handleChange}
                  />
                </div>

                <button
                  className="btn btn-warning w-100"
                  type="submit"
                >
                  Update Item
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default EditItem;