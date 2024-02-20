import { IconType } from 'react-icons'
import React from 'react'

interface ButtonProps {
	text: string
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
	small?: boolean
	outline?: boolean
	// icon?: IconType | undefined
	disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({ text, onClick, small, outline, disabled }: ButtonProps) => {
	return (
		<button
			disabled={disabled}
			onClick={onClick}
			className={`bg-black text-white px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-gray-800 ${
				small ? 'text-sm' : 'text-md'
			} ${outline ? 'border-2 border-black' : ''}`}
		>
			{text}
		</button>
	)
}

export default Button
