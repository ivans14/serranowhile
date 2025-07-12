'use client';
import { Separator } from '@/components/ui/separator';
import React, { useContext } from 'react';
import { LanguageContext, Language } from './context';

const translations = {
	ES: {
		contact: 'Contacto',
		legal: 'Aviso legal',
		privacy: 'Politica de privacidad',
	},
	CAT: {
		contact: 'Contacte',
		legal: 'Avís legal',
		privacy: 'Politica de privacitat',
	},
};

function Footer() {
	const { language } = useContext(LanguageContext);
	const t = translations[language as Language];
	return (
		<div className='relative text-xs md:text-base bottom-0 bg-foreground flex justify-center text-background w-[100%] p-10'>
			<div className='flex justify-center items-center gap-5'>
				<p>{t.contact}</p>
				<Separator orientation='vertical' />
				<p>{t.legal}</p>
				<Separator orientation='vertical' />
				<p>{t.privacy}</p>
			</div>
		</div>
	);
}

export default Footer;
