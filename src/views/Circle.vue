<template>
  <div class="all">
    <div class="head">
      <div>
        <img class="t1" src="@/assets/images/drawable-xhdpi/c1.png" width="30px" />
      </div>
      <ul>
        <li @click="cur = 0" :class="{ active: cur == 0 }">
          <span>关注</span>
        </li>
        <li @click="cur = 1" :class="{ active: cur == 1 }">
          <span>热区</span>
        </li>
        <li @click="cur = 2" :class="{ active: cur == 2 }">
          <span>最新</span>
        </li>
      </ul>
      <img class="t2" src="@/assets/images/drawable-xhdpi/id.png" width="35px" />
    </div>
    <div class="show">
      <ul class="topnav-show" v-show="cur == 0">
        <li>内容1</li>
      </ul>
      <ul class="topnav-show" v-show="cur == 1">
        <li>内容2</li>
      </ul>
      <ul class="topnav-show" v-show="cur == 2">
        <li>内容3</li>
      </ul>
    </div>
    <TabBar />
  </div>
</template>

<script>
import TabBar from '../components/tabBar/TabBar'
export default {
  name: 'Circle',
  data() {
    return { cur: 0 }
  },
  components: {
    TabBar
  },
  created() {},
  mounted() {},
  methods: {},
  computed: {}
}
</script>

<style scoped lang="scss">
.head {
  height: 50px;
  width: 375px;
  position: fixed;
  border-bottom: 1px solid #999;
}
.head .t1 {
  position: absolute;
  margin-top: 5px;
  margin-left: 15px;
}
.head .t2 {
  position: absolute;
  margin-top: 5px;
  margin-left: 320px;
  border-radius: 50%;
}

.head ul {
  position: absolute;
  margin-top: 30px;
  width: 45%;
  display: flex;
  text-align: center;
  flex-direction: row;
  margin-left: 25px;
}
.show ul {
  position: absolute;
  margin-top: 100px;
}
.head li span {
  width: 50%;
  display: flex;
  text-align: center;
  // float: left;
  margin-left: 60px;
  margin-top: -20px;
}
</style>
