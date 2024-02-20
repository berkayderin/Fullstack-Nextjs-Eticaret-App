'use client'

import Avatar from '../general/Avatar'
import React from 'react'

const Comment = ({ review }: { review: any }) => {
	console.log('review:', review)
	return (
		<div className="flex items-center space-x-2">
			<Avatar image={review?.user?.image} />
			<div>
				<p className="font-bold">{review?.user?.name}</p>
				<p>{review?.comment}</p>
			</div>
		</div>
	)
}

export default Comment
