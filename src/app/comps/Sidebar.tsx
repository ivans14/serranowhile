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

// Menu items.
const items = [
	{
		title: { ES: 'Equipo', CAT: 'Equip' },
		url: '/Quiénes somos',
	},
	{
		title: { ES: 'Servicios', CAT: 'Serveis' },
		url: '/servicios',
	},
	{
		title: { ES: 'FAQ', CAT: 'FAQ' },
		url: '/faq',
	},
	{
		title: { ES: 'Contacto', CAT: 'Contacte' },
		url: '/contact',
	},
];

export function AppSidebar() {
	const { language } = useContext(LanguageContext);
	return (
		<Sidebar>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<SidebarMenuItem key={item.title[language as Language]}>
									<SidebarMenuButton asChild>
										<a href={item.url}>
											<span>{item.title[language as Language]}</span>
										</a>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
