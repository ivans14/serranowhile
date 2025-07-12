'use client';
import Image from 'next/image';
import { useContext } from 'react';
import { Language, LanguageContext } from '../comps/context';
import { Separator } from '@/components/ui/separator';

const translations = {
	ES: {
		title: 'Servicio notarial de mutuo acuerdo',
		subtitle: (
			<h2>
				Nos ocupamos de tramitar íntegramente tu{' '}
				<span className='font-bold text-text-secondary'>
					divorcio de mutuo acuerdo ante notario
				</span>
				, un proceso sencillo, rápido y sin necesidad de pasar por el juzgado.
			</h2>
		),
		service1Title: (
			<h2 className='text-text-secondary'>¿Qué incluye el servicio?</h2>
		),
		service1List: [
			<p key={1}>Redacción del convenio regulador</p>,
			<p key={2}>Revisión legal de la documentación</p>,
			<p key={3}>Coordinación con la notaría</p>,
			<p key={4}>Preparación para la firma</p>,
			<p key={5}>Asesoramiento legal durante todo el proceso</p>,
		],
		service2Title: <h2 className='text-text-secondary'>Requisitos</h2>,
		service2List: [
			<p key={1}>Ambos cónyuges deben estar de acuerdo</p>,
			<p key={2}>Sin hijos menores ni dependientes</p>,
			<p key={3}>Al menos uno debe residir en España</p>,
		],
		priceTitle: <h2 className='text-text-secondary'>Precio cerrado</h2>,
		priceDesc: <p className='font-bold'>595€ por cónyuge - Todo incluido</p>,
	},

	CAT: {
		title: 'Servei notarial de mutu acord',
		subtitle: (
			<h2>
				Ens encarreguem de tramitar íntegrament el teu{' '}
				<span className='font-bold text-text-secondary'>
					divorci de mutu acord davant notari
				</span>
				, un procés senzill, ràpid i sense necessitat de passar pel jutjat.
			</h2>
		),
		service1Title: (
			<h2 className='text-text-secondary'>Què inclou el servei?</h2>
		),
		service1List: [
			<>Redacció del conveni regulador</>,
			<>Revisió legal de la documentació</>,
			<>Coordinació amb la notaria</>,
			<>Preparació per a la signatura</>,
			<>Assessorament legal durant tot el procés</>,
		],
		service2Title: <h2 className='text-text-secondary'>Requisits</h2>,
		service2List: [
			<>Ambdós cònjuges han d’estar d’acord</>,
			<>Sense fills menors ni dependents</>,
			<>Almenys un ha de residir a Espanya</>,
		],
		priceTitle: <h2 className='text-text-secondary'>Preu tancat</h2>,
		priceDesc: <p className='font-bold'>595€ per cònjuge - Tot inclòs</p>,
	},
};

export default function Servicios() {
	const { language } = useContext(LanguageContext);
	const t = translations[language as Language];

	return (
		<div className='flex-1 max-w-[1000px] p-5 px-10 md:px-20 md:pt-12 pb-20 flex flex-col items-center text-center gap-10 md:gap-15'>
			<div className='flex flex-col gap-5'>
				<h1>{t.title}</h1>
			</div>
			<div className='w-[100%] text-left'>{t.subtitle}</div>
			<div className='flex gap-5 w-[100%]'>
				<div className='flex w-[100%] flex-col gap-5 items-start'>
					{t.service1Title}
					<ul className='list-disc pl-5 text-left'>
						{t.service1List.map((text, i) => (
							<li key={i}>{text}</li>
						))}
					</ul>
				</div>
				<Image
					alt='pic-divorce-1'
					width={379}
					height={253}
					className='hidden md:flex h-[253px] w-[379px] object-cover flex-shrink-0'
					src='/pexels-karolina-grabowska-7876035.jpg'
				/>
			</div>
			<Separator />
			<div className='flex gap-5 w-[100%]'>
				<div className='flex w-[100%] flex-col gap-5 items-start'>
					{t.service2Title}
					<ul className='list-disc pl-5 text-left'>
						{t.service2List.map((text, i) => (
							<li key={i}>{text}</li>
						))}
					</ul>
				</div>
				<Image
					alt='pic-divorce-2'
					width={379}
					height={253}
					className='hidden md:flex h-[253px] w-[379px] object-cover flex-shrink-0'
					src='/pexels-karolina-grabowska-7876036.jpg'
				/>
			</div>
			<Separator />
			<div className='flex flex-col gap-5 items-start w-[100%]'>
				{t.priceTitle}
				<div className='flex gap-2'>{t.priceDesc}</div>
			</div>
		</div>
	);
}
