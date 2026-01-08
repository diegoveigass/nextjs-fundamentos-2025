import { useCallback, useMemo } from "react";
import { SOCIAL_PROVIDERS, type ShareConfig } from "./social-providers";

type UseShareProps = ShareConfig & {
	clipboardTimeout?: number;
};

type SocialProviderKey = keyof typeof SOCIAL_PROVIDERS;

export function useShare({
	url,
	title,
	text,
	clipboardTimeout = 500,
}: UseShareProps) {
	const shareConfig = useMemo(
		() => ({
			url,
			...(title && { title }),
			...(text && { text }),
		}),
		[title, text, url],
	);

	const share = useCallback(
		(provider: SocialProviderKey) => {
			try {
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
		[shareConfig],
	);

	const shareButtons = useMemo(
		() => [
			...Object.entries(SOCIAL_PROVIDERS).map(([key, provider]) => ({
				provider: key,
				name: provider.name,
				icon: provider.icon,
				action: () => share(key as SocialProviderKey),
			})),
		],
		[share],
	);

	return {
		shareButtons,
	};
}
