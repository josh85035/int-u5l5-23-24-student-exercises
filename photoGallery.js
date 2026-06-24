// 1. Declare a variable name 'imageContainer' and store the html element with the id 'imageContainer'
//  - Using querySelector, store the selector #imageContainer
imageContainer = document.querySelector("#imageContainer");


// 2. Add at least four image urls to the imageUrls array
let imageUrls = ["https://upload.wikimedia.org/wikipedia/commons/5/56/Angel_Clemente_Rojas.jpg",
    "https://th.bing.com/th/id/OIP.9VGPmrFwv5efx2jWmABMHgHaEO?w=274&h=165&c=7&o=7&dpr=1.1&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.r44_-J0xUpE7ahDket5B1QHaEO?w=275&h=165&c=7&o=7&dpr=1.1&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.WsteyB3be8D2w-KBlfTLqQHaE8?w=235&h=165&c=7&o=7&dpr=1.1&pid=1.7&rm=3",
];

// 3. Selecting the imageUrls array, create a forEach loop.

imageUrls.forEach(function(element){
    let image = document.createElement("img");
    image.src = element;
    imageContainer.appendChild(image);
});

// In side the body of the loop:
//  - Create an image element and store it in a variable named 'image'
//  - Update the src of the image element to equal the function parameter (the array element)
//  - Append the image to the image container.
