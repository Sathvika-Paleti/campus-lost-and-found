import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/items/");
      setItems(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteItem = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(`http://127.0.0.1:8000/items/${id}`);

      alert("Item Deleted Successfully");

      fetchItems();
    } catch (error) {
      console.log(error);
      alert("Delete Failed");
    }
  };

  const editItem = (id) => {
    navigate("/edit", {
      state: {
        id: id,
      },
    });
  };

  return (
    <div className="container mt-4">

      <h1 className="text-center mb-4">
        Campus Lost & Found
      </h1>

      <div className="row">

        {items.length === 0 ? (
          <h3 className="text-center">No Items Found</h3>
        ) : (
          items.map((item) => (
            <div
              className="col-md-4 mb-4"
              key={item.id}
            >
              <div className="card shadow h-100">

                {item.image && (
                  <img
                    src={`http://127.0.0.1:8000${item.image}`}
                    className="card-img-top"
                    alt={item.title}
                    style={{
                      height: "220px",
                      objectFit: "cover",
                    }}
                  />
                )}

                <div className="card-body">

                  <h4>{item.title}</h4>

                  <p>{item.description}</p>

                  <p>
                    <b>Category:</b> {item.category}
                  </p>

                  <p>
                    <b>Location:</b> {item.location}
                  </p>

                  <p>
                    <b>Status:</b> {item.status}
                  </p>

                </div>

                <div className="card-footer bg-white">

                  <button
                    className="btn btn-warning me-2"
                    onClick={() => editItem(item.id)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-danger"
                    onClick={() => deleteItem(item.id)}
                  >
                    Delete
                  </button>

                </div>

              </div>
            </div>
          ))
        )}

      </div>

    </div>
  );
}

export default Home;