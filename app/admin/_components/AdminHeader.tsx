'use client';

import Link from 'next/link';

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';

import UserDropdown from './UserDropdown';

const AdminHeader = () => {
	  return (
		<nav className="p-4 border-b border-slate-300 flex justify-between">
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<Link
							href="/admin"
							legacyBehavior
							passHref
						>
							<NavigationMenuLink
								className={ navigationMenuTriggerStyle() }
							>
								Dashboard
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<Link
							href="/admin"
							legacyBehavior
							passHref
						>
							<NavigationMenuLink className={ navigationMenuTriggerStyle() }>
								Projects
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<Link
							href="/admin"
							legacyBehavior
							passHref
						>
							<NavigationMenuLink className={ navigationMenuTriggerStyle() }>
								Résumé
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
			<UserDropdown />
		</nav>
	);
};

export default AdminHeader;