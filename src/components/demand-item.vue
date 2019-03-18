<template>
    <div class="demand-item">
        <div class="title">
            <text class="demand-no">{{ data.demandNo }}</text>
            <text class="demand-state" :class="classFormat">({{ stateFormat }})：</text>
            <text class="demand-tips">(报价有效期为半天，提供全款锁价服务，以款到时间为准；重量为理算重量，以实际过磅为准，直发需满30吨)</text>
        </div>
        <div class="demand-detail">
            <div class="demand-line">
                <text class="detail-label">创建时间</text>
                <text class="detail-value">{{ createTimeFormat }}</text>
            </div>
            <div class="demand-line" v-if="data.priceTime">
                <text class="detail-label">报价时间</text>
                <text class="detail-value">{{ priceTimeFormat }}</text>
            </div>
            <div class="demand-line" v-if="data.feedbackTime">
                <text class="detail-label">反馈时间</text>
                <text class="detail-value">{{ feedbackTimeFormat }}</text>
            </div>
            <div class="demand-line">
                <text class="detail-label">销售</text>
                <text class="detail-value">{{ data.userId }}</text>
            </div>
            <div class="demand-line" v-if="data.customerName">
                <text class="detail-label">客户</text>
                <text class="detail-value">{{ data.customerName }}</text>
            </div>
            <div class="demand-line">
                <text class="detail-label">采购</text>
                <text class="detail-value">{{ data.priceUser }}</text>
            </div>
            
            <div class="demand-line" v-if="data.demandWeight">
                <text class="detail-label">总重量</text>
                <text class="detail-value">{{ data.demandWeight }}吨</text>
            </div>
            <div class="demand-line" v-if="data.comment">
                <text class="detail-label">备注</text>
                <text class="detail-value comment">{{ data.comment }}</text>
            </div>
            <div class="demand-line">
                <text class="detail-label">需求详情</text>
                <text class="detail-value detail" @tap="viewDemandDetail(data)">查看详情</text>
            </div>
        </div>

        <x-dialog :visible="visible" @clickMask="visible = false">
            <div class="dialog-content">
                <div class="demand-detail">
                    <div class="demand-detail-line" v-for="(item, index) in detailList" :key="index">
                        <div class="data spec">{{ item.spec }}</div>
                        <div class="data type">{{ item.type }}</div>
                        <div class="data amount">{{ item.demandAmount }}</div>
                        <div class="data weight">{{ item.demandWeight }}吨</div>
                        <div class="data price">{{ item.feedbackPrice }}</div>
                        <div class="data factory">{{ item.factoryPrice }}</div>
                        <div class="data freight">{{ item.freight }}</div>
                    </div>
                </div>
            </div>
        </x-dialog>
    </div>
</template>
<script>
    import { formatTime, formatGutter } from '../utils'
    import XDialog from './dialog'
    import ajax from '../utils/request'

    export default {
        name: 'demand-item',

        description: '需求实体',

        props: {
            data: Object
        },

        data () {
            return {
                visible: false,
                detailList: []
            }
        },

        components: {
            'x-dialog': XDialog
        },

        computed: {
            stateFormat () {
                if (!this.data.state && this.data.state !== 0) return ''
                const states = {
                    '0': '未报价',
                    '1': '待反馈',
                    '2': '已反馈',
                    '3': '未成交',
                    '4': '已成交'
                }
                return states[this.data.state]
            },

            classFormat () {
                if (!this.data.state && this.data.state !== 0) return ''
                const states = {
                    '0': 'unprice',
                    '1': 'submit',
                    '2': 'priced',
                    '3': 'undeal',
                    '4': 'deal'
                }
                return states[this.data.state]
            },

            createTimeFormat () {
                return this.timeFormat(this.data.createTime)
            },

            priceTimeFormat () {
                const gutter = formatGutter(this.data.priceTime - this.data.createTime)
                return this.timeFormat(this.data.priceTime) + `（${ gutter }）`
            },

            feedbackTimeFormat () {
                const gutter = formatGutter(this.data.feedbackTime - this.data.createTime)
                return this.timeFormat(this.data.feedbackTime) + `（${ gutter }）`
            }
        },

        methods: {
            timeFormat (timestamp) {
                let date = new Date(timestamp - 0)
                if (!timestamp || date.toString() === 'Invalid Date') return ''
                return formatTime(date)
            },

            viewDemandDetail (data) {
                wx.showLoading({ title: '加载中' })
                ajax({
                    url: '/demand/detail',
                    data: {
                        demandNo: data.demandNo
                    }
                }).then(response => {
                    wx.hideLoading()
                    if (response.code === 200) {
                        this.detailList = response.data
                        this.visible = true
                    }
                })
            }
        }
    }
</script>
<style lang="less" scoped>
    .demand-item {
        padding: 0 15px;
        padding-top: 10px;

        .title {
            font-size: 14px;
            color: #333;

            .demand-state {
                color: #666;
                &.submit {
                    color: #5cadff;
                }
                &.priced {
                    color: #ff9900;
                }
                &.undeal {
                    color: #ed4014;
                }
                &.deal {
                    color: #19be6b;
                }
            }

            .demand-tips {
                color: #999;
            }
        }

        .demand-detail {
            font-size: 12px;
            border-top: 1px solid #ddd;
            border-left: 1px solid #ddd;
            margin-top: 5px;

            .demand-line {
                border-bottom: 1px solid #ddd;
                border-right: 1px solid #ddd;
                background-color: #f7f7f7;

                .detail-label {
                    padding: 2px 5px;
                    display: inline-block;
                    width: 70px;
                    border-right: 1px solid #ddd;
                    color: #666;
                }

                .detail-value {
                    padding: 2px 5px;
                }

                .comment {
                    color: #ed4014;
                }

                .detail {
                    text-decoration: underline;
                    color: #5cadff;
                }

                &:nth-child(2n) {
                    background-color: #fff;
                }
            }
        }

        .dialog-content {
            width: 350px;
            background-color: #fff;
            border-radius: 10px;
            border: none;
            max-height: 200px;
            overflow: scroll;

            .demand-detail {
                padding: 10px 15px;
                border: none;

                .demand-detail-line {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    height: 30px;
                    line-height: 30px;
                }
            }
        }
    }
</style>


