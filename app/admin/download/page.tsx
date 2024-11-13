'use client'
import React from "react";
import { useLanguage } from "@/components/context/language-context";
import { translations } from "@/components/context/translations";

export default function Page() {

  // Function to trigger file download using fetch
  const handleDownload = async () => {
    const fileUrl = "http://localhost:5000/api/customers/download-excel";
    try {
    
      const response = await fetch(fileUrl, {
        method: 'GET',
        headers: {
          
        },
      });

    
      if (!response.ok) {
        throw new Error('Failed to fetch file');
      }

     
      const blob = await response.blob();

      
      const objectURL = window.URL.createObjectURL(blob);

   
      const link = document.createElement('a');
      link.href = objectURL;
      link.download = 'daily-report.xlsx'; 
      link.style.display = 'none'; 
      document.body.appendChild(link); 

      
      link.click();


      window.URL.revokeObjectURL(objectURL);
      document.body.removeChild(link);

    } catch (error) {
      console.log('Download error:', error);
      alert('There was an error while downloading the file.');
    }
  };


  const { language } = useLanguage();

  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center items-center py-20">
        <h1 className="font-semibold text-2xl my-4 text-center">{translations[language].downloadDailyReport}</h1>
        <button 
          onClick={handleDownload} 
          className="w-44 h-12 text-center cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-red-700 hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]"
        >
          {translations[language].downloadReport}
        </button>
      </div>
    </div>
  );
}
