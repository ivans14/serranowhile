'use client';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import Image from 'next/image';
import { useContext } from 'react';
import { Language, LanguageContext } from '../comps/context';

const translations = {
	ES: {
		title: '¿Quiénes somos?',
		subtitle: (
			<span>
				<span className='font-bold text-text-secondary'>DivorciosBCN.com</span>{' '}
				es una firma de servicios profesionales especializada en la tramitación
				de{' '}
				<span className='font-bold text-text-secondary'>
					divorcios notariales de mutuo acuerdo
				</span>{' '}
				(también conocidos como “divorcios express”)
			</span>
		),
		description: 'Nos caracteriza un enfoque claro en:',
		checkmarks: [
			<>
				La{' '}
				<span className='font-bold text-text-secondary'>
					excelencia jurídica
				</span>
			</>,
			<>
				La <span className='font-bold text-text-secondary'>celeridad </span>en
				los trámites
			</>,
			<>
				Una{' '}
				<span className='font-bold text-text-secondary'>
					atención personalizada y cercana
				</span>{' '}
				desde el primer contacto
			</>,
		],
		button: 'Nuestros Servicios',
		officeLocation: (
			<span>
				Ubicados en{' '}
				<span className='font-bold text-text-secondary'>
					Avenida Diagonal 449 (Barcelona)
				</span>
				, una de las zonas más accesibles y emblemáticas de la ciudad
			</span>
		),
		offering: (
			<span>
				Ofrecemos{' '}
				<span className='font-bold text-text-secondary'>
					proximidad, disponibilidad y acompañamiento
				</span>{' '}
				durante todo el proceso. Nos encargamos de todo para que no tengas que
				preocuparte por nada.
			</span>
		),
	},

	CAT: {
		title: 'Qui som?',
		subtitle: (
			<span>
				<span className='font-bold text-text-secondary'>DivorciosBCN.com</span>{' '}
				és una firma de serveis professionals especialitzada en la tramitació de{' '}
				<span className='font-bold text-text-secondary'>
					divorcis notarials de mutu acord
				</span>{' '}
				(també coneguts com a “divorcis exprés”)
			</span>
		),
		description: 'Ens caracteritza un enfocament clar en:',
		checkmarks: [
			<>
				L{' '}
				<span className='font-bold text-text-secondary'>
					excel·lència jurídica
				</span>
			</>,
			<>
				La <span className='font-bold text-text-secondary'>celeritat </span>en
				els tràmits
			</>,
			<>
				Una{' '}
				<span className='font-bold text-text-secondary'>
					atenció personalitzada i propera
				</span>{' '}
				des del primer contacte
			</>,
		],
		button: 'Els nostres serveis',
		officeLocation: (
			<span>
				Ubicats a{' '}
				<span className='font-bold text-text-secondary'>
					Avinguda Diagonal 449 (Barcelona)
				</span>
				, una de les zones més accessibles i emblemàtiques de la ciutat
			</span>
		),
		offering: (
			<span>
				Oferim{' '}
				<span className='font-bold text-text-secondary'>
					proximitat, disponibilitat i acompanyament
				</span>{' '}
				durant tot el procés. Ens encarreguem de tot perquè no t’hagis de
				preocupar per res.
			</span>
		),
	},
};

export default function Equipo() {
	const { language } = useContext(LanguageContext);
	const t = translations[language as Language];

	return (
		<div className='flex-1 max-w-[1000px] px-20 pt-12 pb-20 flex flex-col items-center text-center gap-15'>
			<div className='flex flex-col gap-5'>
				<h1>{t.title}</h1>
			</div>
			<div className='w-[100%] text-left'>{t.subtitle}</div>
			<Image
				alt='pic-divorce-1'
				width={435}
				height={290}
				src='/pexels-rdne-7841478.jpg'
			/>
			<div className='flex w-[100%] flex-col gap-2 items-start'>
				<p>{t.description}</p>
				<div className='flex flex-col gap-2 items-start'>
					{t.checkmarks.map((text, index) => (
						<div className='flex items-center gap-2' key={index}>
							<Check className='text-text-secondary' />
							<p>{text}</p>
						</div>
					))}
				</div>
			</div>
			<Button variant='outline'>{t.button}</Button>
			<div className='flex items-start gap-5'>
				<p className='flex-1 text-left'>{t.officeLocation}</p>
				<p className='flex-1 text-left'>{t.offering}</p>
			</div>
		</div>
	);
}
