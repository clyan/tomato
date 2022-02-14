import Vue from 'vue';
import { TomatoComponent } from './component';

export type NotifyMessage = string | number;

export type NotifyOptions = {
  type?: 'primary' | 'success' | 'danger' | 'warning';
  value?: boolean;
  color?: string;
  message?: NotifyMessage;
  duration?: number;
  className?: any;
  background?: string;
  onClose?: (() => void) | null;
  onOpened?: (() => void) | null;
  onClick?: ((event: Event) => void) | null;
};

export interface TomatoNotify extends Vue {
  message: NotifyMessage;
  color: string;
  background: string;
  duration: number;
}

export interface Notify {
  (message: NotifyOptions | NotifyMessage): TomatoNotify;
  clear(): void;
  install(): void;
  currentOptions: NotifyOptions;
  defaultOptions: NotifyOptions;
  setDefaultOptions(options: NotifyOptions): void;
  resetDefaultOptions(): void;
  Component: typeof TomatoComponent;
}

declare module 'vue/types/vue' {
  interface Vue {
    $notify: Notify;
  }
}

export const Notify: Notify;
