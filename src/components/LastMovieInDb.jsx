import { useState, useEffect } from "react";

function LastMovieInDb() {
  const [lastProduct, setLastProduct] = useState(null);

  useEffect(() => {
    // Realiza la llamada a la API para obtener el último producto
    fetch("http://127.0.0.1:3000/api/product/${product.id}")
      .then((res) => res.json())
      .then((data) => setLastProduct(data));
  }, []);

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">Último Producto en Base de Datos</h5>
        </div>
        <div className="card-body">
          {lastProduct ? (
            <>
              <div className="text-center">
                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: '40rem' }} src={lastProduct.image} alt={lastProduct.name} />
              </div>
              <h1>{lastProduct.name}</h1>
              <p>{lastProduct.description}</p>
              <a className="btn btn-danger" target="_blank" rel="nofollow" href={lastProduct.link}>
                Ver más
              </a>
            </>
          ) : (
            <p>Cargando...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default LastMovieInDb;