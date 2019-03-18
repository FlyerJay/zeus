<template>
    <div class="market page">
        <!-- 数据过滤 -->
        <div class="market-filter">
            <div class="filter-item">
                <picker @change="changeSpec" :range="specList" mode="multiSelector">
                    <div class="filter-picker">
                        <template v-if="query.spec">
                            <text>{{ query.spec }}</text>
                        </template>
                        <template v-else>
                            <text>规格</text>
                        </template>
                        <text class="iconfont icon-select"></text>
                    </div>
                </picker>
            </div>

            <div class="filter-item">
                <picker @change="changeType" :range="typeList">
                    <div class="filter-picker">
                        <template v-if="query.type">
                            <text>{{ query.type }}</text>
                        </template>
                        <template v-else>
                            <text>类型</text>
                        </template>
                        <text class="iconfont icon-select"></text>
                    </div>
                </picker>
            </div>

            <div class="filter-item">
                <picker @change="changeAddress" :range="addressList">
                    <div class="filter-picker">
                        <template v-if="query.address">
                            <text>{{ query.address }}</text>
                        </template>
                        <template v-else>
                            <text>供应商所在地</text>
                        </template>
                        <text class="iconfont icon-select"></text>
                    </div>
                </picker>
            </div>

            <div class="filter-item">
                <picker @change="changeSupllier" :range="supplierList">
                    <div class="filter-picker">
                        <template v-if="query.supplierName">
                            <text>{{ query.supplierName }}</text>
                        </template>
                        <template v-else>
                            <text>供应商名称</text>
                        </template>
                        <text class="iconfont icon-select"></text>
                    </div>
                </picker>
            </div>
        </div>

        <!-- 行情信息列表 -->
        <div class="market-list">
            <market-item
                v-for="(item, index) in marketList"
                :key="index"
                :data="item">
            </market-item>

            <div class="continue" v-if="continueLoadVisible">
                <button :loading="isLoading" @click="continueLoad">加载更多</button>
            </div>
        </div>
    </div>
</template>
<script>
    import ajax from '../../utils/request'
    import { specList, typeList } from '../../utils/data'
    import marketItem from '../../components/market-item'

    specList.forEach(item => item.unshift('全部'))
    typeList.unshift('全部')

    export default {
        name: 'market',

        description: '行情信息',

        data () {
            return {
                marketList: [], // 行情信息列表
                addressList: [], // 地址列表
                supplierList: [], // 供应商列表
                specList: specList,
                typeList: typeList,
                query: {
                    page: 1,
                    spec: '',
                    address: '',
                    type: '',
                    supplierName: ''
                },
                continueLoadVisible: false,
                isLoading: false
            }
        },

        components: {
            'market-item': marketItem
        },

        mounted () {
            this.getMarketList()
            this.getAddressList()
            this.getSupplierList()
        },

        methods: {
            getMarketList () {
                this.query.page = 1
                wx.showLoading({ title: '加载中' })
                return ajax({
                    url: '/price/list',
                    data: this.query,
                }).then(response => {
                    wx.hideLoading()
                    if (response.code === 200) {
                        this.marketList = response.data.row
                        this.canLoad(response.data.totalCount)
                    }
                    return true
                })
            },

            getAddressList () {
                ajax({
                    url: '/supplier/address'
                }).then(response => {
                    if (response.code === 200) {
                        this.addressList = response.data.map(item => {
                            return item.address
                        })
                        this.addressList.unshift('全部')
                    }
                })
            },

            getSupplierList () {
                ajax({
                    url: '/supplier/list',
                    data: {
                        page: 1,
                        pageSize: 100,
                    }
                }).then(response => {
                    if (response.code === 200) {
                        this.supplierList = response.data.row
                            .filter(item => item.isValide === 1)
                            .map(item => item.supplierName)
                        this.supplierList.unshift('全部')
                    }
                })
            },

            changeSpec (e) {
                var oldValue = this.query.spec
                var specArray = []
                var spec1 = this.specList[0][e.mp.detail.value[0]]
                var spec2 = this.specList[1][e.mp.detail.value[1]]
                var spec3 = this.specList[2][e.mp.detail.value[2]]
                if (spec1 !== '全部') specArray.push(spec1)
                if (spec2 !== '全部') specArray.push(spec2)
                if (spec3 !== '全部') specArray.push(spec3)
                this.query.spec = specArray.join('*')

                if (oldValue !== this.query.spec) {
                    this.getMarketList()
                }
            },

            changeType (e) {
                var oldValue = this.query.type
                this.query.type = this.typeList[e.mp.detail.value]
                if (this.query.type === '全部') {
                    this.query.type = ''
                }
                if (oldValue !== this.query.type) {
                    this.getMarketList()
                }
            },

            changeAddress (e) {
                var oldValue = this.query.address
                this.query.address = this.addressList[e.mp.detail.value]
                if (this.query.address === '全部') {
                    this.query.address = ''
                }
                if (oldValue !== this.query.address) {
                    this.getMarketList()
                }
            },

            changeSupllier (e) {
                var oldValue = this.query.supplierName
                this.query.supplierName = this.supplierList[e.mp.detail.value]
                if (this.query.supplierName === '全部') {
                    this.query.supplierName = ''
                }
                if (oldValue !== this.query.supplierName) {
                    this.getMarketList()
                }
            },

            // 可以加载更多吗 ？
            canLoad (total) {
                if (this.marketList.length !== 0 && this.marketList.length < total) {
                    this.continueLoadVisible = true
                } else {
                    this.continueLoadVisible = false
                }
            },

            continueLoad (e) {
                this.query.page++
                this.isLoading = true
                ajax({
                    url: '/price/list',
                    data: this.query
                }).then(response => {
                    this.isLoading = false
                    if (response.code === 200) {
                        this.marketList.push(...response.data.row)
                        this.canLoad(response.data.totalCount)
                    }
                })
            },

            // 数据重置
            reset () {
                this.isLoading = false
                this.marketList = []
                this.addressList = []
                this.supplierList = []
                this.query.page = 1
                this.query.spec = ''
                this.query.type = ''
                this.query.address = ''
                this.query.supplierName = ''
                this.continueLoadVisible = false
                this.isLoading = false
            }
        },

        onPullDownRefresh (a) {
            this.reset()
            this.getMarketList()
                .then(() => {
                    wx.stopPullDownRefresh()
                })
            this.getAddressList()
            this.getSupplierList()
        }
    }
</script>
<style lang="less" scoped>
    .market {
        position: relative;

        .market-filter {
            height: 30px;
            line-height: 30px;
            display: flex;
            flex-direction: row;
            padding: 0 15px;
            font-size: 12px;
            color: #333;
            justify-content: space-between;
            box-sizing: border-box;
            border-bottom: 1px solid #f7f7f7;
            position: fixed;
            z-index: 11;
            background-color: #fff;
            top: 0;
            left: 0;
            right: 0;

            .filter-item {
                line-height: 30px;
                .iconfont {
                    font-size: 12px;
                }
            }
        }

        .market-list {
            padding-top: 30px;
        }

        .continue {
            padding: 0 15px;
            margin: 5px 0px;

            button {
                background-color: #fff;
                border: none;
                font-size: 14px;
                color: #666;
            }
        }
    }
</style>
