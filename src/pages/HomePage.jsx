import graphic from "../images/supply-chain.png";

const HomePage = () => {
	return (
		<main className="px-4 md:px-12 lg:px-16 flex items-center justify-between min-h-calc[100vw - 5rem] bg-zinc-100 w-full py-10">
			<div className="flex flex-col justify-center items-stretch gap-6">
				<h1 className="text-5xl font-bold p-0 m-0 text-zinc-900 text-left">
					Welcome to <span className="text-[#E03F3F]">South Africa</span>
				</h1>
				<p className="text-zinc-800 w-4/5">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed excepturi
					necessitatibus, aperiam minima dolorem possimus ea vel asperiores
					minus corrupti cum libero iure ipsa et quos ad! Neque, commodi
					quaerat.
				</p>
				<div className="flex items-center gap-5 w-2/3 mt-5">
					<button className="bg-[#E03F3F] border border-transparent text-zinc-50 p-2 rounded-md w-full">
						Enquire
					</button>
					<button className="border border-[#E03F3F] text-[#E03F3F] p-2 rounded-md w-full">
						Our impact
					</button>
				</div>
			</div>
			<img src={graphic} alt="" className="lg:w-[32rem] xl:w-[36rem]" />
		</main>
	);
};

export default HomePage;
