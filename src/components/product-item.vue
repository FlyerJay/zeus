<template>
    <div class="product-item">
        <div class="data-part">
            <div class="part spec">{{ specFormat }}</div>
            <div class="part">
                <div class="data-line clearfix">
                    <div class="data lastupdate-time">{{ updateTimeFormat }}</div>
                    <div class="data type">{{ data.type }}</div>
                    <div class="data supplier">
                        <div class="supplier-name">{{ data.supplierName }}</div>
                    </div>
                </div>
                <div class="data-line clearfix">
                    <div class="data price" v-if="data.value">
                        <text class="iconfont icon-price"></text>
                        <text>{{ data.value }}</text>
                    </div>
                    <div class="data invalid" v-else>
                        暂无
                    </div>
                    <div class="data benifit">
                        <!-- <text class="iconfont icon-sale"></text> -->
                        <text>{{ data.benifit }}</text>
                        <template v-if="data.benifitAdjust > 0">
                            <text class="iconfont icon-drop"></text>
                            <text class="benifit-adjust drop">{{ benifitAdjustFormat }}</text>
                        </template>
                        <template v-if="data.benifitAdjust < 0">
                            <text class="iconfont icon-rise"></text>
                            <text class="benifit-adjust rise">{{ benifitAdjustFormat }}</text>
                        </template>
                    </div>
                    <div class="data pure-price" v-if="data.purePrice">
                        <text class="iconfont icon-price"></text>
                        <text>{{ data.purePrice }}</text>
                    </div>
                    <div class="data invalid" v-else>
                        暂无
                    </div>
                </div>
            </div>
            
        </div>
        <div class="data-part">
            <div class="part long">{{ data.long }}米</div>
            <div class="part">
                <div class="data-line clearfix">
                    <div class="data amount">{{ data.inventoryAmount }}件</div>
                    <div class="data per">{{ data.perAmount }}支/件</div>
                    <div class="data freight">
                         <text class="iconfont icon-transform"></text>
                        <text>{{ data.freight }}</text>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'product-item',

        props: {
            data: Object,
        },

        computed: {
            specFormat () {
                if (!this.data.spec) return '-'
                let specArr = this.data.spec.split('*')
                return `${specArr[0]} * ${specArr[1]} *${specArr[2]}`.trim()
            },

            updateTimeFormat () {
                if (!this.data.lastUpdateTime) return '-'
                let time = this.data.lastUpdateTime + ''
                let year = time.slice(0, 4)
                let month = time.slice(4, 6)
                let date = time.slice(6, 8)
                return `${year}/${month}/${date}`
            },

            benifitAdjustFormat () {
                if (!this.data.benifitAdjust) return ''
                return Math.abs(this.data.benifitAdjust)
            }
        },

        mounted () {
        }
    }
</script>
<style lang="less" scoped>
    .product-item {
        font-size: 14px;
        margin: 0 15px;
        margin-top: 15px;
        border: 1px solid #f7f7f7;
        // box-shadow: 1px 0px 5px #f7f7f7;

        .data-part {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            .part:first-child {
                width: 70px;
                text-align: center;
                white-space: pre-wrap;
                padding: 0 5px;
                height: 40px;
                border-right: 1px solid #fff;
                display: flex;
                flex: row;
                align-items: center;
                justify-content: center;
                &.spec {
                    height: 80px;
                    line-height: 1.2em;
                }
                background-color: #2db7f5;
                color: #fff;
            }
            .part:last-child {
                flex-grow: 1;
            }
        }
        
        .data {
            text-align: center;
        }

        .data-line {
            display: flex;
            flex: row;
            justify-content: space-around;
            align-items: center;
            height: 40px;
            line-height: 40px;
            box-sizing: border-box;

            &:nth-child(2n) {
                .data {
                    &:nth-child(2n +1) {
                        background-color: #fff;
                    }

                    &:nth-child(2n) {
                        background-color: #f7f7f7;
                    }
                }
            }

            .data {
                width: 33.33%;
                font-size: 13px;

                &:nth-child(2n + 1) {
                    background-color: #f7f7f7;
                }

                &.price {
                    text-decoration: line-through;
                }

                &.pure-price {
                    color: #ed4014;
                    font-weight: bold;
                }

                &.supplier {
                    font-size: 11px;
                    height: 100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    .supplier-name {
                        line-height: 1em;
                    }
                }

                &.benifit {
                    color: #ff9900;

                    .benifit-adjust {
                        font-size: 8px;
                        color: #ed4014;

                        &.drop {
                            color: #19be6b;
                        }
                    }
                }

                &.invalid {
                    color: #999;
                    font-size: 12.5px;
                }
            }
        }

        .iconfont {
            &.icon-price {
                font-size: 12px;
            }
            &.icon-sale {
                font-size: 12px;
                color: #ff9900;
            }
            &.icon-rise {
                font-size: 12px;
                color: #ed4014;
            }
            &.icon-drop {
                font-size: 12px;
                color: #19be6b;
            }
            &.icon-transform {
                font-size: 13px;
                color: #2db7f5;
            }
        }
    }
</style>

