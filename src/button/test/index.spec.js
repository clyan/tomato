import { mount } from '@vue/test-utils';
import Button from '../../button';

test('renderbutton', () => {
  const wrapper = mount(Button);
  expect(wrapper).toMatchSnapshot();
});
