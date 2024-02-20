import Heading from '../general/Heading'
import ProductCard from './ProductCard'
import React from 'react'
import { products } from '@/utils/Products'

const Products = () => {
	return (
		<div>
			<Heading text="Tüm Ürünler" />
			<div className="flex flex-wrap gap-2 justify-center">
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</div>
	)
}

export default Products
