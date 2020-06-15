<template>
  <div class="mbpage">
    <ul class="m1">
      <li><img class="mb1" src="@/assets/images/drawable-xhdpi/clock2.png" width="26px" height="26px" /></li>
      <li class="mb2">番茄计时</li>
      <li><img class="mb4" src="@/assets/images/drawable-xhdpi/clock3.png" width="26px" height="26px" /></li>
    </ul>
    <div class="m2"></div>
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
  margin-top:10px;
  text-align: center;
  font-weight: bold;
  margin-left: 120px;
}
.mb4 {
  margin-left: 100px;
  float: left;
  margin-top: 13px;
}
</style>
