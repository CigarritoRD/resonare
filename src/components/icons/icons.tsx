export const SearchIcon = ({ className }: { className: string }) => {
	return (
		// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className={`${className} icon icon-tabler icons-tabler-outline icon-tabler-search`}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
			<path d="M21 21l-6 -6" />
		</svg>
	);
};

export const NextIcon = ({ className }: { className: string }) => {
	return (
		// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="currentColor"
			className={`${className} icon icon-tabler icons-tabler-filled icon-tabler-player-track-next`}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M2 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z" />
			<path d="M13 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z" />
		</svg>
	);
};

export const PreviousIcon = ({ className }: { className: string }) => {
	return (
		// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="currentColor"
			className={`${className} icon icon-tabler icons-tabler-filled icon-tabler-player-track-prev`}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M20.341 4.247l-8 7a1 1 0 0 0 0 1.506l8 7c.647 .565 1.659 .106 1.659 -.753v-14c0 -.86 -1.012 -1.318 -1.659 -.753z" />
			<path d="M9.341 4.247l-8 7a1 1 0 0 0 0 1.506l8 7c.647 .565 1.659 .106 1.659 -.753v-14c0 -.86 -1.012 -1.318 -1.659 -.753z" />
		</svg>
	);
};

export const BellIcon = ({ className }: { className: string }) => {
	return (
		<svg
			aria-hidden="true"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			className={`${className} icon icon-tabler icons-tabler-outline icon-tabler-bell`}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
			<path d="M9 17v1a3 3 0 0 0 6 0v-1" />
		</svg>
	);
};

export const BookOpenIcon = ({ className }: { className: string }) => (
	<svg
		aria-hidden="true"
		xmlns="http://www.w3.org/2000/svg"
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className={`${className} icon icon-tabler icons-tabler-outline icon-tabler-book`}
	>
		<path stroke="none" d="M0 0h24v24H0z" fill="none" />
		<path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
		<path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
		<path d="M3 6l0 13" />
		<path d="M12 6l0 13" />
		<path d="M21 6l0 13" />
	</svg>
);

export const ChevronDownIcon = ({ className }: { className: string }) => (
	<svg
		aria-hidden="true"
		xmlns="http://www.w3.org/2000/svg"
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className={`${className} icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"`}
	>
		<path stroke="none" d="M0 0h24v24H0z" fill="none" />
		<path d="M6 9l6 6l6 -6" />
	</svg>
);

export const DashboardIcon = ({ className }: { className: string }) => (
	<svg
		aria-hidden="true"
		xmlns="http://www.w3.org/2000/svg"
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className={`${className} icon icon-tabler icons-tabler-outline icon-tabler-layout`}
	>
		<path stroke="none" d="M0 0h24v24H0z" fill="none" />
		<path d="M4 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
		<path d="M4 13m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
		<path d="M14 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
	</svg>
);

export const LogOutIcon = ({ className }: { className: string }) => (
	<svg
		aria-hidden="true"
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className={`${className} icon icon-tabler icons-tabler-outline icon-tabler-logout`}
	>
		<path stroke="none" d="M0 0h24v24H0z" fill="none" />
		<path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
		<path d="M9 12h12l-3 -3" />
		<path d="M18 15l3 -3" />
	</svg>
);

export const MusicIcon = ({ className }: { className: string }) => (
	<svg
		aria-hidden="true"
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className={`${className} icon icon-tabler icons-tabler-outline icon-tabler-music`}
	>
		<path stroke="none" d="M0 0h24v24H0z" fill="none" />
		<path d="M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
		<path d="M13 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
		<path d="M9 17v-13h10v13" />
		<path d="M9 8h10" />
	</svg>
);

export const StarIcon = ({ className }: { className: string }) => (
	<svg
		aria-hidden="true"
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="currentColor"
		className={`${className} icon icon-tabler icons-tabler-filled icon-tabler-star`}
	>
		<path stroke="none" d="M0 0h24v24H0z" fill="none" />
		<path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" />
	</svg>
);

export const UsersIcon = ({ className }: { className: string }) => (
	<svg
		aria-hidden="true"
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className={`${className} icon icon-tabler icons-tabler-outline icon-tabler-users`}
	>
		<path stroke="none" d="M0 0h24v24H0z" fill="none" />
		<path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
		<path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
		<path d="M16 3.13a4 4 0 0 1 0 7.75" />
		<path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
	</svg>
);

export const PlusIcon = ({ className }: { className?: string }) => (
	<svg
		aria-hidden="true"
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className={`${className} icon icon-tabler icons-tabler-outline icon-tabler-plus`}
	>
		<path stroke="none" d="M0 0h24v24H0z" fill="none" />
		<path d="M12 5l0 14" />
		<path d="M5 12l14 0" />
	</svg>
);

export const UploadIcon = ({ className }: { className: string }) => (
	<svg
		aria-hidden="true"
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className={`${className} icon icon-tabler icons-tabler-outline icon-tabler-file-upload`}
	>
		<path stroke="none" d="M0 0h24v24H0z" fill="none" />
		<path d="M14 3v4a1 1 0 0 0 1 1h4" />
		<path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
		<path d="M12 11v6" />
		<path d="M9.5 13.5l2.5 -2.5l2.5 2.5" />
	</svg>
);

export const SettingIcon = ({ className }: { className: string }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className={`${className} icon icon-tabler icons-tabler-outline icon-tabler-settings`}
	>
		<path stroke="none" d="M0 0h24v24H0z" fill="none" />
		<path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
		<path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
	</svg>
);

export const ClockIcon = ({ className }: { className: string }) => (
	<svg
		aria-hidden="true"
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className={`${className} icon icon-tabler icons-tabler-outline icon-tabler-clock `}
	>
		<path stroke="none" d="M0 0h24v24H0z" fill="none" />
		<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
		<path d="M12 7v5l3 3" />
	</svg>
);

export const PlayIcon = ({ className }: { className: string }) => (
	<svg
		aria-hidden="true"
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className={`${className} icon icon-tabler icons-tabler-outline icon-tabler-player-play`}
	>
		<path stroke="none" d="M0 0h24v24H0z" fill="none" />
		<path d="M7 4v16l13 -8z" />
	</svg>
);

export const CalendarIcon = ({ className }: { className: string }) => (
	<svg
		aria-hidden="true"
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className={`${className} icon icon-tabler icons-tabler-outline icon-tabler-calendar`}
	>
		<path stroke="none" d="M0 0h24v24H0z" fill="none" />
		<path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
		<path d="M16 3v4" />
		<path d="M8 3v4" />
		<path d="M4 11h16" />
		<path d="M11 15h1" />
		<path d="M12 15v3" />
	</svg>
);

export const UserIcon = ({ className }: { className: string }) => (
	<svg
		aria-hidden="true"
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className={`${className} icon icon-tabler icons-tabler-outline icon-tabler-user`}
	>
		<path stroke="none" d="M0 0h24v24H0z" fill="none" />
		<path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
		<path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
	</svg>
);

export const AwardIcon = ({ className }: { className: string }) => (
	<svg
		aria-hidden="true"
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className={`${className} icon icon-tabler icons-tabler-outline icon-tabler-award`}
	>
		<path stroke="none" d="M0 0h24v24H0z" fill="none" />
		<path d="M12 9m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" />
		<path d="M12 15l3.4 5.89l1.598 -3.233l3.598 .232l-3.4 -5.889" />
		<path d="M6.802 12l-3.4 5.89l3.598 -.233l1.598 3.232l3.4 -5.889" />
	</svg>
);

export const BarChartIcon = ({ className }: { className: string }) => (
	<svg
		aria-hidden="true"
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className={`${className} icon icon-tabler icons-tabler-outline icon-tabler-chart-bar`}
	>
		<path stroke="none" d="M0 0h24v24H0z" fill="none" />
		<path d="M3 13a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
		<path d="M15 9a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
		<path d="M9 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
		<path d="M4 20h14" />
	</svg>
);

export const PauseIcon = ({ className }: { className: string }) => {
	return (
		<svg
			aria-hidden="true"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			className={` ${className} icon icon-tabler icons-tabler-outline icon-tabler-player-pause`}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
			<path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
		</svg>
	);
};

export const SkipBackIcon = ({ className }: { className: string }) => {
	return (
		<svg
			width={24}
			aria-hidden="true"
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			className={`${className} icon icon-tabler icons-tabler-outline icon-tabler-player-skip-back`}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M20 5v14l-12 -7z" />
			<path d="M4 5l0 14" />
		</svg>
	);
};

export const SkipForwardIcon = ({ className }: { className: string }) => {
	return (
		<svg
			aria-hidden="true"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			className={`${className} icon icon-tabler icons-tabler-outline icon-tabler-player-skip-forward`}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M4 5l12 7v14l-12 -7z" />
			<path d="M20 5l0 14" />
		</svg>
	);
};

export const Volume2Icon = ({ className }: { className: string }) => {
	return (
		<svg
			aria-hidden="true"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			className={` ${className} icon icon-tabler icons-tabler-outline icon-tabler-player-volume-2`}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-6z" />
			<path d="M15 17a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2v-2z" />
		</svg>
	);
};

export const VolumeXIcon = ({ className }: { className: string }) => {
	return (
		<svg
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			className={` ${className} icon icon-tabler icons-tabler-outline icon-tabler-player-volume-x`}
		>
			{" "}
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />{" "}
			<path d="M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-6z" />{" "}
			<path d="M17 17l3 3m0 -3l-3 3" />{" "}
		</svg>
	);
};

export const MaximizeIcon = ({ className }: { className: string }) => {
	return (
		<svg
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			className={`${className} icon icon-tabler icons-tabler-outline icon-tabler-player-maximize`}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M4 4h16v16h-16z" />
			<path d="M14 12h4v4h-4z" />
			<path d="M20 12h4v4h-4z" />
		</svg>
	);
};

export const MinimizeIcon = ({ className }: { className: string }) => {
	return (
		<svg
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			className={`${className} icon icon-tabler icons-tabler-outline icon-tabler-player-minimize`}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M4 4h16v16h-16z" />
			<path d="M14 12h4v4h-4z" />
		</svg>
	);
};

export const DownloadIcon = ({ className }: { className: string }) => {
	return (
		<svg
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			className={`${className} icon icon-tabler icons-tabler-outline icon-tabler-player-download`}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
			<polyline points="7 11 12 16 17 11" />
			<line x1="12" y1="4" x2="12" y2="16" />
		</svg>
	);
};

export const FileTextIcon = ({ className }: { className: string }) => {
	return (
		<svg
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			className={` ${className} icon icon-tabler icons-tabler-outline icon-tabler-player-file-text`}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M14 3v4a1 1 0 0 0 1 1h4" />
			<path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
			<line x1="9" y1="9" x2="9.01" y2="9" />
			<line x1="3" y1="9" x2="3.01" y2="9" />
		</svg>
	);
};

export const CheckCircleIcon = ({ className }: { className: string }) => {
	return (
		<svg
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			className={` ${className} icon icon-tabler icons-tabler-outline icon-tabler-player-check-circle`}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<circle cx={12} cy={12} r={9} />
			<path d="M9 12l2 2l4 -4" />
		</svg>
	);
};

export const CircleIcon = ({ className }: { className: string }) => {
	return (
		<svg
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			className={`${className} icon icon-tabler icons-tabler-outline icon-tabler-player-circle`}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<circle cx={12} cy={12} r={9} />
		</svg>
	);
};

export const FireIcon = ({ className }: { className: string }) => {
	return (
		<svg
			aria-hidden="true"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			className={` ${className} icon icon-tabler icons-tabler-outline icon-tabler-player-fire`}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
			<path d="M12 12l-4 4l-4 -4" />
		</svg>
	);
};

export const ChevronRightIcon = ({ className }: { className: string }) => {
	return (
		<svg
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			className={`${className} icon icon-tabler icons-tabler-outline icon-tabler-player-chevron-right`}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<polyline points="9 6 15 12 9 18" />
		</svg>
	);
};

export const MessageSquareIcon = ({ className }: { className: string }) => {
	return (
		<svg
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			className={` ${className} icon icon-tabler icons-tabler-outline icon-tabler-player-message-square`}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<rect x={9} y={9} width={13} height={13} rx={2} />
			<path d="M3 21v-13a9 9 0 0 1 18 0v13" />
		</svg>
	);
};

export const HelpCircleIcon = ({ className }: { className: string }) => {
	return (
		<svg
			aria-hidden="true"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			className={`${className} icon icon-tabler icons-tabler-outline icon-tabler-player-help-circle`}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<circle cx={12} cy={12} r={9} />
			<path d="M9.09 9a3 3 0 0 1 5.83 1c0 .66-.24 1.27-.66 1.72l-4 4a1 1 0 0 1-1.41 0l-4-4A3 3 0 0 1 9.09 9z" />
		</svg>
	);
};

export const SendIcon = ({ className }: { className: string }) => {
	return (
		<svg
			aria-hidden="true"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			className={`${className} icon icon-tabler icons-tabler-outline icon-tabler-player-send`}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
			<line x1="12" y1="8" x2="12" y2="12" />
			<line x1="12" y1="16" x2="12.01" y2="16" />
		</svg>
	);
};
