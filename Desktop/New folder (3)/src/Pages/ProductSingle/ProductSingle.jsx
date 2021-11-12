import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../../App.scss";

function ProductSingle() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setDat] = React.useState({});

  React.useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/users/" + id)
      .then((res) => res.json())
      .then((data) => {
        setDat(data.data);
      });
  }, [id]);

  return (
    <>
      <h1>ProductSingle</h1>

      <button onClick={() => navigate(-1)}>Backward'ga</button>

      {data && (
        <div className="users">
          <h2>{data.last_name}</h2>
          <img src={data.avatar} alt="" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
            consequuntur, culpa enim, incidunt quo atque amet repudiandae
            inventore beatae laboriosam iste voluptate praesentium, delectus ut
            dolor nulla cumque quibusdam exercitationem.
          </p>
        </div>
      )}
    </>
  );
}

export default ProductSingle;
