import Banner from './components/home/Banner'
import Category from './components/home/Category'
import Products from './components/home/Products'
import React from 'react'

const Home = () => {
	return (
		<div>
			<Category />
			<Banner />
			<Products />
		</div>
	)
}

export default Home
