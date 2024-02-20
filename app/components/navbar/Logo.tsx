'use client'

import Link from 'next/link'
import React from 'react'

const Logo = () => {
	return (
		<Link href={'/'} className="text-white text-2xl font-bold bg-orange-700 p-3 rounded-md">
			Şurada
			<span className="text-base">.com</span>
		</Link>
	)
}

export default Logo
