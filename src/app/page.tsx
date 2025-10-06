'use client';
import { useContext } from 'react';
import { LanguageContext, Language } from './comps/context';
import { useRouter } from 'next/navigation';
import Card from '@mui/material/Card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const translations = {
	ES: {
		title: 'SERRANO WHILE',
		subtitle:
			'Soluciones profesionales integrales para empresas, directivos y particulares. Consultoría, fiscalidad, procesos y estrategia',
		text1:
			'Unimos conocimiento técnico con comprensión estratégica del negocio',
		text2:
			'Te conectamos con profesionales expertos para brindarte soluciones a medida, según tus necesidades',
		button: 'Descúbrenos',
	},
	CAT: {
		title: 'SERRANO WHILE',
		subtitle:
			'Solucions professionals integrals per a empreses, directius i particulars. Consultoria, fiscalitat, processos i estratègia',
		text1: 'Unim coneixement tècnic amb comprensió estratègica del negoci',
		text2:
			'Et connectem amb professionals experts per oferir-te solucions a mida, segons les teves necessitats',
		button: 'Descobreix-nos',
	},
	ENG: {
		title: 'SERRANO WHILE',
		subtitle:
			'Comprehensive professional solutions for companies, executives, and individuals. Consulting, taxation, processes, and strategy',
		text1:
			'We combine technical knowledge with strategic business understanding',
		text2:
			'We connect you with expert professionals to provide tailored solutions based on your needs',
		button: 'Discover us',
	},
};

export default function Home() {
	const { language } = useContext(LanguageContext);
	const t = translations[language as Language];
	const router = useRouter();

	return (
		<div className='flex-1 w-full max-w-[2000px]'>
			{/* Hero Section */}
			<div className=' py-30 pb-40 px-6 shadow-bottom z-10 relative'>
				<div className='max-w-4xl mx-auto text-center'>
					<h1 className='text-5xl md:text-7xl font-bold mb-8 bg-clip-text'>
						{t.title}
					</h1>
					<h3 className='mb-12 leading-relaxed max-w-3xl mx-auto'>
						{t.subtitle}
					</h3>
					<Button
						variant='outline'
						size='lg'
						onClick={() => router.push('/equipo')}
					>
						{t.button}
					</Button>
				</div>
			</div>

			{/* Cards for small/medium screens, Split layout for large screens */}
			<div className='bg-white'>
				{/* Cards Layout for sm/md screens */}
				<div className='lg:hidden flex flex-col items-center gap-8 py-12 px-6'>
					<Card className='h-[300px] w-[250px] sm:w-[350px] md:w-[400px] md:h-[350px] flex flex-col shadow-lg'>
						<Image
							className='h-[200px] md:h-[230px] object-cover'
							src={'/graph.png'}
							width={1000}
							height={300}
							alt={'Strategic business analysis'}
						/>
						<div className='flex-1 flex items-center text-left px-5'>
							<p className='mt-2 text-gray-700'>{t.text1}</p>
						</div>
					</Card>
					<Card className='h-[300px] w-[250px] sm:w-[350px] md:w-[400px] md:h-[350px] flex flex-col shadow-lg'>
						<Image
							className='h-[200px] md:h-[230px] object-cover'
							src={'/review.png'}
							width={1000}
							height={300}
							alt={'Professional consultation'}
						/>
						<div className='flex-1 flex items-center text-left px-5'>
							<p className='mt-2 text-gray-700'>{t.text2}</p>
						</div>
					</Card>
				</div>

				{/* Split Layout for large screens */}
				<div className='hidden lg:block'>
					{/* First Section */}
					<div className='flex flex-row min-h-[500px]'>
						<div className='w-1/2 bg-blue-50/50 flex items-center justify-center p-16'>
							<div className='max-w-md'>
								<h2 className='text-3xl font-bold text-gray-900 mb-6'>
									{language === 'ENG'
										? 'Strategic Vision'
										: language === 'CAT'
										? 'Visió Estratègica'
										: 'Visión Estratégica'}
								</h2>
								<p className='text-lg text-gray-700 leading-relaxed'>
									{t.text1}
								</p>
							</div>
						</div>
						<div className='w-1/2 relative overflow-hidden'>
							<Image
								className='w-full h-full object-cover hover:scale-105 transition-transform duration-700'
								src={'/graph.png'}
								width={1000}
								height={500}
								alt={'Strategic business analysis'}
							/>
							<div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent'></div>
						</div>
					</div>

					{/* Second Section - Reversed */}
					<div className='flex flex-row-reverse min-h-[500px]'>
						<div className='w-1/2 bg-primary/5 flex items-center justify-center p-16'>
							<div className='max-w-md'>
								<h2 className='text-3xl font-bold text-gray-900 mb-6'>
									{language === 'ENG'
										? 'Expert Network'
										: language === 'CAT'
										? "Xarxa d'Experts"
										: 'Red de Expertos'}
								</h2>
								<p className='text-lg text-gray-700 leading-relaxed'>
									{t.text2}
								</p>
							</div>
						</div>
						<div className='w-1/2 relative overflow-hidden'>
							<Image
								className='w-full h-full object-cover hover:scale-105 transition-transform duration-700'
								src={'/review.png'}
								width={1000}
								height={500}
								alt={'Professional consultation'}
							/>
							<div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent'></div>
						</div>
					</div>
				</div>
			</div>

			{/* Call to Action */}
			<div className='space-y-7 py-25 px-6 text-center'>
				<div className='max-w-2xl mx-auto space-y-5'>
					<h2>
						{language === 'ENG'
							? 'Ready to Get Started?'
							: language === 'CAT'
							? 'Preparat per Començar?'
							: '¿Listo para Comenzar?'}
					</h2>
					<p>
						{language === 'ENG'
							? 'Discover our team and expertise'
							: language === 'CAT'
							? 'Descobreix el nostre equip i experiència'
							: 'Descubre nuestro equipo y experiencia'}
					</p>
				</div>
				<Button
					variant='outline'
					size='lg'
					onClick={() => router.push('/equipo')}
				>
					{t.button}
				</Button>
			</div>
		</div>
	);
}
