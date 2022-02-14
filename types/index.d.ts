/* eslint-disable max-classes-per-file */
import Vue from 'vue';
import { TomatoComponent } from './component';
import { Lazyload } from './lazyload';
import { Locale } from './locale';
import { Tabs } from './tabs';

export const version: string;
export function install(vue: typeof Vue): void;

export class Button extends TomatoComponent {}
export class Overlay extends TomatoComponent {}
export { Lazyload, Locale, Tabs };
