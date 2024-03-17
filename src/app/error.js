'use client'
import Button from 'react-bootstrap/Button'
import Link from 'next/link'

export default function Error({error}) {
  return (
    <div className='pt-5'>
      <h2>Error: {error.message}</h2>
      <Button variant='outline-primary' as={Link} href='/' className='mt-4'>
        Go back home
      </Button>
    </div>
  )
}