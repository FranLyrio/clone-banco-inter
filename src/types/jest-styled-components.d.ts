// Tipagem extraída do repositório oficial do styled-components:
// https://github.com/styled-components/jest-styled-components/blob/master/typings/index.d.ts

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import { Plugin, NewPlugin } from 'pretty-format';
import { css } from 'styled-components';

declare global {
	namespace jest {
		interface AsymmetricMatcher {
			$$typeof: Symbol;
			sample?: string | RegExp | object | Array<any> | Function;
		}

		type Value = string | number | RegExp | AsymmetricMatcher | undefined;

		interface Options {
			media?: string;
			modifier?: string | ReturnType<typeof css>;
			supports?: string;
		}

		interface Matchers<R> {
			toHaveStyleRule(property: string, value?: Value, options?: Options): R;
		}
	}
}

export interface StyledComponentsSerializerOptions {
	addStyles?: boolean;
	classNameFormatter?: (index: number) => string;
}

export declare const styleSheetSerializer: Exclude<Plugin, NewPlugin> & {
	setStyleSheetSerializerOptions: (
		options?: StyledComponentsSerializerOptions
	) => void;
};