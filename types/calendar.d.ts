import { TomatoComponent } from './component';

export class Calendar extends TomatoComponent {
  reset(date?: Date | Date[]): void;

  scrollToDate(date: Date): void;
}
