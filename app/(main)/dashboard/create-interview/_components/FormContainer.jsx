import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { InterviewType } from "@/services/constants";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FormContainer = ({ onHandleInputChange, GoToNext }) => {



  const [interviewType, setInterviewType] = useState([]);

  useEffect(() => {
    if (interviewType && interviewType.length > 0) {
      onHandleInputChange('type', interviewType);
    }
  }, [interviewType, onHandleInputChange]);

  const AddInterviewType = (type) => {
    const isSelected = interviewType.includes(type);
    if (!isSelected) {
      setInterviewType(prev => [...prev, type]);
    } else {
      setInterviewType(prev => prev.filter(item => item !== type));
    }
  };

  return (
    <div className="p-5 bg-white rounded-2xl">


      <div>
        <h2 className="text-sm font-medium">Job Position</h2>
        <Input
          placeholder="e.g. fullstack developer"
          className="mt-2"
          onChange={(event) =>
            onHandleInputChange("jobPosition", event.target.value)
          }
        />
      </div>

      <div className="mt-5">
        <h2 className="text-sm font-medium">Description</h2>
        <Textarea placeholder="Enter Job details" className="mt-2 h-[200px]" 
        onChange={(event)=>onHandleInputChange('jobDescription', event.target.value)}/>
      </div>

      <div className="mt-5">
        <h2 className="text-sm font-medium">Interview</h2>
        <Select onValueChange={(value)=>onHandleInputChange('interviewDuration', value)}>
          <SelectTrigger className="w-full mt-2 ">
            <SelectValue placeholder="Select Duration" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="5 Min">5 Min</SelectItem>
            <SelectItem value="15 Min">15 Min</SelectItem>
            <SelectItem value="30 Min">30 Min</SelectItem>
            <SelectItem value="45 Min">45 Min</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="mt-5">
        <h2 className="text-sm font-medium">Interview Type</h2>
        <div className="flex gap-3 flex-wrap mt-2">
          {InterviewType.map((type, index) => (
            <div
              key={index}
              className={`flex cursor-pointer items-center gap-3 p-1 px-2 bg-white border border-gray-300 rounded-2xl
            hover:bg-secondary ${interviewType.includes(type.title)&& 'bg-blue-100 text-primary'}`}
            onClick={()=>AddInterviewType(type.title)}
            >
              <type.icon className="h-4 w-4" />
              <span>{type.title}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-7 flex justify-end">
        <Button className="h-10" onClick={GoToNext}>
          Generate Question
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default FormContainer;
