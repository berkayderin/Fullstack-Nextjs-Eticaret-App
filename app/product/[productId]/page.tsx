import DetailClient from '@/app/components/detail/DetailClient'
import React from 'react'
import { products } from '@/utils/Products'

type DetailProps = {
	params: {
		productId: string
	}
}

const Detail = ({ params }: DetailProps) => {
	const { productId } = params

	const product = products.find((product) => product.id === productId)

	console.log('ürün:', product)

	return (
		<div>
			<DetailClient product={product} />
		</div>
	)
}

export default Detail
