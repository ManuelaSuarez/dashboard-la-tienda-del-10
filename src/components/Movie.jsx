import ProductList from "./MovieList.jsx";
import productService from "../services/products";
import React from "react";

class Products extends React.Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const productsResponse = await productService.get();
    const { products } = productsResponse;

    try {
      if (products) {
        this.setState({ products });
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div style={{ padding: "10px", background: "#000" }}>
        {/*<!-- MOVIES LIST -->*/}
        <h1 className="h3 mb-2 text-white">Productos Existentes</h1>

        {/*<!-- DataTales Example -->*/}
        <div className="card shadow mb-4">
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing="0"
              >
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Detail</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.products.map((product, index) => {
                    return <ProductList {...product} key={index} />;
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
