<template>
  <div class="all">
    <div class="head">
      <div>
        <img @click="gopersonal" style="margin-left:10px;margin-top:15px;" class="h1" src="@/assets/images/drawable-xhdpi/data.png" width="25" />
      </div>
      <div>
        <span class="text">倒计时</span>
        <span class="text1">保存</span>
      </div>
      <div class="body">
        <img class="img1" src="@/assets/images/drawable-xhdpi/cl1.png" width="30px" />
        <span class="text2">努力奋斗吧，今年只剩</span>
        <p><span class="text3">190</span>天 <span class="text3">6</span>时 <span class="text3">57</span>分 <span class="text3">1</span>秒</p>
      </div>
      <div class="body1">
        <button class="button1">设置计时器不停止</button>
      </div>
      <div class="body2">添加指南</div>
      <div class="body3">
        <span class="text4">标题</span>
        <img class="img2" src="@/assets/images/drawable-xhdpi/y1.png" width="50px" />
        <img class="img2" style="margin-left:110px" src="@/assets/images/drawable-xhdpi/y2.png" width="50px" />
        <img class="img2" style="margin-left:160px" src="@/assets/images/drawable-xhdpi/y3.png" width="50px" />
        <img class="img2" style="margin-left:210px" src="@/assets/images/drawable-xhdpi/y4.png" width="50px" />
        <img class="img2" style="margin-left:260px" src="@/assets/images/drawable-xhdpi/y5.png" width="50px" />
        <img class="img2" style="margin-left:310px" src="@/assets/images/drawable-xhdpi/y6.png" width="50px" />
        <span class="text4" style="margin-top:70px">时间</span>
        <img class="img3" src="@/assets/images/drawable-xhdpi/y1.png" width="50px" />
        <img class="img3" style="margin-left:110px" src="@/assets/images/drawable-xhdpi/y2.png" width="50px" />
        <img class="img3" style="margin-left:160px" src="@/assets/images/drawable-xhdpi/y3.png" width="50px" />
        <img class="img3" style="margin-left:210px" src="@/assets/images/drawable-xhdpi/y4.png" width="50px" />
        <img class="img3" style="margin-left:260px" src="@/assets/images/drawable-xhdpi/y5.png" width="50px" />
        <img class="img3" style="margin-left:310px" src="@/assets/images/drawable-xhdpi/y6.png" width="50px" />
        <div class="end1">
          <img class="img4" src="@/assets/images/drawable-xhdpi/cl2.png" width="35px" />
          <span class="text5">颜色</span>
        </div>
        <div class="end1">
          <img class="img4" style="margin-left:170px" src="@/assets/images/drawable-xhdpi/cl3.png" width="35px" />
          <span class="text5" style="margin-left:175px">大小</span>
        </div>
        <div class="end1">
          <img class="img4" style="margin-left:300px" src="@/assets/images/drawable-xhdpi/cl4.png" width="35px" />
          <span class="text5" style="margin-left:300px">背景</span>
        </div>
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
  width: 100%;
  height: 667px;
  background-color: #f6f7f9;
}
img {
  position: absolute;
}
.img1 {
  position: absolute;
  margin-left: 310px;
}
.text {
  position: absolute;
  font-size: 22px;
  margin-top: 10px;
  margin-left: 150px;
  text-align: center;
  font-weight: bold;
}
.text1 {
  position: absolute;
  font-size: 16px;
  margin-top: 15px;
  margin-left: 320px;
}
.body {
  position: absolute;
  height: 150px;
  width: 95%;
  background-color: #fff;
  margin-top: 60px;
  margin-left: 10px;
  border-radius: 10px;
}
.text2 {
  position: absolute;
  font-size: 18px;
  margin-top: 40px;
  margin-left: 80px;
  color: #ffd430;
}
p {
  margin-left: 50px;
  margin-top: 90px;
}
.text3 {
  font-size: 30px;
  margin-left: 15px;
}
.body1 {
  position: absolute;
  width: 90%;
  height: 50px;
  background-color: #ffd430;
  margin-top: 230px;
  margin-left: 15px;
  border-radius: 10px;
}
.button1 {
  position: absolute;
  font-size: 20px;
  padding-left: 100px;
  padding-top: 10px;
  background-color: #ffd430;
  border-radius: 10px;
}
.body2 {
  position: absolute;
  margin-left: 280px;
  margin-top: 300px;
  border-bottom: 1px solid black;
}
.body3 {
  position: absolute;
  height: 165px;
  width: 100%;
  margin-left: 0px;
  margin-top: 500px;
  background-color: #fff;
}
.text4 {
  position: absolute;
  margin-left: 10px;
  margin-top: 20px;
}
.img2 {
  display: flex;
  font-display: row;
  position: absolute;
  margin-left: 60px;
  margin-top: 8px;
}
.img3 {
  display: flex;
  font-display: row;
  position: absolute;
  margin-left: 60px;
  margin-top: 55px;
}
.img4 {
  position: absolute;
  margin-left: 30px;
  margin-top: 110px;
}
.text5 {
  position: absolute;
  margin-left: 35px;
  margin-top: 145px;
}
</style>
