"use client"
import { Button } from '@/components/ui/button';
import { Camera, Plus, Video } from 'lucide-react';
import React, { useState } from 'react'

const LatestInterviewList = () => {

    const [interviewList, setInterviewList] = useState([]);
   return (
    <div className='my-5'>
        <h2 className='font-bold text-3xl'>Previously Created Interview</h2>


    {
        interviewList?.length==0 && 
        <div className='mt-5 flex flex-col gap-3 items-center bg-white p-5'>
            <Video className='h-10 w-10 text-primary'/>
            <h2>
                You dont have any Interview yet
            </h2>
            <Button><Plus/>Create New Interview</Button>

        </div>
    }

    </div>
  )
}

export default LatestInterviewList