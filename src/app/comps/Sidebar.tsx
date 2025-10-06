import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components/ui/sidebar';
import { useContext } from 'react';
import { LanguageContext, Language } from './context';
import { FlagSpain, FlagCatalonia, FlagUK } from './icons';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

// Menu items.
const items = [
	{
		title: { ES: 'Quiénes somos', CAT: 'Qui som', ENG: 'Who we are' },
		url: '/equipo',
	},
	{
		title: { ES: 'Servicios', CAT: 'Serveis', ENG: 'Services' },
		url: '/servicios',
	},
	{
		title: { ES: 'Contacto', CAT: 'Contacte', ENG: 'Contact' },
		url: '/contact',
	},
];

export function AppSidebar() {
	const { language, setLanguage } = useContext(LanguageContext);

	const getFlagIcon = () => {
		switch (language) {
			case 'ES':
				return <FlagSpain width={30} />;
			case 'CAT':
				return <FlagCatalonia width={30} />;
			case 'ENG':
				return <FlagUK width={30} />;
			default:
				return <FlagSpain width={30} />;
		}
	};
	return (
		<Sidebar>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupContent>
						<SidebarMenu className='space-y-5'>
							{items.map((item) => (
								<SidebarMenuItem key={item.title[language as Language]}>
									<SidebarMenuButton asChild>
										<a href={item.url}>
											<span>{item.title[language as Language]}</span>
										</a>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
							<div>
								<NavigationMenu>
									<NavigationMenuList>
										<NavigationMenuItem>
											<NavigationMenuTrigger>
												{getFlagIcon()}
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
												<NavigationMenuLink
													onClick={() => setLanguage('ENG')}
													className={language == 'ENG' ? 'bg-accent' : ''}
												>
													English
												</NavigationMenuLink>
											</NavigationMenuContent>
										</NavigationMenuItem>
									</NavigationMenuList>
								</NavigationMenu>
							</div>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
