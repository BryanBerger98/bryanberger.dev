'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, LogIn } from 'lucide-react';
import { useRouter } from 'next-nprogress-bar';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { signInUser } from '@/services/auth.service';

const LoginFormSchema = z.object({
	email: z.string({ required_error: 'Required.' }).email('Invalid email address.'),
	password: z.string().min(8, 'Password must contain at least 8 chars.'),
});

type LoginFormValues = z.infer<typeof LoginFormSchema>;

const LoginPage = () => {

	const [ isLoading, setIsLoading ] = useState(false);

	const router = useRouter();

	const form = useForm<LoginFormValues>({ resolver: zodResolver(LoginFormSchema) });

	const handleSubmit = async (values: LoginFormValues) => {
		try {
			setIsLoading(true);
			await signInUser(values);
			router.push('/admin');
		} catch (error: any) {
			toast.error(error.message);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Form { ...form }>
			<form
				className="h-screen w-screen flex justify-center items-center"
				onSubmit={ form.handleSubmit(handleSubmit) }
			>
				<Card>
					<CardHeader>
						<CardTitle>Login</CardTitle>
						<CardDescription>Login to the administration space</CardDescription>
					</CardHeader>
					<CardContent>
						<FormField
							control={ form.control }
							name="email"
							render={ ({ field }) => (
								<FormItem className="mb-4">
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
					</CardContent>
					<CardFooter className="justify-center">
						<Button
							className="gap-2"
							disabled={ isLoading }
						>
							{
								isLoading ?
									<Loader2
										className="animate-spin"
										size="16"
									/>
									: <LogIn size="16" />
							}
							Login
						</Button>
					</CardFooter>
				</Card>
			</form>
		</Form>
	);
};

export default LoginPage;