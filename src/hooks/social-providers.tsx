import { Facebook, Linkedin, Slack, Twitter } from "lucide-react";

export type ShareConfig = {
	url: string;
	title?: string;
	text?: string;
};

export const SOCIAL_PROVIDERS = {
	linkedin: {
		name: "LinkedIn",
		icon: <Linkedin className="size-4" />,
		shareUrl: (config: ShareConfig) =>
			`https://linkedin.com/shareing/share-offsite/?url=${encodeURIComponent(config.url)}`,
	},
	facebook: {
		name: "Facebook",
		icon: <Facebook className="size-4" />,
		shareUrl: (config: ShareConfig) =>
			`https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(config.url)}`,
	},
	slack: {
		name: "Slack",
		icon: <Slack className="size-4" />,
		shareUrl: (config: ShareConfig) =>
			`https://slack.com/share?url=${encodeURIComponent(config.url)}&text=${encodeURIComponent(config.title || "")}`,
	},
	x: {
		name: "X",
		icon: <Twitter className="size-4" />,
		shareUrl: (config: ShareConfig) =>
			`https://x.com/intent/tweet?url=${encodeURIComponent(config.url)}&text=${encodeURIComponent(config.title || "")}`,
	},
} as const;
