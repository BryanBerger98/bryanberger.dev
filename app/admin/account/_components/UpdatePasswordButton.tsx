import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, Save } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import ButtonItem from '@/components/ui/ButtonList/ButtonItem';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import useSession from '@/hooks/useSession';
import { updateUserPassword } from '@/services/auth.service';

const UpdatePasswordFormSchema = z.object({
	password: z.string().min(8, 'Password must contain at least 8 chars.'),
	newPassword: z.string().min(8, 'Password must contain at least 8 chars.'),
	confirmNewPassword: z.string().min(8, 'Password must contain at least 8 chars.'),
}).refine(data => data.newPassword === data.confirmNewPassword, {
	message: 'Passwords do not match.',
	path: [ 'confirmNewPassword' ],
});

type UpdatePasswordFormValues = z.infer<typeof UpdatePasswordFormSchema>;

const UpdatePasswordButton = () => {

	const [ isDialogOpen, setIsDialogOpen ] = useState(false);
	const [ isLoading, setIsLoading ] = useState(false);
	const { user, loading, refreshSession } = useSession();

	const form = useForm<UpdatePasswordFormValues>({
		mode: 'onSubmit',
		resolver: zodResolver(UpdatePasswordFormSchema),
	});

	const handleSubmit = async (values: UpdatePasswordFormValues) => {
		try {
			setIsLoading(true);
			await updateUserPassword(values.newPassword, { 
				email: user?.email || '',
				password: values.password,
			});
			setIsDialogOpen(false);
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	};

	const handleOpenChange = (isOpen: boolean) => {
		setIsDialogOpen(isOpen);
	};

	const handleOpen = () => setIsDialogOpen(true);

	return (
		<Dialog
			open={ isDialogOpen }
			onOpenChange={ handleOpenChange }
		>
			<DialogTrigger asChild>
				<ButtonItem
					isLoading={ loading }
					onClick={ handleOpen }
				>
					Password
				</ButtonItem>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<Form { ...form }>
					<form onSubmit={ form.handleSubmit(handleSubmit) }>
						<DialogHeader>
							<DialogTitle>Update password</DialogTitle>
							<DialogDescription>
								Update your password.
							</DialogDescription>
						</DialogHeader>
						<div className="grid gap-4 py-4">
							<FormField
								control={ form.control }
								name="password"
								render={ ({ field }) => (
									<FormItem>
										<FormLabel>Current password</FormLabel>
										<FormControl>
											<Input
												placeholder="********"
												type="password"
												{ ...field }
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								) }
							/>
							<FormField
								control={ form.control }
								name="newPassword"
								render={ ({ field }) => (
									<FormItem>
										<FormLabel>New password</FormLabel>
										<FormControl>
											<Input
												placeholder="********"
												type="password"
												{ ...field }
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								) }
							/>
							<FormField
								control={ form.control }
								name="confirmNewPassword"
								render={ ({ field }) => (
									<FormItem>
										<FormLabel>Confirm new password</FormLabel>
										<FormControl>
											<Input
												placeholder="********"
												type="password"
												{ ...field }
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								) }
							/>
						</div>
						<DialogFooter>
							<Button
								className="gap-2"
								disabled={ isLoading }
							>
								{ isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save size="16" /> }
								Save
							</Button>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
};

export default UpdatePasswordButton;