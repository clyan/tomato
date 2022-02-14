import { TomatoComponent } from './component';

export type SwipeToOptions = {
  immediate?: boolean;
};

export class Swipe extends TomatoComponent {
  prev(): void;

  next(): void;

  swipeTo(index: number, options?: SwipeToOptions): void;

  resize(): void;
}
