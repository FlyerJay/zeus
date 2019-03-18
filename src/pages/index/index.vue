<template>
  <div class="page index">
    <!-- 首页广告 -->
    <swiper
      :indicator-dots="dots"
      :autoplay="autoplay"
      :interval="interval"
      :duration="duration"
      :circular="circular">
      <swiper-item v-for="(item, index) in swiperItems" :key="index">
        <image :src="item.image" class="banner-image"/>
      </swiper-item>
    </swiper>

    <!-- 菜单 -->
    <div class="menu">
      <div class="menu-item" @tap="navigateToProduct">
        <i class="iconfont icon-product"></i>
        <p>现货查询</p>
      </div>
      <div class="menu-item" @tap="navigateToDemand">
        <i class="iconfont icon-demand"></i>
        <p>定制需求</p>
      </div>
      <div class="menu-item" @tap="navigateToMarket">
        <i class="iconfont icon-report"></i>
        <p>行情信息</p>
      </div>
    </div>

    <!-- 重要通知 -->
    <message-notify :messageList="messageList" v-if="messageList.length > 0"></message-notify>
    <!-- <div class="notify" v-if="messageList.length > 0">
      <text class="iconfont icon-notify">:</text>
      <text class="notify-content">{{ messageList[0].message }}</text>
    </div> -->

    <div class="demand-list-title">
      <text>定制需求列表</text> 
      <text class="view-more" @tap="navigateToList">查看更多<text class="iconfont icon-arrow"></text></text>
    </div>

    <!-- 定制需求列表 -->
    <scroll-view
      class="demand-list"
      scroll-y
      enable-back-to-top>
      <demand-item v-for="(item, index) in demandList" :key="index" :data="item"></demand-item>
    </scroll-view>
  </div>
</template>

<script>
  import ajax from '../../utils/request'
  import messageNotify from '../../components/message-notify'
  import demandItem from '../../components/demand-item'

  export default {
    data () {
      return {
        dots: true,
        autoplay: true,
        interval: 5000,
        duration: 100,
        circular: true,
        swiperItems: [
          {
            text: '你好',
            image: '../../static/banner/banner0.jpg'
          }, {
            text: '很好',
            image: '../../static/banner/banner1.jpg'
          }, {
            text: '很好',
            image: '../../static/banner/banner2.jpg'
          }
        ],
        message: '',
        messageList: [],
        demandPage: 1,
        demandList: []
      }
    },

    components: {
      'message-notify': messageNotify,
      'demand-item': demandItem
    },

    mounted () {
      this.getMessageIndex()
      this.getDemandList()
    },

    methods: {
      // 获取首页重要通知
      getMessageIndex () {
        ajax({
          url: '/message/list',
          data: { messageType: 1 }
        }).then(response => {
          if (response.code === 200)
            this.messageList = response.data.row
        })
      },

      navigateToDemand () {
        wx.switchTab({ url: '../demand/main' })
      },

      navigateToProduct () {
        wx.navigateTo({ url: '../product/main' })
      },

      navigateToMarket () {
        wx.navigateTo({ url: '../market/main' })
      },

      navigateToList () {
        wx.navigateTo({ url: '../demand-list/main' })
      },

      getDemandList () {
        ajax({
          url: '/demand/list',
          data: {
            page: this.demandPage,
            pageSize: 5
          }
        }).then(response => {
          if (response.code === 200) {
            this.demandList = response.data.row
          }
        })
      }

      // loadMore () {
      //   this.demandPage ++
      //   ajax({
      //     url: '/demand/list',
      //     data: {
      //       page: this.demandPage
      //     }
      //   }).then(response => {
      //     if (response.code === 200) {
      //       this.demandList.push(...response.data.row)
      //       this.$set(this, 'demandList', this.demandList)
      //     }
      //   })
      // },

      // scrollToLower () {
      //   this.loadMore()
      // }
    }
  }
</script>

<style scoped lang="less">
  swiper {
    background-color: #f7f7f7;
    height: 180px;
    swiper-item {
      text-align: center;
      image {
        width: 100%;
        height: 100%;
      }
    }
  }

  .menu {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    .menu-item {
      text-align: center;

      p {
        font-size: 12px;
        color: #666;
      }

      .iconfont {
        font-size: 32px;

        &.icon-product {
          color: #5cadff;
        }

        &.icon-demand {
          color: #19be6b;
        }

        &.icon-report {
          color: #ff9900;
        }
      }
    }
  }

  .demand-list {
    height: calc(100vh - 30px);
    width: 100%;
  }

  .demand-list-title {
    padding: 0 15px;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    color: #666;

    .view-more {
      float: right;
      color: #5cadff;

      .iconfont {
        font-size: 14px;
      }
    }
  }
</style>
