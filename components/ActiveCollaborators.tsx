import { useOthers } from '@liveblocks/react/suspense'
import React from 'react'
import Image from 'next/image'
const ActiveCollaborators = () => {
    const others = useOthers()
    const collabobrators = others.map((other) => other.info)
    return (
        <ul className='collaboartors-list'>
            {collabobrators.map(({ id, name, avatar, color }) => (
                <li key={id}>
                    <Image src={avatar} alt={name} width={100} height={100} className='inline-block size-8 rounded-full ring-2 ring-dark-100' style={{ border: `3px solid ${color}` }}></Image>
                </li>
            ))}
        </ul>
    )
}

export default ActiveCollaborators