'use client';

import { useState } from 'react';
import { useLanguage } from "../context/language-context";
import { languages } from "../context/settings"; // Importing correctly
import { CiGlobe } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

// Define language options with names
const languageOptions = [
  { code: 'en', name: 'English' },
  { code: 'ar', name: 'العربية' }
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (lang: "en" | "ar") => { // Explicitly typing lang as 'en' or 'ar'
    setLanguage(lang);
    setIsOpen(false);
  };

  // Get current language display name
  const getCurrentLanguageName = () => {
    return language === 'en' ? 'English' : 'العربية';
  };

  return (
    <div className="relative w-[30px] text-sm">
      <div
        className="inline-flex items-center gap-2 border rounded-md p-2 cursor-pointer hover:bg-gray-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        <CiGlobe className="text-md" />
        <span>{getCurrentLanguageName()}</span>
        <MdOutlineKeyboardArrowDown 
          className={`text-lg transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </div>

      {isOpen && (
        <div 
          className="absolute top-full mt-1 w-full bg-white border rounded-md shadow-lg z-10"
          style={{
            minWidth: '120px', // Ensure dropdown isn't smaller than the button
          }}
        >
          {languages.map((lang) => (
            <div
              key={lang}
              className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${language === lang ? 'bg-gray-50 text-blue-600' : ''}`}
              onClick={() => handleLanguageChange(lang)} // Now `lang` is typed correctly
              style={{
                direction: lang === 'ar' ? 'rtl' : 'ltr',
              }}
            >
              {lang === 'en' ? 'English' : 'العربية'}
            </div>
          ))}
        </div>
      )}

      {/* Optional: Click outside to close */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[5]"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
