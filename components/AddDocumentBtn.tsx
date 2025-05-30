"use client"


import { Button } from './ui/button'
import Image from 'next/image'
import { createDocument } from '@/lib/actions/room.actions'
import { useRouter } from 'next/navigation'


const AddDocumentBtn = ({ userId, email }: AddDocumentBtnProps) => {
  const router = useRouter();
  const addDocumenthandler = async () => {
    try {
      const room = await createDocument({ userId, email })
      if (room) {
        router.push(`/documents/${room.id}`)
      }
    }
    catch (e) {
      console.error(e)
    }
  }
  return (
    <Button type='submit' onClick={addDocumenthandler} className='gradient-blue flex gap-1 shadow-md'>
      <Image src='/assets/icons/add.svg' alt='add' width={24} height={24}></Image>
      <p className='hidden sm:block'>Start a blank document</p>
    </Button>
  )
}

export default AddDocumentBtn