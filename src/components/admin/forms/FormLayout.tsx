import { Button } from "@/components/ui/button";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from "@/components/ui/card";
import {
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
	Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";

import styles from "./forms.module.scss";
import { UseFormReturn } from "react-hook-form";

interface FormLayoutProps {
	config: {
		id: string;
		title: string;
		description: string;
		fields: {
			name: string;
			label: string;
			placeholder: string;
			type?: string;
		}[];
	};
	form: UseFormReturn<any, undefined>;
	submitting: boolean;
	OnSubmit: (values: any) => void;
}

export default function FormLayout({
	config,
	form,
	submitting,
	OnSubmit,
}: FormLayoutProps) {
	return (
		<Card className={styles.card}>
			<CardHeader>
				<CardTitle>{config.title}</CardTitle>
				<CardDescription>{config.description}</CardDescription>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form
						id={config.id}
						className="flex flex-col gap-4"
						onSubmit={form.handleSubmit(OnSubmit)}
					>
						{config.fields.map((item) => (
							<FormField
								key={item.name}
								control={form.control}
								name={item.name}
								render={({ field }) => (
									<FormItem>
										<FormLabel>{item.label}</FormLabel>
										<FormControl>
											<Input
												placeholder={item.placeholder}
												type={item.type}
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						))}
					</form>
				</Form>
			</CardContent>
			<CardFooter>
				{!submitting ? (
					<Button variant="secondary" form={config.id} type="submit">
						{config.title}
					</Button>
				) : (
					<Button variant="secondary" disabled>
						<Loader2 className="mr-2 h-4 w-4 animate-spin" />
						Please wait
					</Button>
				)}
			</CardFooter>
		</Card>
	);
}
