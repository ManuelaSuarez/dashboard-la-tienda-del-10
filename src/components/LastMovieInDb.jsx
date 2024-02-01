import { useState, useEffect } from "react";

function LastMovieInDb() {
  const [lastProduct, setLastProduct] = useState(null);

  useEffect(() => {
    // Realiza la llamada a la API para obtener el último producto
    fetch(`http://127.0.0.1:3000/api/products`)
      .then((res) => res.json())
      .then((data) => setLastProduct(data.products[data.products.length - 1]));
  }, []);

  return (
    <div className="col-lg-6 mb-4" style={{ background: "#000", color: "#fff" }}>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">Último Producto en Base de Datos</h5>
        </div>
        <div className="card-body">
          {lastProduct ? (
            <>
              <div className="text-center">
                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: '40rem' }} src={`http://localhost:3000/images/products/${lastProduct.image}`} alt={lastProduct.name} />
              </div>
              <h1>{lastProduct.name}</h1>
              <p>{lastProduct.description}</p>
              <p>${lastProduct.price}</p>
              <a className="btn btn-danger" href={`http://localhost:3000/products/detail/${lastProduct.id}`}>
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

{/* <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ "width": "40rem" }} src={`http://localhost:3030${detailLastProduct.mainImage}`} alt=" Star Wars - Mandalorian " /> */}
// mainImage: `/images/products/${mainImage}`,