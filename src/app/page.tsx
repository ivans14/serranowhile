'use client';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Check, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import { useContext } from 'react';
import { LanguageContext, Language } from './comps/context';
import { useRouter } from 'next/navigation';

const translations = {
	ES: {
		title: 'Tu divorcio notarial por 595€ por cónyuge',
		subtitle: 'Rápido, legal y sin complicaciones',
		description:
			'En DivorciosBCN.com tramitamos tu divorcio de mutuo acuerdo de forma',
		agil: 'ágil',
		profesional: 'profesional',
		legal: 'completamente legal',
		timeframe: ', con firma ante notario en menos de',
		week: '1 semana',
		checkmarks: [
			'Atención personalizada',
			'Seguimiento continuo',
			'Atención personalizada',
			'Sin sorpresas: precio cerrado',
		],
		discoverButton: 'Descúbrenos',
		officeLocation: 'Con oficina en',
		address: 'Avenida Diagonal 449 (Barcelona)',
		contactText: 'Escríbenos por',
		whatsapp: 'WhatsApp',
		or: 'o',
		callUs: 'llámanos',
		helpText: '. Estamos aquí para ayudarte',
	},
	CAT: {
		title: 'El teu divorci notarial per 595€ per cònjuge',
		subtitle: 'Ràpid, legal i sense complicacions',
		description:
			'A DivorciosBCN.com tramitem el teu divorci de mutu acord de forma',
		agil: 'àgil',
		profesional: 'professional',
		legal: 'completament legal',
		timeframe: ', amb signatura davant notari en menys de',
		week: '1 setmana',
		checkmarks: [
			'Atenció personalitzada',
			'Seguiment continu',
			'Atenció personalitzada',
			'Sense sorpreses: preu tancat',
		],
		discoverButton: 'Descobreix-nos',
		officeLocation: 'Amb oficina a',
		address: 'Avinguda Diagonal 449 (Barcelona)',
		contactText: 'Escriu-nos per',
		whatsapp: 'WhatsApp',
		or: 'o',
		callUs: "truca'ns",
		helpText: '. Som aquí per ajudar-te',
	},
};

export default function Home() {
	const { language } = useContext(LanguageContext);
	const t = translations[language as Language];
	const router = useRouter();

	return (
		<div className='flex-1 max-w-[1000px] py-5 px-10 md:px-20 md:py-12 !pb-20 flex flex-col items-center text-center gap-12'>
			<div className='flex flex-col gap-5'>
				<h1>{t.title}</h1>
				<h2>{t.subtitle}</h2>
				<Separator />
			</div>
			<Image
				alt='pic-divorce-1'
				width={'435'}
				height={'290'}
				src={'/pexels-karolina-grabowska-7876038.jpg'}
			/>
			<div className='flex flex-col gap-12 items-center'>
				<p className='max-w-[800px]'>
					{t.description}
					<span className='font-bold text-text-secondary'> {t.agil}</span>,
					<span className='font-bold text-text-secondary'>
						{' '}
						{t.profesional}
					</span>{' '}
					{t.or}{' '}
					<span className='font-bold text-text-secondary'> {t.legal}</span>
					{t.timeframe}{' '}
					<span className='font-bold text-text-secondary'> {t.week}</span>.
				</p>
				<div className='flex flex-col gap-2 items-start'>
					{t.checkmarks.map((text, index) => (
						<div className='flex items-center gap-2' key={index}>
							<Check className='text-text-secondary' />
							<p>{text}</p>
						</div>
					))}
				</div>
			</div>
			<Button variant={'outline'} onClick={() => router.push('/equipo')}>
				{t.discoverButton}
			</Button>
			<div className='flex flex-col items-start gap-5'>
				<div className='flex text-left items-center gap-2'>
					<MapPin className='text-text-secondary' />
					<p>
						{t.officeLocation}{' '}
						<span className='font-bold text-text-secondary'> {t.address}</span>
					</p>
				</div>
				<div className='flex text-left items-center gap-2'>
					<Phone className='text-text-secondary' />
					<p>
						{t.contactText}{' '}
						<span className='underline text-text-secondary'>{t.whatsapp}</span>{' '}
						{t.or}{' '}
						<span className='underline text-text-secondary'>{t.callUs}</span>
						{t.helpText}
					</p>
				</div>
			</div>
		</div>
	);
}
