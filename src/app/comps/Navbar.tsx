'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Globe } from 'lucide-react';
import { Language, LanguageContext } from './context';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from './Sidebar';

const translations = {
	ES: {
		equipo: 'Quiénes somos',
		servicios: 'Servicios',
		faq: 'FAQ',
		contacto: 'Contacto',
		espanol: 'Español',
		catala: 'Català',
	},
	CAT: {
		equipo: 'Qui som',
		servicios: 'Serveis',
		faq: 'FAQ',
		contacto: 'Contacte',
		espanol: 'Espanyol',
		catala: 'Català',
	},
};

function Navbar() {
	const router = useRouter();
	const { language, setLanguage } = useContext(LanguageContext);
	return (
		<div className='static top-0 bg-background h-[100px] flex justify-between text-foreground w-[100%] p-5'>
			<div className='flex md:items-center items-baseline hover:cursor-pointer'>
				<Image
					src={'/DIVORCIOS-negro-cut.PNG'}
					width={226}
					height={43}
					alt={'logo'}
					onClick={() => router.push('/')}
				/>
			</div>
			<div className='md:flex hidden flex-row items-center gap-5'>
				<Link href='/equipo'>{translations[language as Language].equipo}</Link>
				<Link href='/servicios'>
					{translations[language as Language].servicios}
				</Link>
				<Link href='/faq'>{translations[language as Language].faq}</Link>
				<Button onClick={() => router.push('contact')}>
					{translations[language as Language].contacto}
				</Button>
				<NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuTrigger>
								<Globe strokeWidth={1.3} />
							</NavigationMenuTrigger>
							<NavigationMenuContent>
								<NavigationMenuLink
									onClick={() => setLanguage('ES')}
									className={language == 'ES' ? 'bg-accent' : ''}
								>
									Español
								</NavigationMenuLink>
								<NavigationMenuLink
									onClick={() => setLanguage('CAT')}
									className={language == 'CAT' ? 'bg-accent' : ''}
								>
									Català
								</NavigationMenuLink>
							</NavigationMenuContent>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</div>
			<div className='right-0 md:hidden flex'>
				<SidebarProvider>
					<AppSidebar />
					<SidebarTrigger />
				</SidebarProvider>
			</div>
		</div>
	);
}

export default Navbar;
