import React from "react";

const NotFoundPage = () => {
	return (
		<div className="px-4 md:px-12 lg:px-16 w-full flex-col min-h-screen flex items-center justify-center gap-10 bg-zinc-900">
			<h1 className="text-red-600 font-semibold text-5xl">
				404 - Page Not Found
			</h1>
			<p className="text-2xl font-medium text-zinc-200">
				Sorry, the page you are looking for does not exist.
			</p>
		</div>
	);
};

export default NotFoundPage;
