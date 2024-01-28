
import React from 'react'
import Link from 'next/link';
import {getServerSession} from "next-auth";
import { authOptions } from '@/lib/auth';
import LogoutButton from '@/components/buttons/LogoutButton';
import LoginWithGoogle from '@/components/buttons/LoginWithGoogle';



const AuthLinks = async () => {
    const session = await getServerSession(authOptions);
    const email = session?.user.email

  return (
    <div className='flex items-center gap-2'>
   {!!session && (
            <>
              <Link
              className='links'
              href={'/dashboard/${email}'}>
                Hello, {session?.user?.name}
              </Link>
              <LogoutButton />
            </>
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