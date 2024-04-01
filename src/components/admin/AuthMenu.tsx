"use client";

import queryClient from "@/utils/query-client";
import { trpc } from "@/utils/trpc";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function AuthMenu() {
	const router = useRouter();

	const { mutate: logoutFn } = trpc.logoutUser.useMutation({
		onError(error) {
			toast.error(error.message);
			console.log("Error message:", error.message);
		},
		onSuccess() {
			queryClient.clear();
			toast.success("Logout with successful");
			router.push("/admin/login");
		},
	});

	return (
		<>
			<li className="cursor-pointer" onClick={() => logoutFn()}>
				Logout
			</li>
		</>
	);
}
