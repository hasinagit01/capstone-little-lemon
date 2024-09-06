const menu = [
  {
    "id": 1,
    "dishName": "Grilled Chicken Wings",
    "dishImage": "images/menu/grilled-chicken-wings.jpg",
    "dishPrice": "9.99",
    "category": "Appetizers",
    "special": true,
    "dishDetails": "The secret Mediterranean-style marinade + grilling tips guarantee maximum flavor in each bite! Serve them with cool tzatziki sauce or your favorite dip."
  },
  {
    "id": 2,
    "dishName": "Salmon Fillet",
    "dishImage": "images/menu/salmondinner.webp",
    "dishPrice": "15.99",
    "category": "Entrees",
    "special": false,
    "dishDetails": "The salmon fillet is expertly seasoned with Mediterranean spices, such as a blend of aromatic herbs, tangy lemon zest, and a hint of garlic. This perfect combination infuses the fish with layers of depth and complexity."
  },
  {
    "id": 3,
    "dishName": "Greek Salad",
    "dishImage": "images/menu/greek-salad.jpg",
    "dishPrice": "12.99",
    "category": "Entrees",
    "special": true,
    "dishDetails": "The famous greek salad of crispy lettuce, peppers, olives, and Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
  },
  {
    "id": 4,
    "dishName": "Bruschetta",
    "dishImage": "images/menu/brushetta.webp",
    "dishPrice": "5.99",
    "category": "Appetizers",
    "special": true,
    "dishDetails": "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. It's a great appetizer to start with!"
  },
  {
    "id": 5,
    "dishName": "Lemon Dessert",
    "dishImage": "images/menu/lemon-dessert.jpg",
    "dishPrice": "5.00",
    "category": "Desserts",
    "special": true,
    "dishDetails": "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined. This is perfect for a light dessert!"
  },
  {
    "id": 6,
    "dishName": "Tomato Soup",
    "dishImage": "images/menu/soupapp.webp",
    "dishPrice": "7.99",
    "category": "Appetizers",
    "special": false,
    "dishDetails": "Our Tomato soup is a vibrant and comforting dish that captures the essence of Mediterranean flavors. This exquisite creation is crafted with a blend of sun-kissed tomatoes & aromatic herbs."
  },
  {
    "id": 7,
    "dishName": "Mediterranean Platter",
    "dishImage": "images/menu/platterapp.webp",
    "dishPrice": "13.99",
    "category": "Appetizers",
    "special": false,
    "dishDetails": "Our Mediterranean Platter combines a tantalizing blend of fresh grapes, crisp crackers, velvety hummus, succulent sausage, and juicy apples to create a harmonious culinary experience."
  },
  {
    "id": 8,
    "dishName": "Chocolate Truffles",
    "dishImage": "images/menu/truffledes.webp",
    "dishPrice": "8.99",
    "category": "Desserts",
    "special": false,
    "dishDetails": "Indulge in a decadent journey of chocolate bliss with our exquisite Chocolate Truffles dessert, a heavenly creation that adds a touch of Mediterranean flair to this classic confection."
  },
  {
    "id": 9,
    "dishName": "Pork & Veg",
    "dishImage": "images/menu/porkdinner.webp",
    "dishPrice": "13.99",
    "category": "Entrees",
    "special": false,
    "dishDetails": "This delightful dish showcases the flavors of pork infused with the vibrant Mediterranean trio of tomatoes, onions, and cilantro."
  },
  {
    "id": 10,
    "dishName": "Caramel Ice Cream",
    "dishImage": "images/menu/icecreamdes.webp",
    "dishPrice": "6.99",
    "category": "Desserts",
    "special": false,
    "dishDetails": "Crafted with utmost care and attention, our Caramel Ice Cream begins with a luscious, creamy base that is made using the finest ingredients. We start by simmering sweetened milk and cream until they reach the perfect consistency."
  },
  {
    "id": 11,
    "dishName": "Chicken Gnocchi Soup",
    "dishImage": "images/menu/Gnocchi-Chicken-Soup-cropped.jpg",
    "dishPrice": "8.99",
    "category": "Entrees",
    "special": false,
    "dishDetails": "Bite-sized, pillowy dumplings simmered gently in chicken stock are the epitome of comfort food. Throw in mushrooms, carrots, celery, onions, and a hint of thyme and rosemary for a nourishing, and delicious dinner."
  },
  {
    "id": 12,
    "dishName": "Greek Meatball Soup",
    "dishImage": "images/menu/Greek-Meatball-Soup.jpg",
    "dishPrice": "19.99",
    "category": "Entrees",
    "special": false,
    "dishDetails": "The lemony broth is hearty and comforting, and the juicy beef meatballs are packed with incredible herbaceous flavor. If you love Greek avgolemono soup then you'll love this gluten-free meatball soup recipe too."
  },
  {
    "id": 13,
    "dishName": "Beef Shawarma",
    "dishImage": "images/menu/beef-shawarma-recipe.jpg",
    "dishPrice": "16.99",
    "category": "Entrees",
    "special": false,
    "dishDetails": "Middle Eastern street food is basically heavily-marinated meat (or chicken), layered on a vertical rotisserie or spit where it is slow-roasted for days until perfectly tender and extra flavorful!"
  },
  {
    "id": 14,
    "dishName": "Joojeh Kabob",
    "dishImage": "images/menu/joojeh-kebab.jpg",
    "dishPrice": "12.99",
    "category": "Appetizers",
    "special": true,
    "dishDetails": "Joojeh Kabob, also spelled Jujeh Kabab, is the Persian version of the chicken kabob and one of Iran’s most delicious and popular dishes. A flavorful chicken marinade with saffron, turmeric, Greek yogurt, and lemon creates juicy, tender chicken loaded with flavor."
  },
  {
    "id": 15,
    "dishName": "Stuffed Grape Leaves",
    "dishImage": "images/menu/Stuffed-Grape-Leaves.jpg",
    "dishPrice": "17.99",
    "category": "Appetizers",
    "special": false,
    "dishDetails": "These flavor-packed grape leaves are stuffed with a tantalizing mixture of rice; meat; and loads of fresh herbs and warm spices, then cooked in a bright lemony broth."
  },
  {
    "id": 16,
    "dishName": "Lahmacun",
    "dishImage": "images/menu/Turkish-Lahmacun.jpg",
    "dishPrice": "6.40",
    "category": "Appetizers",
    "special": false,
    "dishDetails": "Crispy pizza topped with a flavor-packed mixture of minced meat with peppers, tomato, fresh herbs and earthy spices."
  },
  {
    "id": 17,
    "dishName": "Chicken Salad",
    "dishImage": "images/menu/chicken-salad.jpg",
    "dishPrice": "10.49",
    "category": "Appetizers",
    "special": true,
    "dishDetails": "This healthy chicken salad recipe is hearty, flavorful, and packs a nice fresh crunch. Thanks to rotisserie chicken it's so easy to make and just as easy to enjoy no matter what the day holds."
  },
  {
    "id": 18,
    "dishName": "Pork Chops",
    "dishImage": "images/menu/Pan-Seared-Pork-Chops.jpg",
    "dishPrice": "14.99",
    "category": "Appetizers",
    "special": false,
    "dishDetails": "Juicy pork chops, pan-seared in a cast-iron skillet and perfumed with bay leaf and fresh lemon."
  }
]


export default menu;
