import { Phone, Video } from "lucide-react";
import Link from "next/link";
import React from "react";

const CreateOption = () => {
  return (
    <div className="grid grid-cols-2 gap-5">
      <Link href='/dashboard/create-interview'
      >
      <div className="bg-white border border-gray-200 rounded-lg p-5 flex flex-col gap-2">
        <Video className="p-3 text-primary bg-blue-50 rounded-lg h-12 w-12" />
        <h2 className="font-bold text-xl mt-2">Create New Interview</h2>
        <p className="font-gray-500">Create AI interview and schedule them</p>
      </div>
      </Link>
      <div className="bg-white border border-gray-200 rounded-lg p-5 flex flex-col gap-2">
        <Phone className="p-3 text-primary bg-blue-50 rounded-lg h-12 w-12" />
        <h2 className="font-bold text-xl mt-2">Create Phone Sceening Call</h2>
        <p className="font-gray-500"> Schedule Phone Screening call  with candidates</p>
      </div>
      
    </div>
  );
};

export default CreateOption;
