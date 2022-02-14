import { TomatoComponent } from './component';
import { TomatoPopupMixin } from './mixins/popup';
import { SwipeToOptions } from './swipe';

export type ImagePreviewOptions =
  | string[]
  | {
      loop?: boolean;
      images: string[];
      maxZoom?: number;
      minZoom?: number;
      className?: any;
      showIndex?: boolean;
      closeable?: boolean;
      closeIcon?: string;
      asyncClose?: boolean;
      transition?: string;
      overlayStyle?: object;
      swipeDuration?: number;
      startPosition?: number;
      showIndicators?: boolean;
      closeOnPopstate?: boolean;
      closeIconPosition?: string;
      getContainer?: string | (() => Element);
      onClose?(): void;
      onChange?(index: number): void;
      swipeTo?(index: number, options?: SwipeToOptions): void;
    };

export class TomatoImagePreview extends TomatoPopupMixin {
  images: string[];

  showIndex: boolean;

  startPosition: number;
}

export interface ImagePreview {
  (options: ImagePreviewOptions, startPosition?: number): TomatoImagePreview;
  install(): void;
  Component: typeof TomatoComponent;
}

export const ImagePreview: ImagePreview;
