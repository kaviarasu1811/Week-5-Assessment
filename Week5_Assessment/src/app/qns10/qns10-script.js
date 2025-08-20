function deleteAllProducts() {
  fetch('http://localhost:3000/products')
    .then(response => response.json())
    .then(products => {
      products.forEach(product => {
        fetch(`http://localhost:3000/products/${product.id}`, {
          method: 'DELETE'
        }).catch(error => console.error('Delete error:', error));
      });
    })
    .catch(error => console.error('Fetch error:', error));
}
