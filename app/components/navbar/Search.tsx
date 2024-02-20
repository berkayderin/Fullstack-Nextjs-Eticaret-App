import React from 'react'

const Search = () => {
	return (
		<div className="hidden md:flex flex-grow items-center gap-1">
			<input
				type="text"
				className="outline-none text-black w-full px-3 py-1 border border-gray-300 rounded-md"
				placeholder="Search"
			/>
			<button className="px-3 py-1 bg-orange-400 text-white rounded-md">Search</button>
		</div>
	)
}

export default Search
