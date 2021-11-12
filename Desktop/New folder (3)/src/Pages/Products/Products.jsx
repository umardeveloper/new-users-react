import React from "react";
import { useNavigate } from "react-router-dom";
import "../../App.scss";

function Products() {
  const navigate = useNavigate();

  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/users?page")
      .then((res) => res.json())
      .then((data) => {
        setData([...data.data]);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <h1>Products</h1>

      <button onClick={() => navigate(-1)}>Backward'ga</button>

      <button onClick={() => navigate(1)}>Forward'ga</button>

      {loading && <h1>Loading ....</h1>}

      <ul className="userslist">
        {data.length > 0 &&
          data.map((row) => (
            <li key={row.id}>
              <div className="div">
                <h2>{row.first_name}</h2>
                <strong>{row.id}</strong>
                <div className="div">
                  <img src={row.avatar} alt="" />
                </div>
                <div className="div">
                  <button onClick={() => navigate("/products/" + row.id)}>
                    more
                  </button>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
}

export default Products;
