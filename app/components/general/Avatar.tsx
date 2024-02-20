import Image from 'next/image'
import React from 'react'
import { RxAvatar } from 'react-icons/rx'

interface AvatarProps {
	image?: string
}

const Avatar: React.FC<AvatarProps> = ({ image }: AvatarProps) => {
	return (
		<div className="relative h-10 w-10 rounded-full overflow-hidden">
			{image ? <Image src={image} alt="avatar" width={40} height={40} /> : <RxAvatar className="w-full h-full" />}
		</div>
	)
}

export default Avatar
