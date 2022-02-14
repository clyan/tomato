import { TomatoComponent } from './component';

export class SwipeCell extends TomatoComponent {
  open(position: 'left' | 'right'): void;

  close(): void;
}
