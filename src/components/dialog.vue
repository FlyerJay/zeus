<template>
    <div class="dialog-container" v-if="visible">
        <div class="dialog">
            <slot nam="content"></slot>
        </div>
        <div @tap="clickMask" class="dialog-mask" v-show="mask" ></div>
    </div>
</template>
<script>
    export default {
        name: 'dialog',

        props: {
            visible: {
                type: Boolean,
                default: false
            },
            mask: {
                type: Boolean,
                default: true
            }
        },

        data () {
            return {
                visibleLv: this.visible
            }
        },

        watch: {
            visible (newVal) {
                this.visibleLv = false
            }
        },

        methods: {
            clickMask () {
                this.$emit('clickMask')
            }
        }
    }
</script>
<style lang="less" scoped>
    .dialog-container {
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        position: fixed;
        z-index: 999;

        .dialog {
            position: fixed;
            left: 50%;
            top: 50%;
            transform: translate3d(-50%, -50%, 0);
            z-index: 1001;
        }
        .dialog-mask {
            position: fixed;
            display: block;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 1000;
            pointer-events: unset;
        }
    }
</style>


