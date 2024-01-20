var product_amount = 10;
var header_cart_products = [
    {
        image_no: 3,
        name: `MacBook Pro M2 MNEJ3 2022 LLA 
        13.3 inch`,
        price: `999`,
    },
    {
        image_no: 5,
        name: `Inateck 12.3-13 Inch MacBook Case Sleeve `,
        price: `25`,
    },
    {
        image_no: 7,
        name: `Laptop Privacy Screen for 13 inch 
        MacBook Pro & MacBook Air`,
        price: `50`,
    },
];
var jumbo_menu_products = [
    {
        image_no: `./assets/images/dummy_products/10.jpg`,
        name: `Waterproof Smart Watch for Men`,
        price: `250`,
    },
    {
        image_no: `./assets/images/dummy_products/3.jpg`,
        name: `MacBook Pro M2 MNEJ3 2022 LLA 
        13.3 inch`,
        price: `999`,
    },
    {
        image_no: `./assets/images/dummy_products/5.jpg`,
        name: `Inateck 12.3-13 Inch MacBook Case Sleeve `,
        price: `25`,
    },
    {
        image_no: `./assets/images/dummy_products/7.jpg`,
        name: `Laptop Privacy Screen for 13 inch`,
        price: `50`,
    },
   
];

var product_categories = [
    {
        icon: `./assets/images/icons/mobile.svg`,
        name: `Mobile Phones`,
    },
    {
        icon: `./assets/images/icons/laptop.svg`,
        name: `Laptops & Computers`,
    },  
    {
        icon: `./assets/images/icons/tablet.svg`,
        name: `Tablets & E-reader`,
    },  
    {
        icon: `./assets/images/icons/wearables.svg`,
        name: `Wearables`,
    },  
    {
        icon: `./assets/images/icons/wearables.svg`,
        name: `Audio`,
    },
    {
        icon: `./assets/images/icons/wearables.svg`,
        name: `Cameras`,
    },
    {
        icon: `./assets/images/icons/wearables.svg`,
        name: `Gaming`,
    },
    {
        icon: `./assets/images/icons/wearables.svg`,
        name: `Networking`,
    },
    {
        icon: `./assets/images/icons/accessories.svg`,
        name: `Accessories`,
    },
    {
        icon: `./assets/images/icons/wearables.svg`,
        name: `Smart Phones`,
    },
];

var product_subcategories = [
    {
        icon: `./assets/images/icons/smartphones.svg`,
        name: `Smart Phones`,
    },
    {
        icon: `./assets/images/icons/accessories.svg`,
        name: `accessories`,
    },
    {
        
        name: `View all`,
    },
];

let search_keywords = [
    "Macbook Pro",
    "Airpods Pro",
    "Samsung S9",
    "Tablet",
    "Xiaomi ",
    "JBL speaker",
    "Canon",
    "Asus",
    "MagSafe",
    "AirPods Max",
];
var top_categories = [
    {
        image: `./assets/images/products/b1.png`,
        name: `Accessories`,
    },
    {
        image: `./assets/images/products/b5.png`,
        name: `Gaming`,
    },
    {
        image: `./assets/images/products/b1.png`,
        name: `Accessories`,
    },
    {
        image: `./assets/images/products/b5.png`,
        name: `Gaming`,
    },
    {
        image: `./assets/images/products/b1.png`,
        name: `Accessories`,
    },
    {
        image: `./assets/images/products/b5.png`,
        name: `Gaming`,
    },

];

function increment_cart(price_target){
    event.preventDefault();
    let input = event.currentTarget.previousElementSibling;
    input.value = parseInt(input.value) + 1;
    let price = document.getElementById('price_1');
    price.innerText = parseFloat(price.dataset.price) * input.value
}
function decrement_cart(price_target){
    event.preventDefault();
    let input = event.currentTarget.nextElementSibling;
    input.value = parseInt(input.value) - 1;
    let price = document.getElementById('price_1');
    price.innerText = parseFloat(price.dataset.price) * input.value
}