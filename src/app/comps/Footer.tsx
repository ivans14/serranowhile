'use client';
import React from 'react';

function Footer() {
	return (
		<div className='relative bottom-0 bg-foreground h-[150px] flex justify-center text-background w-[100%] p-5'>
			<div className='flex flex-col justify-center items-center gap-2'>
				<p>Contacto</p>
				<p>Aviso legal</p>
				<p>Política de privacidad</p>
			</div>
		</div>
	);
}

export default Footer;
