import type { ComponentProps } from 'react';

declare global {
	type Indexed<T = unknown, K = string> = {
		[key in K]: T;
	};

	type Nullable<T> = T | null;
	type Keys<T extends Indexed> = keyof T;
	type Noop = () => void;
	type SvgIcon = (props: ComponentProps<'svg'>) => JSX.Element;

	type OptionItem<T = string> = {
		id: T;
		title: string;
	};

	type Selected<T extends string> = Indexed<Nullable<OptionItem>, T>;
	type PasswordTypes<Keys extends string> = Indexed<'text' | 'password', Keys>;

	type WithBlob<T> = T & { blob: string };

	type ID = { id: string };

	const enum Status {
		live = 'live',
		hidden = 'hidden',
	}

	type Location = {
		type: string;
		coordinates: [number, number];
	};

	type Dates = {
		startDate: Date;
		endDate: Date;
	};

	type BodyFormData = {
		body: FormData;
	};

	type FormatPrice = {
		value: number;
		human: string;
	};

	module '*.png' {
		const content: string;
		export default content;
	}

	module '*.svg' {
		const content: SvgIcon;
		export default content;
	}
}
