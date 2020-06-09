<template>
  <div class="mbpage">
    <ul class="m1">
      <li><img class="mb1" src="@/assets/images/drawable-xhdpi/mb2.png" width="22px" height="22px" /></li>
      <li class="mb2">目标</li>
      <li><img class="mb3" src="@/assets/images/drawable-xhdpi/mb5.png" width="26px" height="26px" /></li>
      <li><img class="mb4" src="@/assets/images/drawable-xhdpi/mb3.png" width="26px" height="26px" /></li>
    </ul>
    <div class="m2"></div>
    <TabBar />
  </div>
</template>

<script>
import TabBar from '../components/tabBar/TabBar'
export default {
  name: 'Target',
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
ul{
  width: 100%;
}
li {
  margin: 0 auto;
  float: left;
}
.mb1{
  margin-top: 16px;
  margin-left: 10px;
}
.mb2 {
  font-size: 22px;
  margin-top:10px;
  text-align: center;
  font-weight: bold;
  margin-left: 135px;
}
.mb3 {
  margin-left: 65px;
  float: left;
  margin-top: 13px;
}
.mb4{
  margin-left: 30px;
  float: left;
  margin-top: 13px;
}
</style>
