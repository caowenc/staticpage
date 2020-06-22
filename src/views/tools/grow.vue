<template>
  <div class="all">
    <div class="head">
      <img
        @click="gopersonal"
        style="margin-left:10px;margin-top:13px;"
        class="h1"
        src="@/assets/images/drawable-xhdpi/data.png"
        width="25"
      />
      <span class="text">成长记录</span>
      <span class="text1">操作记录</span>
    </div>
    <div class="body">
      <div class="b1">
        <span class="text2">今天</span>
        <img
          class="img1"
          src="@/assets/images/drawable-xhdpi/grow1.png"
          width="80px"
          height="150px"
        />
        <span class="text3">打卡：跑步</span>
        <span class="text4">打卡：羽毛球</span>
        <span class="text5">02:22</span>
        <span class="text6">02:22</span>
      </div>
      <div class="b2">
        <span class="text2">06-15</span>
        <img
          class="img1"
          style="margin-top:5px"
          src="@/assets/images/drawable-xhdpi/grow2.png"
          width="80px"
          height="150px"
        />
        <span class="text4" style="margin-top:70px">打卡：羽毛球</span>
        <span class="text5" style="margin-top:70px">14:02</span>
      </div>
      <div class="b3">
        <span class="text2" style="margin-top:-20px">06-09</span>
        <img class="img1" style="margin-top:5px" src="@/assets/images/drawable-xhdpi/grow3.png" width="80px" height="150px" />
        <span class="text3" style="margin-top:18px">打卡：羽毛球</span>
        <span class="text4" style="margin-top:68px">打卡：跑球</span>
        <span class="text4" style="margin-top:118px">新建：羽毛球</span>
        <span class="text6" style="margin-top:18px">11.18</span>
        <span class="text6" style="margin-top:68px">11.18</span>
        <span class="text6" style="margin-top:118px">11.18</span>
      </div>
      <div class="b4">
        <span class="text2">06-08</span>
        <img class="img1" style="margin-top:5px" src="@/assets/images/drawable-xhdpi/grow2.png" width="80px" height="150px" />
        <span class="text4" style="margin-top:70px">打卡：羽毛球</span>
        <span class="text5" style="margin-top:70px">14:02</span>
      </div>
      <div class="b5">
        <span class="text2">06-05</span>
        <img class="img1" style="margin-top:5px" src="@/assets/images/drawable-xhdpi/grow2.png" width="80px" height="150px" />
        <span class="text4" style="margin-top:70px">开启了我的第一个小目标：跑步</span>
        <span class="text5" style="margin-top:70px">20:34</span>
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
  height: 700px;
}
.head {
  height: 60px;
  width: 100%;
  background-color: #f6f7f9;
  margin-top: -40px;
  position: fixed;
  left: 0;
  z-index: 1;
}
img {
  position: absolute;
}
.text {
  position: absolute;
  font-size: 22px;
  margin-top: 10px;
  margin-left: 130px;
  text-align: center;
  font-weight: bold;
}
.img1 {
  position: absolute;
  margin-top: 30px;
}
.text1 {
  position: absolute;
  font-size: 16px;
  margin-top: 15px;
  margin-left: 300px;
}
.text2 {
  position: absolute;
  font-size: 18px;
  margin-left: 20px;
  margin-top: 20px;
}
.text3 {
  position: absolute;
  margin-top: 55px;
  margin-left: 60px;
}
.text4 {
  position: absolute;
  margin-top: 105px;
  margin-left: 60px;
}
.text5 {
  position: absolute;
  margin-left: 300px;
  margin-top: 55px;
}
.text6 {
  position: absolute;
  margin-left: 300px;
  margin-top: 105px;
}
// .text7 {
//     position: absolute;
//     margin-top: 100px;
// }
// .text8 {
//    position: absolute;
//    margin-top: 100px;
//    margin-left: 60px;
// }
// .text9 {

// }
.body {
  width: 95%;
  height: 650px;
  background-color: #fff;
  margin-left: 8px;
  margin-top: 50px;
  border-radius: 10px;
}
.b1 {
  margin-top: -10px;
}
.b2 {
  position: absolute;
  width: 100%;
  margin-top: 155px;
}
.b3 {
  position: absolute;
  width: 100%;
  margin-top: 285px;
}
.b4 {
  position: absolute;
  width: 100%;
  margin-top: 425px;
}
.b5 {
  position: absolute;
  width: 100%;
  margin-top: 525px;
}
</style>
