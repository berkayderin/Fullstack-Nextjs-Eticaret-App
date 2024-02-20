import { FiMenu } from 'react-icons/fi'
import React from 'react'

const HamburgerMenu = () => {
	return (
		<div className="relative text-white text-2xl md:hidden cursor-pointer">
			<FiMenu size={24} />
		</div>
	)
}

export default HamburgerMenu
