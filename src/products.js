import Bottle from './assets/bottle.jpg';
import Shirt from './assets/shirt.jpg';
import Charger from './assets/charger.jpg';

export const PRODUCTS = [
    {
        id: 1,
        name: "Eco-friendly Water Bottle",
        price: 19.99,
        quantityInStock: 125,
        description: "Stay hydrated and reduce plastic waste with this stylish and durable water bottle.", "category": "Health & Wellness",
        "images": [ "Bottle" ],
        productimage: Bottle
        }, {
        id: 2,
        name: "Premium Organic Cotton T-Shirt",
        price: 24.99,
        quantityInStock: 250,
        description: "Comfortable and sustainable fashion for the conscious consumer.", "category": "Clothing",
        "images": [ "Shirt" ],
        productimage: Shirt
        }, {
        id: 3,
        name: "Portable Solar Charger",
        price: 49.99,
        quantityInStock: 75,
        description: "Never run out of power on-the-go with this compact and eco-friendly solar charger.", "category": "Gadgets",
        "images": [ "Charger" ],
        productimage: Charger
        }
]