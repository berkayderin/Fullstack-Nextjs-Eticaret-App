'use client'

import Avatar from '../general/Avatar'
import { Rating } from '@mui/material'
import React from 'react'

const Comment = ({ review }: { review: any }) => {
	console.log('review:', review)
	return (
		<div className="flex items-center space-x-2">
			<Avatar image={review?.user?.image} />
			<div>
				<p className="font-bold">{review?.user?.name}</p>
				<Rating name="read-only" value={review?.user?.rating} readOnly />
				<p>{review?.comment}</p>
			</div>
		</div>
	)
}

export default Comment
