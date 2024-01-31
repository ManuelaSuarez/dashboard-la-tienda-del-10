import React, { useState, useEffect } from 'react';
import SmallCard from './SmallCard';

function ContentRowMovies() {
  const [productosCantidad, setProductosCantidad] = useState(0);
  const [usuariosCantidad, setUsuariosCantidad] = useState(0);
  const [categoriasCantidad, setCategoriasCantidad] = useState(0);

  React.useEffect(() => {
    // Hacer la solicitud a la API para obtener la cantidad de productos
    fetch('http://localhost:3000/api/products')
      .then(response => response.json())
      .then(data => setProductosCantidad(data.count))
      .catch(error => console.error('Error al obtener la cantidad de productos:', error));

      fetch('http://localhost:3000/api/products')
      .then(response => response.json())
      .then(data => setCategoriasCantidad(data.countCategorias))
      .catch(error => console.error('Error al obtener la cantidad de productos:', error));

    // Hacer la solicitud a la API para obtener la cantidad de usuarios
    fetch('http://localhost:3000/api/users')
      .then(response => response.json())
      .then(data => setUsuariosCantidad(data.count))
      .catch(error => console.error('Error al obtener la cantidad de usuarios:', error));
  }, []);


  return (
    <div className="row">
      {/* <!-- Movies in Data Base --> /}

      {/ <!-- Actors quantity --> */}
      <SmallCard title="Productos" color="primary" quantity={productosCantidad} icon="fa-tshirt" />
      <SmallCard title="Usuarios" color="warning" quantity={usuariosCantidad} icon="fa-user" />
      <SmallCard title="Categorias" color="success" quantity={categoriasCantidad} icon="fa-list-ul" />
    </div>
  );
}

export default ContentRowMovies;