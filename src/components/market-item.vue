<template>
    <div class="market-item">
        <div class="data-part">
            <div class="data spec">
                {{ data.spec }}
            </div>
        </div>
        <div class="data-part">
            <div class="data-line">
                <div class="data type">
                    {{ data.type }}
                </div>
                <div class="data update-time">
                    {{ data.lastUpdateTime }}
                </div>
            </div>
            <div class="data-line">
                <div class="data supplier">
                    {{ data.supplierName }}
                </div>
                <div class="data price">
                    {{ data.value }}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'market-item',

        description: '行情信息',

        props: {
            data: Object
        }
    }
</script>
<style lang="less" scoped>
    .market-item {
        margin: 0 15px;
        display: flex;
        flex-direction: row;
        font-size: 14px;
        margin-top: 10px;
        border: 1px solid #f7f7f7;

        .data-part {
            &:first-child {
                width: 100px;
                background-color: #ff9900;
                color: #fff;
            }
            &:last-child {
                flex-grow: 1;
            }

            .data {
                display: flex;
                flex: row;
                justify-content: center;
                align-items: center;
                height: 80px;
            }
            
            .data-line {
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;

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
                    width: 50%;
                    height: 40px;
                    text-align: center;
                    font-size: 13px;
                    
                    &.supplier {
                        font-size: 12px;
                    }

                    &:nth-child(2n + 1) {
                        background-color: #f7f7f7;
                    }
                }
            }
        }
    }
</style>


