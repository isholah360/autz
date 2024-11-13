'use client';

import { useLanguage } from "@/components/context/language-context";
import { translations } from "@/components/context/translations";
import LanguageSwitcher from "@/components/lang/languageSwitcher";



export default function Home() {
  const { language } = useLanguage();
  
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">
        {translations[language].welcome}
      </h1>
      <nav>
        <ul>
          <li>{translations[language].about}</li>
        </ul>
      </nav>
      <LanguageSwitcher/>
    </main>
  );
}
