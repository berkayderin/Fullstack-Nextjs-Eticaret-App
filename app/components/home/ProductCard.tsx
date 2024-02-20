'use client'

import Image from 'next/image'
import { Rating } from '@mui/material'
import React from 'react'
import textClip from '@/utils/TextClip'
import { useRouter } from 'next/navigation'

const ProductCard = ({ product }: { product: any }) => {
	const router = useRouter()

	let productRating =
		product?.reviews?.reduce((acc: number, review: any) => acc + review.rating, 0) / product?.reviews?.length

	return (
		<div
			className="w-[240px] shadow-lg p-2 rounded-md cursor-pointer"
			onClick={() => router.push(`/product/${product.id}`)}
		>
			<div className="relative h-[150px] ">
				<Image src={product.image} alt={product.name} fill className="object-contain" />
			</div>
			<div className="flex flex-col items-center justify-center mt-2 space-y-2">
				<div className="text-md">{textClip(product.name)}</div>
				<Rating name="read-only" value={productRating} readOnly />
				<div className="text-orange-600 text-lg font-bold">{product.price} TL</div>
			</div>
		</div>
	)
}

export default ProductCard
