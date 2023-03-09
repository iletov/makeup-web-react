import { createContext, useState } from 'react'
import { productsArray, getProductData } from './productsStore'


export const CartContext = createContext({
	items: [],
	getProductQuantity: () => {},
	addToCart: () => {},
	removeFromCart: () => {},
	deleteFromCart: () => {},
	getTotalCost: () => {},
})


export function CartProvider({children}) {
	const [cartProducts, setCartProducts] = useState([])

	// working with id and quantity

	function getProductQuantity(id) {
		const quantity = cartProducts.find(product => product.id === id)?.quantity

		if (quantity === undefined) {
			return 0;
		}
		return quantity;
	}

	//----- Add to cart

	function addToCart(id) {
		const quantity = getProductQuantity(id);

		
		if (quantity === 0) { //product is NOT in cart
			setCartProducts ( 
			[ ...cartProducts, { id: id, quantity: 1 }]
			)
		} else { // product is IN cart
			setCartProducts(
				cartProducts.map(
					product => product.id === id ? { ...product, quantity: product.quantity + 1}
					: product
				)
			)
		}
	}

	//-----Delete from cart

	function deleteFromCart(id) {
		setCartProducts(
			cartProducts => cartProducts.filter(currentProduct => {
				return currentProduct.id != id;
			})
		)
	}


	//---- Remove from cart

	function removeFromCart(id) {
		const quantity = getProductQuantity(id);

		if (quantity == 1) {
			deleteFromCart(id);
		} else {
			setCartProducts(
				cartProducts.map(
					product => product.id === id ? { ...product, quantity: product.quantity - 1}
					: product
				)
			)
		}	
	}

	//----Total cost

	function getTotalCost() {
		let totalCost = 0;

		cartProducts.map((cartItem) => {

			const productData = getProductData(cartItem.id);
			totalCost += (productData.price * cartItem.quantity);
		})

		return totalCost;
	}

	//-----
	const contextValue = {
		items: cartProducts,
		getProductQuantity,
		addToCart,
		removeFromCart,
		deleteFromCart,
		getTotalCost,
	}

	return (
		<CartContext.Provider value={contextValue}>
			{children}
		</CartContext.Provider>
	)
}

export default CartProvider
//Context (cart, addToCart...)
//Provider gives React app access to all the things in the context