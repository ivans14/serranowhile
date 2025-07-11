'use client';
import { useContext } from 'react';
import { Language, LanguageContext } from '../comps/context';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

const translations = {
	ES: {
		title: <h1>Preguntas frecuentes</h1>,
		Questions: [
			<h2 key={1} className='text-text-secondary'>
				¿Qué documentos necesitamos?
			</h2>,
			<h2 key={1} className='text-text-secondary'>
				¿Cuánto tarda el proceso?
			</h2>,
			<h2 key={1} className='text-text-secondary'>
				¿Y si tenemos hijos?
			</h2>,
			<h2 key={1} className='text-text-secondary'>
				¿Y si uno de los cónyuges está en el extranjero?
			</h2>,
		],
		Answers: [
			[
				<li key={1}>DNI o NIE de ambos cónyuges</li>,
				<li key={2}>Certificado de matrimonio,</li>,
				<li key={3}>Certificado de empadronamiento,</li>,
				<li key={4}>Libro de familia (si lo hay),</li>,
			],
			<p key={5}>
				Una vez recibida toda la documentación, en{' '}
				<span className='text-text-secondary font-bold'>
					menos de 1 semana{' '}
				</span>
				puedes tener cita para firmar ante notario.
			</p>,
			<p key={6}>
				El divorcio notarial solo
				<span className='text-text-secondary font-bold'>
					está permitido cuando no hay hijos menores ni dependientes
				</span>
				. Si es tu caso, te indicaremos otras vías legales posibles.
			</p>,
			<p key={7}>
				Es posible gestionar el proceso si uno reside fuera de España, pero hay
				que valorar el caso específico. <br></br>Contáctanos y te orientaremos
				sin compromiso.
			</p>,
		],
	},

	CAT: {
		title: <h1>Preguntes freqüents</h1>,
		Questions: [
			<h2 key={1} className='text-text-secondary'>
				Quins documents necessitem?
			</h2>,
			<h2 key={2} className='text-text-secondary'>
				Quant tarda el procés?
			</h2>,
			<h2 key={3} className='text-text-secondary'>
				I si tenim fills?
			</h2>,
			<h2 key={4} className='text-text-secondary'>
				I si un dels cònjuges està a l{"'"}estranger?
			</h2>,
		],
		Answers: [
			[
				<li key={1}>DNI o NIE d{"'"}ambdós cònjuges</li>,
				<li key={2}>Certificat de matrimoni,</li>,
				<li key={3}>Certificat d{"'"}empadronament,</li>,
				<li key={4}>Llibre de família (si n{"'"}hi ha),</li>,
			],
			<p key={5}>
				Un cop rebuda tota la documentació, en
				<span className='text-text-secondary font-bold'>
					menys d{"'"}1 setmana{' '}
				</span>
				pots tenir cita per signar davant del notari.
			</p>,
			<p key={6}>
				El divorci notarial només
				<span className='text-text-secondary font-bold'>
					està permès quan no hi ha fills menors ni dependents
				</span>
				. Si és el teu cas, t{"'"}indicarem altres vies legals possibles.
			</p>,
			<p key={7}>
				És possible gestionar el procés si un resideix fora d{"'"}Espanya, però
				cal valorar el cas específic. <br></br>Contacta{"'"}ns i t{"'"}
				orientarem sense compromís.
			</p>,
		],
	},
};
{
	/* <ul className='list-disc pl-5 text-left'></ul> */
}

export default function FAQ() {
	const { language } = useContext(LanguageContext);
	const t = translations[language as Language];

	return (
		<div className='flex-1 w-[100%] max-w-[1000px] px-20 pt-12 pb-20 flex flex-col items-center text-center gap-15'>
			<div className='flex flex-col gap-5'>{t.title}</div>
			<div className='flex flex-col w-[100%] items-start gap-10'>
				{t.Questions.map((question, index) => (
					<Accordion className='w-[100%]' key={index} type='single' collapsible>
						<AccordionItem value='item-1'>
							<AccordionTrigger>{question}</AccordionTrigger>
							<AccordionContent className='text-left !mt-2'>
								{t.Answers[index]}
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				))}
			</div>
		</div>
	);
}
