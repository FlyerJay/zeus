<template>
    <div class="page demand">
        <!-- 已添加列表 -->
        <div class="list" v-if="demandList.length > 0">
            <div class="item" v-for="(item, index) in demandList" :key="index">
                <text>{{ item.type }}</text>
                <text>{{ item.spec }}</text>
                <text>{{ item.long }}</text>
                <text>{{ item.amount + item.unit }}</text>
                <text>{{ item.weight }}吨</text>
                <text class="iconfont icon-minus" @click="removeHandler(index)"></text>
            </div>
        </div>

        <!-- 添加需求 -->
        <div class="create-from" v-if="!createMode">
            <div class="form-item">
                <picker @change="changeType" :range="typeList">
                    <div class="picker">
                        <text class="label">品类</text>
                        <text class="value">{{ form.type }}</text>
                        <text class="iconfont icon-arrow"></text>
                    </div>
                </picker>
            </div>

            <div class="form-item">
                <template v-if="customSpec">
                    <picker @change="changeSpec" :range="specList" mode="multiSelector">
                        <div class="picker">
                            <text class="label">规格</text>
                            <text class="value">{{ form.spec }}</text>
                            <text class="iconfont icon-arrow"></text>
                        </div>
                    </picker>
                </template>
                <template v-else>
                    <label for="">规格</label>
                    <input type="text" v-model="form.spec">
                </template>
            </div>

            <div class="form-item">
                <!-- <picker @change="changeLong" :range="longList">
                    <div class="picker">
                        <text class="label">长度</text>
                        <text class="value">{{ form.long }}</text>
                        <text class="iconfont icon-arrow"></text>
                    </div>
                </picker> -->
                <label for="">长度</label>
                <input type="text" v-model="form.long">
            </div>

            <div class="form-item">
                <label for="">数量</label>
                <input class="inner-input" type="number" v-model="form.amount" @input="amountInput">
                <picker @change="changeUnit" :range="unitList">
                    <div class="inner-picker">
                        <text class="value">{{ form.unit }}</text>
                        <text class="iconfont icon-arrow"></text>
                    </div>
                </picker>
            </div>

            <div class="form-item">
                <!-- <template v-if="computed">
                    <label for="">重量</label>
                    <text class="text-value">{{form.weight}}吨</text>
                </template> -->
                <label for="">重量</label>
                <input type="text" v-model="form.weight">
            </div>
        </div>

        <!-- 添加需求按钮 -->
        <template v-if="createMode">
            <div class="create-demand">
                <button type="primary" @click="createHandler">添加<text class="icon-add iconfont"></text></button>
                <!-- <text class="icon-add iconfont"></text> -->
            </div>
            <!-- <button>添加</button> -->
        </template>

        <!-- 保存需求按钮 -->
        <template v-else="createMode">
            <div class="create-demand">
                <!-- <text class="icon-save iconfont"></text> -->
                <button type="primary" @click="saveHandler">保存<text class="icon-save iconfont"></text></button>
                <button type="warn" @click="cancelHandler">取消<text class="icon-rollback iconfont"></text></button>
            </div>
            <!-- <button>保存</button> -->
        </template>

        <!-- 补充信息 -->
        <div class="supplement-form">
            <div class="form-item">
                <label for="">补充说明</label>
                <input type="text" v-model="comment">
            </div>

            <div class="form-item">
                <picker @change="changeRegion" mode="region">
                    <div class="picker">
                        <text class="label">收货地址</text>
                        <text class="value">{{ region }}</text>
                    </div>
                </picker>
            </div>

            <div class="form-item">
                <label for="">详细地址</label>
                <input type="text" v-model="address">
            </div>

            <div class="form-item">
                <label for="">客户姓名</label>
                <input type="text" v-model="customerName">
            </div>

            <div class="form-item">
                <label for="">客户电话</label>
                <input type="text" v-model="customerPhone">
            </div>
        </div>

        <div class="submit-button-group">
            <button type="primary" @click="submit">提交</button>
        </div>
    </div>
</template>
<script>
    import ajax from '../../utils/request'
    export default {
        name: '定制需求上传',

        data () {
            return {
                demandList: [],
                createMode: true,
                form: {
                    type: '', // 品类
                    spec: '', // 规格
                    long: '', // 长度
                    amount: '', // 数量
                    unit: '支', // 数量单位 - 支|件
                    weight: '0.00' // 重量 - 吨
                },
                comment: '',
                region: '',
                address: '',
                customerName: '',
                customerPhone: '',
                typeList: ['方矩管', '镀锌带方矩管', '热镀锌方矩管', '圆管', '镀锌带圆管', '热镀锌圆管', '镀锌角钢', '镀锌槽钢', '其他'],
                specList: [
                    ['20', '25', '30', '40', '50', '60', '70', '80', '90', '100'],
                    ['20', '25', '30', '40', '50', '60', '70', '80', '90', '100'],
                    ['1.00', '1.25', '1.50', '1.75', '2.00', '2.25', '2.50', '2.75', '3.00', '3.25', '3.50', '3.75', '4.00',
                    '4.25', '4.50', '4.75', '5.00', '5.25', '5.50', '5.75', '6.00', '6.50', '7.00', '7.50',
                    '8.00', '8.50', '9.00', '9.50', '10.00', '10.50', '11.00']
                ],
                longList: ['6m', '9m', '12m'],
                unitList: ['支', '件']
            }
        },

        computed: {
            weight () {
                // 动态计算重量
                if (!this.form.spec || !this.form.long || !this.form.amount) return '0.00'
                if (this.form.unit === '件') return '0.00'

                if (this.form.type.includes('矩管')) {
                    const specArr = this.form.spec.split('*')
                    const height = +specArr[0]
                    const width = +specArr[1]
                    const land = +specArr[2]
                    const long = +this.form.long.replace('m', '') || 6
                    const perimeter = (height + width) * 2
                    const amount = this.form.unit === '支' ? this.form.amount : this.form.amount * 50
                    const weight = (((perimeter/3.14 - land) * land * long * 0.02466 * amount)/1000).toFixed(2)
                    return weight
                } else if (this.form.type.includes('圆')) {
                    const specArr = this.form.spec.split('*')
                    const perimeter = +specArr[0]
                    const land = +specArr[1]
                    const long = +this.form.long.replace('m', '') || 6
                    const amount = this.form.unit === '支' ? this.form.amount : this.form.amount * 50
                    const weight = ((perimeter * land * long * 0.02466 * amount) / 1000).toFixed(2)
                    return weight
                } else if (this.form.type.includes('槽') || this.form.type.includes('钢')) {
                    const specArr = this.form.spec.split('#')
                    const unitWeight = +specArr[1].replace(/kg/, '')
                    const amount = this.form.unit === '支' ? this.form.amount : this.form.amount * 50
                    const weight = ((unitWeight * amount) / 1000).toFixed(2)
                    return weight
                } else {
                    return '0.00'
                }
            },

            // 是否自定规格
            customSpec () {
                return this.form.type.includes('矩管')
            },

            // computed () {
            //     if (this.form.type !== '其他') {
            //         return true
            //     }
            //     if (this.form.unit === '支') {
            //         return true
            //     }
            //     return false
            // }

            // // 是否自定义长度
            // customLong () {
            //     return this.form
            // }
        },

        watch: {
            weight (newVal) {
                this.form.weight = newVal
            }
        },

        methods: {
            createHandler () {
                this.createMode = false
            },

            saveHandler () {
                if (!this.form.type) {
                    wx.showToast({
                        icon: 'none',
                        title: '请选择品类'
                    })
                    return
                }
                if (!this.form.spec) {
                    wx.showToast({
                        icon: 'none',
                        title: '请选择规格'
                    })
                    return
                }
                if (!this.form.long) {
                    wx.showToast({
                        icon: 'none',
                        title: '请选择长度'
                    })
                    return
                }
                if (!this.form.amount) {
                    wx.showToast({
                        icon: 'none',
                        title: '请填写数量'
                    })
                    return
                }
                if (this.form.weight === '0.00') {
                    wx.showToast({
                        icon: 'none',
                        title: '数量太少'
                    })
                    return
                }
                let form = {
                    type: this.form.type,
                    spec: this.form.spec,
                    long: this.form.long,
                    amount: this.form.amount,
                    unit: this.form.unit,
                    weight: this.form.weight
                }
                this.demandList.push(form)
                this.resetForm()
                this.createMode = true
            },

            cancelHandler () {
                this.resetForm()
                this.createMode = true
            },

            removeHandler (index) {
                this.demandList.splice(index, 1)
            },

            changeType (e) {
                this.form.type = this.typeList[e.mp.detail.value]
            },

            changeSpec (e) {
                this.form.spec = `${this.specList[0][e.mp.detail.value[0]]}*${this.specList[1][e.mp.detail.value[1]]}*${this.specList[2][e.mp.detail.value[2]]}`
            },

            changeLong (e) {
                this.form.long = this.longList[e.mp.detail.value]
            },

            changeRegion (e) {
                let value = e.mp.detail.value
                if (value[0] === value[1]) {
                    this.region = value[0] + value[2]
                } else {
                    this.region = value.join('')
                }
            },

            amountInput (e) {
                // TODO
            },

            commentInput (e) {
                // TODO
            },

            addressInput (e) {
                // TODO
            },

            changeUnit (e) {
                this.form.unit = this.unitList[e.mp.detail.value]
            },

            resetForm () {
                this.form.type = ''
                this.form.amount = ''
                this.form.spec = ''
                this.form.long = ''
                this.form.weight = '0.00'
            },

            reset () {
                this.resetForm()
                this.demandList = []
                this.createMode = true
                this.address = ''
                this.region = ''
                this.comment = ''
                this.customerName = ''
                this.customerPhone = ''
            },

            submit () {
                const demandList = this.demandList.map(item => {
                    return {
                        spec: item.spec,
                        demandWeight: item.weight,
                        demandAmount: item.amount + item.unit,
                        type: item.type
                    }
                })
                if (demandList.length === 0) {
                    wx.showToast({ icon: 'none', title: '请添加产品' })
                    return
                }
                const destination = this.region + this.address
                wx.showLoading({ title: '加载中' })
                ajax({
                    url: '/demand/add',
                    data: {
                        demandDetails: demandList,
                        destination: destination,
                        customerName: this.customerName,
                        customerPhone: this.customerPhone,
                        comment: this.comment
                    },
                    method: 'POST'
                }).then(response => {
                    wx.hideLoading()
                    if (response.code === 200) {
                        this.reset()
                        wx.showToast({ icon: 'success', title: '提交成功' })
                    } else {
                        wx.showToast({ icon: 'error', title: response.msg })
                    }
                })
            }
        }
    }
</script>
<style lang="less" scoped>
    .list {
        padding: 5px 10px;
        margin: 10px 15px;
        background-color: #e8eaec;
        .item {
            font-size: 16px;
            color: #666;
            height: 30px;
            line-height: 30px;
            text {
                margin-right: 10px;
            }
            // & + .item {
            //     border-top: 1px solid #ddd;
            // }
            .iconfont {
                float: right;
                color: #ed4014;
                margin-right: 0;
            }
        }
    }

    .create-demand {
        // display: flex;
        // flex-direction: column;
        // justify-content: center;
        // align-items: center;
        // height: 100px;
        // margin: 10px 15px;
        // border: 2px dashed #ddd;
        // border-radius: 5px;
        padding: 0 15px;
        margin-top: 15px;
        button {
            font-size: 16px;
            height: 40px;
            line-height: 40px;
            & + button {
                margin-top: 5px;
            }
        }
        .iconfont {
            font-size: 18px;
            margin-left: 5px;
        }
        // &:hover {
        //     border: 2px dashed #999;
        //     &.iconfont {
        //         color: #999;
        //     }
        // }
    }

    .supplement-form {
        margin-top: 15px;
    }

    .form-item {
        height: 40px;
        line-height: 40px;
        margin: 0 15px;
        border-bottom: 1px solid #ddd;
        font-size: 16px;
        position: relative;

        label {
            color: #666;
            float: left;
            
        }

        input {
            height: 40px;
            line-height: 40px;
            text-align: right;
            padding-right: 15px;

            &.inner-input {
                margin-right: 30px;
                padding-right: 5px
            }
        }

        .text-value {
            float: right;
            padding-right: 15px;
        }
    }

    .picker {
        font-size: 16px;
        position: relative;

        .label {
            color: #666;
        }
        
        .value {
            float: right;
            padding-right: 15px;
            color: #333;
        }

        .iconfont {
            position: absolute;
            right: 0;
            color: #999;
        }
    }
    
    .inner-picker {
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        width: 30px;
        font-size: 16px;
        
        .value {
            float: right;
            padding-right: 15px;
            color: #333;
        }

        .iconfont {
            position: absolute;
            right: 0;
            color: #999;
        }
    }

    .submit-button-group {
        margin: 0 15px;
        margin-top: 30px;

        button {
            margin: auto 0;
            padding: 0 40px;
            height: 40px;
            line-height: 40px;
            font-size: 16px;
        }
    }
</style>
