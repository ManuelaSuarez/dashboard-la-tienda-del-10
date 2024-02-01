import React from "react";
import { Link } from "react-router-dom";

function SearchMovies() {
  const searchMoviesStyle = {
      background: '#000'
  };
  const buttonSMStyle = {
    background: '#63bbf2'
  };

  const [products, setMovies] = React.useState([]);
  const [keyword, setKeyWord] = React.useState("");

  // Credenciales de API

  const getProducts = () => {
    fetch(`http://localhost:3000/api/search?keyword=${keyword}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data || []);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };

  React.useEffect(() => {
    getProducts();
  }, []);

  const onSearch = (e) => {
    e.preventDefault();
    getProducts();
  };

  return (
    <div className="container-fluid text-white" style={searchMoviesStyle}>
      <div className="row my-4">
        <div className="col-12 col-md-6">
          {/* Buscador */}
          <form onSubmit={onSearch}>
            <div className="form-group">
              <label htmlFor="">Buscar por título:</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setKeyWord(e.target.value)}
              />
            </div>
            <button className="btn btn-info" style={buttonSMStyle}>Buscar</button>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h2>Productos: {keyword}</h2>
        </div>
        {products.length > 0 &&
          products.map((product, i) => {
            return (
              <div className="col-sm-6 col-md-3 my-4" key={i}>
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">
                      {product.name}
                    </h5>
                  </div>
                  <div className="card-body">
                    <div className="text-center" style={{ height: "300px" }}>
                      <img
                        className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                        src={`http://localhost:3000/images/products/${product.image}`}
                        style={{
                          width: "100%",
                          objectFit: "cover",
                          height: "auto",
                          maxHeight: "500px",
                        }}
                      />
                    </div>
                    <p>Precio: ${product.price}</p>
                    <p>Para: {product.name}</p>
                    <Link
                      className="btn btn-danger"
                      rel="nofollow"
                      to={`/product/${product.id}`}
                    >
                      Detail
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      {products.length === 0 && (
        <div className="alert alert-warning text-center">
          No se encontraron productos
        </div>
      )}
    </div>
  );
}

export default SearchMovies;
