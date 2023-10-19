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
import { updateUserEmail } from '@/services/auth.service';

const UpdateEmailFormSchema = z.object({
	email: z.string({ required_error: 'Required.' }).email('Invalid email address.'),
	password: z.string().min(8, 'Password must contain at least 8 chars.'),
});

type UpdateEmailFormValues = z.infer<typeof UpdateEmailFormSchema>;

const UpdateEmailButton = () => {

	const [ isDialogOpen, setIsDialogOpen ] = useState(false);
	const [ isLoading, setIsLoading ] = useState(false);
	const { user, loading, refreshSession } = useSession();

	const form = useForm<UpdateEmailFormValues>({
		mode: 'onSubmit',
		resolver: zodResolver(UpdateEmailFormSchema),
	});

	const handleSubmit = async (values: UpdateEmailFormValues) => {
		try {
			setIsLoading(true);
			await updateUserEmail(values.email, { 
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
					value={ user?.email }
					onClick={ handleOpen }
				>
					Email
				</ButtonItem>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<Form { ...form }>
					<form onSubmit={ form.handleSubmit(handleSubmit) }>
						<DialogHeader>
							<DialogTitle>Update email</DialogTitle>
							<DialogDescription>
								Update your email address
							</DialogDescription>
						</DialogHeader>
						<div className="grid gap-4 py-4">
							<FormField
								control={ form.control }
								name="email"
								render={ ({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input
												placeholder="example@example.com"
												type="email"
												{ ...field }
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								) }
							/>
							<FormField
								control={ form.control }
								name="password"
								render={ ({ field }) => (
									<FormItem>
										<FormLabel>Password</FormLabel>
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

export default UpdateEmailButton;