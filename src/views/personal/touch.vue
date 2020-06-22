<template>
  <div class="all">
    <div class="head">
      <img @click="gopersonal" style="margin-left:10px;margin-top:13px;" class="h1" src="@/assets/images/drawable-xhdpi/data.png" width="25" />
      <span class="text">联系我们</span>
    </div>
    <div class="body">
      <div class="b1">
        <img class="img1" src="@/assets/images/drawable-xhdpi/wx.png" width="60px" />
        <span class="text1">公众号</span>
        <span class="text2">小目标target</span>
        <span class="text3">&rsaquo;</span>
      </div>
      <div class="b1">
        <img class="img1" src="@/assets/images/drawable-xhdpi/wb.png" width="60px" />
        <span class="text1">官方微博</span>
        <span class="text2" style="margin-left:257px">小目标APP</span>
        <span class="text3">&rsaquo;</span>
      </div>
      <div class="b1">
        <img class="img1" src="@/assets/images/drawable-xhdpi/qq.png" width="60px" />
        <span class="text1">客服QQ群</span>
        <span class="text2" style="margin-left:258px;margin-top:-45px">424667258</span>
        <span class="text3">&rsaquo;</span>
      </div>
      <div class="b2">
        <img class="img1" src="@/assets/images/drawable-xhdpi/dy.png" width="60px" />
        <span class="text1">官方抖音</span>
        <span class="text2" style="margin-left:260px;margin-top:-45px">930090609</span>
        <span class="text3">&rsaquo;</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      active: 0
    }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    gopersonal() {
      this.$router.push('/personal')
    }
  },
  computed: {}
}
</script>

<style scoped lang="scss">
.all {
  background-color: #f6f7f9;
  height: 667px;
}
.head {
  height: 60px;
  width: 100%;
}
img {
  position: absolute;
}
.text {
  position: absolute;
  font-size: 22px;
  margin-top: 10px;
  margin-left: 150px;
  text-align: center;
  font-weight: bold;
}

.b1 {
  position: relative;
  width: 100%;
  height: 1px;
  padding-top: 70px;
  background-color: #fff;
  border-bottom: 1px solid #a5a5a5;
}
.b2 {
  position: relative;
  width: 100%;
  height: 1px;
  padding-top: 70px;
  background-color: #fff;
}

.img1 {
  position: absolute;
  margin-top: -65px;
}
.text1 {
  position: absolute;
  margin-top: -45px;
  margin-left: 65px;
  font-size: 17px;
  font-weight: bold;
}
.text2 {
  position: absolute;
  margin-top: -50px;
  margin-left: 245px;
  font-size: 17px;
  color: #aaaaaa;
}
.text3 {
  position: absolute;
  font-size: 35px;
  margin-top: -60px;
  margin-left: 350px;
}
</style>
