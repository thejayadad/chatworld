
import React from 'react'
import Link from 'next/link';
import {getServerSession} from "next-auth";
import { authOptions } from '@/lib/auth';
import LogoutButton from '@/components/buttons/LogoutButton';
import LoginWithGoogle from '@/components/buttons/LoginWithGoogle';
import {Avatar} from "@nextui-org/react";



const AuthLinks = async () => {
    const session = await getServerSession(authOptions);
    const email = session?.user.email
    const image = session?.user.image
    console.log("image " + image)

  return (
    <div className='flex items-center gap-2'>
   {!!session && (
            <div className='flex gap-2 items-center'>
            <Avatar src={image} />

              {/* <Link
              className='links'
              href={'/dashboard/${email}'}>
                Hello, {session?.user?.name}
              </Link> */}
              <LogoutButton />
            </div>
          )}
          {!session && (
            <>
            <LoginWithGoogle />
            </>
          )}        
    </div>
  )
}

export default AuthLinks