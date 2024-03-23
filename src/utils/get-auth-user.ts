"use server";

import { createAsyncCaller } from "@/server/trpc/server";
import { redirect } from "next/navigation";

export const getAuthUser = async ({
	shouldRedirect = true,
}: {
	shouldRedirect?: boolean;
} = {}) => {
	const caller = await createAsyncCaller();
	return caller
		.getMe(undefined)
		.then((result) => result.data.user)
		.catch((e) => {
			if (e.code === "UNAUTHORIZED" && shouldRedirect) {
				redirect("admin/login");
			}

			return null;
		});
};
