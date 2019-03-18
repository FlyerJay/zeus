<template>
    <div class="demand-list page">
        <!-- 过滤器 -->
        <div class="demand-filter">
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
                <picker @change="changeState" :range="stateList">
                    <div class="filter-picker">
                        <template v-if="query.stateStr">
                            <text>{{ query.stateStr }}</text>
                        </template>
                        <template v-else>
                            <text>状态</text>
                        </template>
                        <text class="iconfont icon-select"></text>
                    </div>
                </picker>
            </div>

            <div class="filter-item" @tap="demandUserDialogVisible = true">
                <template v-if="query.demandUser">
                    <text>{{ query.demandUser }}</text>
                </template>
                <template v-else>
                    <text>销售</text>
                </template>
                <text class="iconfont icon-select"></text>
            </div>

            <x-dialog :visible="demandUserDialogVisible" @clickMask="cancelDemandUser">
                <div class="dialog-content">
                    <div class="input-control">
                        <label for="demandUser">销售</label>
                        <input type="text" v-model="query.demandUser" name="demandUser" maxlength="5">
                    </div>

                    <div class="toolbar">
                        <button size="mini" @click="cancelDemandUser">取消</button>
                        <button size="mini" type="primary" @click="confirmDemandUser">确定</button>
                    </div>
                </div>
            </x-dialog>

            <div class="filter-item" @tap="customNameDialogVisible = true">
                <template v-if="query.customName">
                    <text>{{ query.customName }}</text>
                </template>
                <template v-else>
                    <text>客户名称</text>
                </template>
                <text class="iconfont icon-select"></text>
            </div>

            <x-dialog :visible="customNameDialogVisible" @clickMask="cancelCustomName">
                <div class="dialog-content">
                    <div class="input-control">
                        <label for="customName">销售</label>
                        <input type="text" v-model="query.customName" name="customName" maxlength="5">
                    </div>

                    <div class="toolbar">
                        <button size="mini" @click="cancelCustomName">取消</button>
                        <button size="mini" type="primary" @click="confirmCustomName">确定</button>
                    </div>
                </div>
            </x-dialog>
        </div>
        
        <!-- 需求列表 -->
        <div class="list-container">
            <demand-item v-for="(item, index) in demandList" :key="index" :data="item"></demand-item>

            <div class="continue" v-if="continueLoadVisible">
                <button :loading="isLoading" @click="continueLoad">加载更多</button>
            </div>
        </div>
    </div>
</template>
<script>
    import ajax from '../../utils/request'
    import { specList } from '../../utils/data'
    import demandItem from '../../components/demand-item'
    import XDialog from '../../components/dialog'

    export default {
        name: 'demand-list',

        description: '需求列表',

        data () {
            return {
                demandList: [], // 需求列表,
                specList: specList,
                stateList: ['全部', '未报价', '待反馈', '已反馈', '未成交', '已成交'], // 状态列表
                query: {
                    page: 1,
                    customName: '', // 客户名称
                    demandUser: '', // 销售员
                    state: '', // 需求状态
                    createTime: '', // 提交开始时间
                    endTime: '', // 提交结束时间
                    stateStr: '' // 需求状态显示用
                },
                continueLoadVisible: false,
                isLoading: false,
                demandUserDialogVisible: false,
                customNameDialogVisible: false
            }
        },

        components: {
            'demand-item': demandItem,
            'x-dialog': XDialog
        },

        mounted () {
            this.getDemandList()
        },

        methods: {
            getDemandList () {
                wx.showLoading({ title: '加载中' })
                this.page = 1
                return ajax({
                    url: '/demand/list',
                    data: this.query
                }).then(response => {
                    wx.hideLoading()
                    if (response.code === 200) {
                        this.demandList = response.data.row
                        this.canLoad(response.data.totalCount)
                    }
                    return true
                })
            },

            // 可以加载更多吗 ？
            canLoad (total) {
                if (this.demandList.length !== 0 && this.demandList.length < total) {
                    this.continueLoadVisible = true
                } else {
                    this.continueLoadVisible = false
                }
            },

            continueLoad () {
                this.page++
                this.isLoading = true
                ajax({
                    url: '/demand/list',
                    data: this.query
                }).then(response => {
                    this.isLoading = false
                    if (response.code === 200) {
                        this.demandList.push(...response.data.row)
                        this.canLoad(response.data.totalCount)
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
                    this.getDemandList()
                }
            },

            changeState (e) {
                var oldValue = this.query.state
                this.query.stateStr = this.stateList[e.mp.detail.value]
                this.query.state = e.mp.detail.value

                if (this.query.stateStr === '全部') {
                    this.query.stateStr = ''
                    this.query.state = ''
                } else {
                    this.query.state --
                }

                if (oldValue !== this.query.state) {
                    this.getDemandList()
                }
            },

            cancelDemandUser () {
                this.query.demandUser = ''
                this.demandUserDialogVisible = false
            },

            confirmDemandUser () {
                this.demandUserDialogVisible = false
                this.getDemandList()
            },

            cancelCustomName () {
                this.query.customName = ''
                this.customNameDialogVisible = false
            },

            confirmCustomName () {
                this.customNameDialogVisible = false
                this.getDemandList()
            },

            reset () {
                this.demandList = []
                this.query.page = 1
                this.query.customName = ''
                this.query.demandUser = ''
                this.query.state = ''
                this.query.stateStr = ''
                this.query.createTime = ''
                this.query.endTime = ''
                this.continueLoadVisible = ''
                this.isLoading = ''
                this.demandUserDialogVisible = false
                this.customNameDialogVisible = false
            }
        },

        onPullDownRefresh () {
            this.reset()
            this.getDemandList()
                .then(() => {
                    wx.stopPullDownRefresh()
                })
        }
    }
</script>
<style lang="less" scoped>
    .demand-list {
        position: relative;

        .demand-filter {
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

        .list-container {
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

        .dialog-content {
            width: 300px;
            background-color: #fff;
            padding-top: 40px;
            border-radius: 15px;

            .input-control {
                height: 40px;
                line-height: 40px;
                margin: 0 15px;
                border-bottom: 1px solid #ddd;
                font-size: 16px;
                position: relative;
                margin-bottom: 30px;

                label {
                    float: left;
                }

                input {
                    height: 40px;
                    line-height: 40px;
                    text-align: right;
                }
            }

            .toolbar {
                height: 60px;
                line-height: 60px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                padding: 0 15px;

                button {
                    margin: auto 0;
                    padding: 0 30px;
                    height: 35px;
                    line-height: 35px;
                    font-size: 16px;
                }
            }
        }
    }
</style>