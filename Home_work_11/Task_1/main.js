//- взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
fetch('https://dummyjson.com/carts')
    .then(value => value.json())
    .then(res => {
        let {carts} = res;
        let cartsBox = document.createElement('div');
        cartsBox.classList.add('carts');

        for (let cart of carts) {
            let cartItem = document.createElement('div');
            cartItem.classList.add('item');
            cartItem.innerHTML = `
                <h2>Cart ID: ${cart.id}</h2>
                <p>User ID: ${cart.userId}</p>
                <p>Total Products: ${cart.totalProducts}</p>
                <p>Total Quantity: ${cart.totalQuantity}</p>
                <p>Total Price: $${cart.total.toFixed(2)}</p>
                <p>Discounted Total: $${cart.discountedTotal.toFixed(2)}</p>
            `;

            for (let product of cart.products) {
                let productItem = document.createElement('div');
                productItem.classList.add('productItem');
                productItem.innerHTML = `
                    <h2>Product ID: ${product.id}</h2>
                    <h3>Product Title: ${product.title}</h3>
                    <p>Product Quantity: ${product.quantity}</p>
                    <p>Product Discount Percentage: ${product.discountPercentage.toFixed(2)}</p>
                    <p>Product Price: $${product.price.toFixed(2)}</p>
                    <p>Product Total: $${product.total.toFixed(2)}</p>
                    <p>Product Discounted Total: $${product.discountedTotal.toFixed(2)}</p>
                    <img src="${product.thumbnail}" alt="">
                `;
                cartItem.appendChild(productItem);
            }
            cartsBox.appendChild(cartItem);
        }
        document.body.appendChild(cartsBox);
    });