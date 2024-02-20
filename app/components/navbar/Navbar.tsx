import CardCount from './CardCount'
import HamburgerMenu from './HamburgerMenu'
import Logo from './Logo'
import React from 'react'
import Search from './Search'
import User from './User'

const Navbar = () => {
	return (
		<div className="flex items-center justify-between gap-3 md:gap-10 px-3 md:px-10 bg-orange-400 h-16 text-white">
			<Logo />
			<Search />
			<CardCount />
			<User />
			<HamburgerMenu />
		</div>
	)
}

export default Navbar
