'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Globe } from 'lucide-react';
function Navbar() {
	const router = useRouter();
	return (
		<div className='static top-0 bg-background h-[100px] flex justify-between text-foreground w-[100%] p-5'>
			<div className='flex items-center'>
				<Image
					src={'/DIVORCIOS-negro-cut.PNG'}
					width={226}
					height={43}
					alt={'logo'}
					onClick={() => router.push('/')}
				/>
			</div>
			<div className='flex flex-row items-center gap-5'>
				<Link href='/equipo'>Equipo</Link>
				<Link href='/servicios'>Servicios</Link>
				<Link href='/faq'>FAQ</Link>
				<Button onClick={() => router.push('contact')}>Contacto</Button>
				<NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuTrigger>
								<Globe strokeWidth={1.3} />
							</NavigationMenuTrigger>
							<NavigationMenuContent>
								<NavigationMenuLink>Español</NavigationMenuLink>
								<NavigationMenuLink>Català</NavigationMenuLink>
							</NavigationMenuContent>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</div>
		</div>
	);
}

export default Navbar;
