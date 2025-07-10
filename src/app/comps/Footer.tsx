'use client';
import { Separator } from '@/components/ui/separator';
import React from 'react';

function Footer() {
	return (
		<div className='relative bottom-0 bg-foreground flex justify-center text-background w-[100%] p-10'>
			<div className='flex justify-center items-center gap-5'>
				<p>Contacto</p>
				<Separator orientation='vertical' />
				<p>Aviso legal</p>
				<Separator orientation='vertical' />
				<p>Política de privacidad</p>
			</div>
		</div>
	);
}

export default Footer;
