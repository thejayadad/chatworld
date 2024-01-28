'use client'
import HeadingText from '@/components/ui/HeadingText'
import React from 'react'
import {Input} from "@nextui-org/react";
import {Button} from "@nextui-org/react";


const ConversationPage = () => {
  return (
    <section className='px-4 py-8'>
        <HeadingText
            title='Conversation Page'
            description='Start A Conversation About Anything!'
            icon='../conversation.png'
        />
        <div className="px-4 lg:px-8">
            <div>
                <form
                    className="
                    rounded-lg 
                    border 
                    w-full 
                    p-4 
                    px-3 
                    md:px-6 
                    focus-within:shadow-sm
                    grid
                    grid-cols-12
                    gap-2
                       "
                >
                <Input 
                className="col-span-12 lg:col-span-10"
                type="text" label="Question" placeholder="Start Your Conversation...." />
                <Button className="col-span-12 lg:col-span-2 w-full h-full" type="submit">
                Generate
              </Button>

                </form>
            </div>
        </div>
    </section>
  )
}

export default ConversationPage