'use client';

import ButtonList from '@/components/ui/ButtonList';
import ButtonItem from '@/components/ui/ButtonList/ButtonItem';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import useSession from '@/hooks/useSession';

import UpdateEmailButton from './_components/UpdateEmailButton';
import UpdatePasswordButton from './_components/UpdatePasswordButton';

const AccountPage = () => {

	const { user } = useSession();

	console.log(user);

	const handleClick = () => {
		console.log('Hello world');
	};

	return (
		<div className="container mx-auto py-8 space-y-8">
			<h1 className="text-xl font-bold">Account</h1>
			<div className="grid grid-cols-2">
				<Card className="col-span-1">
					<CardHeader>
						<CardTitle>Personal informations</CardTitle>
						<CardDescription>Manage your personal informations</CardDescription>
					</CardHeader>
					<CardContent>
						<ButtonList>
							<ButtonItem
								value="BryanBerger"
								onClick={ handleClick }
							>
								Username
							</ButtonItem>
							<ButtonItem>
								Bio
							</ButtonItem>
							<UpdateEmailButton />
							<UpdatePasswordButton />
						</ButtonList>
					</CardContent>
				</Card>
			</div>
		</div>
	);
};

export default AccountPage;