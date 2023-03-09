import img1 from './images/brush.jpg'
import img2 from './images/brush2.png'
import img3 from './images/brush3.jpg'
import img4 from './images/brush4.jpg'

const productsArray = [
	{
		id: 1,
		image: img1,
		title: "Brushes",
		price: 29.99,
	},
	{
		id: 2,
		image: img2,
		title: "Small Brushes",
		price: 19.99,
	},
	{
		id: 3,
		image: img3,
		title: "Mirrors",
		price: 9.99,
	},
	{
		id: 4,
		image: img4,
		title: "Make Up",
		price: 59.99,
	},
]

function getProductData(id) {
	let productData = productsArray.find(product => product.id === id);

	if (productData === undefined) {
		console.log("Product data does not exist for ID:" + id);
	}

	return productData;
}

export { productsArray, getProductData };