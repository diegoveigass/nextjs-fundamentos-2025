import { PT_Sans_Caption } from "next/font/google";
import Image from "next/image";

const ptSansCaption = PT_Sans_Caption({
	subsets: ["latin"],
	weight: "700",
});

const customerStories = [
	{
		content:
			"Criar minha loja com o site.set foi a melhor decisão para o meu negócio. A plataforma é super intuitiva, e consegui colocar meus produtos à venda em poucos minutos. A",
		author: {
			name: "Annette Bones",
			role: "CEO na Anne Corp",
			avatar: "/customer-01.png",
		},
	},
	{
		content:
			"Transformar minha ideia em uma loja online foi fácil e rápido. Adorei as opções de personalização e a simplicidade para gerenciar os pedidos. Já vejo meus produtos alcançando mais pessoas!",
		author: {
			name: "Jacob Jones",
			role: "CEO na JJ Org",
			avatar: "/customer-02.png",
		},
	},
];

export const CustomerStorySection = () => {
	return (
		<section className="container py-20">
			<div className="flex flex-col items-center gap-12">
				<h2
					className={`${ptSansCaption.className} text-heading-xl text-gray-100`}
				>
					Quem utiliza, aprova
				</h2>

				<div className="grid gap-8 md:grid-cols-2">
					{customerStories.map((customer) => {
						return (
							<div
								key={customer.author.name}
								className="p-10 flex flex-col gap-10 rounded-lg border border-gray-400 bg-gray-600"
							>
								<p className="text-body-md text-gray-200 italic">
									{customer.content}
								</p>
								<div className="flex gap-3">
									<Image
										alt=""
										src={customer.author.avatar}
										width={36}
										height={36}
										className="object-cover size-9 self-center"
									/>
									<div className="flex flex-col">
										<strong className="text-gray-200 text-sm">
											{customer.author.name}
										</strong>
										<span className="text-gray-300 text-xs">
											{customer.author.role}
										</span>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};
