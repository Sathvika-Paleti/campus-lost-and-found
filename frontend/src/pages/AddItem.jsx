import { useState } from "react";
import axios from "axios";

function AddItem() {
  const [item, setItem] = useState({
    title: "",
    description: "",
    category: "",
    location: "",
    status: "Lost",
    image: "",
    owner_id: 1,
  });

  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setItem({
      ...item,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    try {
      let imagePath = "";

      // Upload Image
      if (imageFile) {
        const formData = new FormData();
        formData.append("file", imageFile);

        const uploadRes = await axios.post(
          "http://127.0.0.1:8000/items/upload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        imagePath = uploadRes.data.url;
      }

      const payload = {
        title: item.title,
        description: item.description,
        category: item.category,
        location: item.location,
        status: item.status,
        image: imagePath,
        owner_id: 1,
      };

      await axios.post(
        "http://127.0.0.1:8000/items/create",
        payload
      );

      alert("Item Added Successfully!");

      setItem({
        title: "",
        description: "",
        category: "",
        location: "",
        status: "Lost",
        image: "",
        owner_id: 1,
      });

      setImageFile(null);

    } catch (error) {
      console.log(error);
      alert("Failed to Add Item");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-md-8">

          <div className="card shadow">

            <div className="card-header bg-success text-white">
              <h3>Add Lost / Found Item</h3>
            </div>

            <div className="card-body">

              <form onSubmit={handleSubmit}>

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
                  />
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
                    className="form-select"
                    name="status"
                    value={item.status}
                    onChange={handleChange}
                  >
                    <option value="Lost">Lost</option>
                    <option value="Found">Found</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label>Choose Image</label>

                  <input
                    type="file"
                    className="form-control"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </div>

                <button
                  className="btn btn-success w-100"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Adding..." : "Add Item"}
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AddItem;