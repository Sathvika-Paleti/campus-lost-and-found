import { useState } from "react";
import axios from "axios";

function Search() {
  const [keyword, setKeyword] = useState("");
  const [items, setItems] = useState([]);

  const searchItem = async () => {
    if (keyword.trim() === "") {
      alert("Please enter a search keyword");
      return;
    }

    try {
      const res = await axios.get(
        `http://127.0.0.1:8000/items/search?keyword=${keyword}`
      );

      setItems(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-4">

      <h2 className="text-center mb-4">
        Search Lost & Found Items
      </h2>

      <div className="input-group mb-4">

        <input
          type="text"
          className="form-control"
          placeholder="Enter Item Name..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />

        <button
          className="btn btn-primary"
          onClick={searchItem}
        >
          Search
        </button>

      </div>

      <div className="row">

        {items.length === 0 ? (
          <h5 className="text-center">
            No Matching Items
          </h5>
        ) : (
          items.map((item) => (
            <div
              className="col-md-4 mb-4"
              key={item.id}
            >
              <div className="card shadow">

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

              </div>

            </div>
          ))
        )}

      </div>

    </div>
  );
}

export default Search;