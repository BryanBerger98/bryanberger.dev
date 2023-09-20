'use client';

import { Layers } from 'lucide-react';
import Link from 'next/link';

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';

const Navbar = () => {

	return (
		<nav className="flex justify-between items-center p-8 border border-slate-100 bg-white/50 backdrop-blur-lg drop-shadow-sm rounded-2xl">
			<Link
				className="text-3xl flex items-center gap-4"
				href="/"
			>
				<Layers size="32" />
				<span className="font-semibold">Bryan Berger</span>
			</Link>
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<Link
							href="/docs"
							legacyBehavior
							passHref
						>
							<NavigationMenuLink
								className={ navigationMenuTriggerStyle({ className: 'bg-transparent hover:bg-white' }) }
							>
								Who is Bryan?
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<Link
							href="/docs"
							legacyBehavior
							passHref
						>
							<NavigationMenuLink className={ navigationMenuTriggerStyle({ className: 'bg-transparent hover:bg-white' }) }>
								Projects
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<Link
							href="/docs"
							legacyBehavior
							passHref
						>
							<NavigationMenuLink className={ navigationMenuTriggerStyle({ className: 'bg-primary !text-primary-foreground hover:bg-primary/90' }) }>
								Work with me
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</nav>
	);
};

export default Navbar;