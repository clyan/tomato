<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <tomato-button
        type="primary"
        :text="t('showOverlay')"
        style="margin-left: 16px"
        @click="show = true"
      />

      <tomato-overlay :show="show" @click="show = false" />
    </demo-block>

    <demo-block :title="t('embeddedContent')">
      <tomato-button
        type="primary"
        :text="t('embeddedContent')"
        style="margin-left: 16px"
        @click="showEmbedded = true"
      />

      <tomato-overlay :show="showEmbedded" @click="showEmbedded = false">
        <div class="wrapper">
          <div class="block" />
        </div>
      </tomato-overlay>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      showOverlay: '显示遮罩层',
      embeddedContent: '嵌入内容',
    },
    'en-US': {
      showOverlay: 'Show Overlay',
      embeddedContent: 'Embedded Content',
    },
  },

  data() {
    return {
      show: false,
      showEmbedded: false,
    };
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-overlay {
  background: @t-white;

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .block {
    width: 120px;
    height: 120px;
    background-color: @t-white;
  }
}
</style>
