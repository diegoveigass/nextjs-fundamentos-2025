import { ArrowRight, Store } from "lucide-react";
import Link from "next/link";
import { Button } from "../../../components/ui/button";

export const CallToAction = () => {
	return (
		<section className="py-24 bg-gradient-to-b relative">
			<div className="absolute inset-0 hidden md:block bg-[url('/background-footer.svg')] bg-cover bg-center bg-no-repeat opacity-90" />

			<div className="absolute bg-cyan-300 size-16 rounded-full flex items-center justify-center -top-0 left-1/2 -translate-y-1/2 -translate-x-1/2">
				<Store className="text-cyan-100 size-8" />
			</div>

			<div className="container flex flex-col items-center gap-6 text-center relative">
				<h2 className="text-heading-xl text-gray-100 text-balance font-sans">
					Crie uma loja online e inicie suas vendas ainda hoje
				</h2>
				<Button variant={"primary"} asChild>
					<Link href="/criar-loja">
						Criar loja grátis
						<ArrowRight />
					</Link>
				</Button>
			</div>
		</section>
	);
};
