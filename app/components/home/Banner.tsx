import Image from 'next/image'
import React from 'react'
import banner from '../../../public/img/banner.jpeg'

const Banner = () => {
	return (
		<div className="h-[160px] w-full relative">
			<Image src={banner} alt="Banner" fill className="object-cover" />
		</div>
	)
}

export default Banner
