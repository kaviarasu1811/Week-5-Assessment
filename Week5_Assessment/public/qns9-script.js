// Fetch and populate products in <ul id="products">
function getProducts() {
  return fetch('http://localhost:3000/products')
    .then(response => response.json())
    .then(products => {
      const ul = document.getElementById('products');
      ul.innerHTML = '';
      products.forEach(product => {
        const li = document.createElement('li');
        li.innerHTML = `
          <img src="${product.thumbnail}" alt="${product.title}" width="50" />
          <strong>${product.title}</strong> - ₹${product.price}
          <button onclick="addsaveforlater(${product.id})">Add to saveforlater</button>
        `;
        ul.appendChild(li);
      });
      return products;
    })
    .catch(error => console.error('Error fetching products:', error));
}

// Fetch and populate saveforlater list in <ul id="favouritesList">
function getsaveforlater() {
  return fetch('http://localhost:3000/saveforlater')
    .then(response => response.json())
    .then(favourites => {
      const ul = document.getElementById('favouritesList');
      ul.innerHTML = '';
      favourites.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.title;
        ul.appendChild(li);
      });
      return favourites;
    })
    .catch(error => console.error('Error fetching saveforlater:', error));
}

// Add product to saveforlater list and db.json via POST
function addsaveforlater(id) {
  // Find product by id
  return fetch(`http://localhost:3000/products/${id}`)
    .then(response => response.json())
    .then(product => {
      return fetch('http://localhost:3000/saveforlater', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
      });
    })
    .then(() => getsaveforlater())  // Refresh saveforlater list
    .catch(error => console.error('Error adding to saveforlater:', error));
}

// Initialize page content
window.onload = function() {
  getProducts();
  getsaveforlater();
};
