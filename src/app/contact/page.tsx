'use client';
import { useContext } from 'react';
import { Language, LanguageContext } from '../comps/context';
import { Mail, MapPin, Phone } from 'lucide-react';
import { WhatsApp } from '@mui/icons-material';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Separator } from '@radix-ui/react-separator';
import { Checkbox } from '@/components/ui/checkbox';

const translations = {
	ES: {
		details: {
			title: <h2>Detalles de contacto</h2>,
			phone: (
				<div className='flex gap-2'>
					<Phone />
					<p>6XX XXX XXX</p>
				</div>
			),
			whatsapp: (
				<div className='flex gap-2'>
					<WhatsApp />
					<p>6XX XXX XXX</p>
				</div>
			),
			email: (
				<div className='flex gap-2'>
					<Mail />
					<p>xxx@gmail.com</p>
				</div>
			),
			location: (
				<div className='flex gap-2'>
					<MapPin />
					<p>Avenida Diagonal 449, Barcelona</p>
				</div>
			),
		},
		formTitle: <h2>Escríbenos</h2>,
		formDesc: (
			<p>Rellena el siguiente formulario y te contactaremos lo antes posible</p>
		),
		formParams: ['Nombre', 'Apellidos', 'Email', 'Teléfono'],
		message: 'Mensaje',
		check: (
			<p className='text-sm'>
				He leído y acepto la{' '}
				<span className='underline hover:cursor-pointer'>
					Política de Privacidad
				</span>{' '}
				de Serrano While.
			</p>
		),
		submitButton: 'Enviar',
	},

	CAT: {
		details: {
			title: <h2>Detalls de contacte</h2>,
			phone: (
				<div className='flex gap-2'>
					<Phone />
					<p>6XX XXX XXX</p>
				</div>
			),
			whatsapp: (
				<div className='flex gap-2'>
					<WhatsApp />
					<p>6XX XXX XXX</p>
				</div>
			),
			email: (
				<div className='flex gap-2'>
					<Mail />
					<p>xxx@gmail.com</p>
				</div>
			),
			location: (
				<div className='flex gap-2'>
					<MapPin />
					<p>Avinguda Diagonal 449, Barcelona</p>
				</div>
			),
		},
		formTitle: <h2>Escriu-nos</h2>,
		formDesc: (
			<p>Omple el següent formulari i et contactarem el més aviat possible</p>
		),
		formParams: ['Nom', 'Cognoms', 'Email', 'Telèfon'],
		message: 'Missatge',
		check: (
			<p className='text-sm'>
				He llegit i accepto la{' '}
				<span className='underline hover:cursor-pointer'>
					Política de Privacitat
				</span>{' '}
				de Serrano While.
			</p>
		),

		submitButton: 'Enviar',
	},
};

export default function Contacto() {
	const { language } = useContext(LanguageContext);
	const t = translations[language as Language];

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Handle form submission here
		console.log('Form submitted');
	};

	return (
		<div className='flex-1 max-w-[1200px] px-20 pt-12 pb-20 flex items-start text-left gap-10'>
			<div className='flex flex-col gap-10 flex-2'>
				{t.details.title}
				{t.details.phone}
				{t.details.whatsapp}
				{t.details.email}
				{t.details.location}
			</div>
			<Separator
				orientation='vertical'
				className='bg-border self-stretch w-px'
			/>

			<div className='flex flex-col gap-10 flex-3'>
				<div className='flex flex-col gap-5'>
					{t.formTitle}
					{t.formDesc}
				</div>
				<form onSubmit={handleSubmit} className='flex flex-col gap-5'>
					{t.formParams.map((param, i) => (
						<div key={i} className='grid w-full max-w-sm items-center gap-3'>
							<Label htmlFor={param}>{param}</Label>
							<Input id={param} name={param} placeholder={param} required />
						</div>
					))}
					<div className='grid w-full max-w-sm items-center gap-3'>
						<Label htmlFor={t.message}>{t.message}</Label>
						<Textarea
							id={t.message}
							name={t.message}
							placeholder={t.message}
							rows={4}
							required
						/>
					</div>
					<div className='flex gap-2 items-center'>
						<Checkbox required />
						{t.check}
					</div>
					<div className='w-full max-w-sm flex justify-center'>
						<Button variant={'outline'} type='submit'>
							{t.submitButton}
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
}
