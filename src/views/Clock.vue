<template>
  <div class="mbpage">
    <ul class="m1">
      <li>
        <img class="mb1" src="@/assets/images/drawable-xhdpi/clock2.png" width="26px" height="26px" />
      </li>
      <li class="mb2">番茄计时</li>
      <li>
        <img class="mb4" src="@/assets/images/drawable-xhdpi/clock3.png" width="26px" height="26px" />
      </li>
    </ul>

    <div style="position:relative;">
      <img class="circle" src="@/assets/images/drawable-xhdpi/clock4.png" />
      <div class="time">25:00</div>
    </div>
    <div class="add">
      <button style="background-color: white;color:#999">+添加计时目标</button>
    </div>
    <div class="start">
      <button class="s1">开始</button>
    </div>
    <TabBar />
  </div>
</template>

<script>
import TabBar from '../components/tabBar/TabBar'
export default {
  name: 'Clock',
  data() {
    return {}
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
ul {
  width: 100%;
}
li {
  margin: 0 auto;
  float: left;
}
.mb1 {
  margin-top: 16px;
  margin-left: 10px;
}
.mb2 {
  font-size: 22px;
  margin-top: 10px;
  text-align: center;
  font-weight: bold;
  margin-left: 110px;
}
.mb4 {
  margin-left: 100px;
  float: left;
  margin-top: 13px;
}
.circle {
  margin-top: -25px;
}
.time {
  position: absolute;
  margin-left: 140px;
  margin-top: -220px;
  font-size: 40px;
  font-weight: bold;
}
.add {
  margin-left: 140px;
  margin-top: -30px;
}
.start {
  font-size: 18px;
  font-weight: bold;
  margin-left: 100px;
  margin-top: 50px;
}
.s1 {
  background-color: #ffd430;
  width: 180px;
  height: 50px;
  border-radius: 50px;
}
</style>
