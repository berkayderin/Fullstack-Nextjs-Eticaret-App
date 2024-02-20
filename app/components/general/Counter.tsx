import { CardProductsProps } from '../detail/DetailClient'
import React from 'react'

interface CounterProps {
	cardProduct: CardProductsProps
	increaseFunc: () => void
	decreaseFunc: () => void
}

const Counter: React.FC<CounterProps> = ({ cardProduct, increaseFunc, decreaseFunc }: CounterProps) => {
	return (
		<div
			className="flex items-center justify-center bg-gray-100 p-2 rounded-md w-32
        transition duration-300 ease-in-out hover:bg-gray-200 gap-4"
		>
			<div onClick={decreaseFunc} className="cursor-pointer">
				-
			</div>
			<div className="bg-white p-3">{cardProduct.quantity}</div>
			<div onClick={increaseFunc} className="cursor-pointer">
				+
			</div>
		</div>
	)
}

export default Counter
