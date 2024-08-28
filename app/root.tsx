import { LinksFunction } from '@remix-run/node';
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';

import { ColorModeProvider } from './contexts/color-mode';

import globalStyles from './global.css?url';

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: globalStyles }];

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				<ColorModeProvider>
					<div className="container">{children}</div>
					<ScrollRestoration />
					<Scripts />
				</ColorModeProvider>
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}
