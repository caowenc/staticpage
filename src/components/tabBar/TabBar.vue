<template>
  <div id="tabbar">
    <div class="tab">
      <hr style="width:100%;border:1px solid #b8b8b8;margin-bottom:4px;overflow:hidden" />
      <ul class="tab-bar">
        <li class="tab-bar-item" v-for="(item, index) in nav" :key="index" @click="selectNav(item.title)">
          <span class="tab-bar-item-icon">
            <img :src="isSelect === item.title ? item.url_one : item.url" alt="item.title" :class="[{ home: index === 2 }, { image: index < 2 || index > 2 }]" />
          </span>
          <span class="tab-bar-item-text">
            <p :class="isSelect === item.title ? 'active' : ''">{{ item.title }}</p>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  data() {
    return {
      isSelect: '首页',
      nav: [
        { title: '目标', url: require('@/assets/images/drawable-xhdpi/mb.png'), url_one: require('@/assets/images/drawable-xhdpi/mb1.png') },
        { title: '番茄钟', url: require('@/assets/images/drawable-xhdpi/clock.png'), url_one: require('@/assets/images/drawable-xhdpi/clock1.png') },
        { title: '圈子', url: require('@/assets/images/drawable-xhdpi/chat.png'), url_one: require('@/assets/images/drawable-xhdpi/chat1.png') },
        { title: '我的', url: require('@/assets/images/drawable-xhdpi/mine.png'), url_one: require('@/assets/images/drawable-xhdpi/mine1.png') }
      ]
    }
  },
  components: {},
  created() {},
  mounted() {
    this.isSelect = sessionStorage.getItem('isSelect')
  },
  methods: {
    selectNav(title) {
      this.isSelect = title
      switch (title) {
        case '目标':
          this.$router.push('/target')
          break
        case '番茄钟':
          this.$router.push('/clock')
          break
        case '圈子':
          this.$router.push('/circle')
          break
        case '我的':
          this.$router.push('/personal')
          break
      }
      sessionStorage.setItem('isSelect', this.isSelect)
    }
  },
  computed: {
    //   监听路由活跃
    isActive() {
      if (this.sel === this.page) {
        return false
      }
      return true
    }
  }
}
</script>

<style scoped lang="scss">
.tab-bar-item-text {
  color: #999;
}
// tabbBar的css
.tab {
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 60px;
  background: #ffffff;
  padding-top: 5px;
  .tab-bar {
    height: 60px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    .tab-bar-item {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      font-size: 0.8em;
    }
  }
}
.router-link-exact-active {
  color: #999999;
  font-weight: 600;
}
.active {
  color:rgb(12, 12, 12);
  font-size: 0.9rem;
}
.home {
  width: 20px;
  height: 20px;
}
.image {
  width: 20px;
  height: 20px;
}
</style>
