// JavaScript code to display a random recipe on page refresh
const recipes = [
    {
      name: "Pasta Carbonara",
      description: "A classic Italian pasta dish with creamy egg sauce, pancetta, and cheese.",
      image: "img/pasta-carbonara.jpeg"
    },
    {
      name: "Chicken Tikka Masala",
      description: "A flavorful Indian dish with grilled chicken cooked in a rich tomato-based sauce.",
      image: "img/chicken-tikka-masala.jpeg"
    },
    {
      name: "Greek Salad",
      description: "A refreshing salad with tomatoes, cucumbers, olives, and feta cheese, drizzled with olive oil and lemon juice.",
      image: "img/greek-salad.jpeg"
    },
    {
      name: "Sushi Rolls",
      description: "Japanese rice and seaweed rolls filled with fresh fish, vegetables, and avocado.",
      image: "img/sushi-rolls.jpeg"
    },
    {
      name: "Spaghetti Bolognese",
      description: "An Italian classic with meaty tomato sauce served over spaghetti.",
      image: "img/spaghetti-bolognese.jpeg"
    },
    {
      name: "Mango Lassi",
      description: "A creamy Indian drink made with ripe mangoes, yogurt, and a touch of cardamom.",
      image: "img/mango-lassi.jpeg"
    },
    {
      name: "Caesar Salad",
      description: "Crisp romaine lettuce, croutons, Parmesan cheese, and Caesar dressing.",
      image: "img/caesar-salad.jpeg"
    },
    {
      name: "Thai Green Curry",
      description: "A spicy and aromatic Thai dish with green curry paste, coconut milk, and vegetables.",
      image: "img/thai-green-curry.jpeg"
    },
    {
      name: "Chocolate Brownies",
      description: "Rich and fudgy chocolate brownies, perfect with a scoop of ice cream.",
      image: "img/chocolate-brownies.jpeg"
    },
    {
      name: "Ratatouille",
      description: "A French vegetable stew with eggplant, zucchini, bell peppers, and tomatoes.",
      image: "img/ratatouille.jpeg"
    },
    {
      name: "Tandoori Chicken",
      description: "Indian spiced chicken marinated in yogurt and cooked in a clay oven.",
      image: "img/tandoori-chicken.jpeg"
    },
    {
      name: "Caprese Salad",
      description: "A simple Italian salad with fresh mozzarella, tomatoes, basil, and balsamic glaze.",
      image: "img/caprese-salad.jpeg"
    },
    {
      name: "Chicken Noodle Soup",
      description: "Comforting soup with tender chicken, noodles, and vegetables in a flavorful broth.",
      image: "img/chicken-noodle-soup.jpeg"
    },
    {
      name: "Falafel",
      description: "Crispy Middle Eastern chickpea fritters served with tahini sauce and pita bread.",
      image: "img/falafel.jpeg"
    },
    {
      name: "Beef Stroganoff",
      description: "Tender beef strips cooked with mushrooms and onions in a creamy sauce, served over egg noodles.",
      image: "img/beef-stroganoff.jpeg"
    },
    {
      name: "Pancakes",
      description: "Fluffy and delicious pancakes served with maple syrup and fresh berries.",
      image: "img/pancakes.jpeg"
    },
    {
      name: "Mushroom Risotto",
      description: "Creamy Italian rice dish cooked with mushrooms, white wine, and Parmesan cheese.",
      image: "img/mushroom-risotto.jpeg"
    },
    {
      name: "Hummus",
      description: "A smooth and creamy Middle Eastern dip made from chickpeas, tahini, and lemon juice.",
      image: "img/hummus.jpeg"
    },
    {
      name: "Steak with Chimichurri Sauce",
      description: "Grilled steak topped with a zesty Argentinean chimichurri sauce.",
      image: "img/steak-with-chimichurri-sauce.jpeg"
    },
    {
      name: "Shrimp Scampi",
      description: "Delicious shrimp sautéed in garlic butter and white wine, served over linguine.",
      image: "img/shrimp-scampi.jpeg"
    }
  ];
  
  
  window.onload = function() {
    const randomIndex = Math.floor(Math.random() * recipes.length);
    const recipe = recipes[randomIndex];
    document.getElementById("recipe-name").textContent = recipe.name;
    document.getElementById("recipe-description").textContent = recipe.description;
    document.getElementById("recipe-image").src = recipe.image;
  };

// JavaScript code to display a Footer and a Header on every page

function createNavbar() {
    const navbarDiv = document.getElementById('navbar');
    const navbarHTML = `
        <nav>
            <a href="index.html">Home</a>
            <a href="blog.html">Blog</a>
            <a href="about.html">About Us</a>
            <a href="gallery.html">Gallery</a>
            <a href="contact.html">Contact</a>
        </nav>
    `;
    navbarDiv.innerHTML = navbarHTML;
}

function createFooter() {
    const footerDiv = document.getElementById('footer');
    const footerHTML = `
        <footer>
            <p>&copy; 2023 MKU. All rights reserved.</p>
        </footer>
    `;
    footerDiv.innerHTML = footerHTML;
}

function createHeader(){
    const hearderDiv = document.getElementById('header');
    

    const headerHTML = `
    <div class="header">
        <h1>Mount Kenya </h1>
        <img src="./img/icon.png" alt="" srcset="">
        <h1>University </h1>
    </div>
    `;
    hearderDiv.innerHTML = headerHTML;
}

//call the functions to create the navbar and footer
createNavbar();
createFooter();
createHeader();