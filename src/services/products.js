const productService = {
  async get() {
    try {
      const response = await fetch("http://localhost:3000/api/products");
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  },
  async getById(id) {
    try {
      const response = await fetch(`http://localhost:3000/api/products/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  },
};

export default productService;
