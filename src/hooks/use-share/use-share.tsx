import { useCallback, useMemo } from "react";
import { SOCIAL_PROVIDERS, type ShareConfig } from "./social-providers";
import { useClipboard } from "../use-clipboard/use-clipboard";
import { Check, Link2 } from "lucide-react";

type UseShareProps = ShareConfig & {
	clipboardTimeout?: number;
};

type SocialProviderKey = keyof typeof SOCIAL_PROVIDERS | "clipboard";

export function useShare({
	url,
	title,
	text,
	clipboardTimeout = 2000,
}: UseShareProps) {
	const { handleCopy, isCopied } = useClipboard({ timeout: clipboardTimeout });

	const shareConfig = useMemo(
		() => ({
			url,
			...(title && { title }),
			...(text && { text }),
		}),
		[title, text, url],
	);

	const share = useCallback(
		async (provider: SocialProviderKey) => {
			try {
				if (provider === "clipboard") {
					return await handleCopy(url);
				}

				const providerConfig = SOCIAL_PROVIDERS[provider];

				if (!providerConfig) {
					throw new Error("Provider does not exists!");
				}

				const shareUrl = providerConfig.shareUrl(shareConfig);
				const shareWindow = window.open(
					shareUrl,
					"_blank",
					"width=600, height=600, location=yes, status=yes",
				);

				return !!shareWindow;
			} catch (error) {
				console.error(error);
				return false;
			}
		},
		[shareConfig, handleCopy, url],
	);

	const shareButtons = useMemo(
		() => [
			...Object.entries(SOCIAL_PROVIDERS).map(([key, provider]) => ({
				provider: key,
				name: provider.name,
				icon: provider.icon,
				action: () => share(key as SocialProviderKey),
			})),
			{
				provider: "clipboard",
				name: isCopied ? "Link copiado!" : "Copiar link",
				icon: isCopied ? (
					<Check className="size-4" />
				) : (
					<Link2 className="size-4" />
				),
				action: () => share("clipboard"),
			},
		],
		[share, isCopied],
	);

	return {
		shareButtons,
	};
}
