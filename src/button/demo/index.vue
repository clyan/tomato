<template>
    <demo-section>
        <demo-block :title="t('type')">
            <div class="demo-button-row">
                <tomato-button type="primary">{{ t('primary') }}</tomato-button>
                <tomato-button type="info">{{ t('info') }}</tomato-button>
                <tomato-button type="default">{{ t('default') }}</tomato-button>
            </div>
            <tomato-button type="danger">{{ t('danger') }}</tomato-button>
            <tomato-button type="warning">{{ t('warning') }}</tomato-button>
        </demo-block>

        <demo-block :title="t('plain')">
            <tomato-button plain type="primary" :text="t('plain')" />
            <tomato-button plain type="info" :text="t('plain')" />
        </demo-block>

        <demo-block :title="t('hairline')">
            <tomato-button plain hairline type="primary" :text="t('hairlineButton')" />
            <tomato-button plain hairline type="info" :text="t('hairlineButton')" />
        </demo-block>

        <demo-block :title="t('disabled')">
            <tomato-button disabled type="primary" :text="t('disabled')" />
            <tomato-button disabled type="info" :text="t('disabled')" />
        </demo-block>

        <demo-block :title="t('loadingStatus')">
            <tomato-button loading type="primary" />
            <tomato-button loading type="primary" loading-type="spinner" />
            <tomato-button loading :loading-text="t('loadingText')" type="info" />
        </demo-block>

        <demo-block :title="t('shape')">
            <tomato-button type="primary" square :text="t('square')" />
            <tomato-button type="info" round :text="t('round')" />
        </demo-block>

        <demo-block :title="t('icon')">
            <tomato-button type="primary" icon="plus" />
            <tomato-button type="primary" icon="plus" :text="t('button')" />
            <tomato-button
                plain
                type="info"
                icon="https://img01.yzcdn.cn/vant/user-active.png"
                :text="t('button')"
            />
        </demo-block>

        <demo-block :title="t('size')">
            <tomato-button type="primary" size="large">{{ t('large') }}</tomato-button>
            <tomato-button type="primary" size="normal">{{ t('normal') }}</tomato-button>
            <tomato-button type="primary" size="small">{{ t('small') }}</tomato-button>
            <tomato-button type="primary" size="mini">{{ t('mini') }}</tomato-button>
        </demo-block>

        <demo-block :title="t('blockElement')">
            <tomato-button type="primary" block>{{ t('blockElement') }}</tomato-button>
        </demo-block>

        <demo-block v-if="!isWeapp" :title="t('router')">
            <tomato-button :text="t('urlRoute')" type="primary" url="/vant/mobile.html" />
            <tomato-button :text="t('vueRoute')" type="primary" to="index" />
        </demo-block>

        <demo-block :title="t('customColor')">
            <tomato-button color="#7232dd" :text="t('pure')" />
            <tomato-button plain color="#7232dd" :text="t('pure')" />
            <tomato-button
                color="linear-gradient(to right, #ff6034, #ee0a24)"
                :text="t('gradient')"
            />
        </demo-block>
    </demo-section>
</template>

<script>
export default {
    i18n: {
        'zh-CN': {
            type: '按钮类型',
            size: '按钮尺寸',
            icon: '图标按钮',
            loading: '加载状态',
            shape: '按钮形状',
            default: '默认按钮',
            primary: '主要按钮',
            info: '信息按钮',
            danger: '危险按钮',
            warning: '警告按钮',
            large: '大号按钮',
            normal: '普通按钮',
            small: '小型按钮',
            mini: '迷你按钮',
            plain: '朴素按钮',
            square: '方形按钮',
            round: '圆形按钮',
            hairline: '细边框',
            hairlineButton: '细边框按钮',
            loadingText: '加载中...',
            router: '页面导航',
            urlRoute: 'URL 跳转',
            vueRoute: '路由跳转',
            customColor: '自定义颜色',
            pure: '单色按钮',
            gradient: '渐变色按钮',
            blockElement: '块级元素',
        },
        'en-US': {
            type: 'Type',
            size: 'Size',
            icon: 'Icon',
            loading: 'Loading',
            shape: 'Shape',
            default: 'Default',
            primary: 'Primary',
            info: 'Info',
            danger: 'Danger',
            warning: 'Warning',
            large: 'Large',
            normal: 'Normal',
            small: 'Small',
            mini: 'Mini',
            plain: 'Plain',
            square: 'Square',
            round: 'Round',
            hairline: 'Hairline',
            hairlineButton: 'Hairline',
            loadingText: 'Loading...',
            router: 'Router',
            urlRoute: 'URL',
            vueRoute: 'Vue Router',
            customColor: 'Custom Color',
            pure: 'Pure',
            gradient: 'Gradient',
            blockElement: 'Block Element',
        },
    },
};
</script>

<style lang="less">
@import "../../style/var";

.demo-button {
    .tomato-button {
        &--large {
            margin-bottom: @padding-md;
        }

        &--small,
        &--normal:not(:last-child) {
            margin-right: @padding-md;
        }
    }

    .tomato-doc-demo-block {
        padding: 0 @padding-md;
    }

    .tomato-doc-demo-block__title {
        padding-left: 0;
    }

    &-row {
        margin-bottom: @padding-sm;
    }
}
</style>
