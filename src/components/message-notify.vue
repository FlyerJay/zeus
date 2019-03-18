<template>
    <div class="message-notify">
        <text class="iconfont icon-notify"></text>
        <div class="notify-content">
            <text class="notify-text" :animation="animationData">{{ notify.message || '重要通知' }}</text>
        </div>
        <text class="notify-time">{{ timeFormat }}</text>
    </div>
</template>
<script>
    import { formatDate } from '../utils'
    export default {
        name: 'message-notify',

        description: '首页消息通知 - 滚动',

        props: {
            messageList: Array,
            duration: {
                type: Number,
                default: 5000
            }
        },

        data () {
            return {
                timeObserve: null,
                activeIndex: -1,
                animationData: {},
                animation: null
            }
        },

        created () {
            this.timeObserve = setInterval(() => {
                if (this.activeIndex < this.messageList.length - 1
                && this.messageList.length !== 0) {
                    this.activeIndex ++
                } else {
                    this.activeIndex = 0
                }
            }, this.duration)
            this.animation = wx.createAnimation({ duration: 2000 })
        },

        watch: {
            activeIndex () {
                wx.nextTick(() => {
                    this.notifyAnimate()
                })
            }
        },

        methods: {
            notifyAnimate () {
                var query = wx.createSelectorQuery()
                query.select('.notify-text').boundingClientRect()
                query.select('.notify-content').boundingClientRect()
                query.exec(result => {
                    var nodeText = result[0]
                    var nodeContent = result[1]
                    if (!nodeText || !nodeContent) return
                    if ((nodeText.width + 10) > nodeContent.width) {
                        this.animation
                            .translateX(nodeContent.width - nodeText.width - 40)
                            .step()
                        this.animationData = this.animation.export()
                    }
                })
                this.animation
                    .translateX(0)
                    .step()
                this.animationData = this.animation.export()
            }
        },

        computed: {
            notify () {
                if (this.activeIndex >= 0)
                    return this.messageList[this.activeIndex]
                return {}
            },

            timeFormat () {
                if (this.notify.createTime) {
                    var date = new Date(this.notify.createTime - 0)
                    return formatDate(date)
                }
                return ''
            }
        },

        beforeDestroy () {
            clearInterval(this.timeObserve)
            this.timeObserve = null
        }
    }
</script>
<style lang="less" scoped>
    .message-notify {
        font-size: 14px;
        padding: 0 15px;
        background-color: #19be6b;
        color: #fff;
        margin-top: 10px;
        height: 40px;
        line-height: 40px;
        .iconfont {
           float: left; 
           padding-right: 5px;
        }
        .notify-content {
            font-size: 13px;
            padding-left: 5px;
            width: 200px;
            white-space: nowrap;
            display: block;
            float: left;
            overflow: hidden;
            .notify-text {
                display: inline-block;
            }
        }
        .notify-time {
            float: right;
        }
    }
</style>