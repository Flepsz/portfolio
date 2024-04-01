import Link from "next/link";
import { getAuthUser } from "@/utils/get-auth-user";
import AuthMenu from "./AuthMenu";

const Header = async () => {
	const user = await getAuthUser();

	return (
		<header className="h-20">
			<nav className="h-full flex justify-between container items-center">
				<div>
					<Link href="/admin" className="text-ct-dark-600 text-2xl font-semibold">
						Portifólio Admin
					</Link>
				</div>
				<ul className="flex items-center gap-4">
					<li>
						<Link href="/" className="text-ct-dark-600">
							Home
						</Link>
					</li>
					{!user && (
						<>
							<li>
								<Link href="/admin/register" className="text-ct-dark-600">
									Register
								</Link>
							</li>
							<li>
								<Link href="/admin/login" className="text-ct-dark-600">
									Login
								</Link>
							</li>
						</>
					)}
					{user && <AuthMenu />}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
