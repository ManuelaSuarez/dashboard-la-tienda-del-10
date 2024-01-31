import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

function ProductList(props) {
  return (
    <React.Fragment>
      <tr className="highlight-row">
        <td>{props.id}</td>
        <td>{props.name}</td>
        <td>{props.description}</td>
        <td>{props.price}</td>
        <td>
          <Link to={`http://localhost:3000/products/detail/${props.id}`} className="links">
            Ver
          </Link>
        </td>
      </tr>
    </React.Fragment>
  );
}

ProductList.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string
};

export default ProductList;
