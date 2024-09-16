async function fetchProducts() {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        const products = data.products;
        const cardContainer = document.getElementById('card-container');

        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'card';

            const img = document.createElement('img');
            img.src = product.thumbnail;
            img.alt = product.title;

            const title = document.createElement('h2');
            title.textContent = product.title;

            const description = document.createElement('p');
            description.textContent = product.description;

            card.appendChild(title);
            card.appendChild(img); 
            card.appendChild(description);

            cardContainer.appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

window.onload = fetchProducts;