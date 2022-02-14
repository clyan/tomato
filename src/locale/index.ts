import Vue from 'vue';
import { deepAssign } from '../utils/deep-assign';
import defaultMessages from './lang/zh-CN';

const proto = Vue.prototype;
const { defineReactive } = (Vue as any).util;

defineReactive(proto, '$tomatoLang', 'zh-CN');
defineReactive(proto, '$tomatoMessages', {
  'zh-CN': defaultMessages,
});

export default {
  messages() {
    return proto.$tomatoMessages[proto.$tomatoLang];
  },

  use(lang: string, messages?: object) {
    proto.$tomatoLang = lang;
    this.add({ [lang]: messages });
  },

  add(messages = {}) {
    deepAssign(proto.$tomatoMessages, messages);
  },
};
