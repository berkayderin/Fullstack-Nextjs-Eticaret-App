'use client'

import React from 'react'

const Category = () => {
	const categoryList = [
		{ id: 1, name: 'Kategori 1' },
		{ id: 2, name: 'Kategori 2' },
		{ id: 3, name: 'Kategori 3' },
		{ id: 4, name: 'Kategori 4' },
		{ id: 5, name: 'Kategori 5' },
		{ id: 6, name: 'Kategori 6' },
		{ id: 7, name: 'Kategori 7' }
	]
	return (
		<div className="flex items-center justify-center gap-3 md:gap-10 p-6 overflow-x-auto">
			{categoryList.map((category) => (
				<div key={category.id} className="rounded bg-gray-100 min-w-[120px] p-3 text-center">
					{category.name}
				</div>
			))}
		</div>
	)
}

export default Category
