import { IconUserCog, IconPalette } from "@tabler/icons-react";

export const settingPages = [
	{ name: "Profil", url: "/settings/profile", icon: <IconUserCog />, protected: true },
	{ name: "Darstellung", url: "/settings/appearance", icon: <IconPalette />, protected: false },
];