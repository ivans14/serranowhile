import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Check, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
	const checkmarkText = [
		'Atención personalizada',
		'Seguimiento continuo',
		'Atención personalizada',
		'Sin sorpresas: precio cerrado',
	];

	return (
		<div className='flex-1 px-20 py-12 flex flex-col items-center text-center gap-12'>
			<div className='flex flex-col gap-5'>
				<h1>Tu divorcio notarial por 595€ por cónyuge</h1>
				<h2>Rápido, legal y sin complicaciones</h2>
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
					En DivorciosBCN.com tramitamos tu divorcio de mutuo acuerdo de forma
					<span className='font-bold text-text-secondary'> ágil</span>,
					<span className='font-bold text-text-secondary'> profesional</span> y{' '}
					<span className='font-bold text-text-secondary'>
						{' '}
						completamente legal
					</span>{' '}
					, con firma ante notario en menos de{' '}
					<span className='font-bold text-text-secondary'> 1 semana</span>.
				</p>
				<div className='flex flex-col gap-2 items-start'>
					{checkmarkText.map((text, index) => (
						<div className='flex items-center gap-2' key={index}>
							<Check className='text-text-secondary' />
							<p>{text}</p>
						</div>
					))}
				</div>
			</div>
			<Button variant={'outline'}>Descúbrenos</Button>
			<div className='flex flex-col items-start gap-5'>
				<div className='flex items-center gap-2'>
					<MapPin className='text-text-secondary' />
					<p>
						Con oficina en{' '}
						<span className='font-bold text-text-secondary'>
							{' '}
							Avenida Diagonal 449 (Barcelona)
						</span>
					</p>
				</div>
				<div className='flex items-center gap-2'>
					<Phone className='text-text-secondary' />
					<p>
						Escríbenos por{' '}
						<span className='underline text-text-secondary'>WhatsApp</span> o{' '}
						<span className='underline text-text-secondary'>llámanos</span>.
						Estamos aquí para ayudarte
					</p>
				</div>
			</div>
		</div>
	);
}
