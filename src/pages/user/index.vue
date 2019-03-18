<template>
    <div class="user page">
        <div class="user-card" v-if="removeUserInfo">
            <!-- :style="{ 'background-image': 'url(' + userBg +')' }" -->
            <div class="user-bg"></div>
            <div class="user-avatar">
                <image :src="removeUserInfo.wxAvatar" lazy-load mode="scaleToFill"></image>
                <div v-if="removeUserInfo" class="user-name">
                    <text>{{ removeUserInfo.Company.comName }}-</text>
                    <text>{{ removeUserInfo.userName }}</text>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import ajax from '../../utils/request'
    export default {
        name: 'user',

        description: '用户中心',

        data () {
            return {
                userInfo: null,
                removeUserInfo: null
            }
        },

        mounted () {
            this.getRemoteUserInfo()
        },

        methods: {
            getRemoteUserInfo () {
                ajax({
                    url: '/user',
                    method: 'GET'
                }).then(response => {
                    if (response.code === 200) {
                        this.removeUserInfo = response.data
                    }
                })
            }
        }
    }
</script>
<style lang="less" scoped>
    .user {
        .user-card {
            height: 150px;
            overflow: hidden;
            position: relative;
            .user-avatar {
                text-align: center;
                margin-top: 10px;
                position: relative;
                z-index: 10;
                image {
                    width: 100px;
                    height: 100px;
                    border-radius: 50px;
                }
            }

            .user-bg {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-size: 150%;
                background-position: center center;
                background-image: linear-gradient(270deg, #25D1D1 0%, #3BE6AD 100%);
            }

            .user-name {
                font-size: 14px;
                color: #fff;
            }
        }
    }
</style>

