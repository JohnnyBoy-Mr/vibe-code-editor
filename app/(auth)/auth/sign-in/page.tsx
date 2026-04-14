import SignInFormClient from '@/modules/auth/components/sign-in-form-client'
import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <>
    <Image src={"/Login.svg"} alt="Login-Image" width={300} height={300} className="m-6 object-cover"/>
    <SignInFormClient/>
    </>
  )
}

export default page