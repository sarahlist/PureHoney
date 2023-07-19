var cartItems = [
    {
      name: 'Honey Jar',
      price: 16.00,
      quantity: 1,
      image: 'images/honey2.jpg', // Image file path
      description: 'Local Honey - 1lb jar.', // Product description
    },
    {
      name: 'Lollipops',
      price: 3.00,
      quantity: 5,
      image: 'images/honey-lollipop.jpg',
      description: 'Hard honey candy on a stick.',
    },
    {
      name: 'Tea Bombs',
      price: 5.99,
      quantity: 1,
      image: 'images/lemon-teabombs.jpg',
      description: 'Honey sphere filled with tea.',
    },
    {
      name: 'Honey Cotton Candy',
      price: 5.00,
      quantity: 1,
      image: 'images/honey-cottoncandy.jpg',
      description: 'Honey flavored cotton candy.',
    },
  ];
  
  var cartContainer = document.getElementById('cart-container');
  
  for (var i = 0; i < cartItems.length; i++) {
    var item = cartItems[i];
    var itemDiv = document.createElement('div');
    itemDiv.classList.add('cart-item');
  
    // Create an image element for the item
    var itemImage = document.createElement('img');
    itemImage.src = item.image;
    itemDiv.appendChild(itemImage);
  
    // Create a div element for the item content
    var itemContentDiv = document.createElement('div');
  
    // Create HTML content for the item
    var itemContent = '<h4>' + item.name + '</h4>' +
                      '<p>Price: $' + item.price.toFixed(2) + '</p>' +
                      '<p>Quantity: ' + item.quantity + '</p>' +
                      '<p>' + item.description + '</p>';
  
    // Set the HTML content to the item content div
    itemContentDiv.innerHTML = itemContent;
    itemDiv.appendChild(itemContentDiv);
  
    // Append the item div to the cart container
    cartContainer.appendChild(itemDiv);
  }
  
    