'use client'

import React, { useState } from 'react'

import Button from '../general/Button'
import Comment from './Comment'
import Counter from '../general/Counter'
import Image from 'next/image'
import PageContainer from '../containers/PageContainer'
import { Rating } from '@mui/material'

export type CardProductsProps = {
	id: number
	name: string
	description: string
	price: number
	quantity: number
	image: string
	inStock: boolean
}

const DetailClient = ({ product }: { product: any }) => {
	console.log('ürünler:', product)

	const [cardProduct, setCardProduct] = useState<CardProductsProps>({
		id: product.id,
		name: product.name,
		description: product.description,
		price: product.price,
		quantity: 1, // ürün adedi
		image: product.image,
		inStock: product.inStock // stok durumu
	})

	const increaseFunc = () => {
		if (cardProduct.quantity == 10) return // max 10 adet alınabilir
		setCardProduct({ ...cardProduct, quantity: cardProduct.quantity + 1 })
	}

	const decreaseFunc = () => {
		if (cardProduct.quantity == 1) return
		setCardProduct({ ...cardProduct, quantity: cardProduct.quantity - 1 })
	}

	let productRating =
		product?.reviews?.reduce((acc: number, review: any) => acc + review.rating, 0) / product?.reviews?.length

	return (
		<div className="my-10">
			<PageContainer>
				<div className="block md:flex gap-10 justify-center">
					<div className="relative h-[200px] md:h-[400px] w-[200px] md:w-[400px] flex-1">
						<Image src={product?.image} layout="fill" alt="product" className="object-cover" />
					</div>
					<div className="w-full md:w-1/2 space-y-4">
						<h1 className="text-4xl font-bold">{product?.name}</h1>
						<Rating name="read-only" value={productRating} readOnly />
						<p>{product?.description}</p>
						<p className="text-3xl font-bold">${product?.price}</p>
						<div className="flex items-center justify-start space-x-1">
							<p className="text-md font-medium">Stok Durumu:</p>
							{product.inStock ? (
								<span className="text-green-500">Stokta var</span>
							) : (
								<span className="text-red-500">Stokta yok</span>
							)}
						</div>
						<div className="flex items-center justify-start">
							<Counter cardProduct={cardProduct} increaseFunc={increaseFunc} decreaseFunc={decreaseFunc} />
							<Button text="Sepete Ekle" onClick={() => console.log('Sepete Eklendi')} />
						</div>
					</div>
				</div>

				<div>
					{product?.reviews?.map((review: any) => (
						<Comment key={review.id} review={review} />
					))}
				</div>
			</PageContainer>
		</div>
	)
}

export default DetailClient
