<template>
    <div class="page bind">
        <div class="bind-form" v-if="bindMode">
            <p>第一次使用微信小程序登录，需要进行账号绑定，请您输入以下信息并提交绑定</p>

            <div class="form-item">
                <label for="">账号</label>
                <input type="text" v-model="form.account">
            </div>

            <div class="form-item">
                <label for="">密码</label>
                <input type="password" v-model="form.password">
            </div>

            <div class="form-item">
                <picker @change="changeCompany" :range="companyList">
                    <div class="picker">
                        <text class="label">公司</text>
                        <text class="value">{{ form.company }}</text>
                        <text class="iconfont icon-arrow"></text>
                    </div>
                </picker>
            </div>

            <button class="btn" type="primary" :disabled="isDisabled" open-type="getUserInfo" @getuserinfo="getUserInfo">绑定账号</button>
        </div>
    </div>
</template>
<script>
    import ajax from '../../utils/request'
    export default {
        name: 'bind',

        description: '首次登录时绑定账号',

        data () {
            return {
                // bindMode 为true表示首次绑定
                bindMode: false,
                form: {
                    account: '',
                    password: '',
                    company: '',
                    comId: ''
                },
                companyList: ['南京奎鑫', '武汉奎鑫', '西安奎鑫', '长春奎鑫', '沈阳奎鑫', '山东奎鑫', '南昌奎鑫', '重庆奎鑫'],
                companyCode: ['01', '02', '03', '04', '05', '06', '07', '08']
            }
        },

        mounted () {
            this.applyLogin()
        },

        computed: {
            // 绑定按钮是否可用
            isDisabled () {
                return !(this.form.account && this.form.password && this.form.company)
            }
        },

        methods: {
            // 调用登录获取jscode
            applyLogin () {
                const self = this
                wx.login({
                    success (response) {
                        if (response.code) {
                            wx.showLoading({ title: '获取用户信息' })
                            self.getOpenId(response.code)
                        }
                    }
                })
            },

            // 通过code获取用户openid
            getOpenId (code) {
                const self = this
                ajax({
                    url: '/user/openid',
                    data: { code: code }
                }).then(response => {
                    if (response.code === 200) {
                        wx.hideLoading()
                        wx.showLoading({ title: '获取用户状态' })
                        wx.setStorage({
                            key: 'userTag',
                            data: response.data,
                            success () {
                                var data = JSON.parse(response.data)
                                self.judgeBinded(data.openid)
                            }
                        })
                    }
                })
            },

            // 通过openid判断用户是否绑定，如已绑定则直接跳转首页，如未登录则显示绑定页面，让用户绑定账号
            judgeBinded (openid) {
                wx.hideLoading()
                ajax({
                    url: '/user/loginbyopenid',
                    data: { openid: openid },
                    method: 'POST'
                }).then(response => {
                    if (response.code === 200) {
                        wx.switchTab({ url: '../index/main' })
                        // wx.navigateTo({ url: '../product/main' })
                    } else {
                        this.bindMode = true
                    }
                })
            },

            changeCompany (e) {
                this.form.company = this.companyList[e.mp.detail.value]
                this.form.comId = this.companyCode[e.mp.detail.value]
            },

            getUserInfo (e) {
                const userInfo = e.mp.detail.userInfo
                wx.showLoading({ title: '正在绑定用户信息' })
                ajax({
                    url: '/user/login',
                    data: {
                        userId: this.form.account,
                        password: this.form.password,
                        comId: this.form.comId
                    },
                    method: 'POST'
                }).then(response => {
                    const userTag = JSON.parse(wx.getStorageSync('userTag'))
                    ajax({
                        url: '/user/bind',
                        data: {
                            nickName: userInfo.nickName,
                            avatarUrl: userInfo.avatarUrl,
                            openid: userTag.openid
                        },
                        method: 'POST'
                    }).then(response => {
                        wx.hideLoading()
                        if (response.code === 200) {
                            wx.switchTab({ url: '../index/main' })
                        } else {
                            wx.showToast({
                                title: response.msg
                            })
                        }
                    })
                })
            }
        }
    }
</script>
<style lang="less" scoped>
    .bind-form {
        margin-top: 120px;

        p {
            font-size: 14px;
            margin: 0 15px;
            margin-bottom: 20px;
            color: #999;
            text-align: center;
        }

        .btn {
            margin: 0 15px;
            margin-top: 30px;
            height: 40px;
            line-height: 40px;
            font-size: 16px;
        }
    }
</style>


