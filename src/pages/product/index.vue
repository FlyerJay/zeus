<template>
    <div class="product page">
        <!-- 现货过滤器 -->
        <div class="product-filter">
            <div class="filter-item">
                <picker @change="changeSpec" :range="specList" mode="multiSelector">
                    <div class="filter-picker">
                        <template v-if="showSpec">
                            <text>{{ showSpec }}</text>
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

            <div class="filter-item" @click="sortDialogVisible = !sortDialogVisible">
                <text>排序</text>
                <text class="iconfont icon-sort"></text>
            </div>
        </div>

        <div class="product-list">
            <product-item
                v-for="(item, index) in productList"
                :key="index"
                :data="item">
            </product-item>

            <div class="empty" v-show="productList.length === 0">
                暂无数据~
            </div>

            <div class="continue" v-if="continueLoadVisible">
                <button :loading="isLoading" @click="continueLoad">加载更多</button>
            </div>
        </div>

        <!-- 排序方式列表 -->
        <div class="sort" v-show="sortDialogVisible">
            <div class="sort-method" :class="{ 'selected': !sortMethod }" @click="sortMethod = ''">
                <text>默认排序</text>
            </div>
            <div class="sort-method" :class="{ 'selected': sortMethod === 1 }" @click="sortMethod = 1">
                <text>按出厂价由低到高</text>
                <text class="iconfont icon-drop"></text>
            </div>
            <div class="sort-method" :class="{ 'selected': sortMethod === 2 }" @click="sortMethod = 2">
                <text>按出厂价由高到低</text>
                <text class="iconfont icon-rise"></text>
            </div>
            <div class="sort-method" :class="{ 'selected': sortMethod === 3 }" @click="sortMethod = 3">
                <text>按开单价由低到高</text>
                <text class="iconfont icon-drop"></text>
            </div>
            <div class="sort-method" :class="{ 'selected': sortMethod === 4 }" @click="sortMethod = 4">
                <text>按开单价由高到低</text>
                <text class="iconfont icon-rise"></text>
            </div>
        </div>

        <!-- 排序弹窗mask -->
        <div class="sort-mask" v-show="sortDialogVisible" @click="sortDialogVisible = false"></div>
    </div>
</template>
<script>
    import ajax from '../../utils/request'
    import productItem from '../../components/product-item'
    import { specList, typeList } from '../../utils/data'

    specList.forEach(item => item.unshift('全部'))
    typeList.unshift('全部')

    export default {
        name: 'product',

        description: '现货查询',

        data () {
            return {
                originList: [], // 未排序的数据
                productList: [], // 排序后的数据
                query: {
                    page: 1,
                    spec: '', // 规格
                    type: '' // 类型
                },
                specList: specList,
                typeList: typeList,
                sortMethod: '', // 排序方式
                sortDialogVisible: false, // 排序窗口是否可见
                continueLoadVisible: false, // 继续加载是否可见
                isLoading: false,
                showSpec: ''
            }
        },

        components: {
            'product-item': productItem
        },

        mounted () {
            this.getProductList()
        },

        watch: {
            sortMethod () {
                this.sort()
            }
        },

        methods: {
            getProductList () {
                this.query.page = 1
                wx.showLoading({ title: '数据加载中' })
                return ajax({
                    url: '/product/kx',
                    data: this.query
                }).then(response => {
                    wx.hideLoading()
                    if (response.code === 200) {
                        this.originList = response.data.row
                        this.canLoad(response.data.totalCount)
                        this.sort()
                    }
                    return true
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
                this.showSpec = specArray.join('*')
                this.query.spec = `${spec1}*${spec2}*${spec3}`

                if (oldValue !== this.query.spec) {
                    this.getProductList()
                }
            },

            changeType (e) {
                var oldValue = this.query.type
                this.query.type = this.typeList[e.mp.detail.value]
                if (this.query.type === '全部') {
                    this.query.type = ''
                }
                if (oldValue !== this.query.type) {
                    this.getProductList()
                }
            },

            // 排序
            sort () {
                // shallow copy
                var sortList = this.originList.slice()
                switch (this.sortMethod) {
                    case 1:
                        this.productList = sortList.sort((a, b) => a.value - b.value)
                        break;
                    case 2:
                        this.productList = sortList.sort((a, b) => b.value - a.value)
                        break;
                    case 3:
                        this.productList = sortList.sort((a, b) => a.purePrice - b.purePrice)
                        break;
                    case 4:
                        this.productList = sortList.sort((a, b) => b.purePrice - a.purePrice)
                        break;
                    default:
                        this.productList = this.originList
                }
            },

            // 可以加载更多吗 ？
            canLoad (total) {
                if (this.originList.length !== 0 && this.originList.length < total) {
                    this.continueLoadVisible = true
                } else {
                    this.continueLoadVisible = false
                }
            },

            // 继续加载
            continueLoad () {
                this.query.page++
                this.isLoading = true
                ajax({
                    url: '/product/kx',
                    data: this.query
                }).then(response => {
                    this.isLoading = false
                    if (response.code === 200) {
                        this.originList.push(...response.data.row)
                        this.canLoad(response.data.totalCount)
                        this.sort()
                    }
                })
            },

            // 数据重置
            reset () {
                this.isLoading = false
                this.originList = []
                this.productList = []
                this.query.page = 1
                this.query.spec = ''
                this.query.type = ''
                this.sortMethod = ''
                this.sortDialogVisible = false
                this.continueLoadVisible = false
                this.isLoading = false
            }
        },

        onPullDownRefresh (a) {
            this.reset()
            this.getProductList()
                .then(() => {
                    wx.stopPullDownRefresh()
                })
        }
    }
</script>
<style lang="less" scoped>
    .product {
        position: relative;

        .product-filter {
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

        .sort {
            position: fixed;
            top: 30px;
            left: 0;
            right: 0;
            background-color: #fff;
            text-align: center;
            font-size: 12px;
            color: #666;
            border-bottom: 1px solid #f7f7f7;
            z-index: 10;
            padding: 5px 0px;

            .sort-method {
                line-height: 25px;
                height: 25px;

                &.selected {
                    color: #19be6b;
                }
                
                .iconfont {
                    font-size: 12px;
                }
            }
        }

        .sort-mask {
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: rgba(0, 0, 0, 0.3);
            z-index: 9;
        }

        .product-list {
            padding-top: 30px;
        }

        .empty {
            text-align: center;
            color: #999;
            padding-top: 30px;
            font-size: 14px;
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