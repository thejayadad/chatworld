'use client'
import React from 'react'
import { useRouter } from "next/navigation";
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import Link from 'next/link';


const DashboardPage = () => {
    const router = useRouter();

  return (
    <section className="mb-8 space-y-4">
        <div>
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Notes App
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
            Description About Notes App
        </p>
        </div>
        <div className="px-4 md:px-20 lg:px-32 space-y-4">
            <div className='max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8'>
                <Card
                className="col-span-12 sm:col-span-6 h-[200px]"
                >
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                    <p className="text-tiny text-grey/60 uppercase font-bold">Conversation</p>
                    <h4 className="text-grey font-medium text-large">Need A Little Advice?</h4>
                </CardHeader>
                <Image
                    removeWrapper
                    alt="Card background"
                    className="z-0 w-full h-full object-cover mt-8"
                    src="../conversation.png"
                />

                </Card>
         
            </div>
        </div>

    </section>
  )
}

export default DashboardPage