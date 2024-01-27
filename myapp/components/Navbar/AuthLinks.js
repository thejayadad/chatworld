import React from 'react'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import {getServerSession} from "next-auth";
import Link from "next/link";
import LogoutButton from '../Buttons/LogoutButton';
import LoginWithGoogle from '../Buttons/LoginWithGoogle';



const AuthLinks = async  () => {
    const session = await getServerSession(authOptions);

  return (
    <div
    className="flex items-center gap-4 text-sm text-slate-500"
    >
       {!!session && (
            <>
              <Link href={'/post'}>Post</Link>
              <Link href={'/account'}>
                Hello, {session?.user?.name}
              </Link>
              <Link href={'/create'}>Create</Link>
              <LogoutButton />
            </>
          )}
          {!session && (
            <>
            <Link href={'/post'}>Post</Link>
            <LoginWithGoogle />
            </>
          )}
    </div>
  )
}

export default AuthLinks