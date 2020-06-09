<template>
  <div>
    <div>
      <img class="m1" src="@/assets/images/drawable-xhdpi/mine2.png" />
    </div>
    <div class="mm1">
      <ul>
        <li><img class="m2" src="@/assets/images/drawable-xhdpi/id.png" /></li>
        <li class="m3">bLue</li>
        <li><img class="m4" src="@/assets/images/drawable-xhdpi/old.png" /></li>
        <li class="m5">ID：3567834</li>
        <li><img class="m6" src="@/assets/images/drawable-xhdpi/jt.png" /></li>
      </ul>
    </div>
    <div class="mm2">
      <img class="m7" src="@/assets/images/drawable-xhdpi/vip.png">
    </div>
    
    <TabBar />
  </div>
</template>

<script>
import TabBar from '../components/tabBar/TabBar'
export default {
  name: 'Personal',
  data() {
    return { }
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
.m1 {
  width: 100%;
  height:60px;
}
.mm1{
  height: 50px;
  width: 100%;
}
ul {
  width: 100%;
}
li {
  margin: 0 auto;
  float: left;
}

.m2 {
  width:60px;
  height: 60px;
  border-radius: 10px;
  margin-left: 16px;
  margin-top: 5px
}
.m3 {
  font-size: 18px;
  margin-top: 10px;
  margin-left: 15px;
}
.m4 {
  width: 46px;
  height: 46px;
  margin-left: 8px; 
}
.m5 {
  font-size: 14px;
  color:lightgray;
  margin-top: 45px;
  margin-left: -94px;
}
.m6{
  width: 40px;
  height: 40px;
  margin-top: -50px;
  margin-left: 250px;
}
.m7{
  width:96%;
  height: 80px;
  margin-left: 8px;
  margin-top: 12px;

}
</style>
