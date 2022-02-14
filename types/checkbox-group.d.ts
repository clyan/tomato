import { TomatoComponent } from './component';

export type ToggleAllOptions = {
  checked?: boolean;
  skipDisabled?: boolean;
};

export class CheckboxGroup extends TomatoComponent {
  toggleAll(options?: boolean | ToggleAllOptions): void;
}
