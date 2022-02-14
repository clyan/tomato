/* eslint-disable max-classes-per-file */
import Vue from 'vue';
import { TomatoComponent } from './component';
import { Locale } from './locale';

export const version: string;
export function install(vue: typeof Vue): void;

export class Button extends TomatoComponent {}
export class Overlay extends TomatoComponent {}
export { Locale };
