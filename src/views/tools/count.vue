<template>
  <div class="all">
    <div class="head">
      <img @click="gopersonal" style="margin-left:10px;margin-top:10px;" class="h1" src="@/assets/images/drawable-xhdpi/data.png" width="25" />
      <span class="head1">2020年06月</span>
      <img class="img" src="@/assets/images/drawable-xhdpi/count1.png" width="50px" />
      <img class="img1" src="@/assets/images/drawable-xhdpi/count3.png" width="25px" />
    </div>
    <div class="header"></div>
    <div class="body">
      <span class="text1">本月汇总</span>
      <span class="text2">目标打卡：</span>
      <span class="text3">52</span>
      <span class="text2" style=" margin-left: 280px;">完成打卡：</span>
      <span class="text3" style=" margin-left: 350px;">6</span>
      <img class="img2" src="@/assets/images/drawable-xhdpi/count4.png" />
      <span class="text4">3次</span>
      <span class="text5">羽毛球</span>
      <span class="text4" style=" margin-left: 290px;">3次</span>
      <span class="text5" style=" margin-left: 290px;">跑步</span>
    </div>
    <div style="height:20px;background-color:#f6f7f9;margin-top:-110px"></div>
    <div class="body1">
      <span class="text1">打卡趋势</span>
      <div>
        <div class="text6">10</div>
        <hr style=" position: absolute;border:1px dashed #b6b6b6;margin-top:425px;margin-left: 50px;" />
      </div>
      <div>
        <div class="text6" style="margin-top:90px;margin-left:24px">8</div>
        <hr style=" position: absolute;border:1px dashed #b6b6b6;margin-top:455px;margin-left: 50px;" />
      </div>
      <div>
        <div class="text6" style="margin-top:120px;margin-left:24px">6</div>
        <hr style=" position: absolute;border:1px dashed #b6b6b6;margin-top:485px;margin-left: 50px;" />
      </div>
      <div>
        <div class="text6" style="margin-top:150px;margin-left:24px">4</div>
        <hr style=" position: absolute;border:1px dashed #b6b6b6;margin-top:515px;margin-left: 50px;" />
      </div>
      <div>
        <div class="text6" style="margin-top:180px;margin-left:24px">2</div>
        <hr style=" position: absolute;border:1px dashed #b6b6b6;margin-top:545px;margin-left: 50px;" />
      </div>
      <div>
        <div class="text6" style="margin-top:210px;margin-left:24px;">0</div>
        <span class="b1"></span>
        <span class="b2"></span>
      </div>
      <div>
        <img class="img3" src="@/assets/images/drawable-xhdpi/count5.png" width="50px" />
        <span class="text7">0次</span>
      </div>
      <div class="b3">
        <span class="text9">06-01</span>
        <span class="text9" style="margin-left: 110px;">06-02</span>
        <span class="text9" style="margin-left: 170px;">06-03</span>
        <span class="text9" style="margin-left: 230px;">06-04</span>
        <span class="text9" style="margin-left: 290px;">06-05</span>
      </div>
      <div class="b4"></div>
      <div class="end">
        <span class="text1" style="margin-top:310px">目标进度</span>
        <div class="e1">
          <img class="img4" src="@/assets/images/drawable-xhdpi/mb4.png" width="40px" />
          <span class="t1">跑步</span>
          <span class="t2">3/30</span>
          <span class="t3"></span>
          <span class="t4">10%</span>
          <span class="t5"></span>
        </div>
        <div class="e2">
          <img class="img4" src="@/assets/images/drawable-xhdpi/mb6.png" width="40px" />
          <span class="t1">羽毛球</span>
          <span class="t2">3/22</span>
          <span class="t3"></span>
          <span class="t4">14%</span>
          <span class="t6"></span>
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
.head {
  position: absolute;
  height: 50px;
  width: 375px;
  border-bottom: 1px solid #999;
  background-color: #fff;
  position: fixed;
  z-index: 1;
}
.all {
  position: relative;
  width: 375px;
  height: 850px;
}
.head1 {
  font-size: 20px;
  margin-top: 5px;
  text-align: center;
  font-weight: bold;
  margin: 100px;
}
.img {
  position: absolute;
  margin-top: 4px;
  margin-left: -110px;
}
.img1 {
  position: absolute;
  margin-top: 15px;
  margin-left: -10px;
}
.img2 {
  position: absolute;
  margin-top: 30px;
  margin-left: 35px;
}
.img3 {
  position: absolute;
  margin-top: 160px;
  margin-left: 55px;
}
.img4 {
  position: absolute;
  margin-top: 350px;
  margin-left: 10px;
}
.body {
  height: 400px;
  width: 375px;
}
.header {
  height: 50px;
}
.body1 {
  height: 400px;
  width: 375px;
}
.text1 {
  position: absolute;
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 10px;
}
.text2 {
  position: absolute;
  margin-top: 20px;
  font-size: 14px;
  margin-left: 180px;
  color: #aaaaaa;
}
.text3 {
  position: absolute;
  font-size: 14px;
  margin-top: 24px;
  margin-left: 250px;
}
.text4 {
  position: absolute;
  margin-left: 60px;
  margin-top: 160px;
}
.text5 {
  position: absolute;
  margin-left: 50px;
  margin-top: 190px;
}
.text6 {
  width: 100%;
  position: absolute;
  margin-left: 20px;
  margin-top: 60px;
  color: #aaaaaa;
}
.text7 {
  position: absolute;
  margin-top: 173px;
  margin-left: 68px;
}
.text9 {
  position: absolute;
  font-size: 14px;
  color: #aaaaaa;
  margin-top: 240px;
  margin-left: 55px;
}
.t1 {
  position: absolute;
  margin-top: 350px;
  margin-left: 70px;
}
.t2 {
  position: absolute;
  margin-top: 352px;
  margin-left: 125px;
  font-size: 14px;
}
.t3 {
  position: absolute;
  height: 10px;
  width: 60%;
  background-color: #e7e5e5;
  margin-top: 378px;
  margin-left: 70px;
  border-radius: 10px;
}
.t4 {
  position: absolute;
  margin-top: 375px;
  margin-left: 320px;
  font-size: 14px;
}
.t5 {
  position: absolute;
  height: 10px;
  width: 6%;
  background-color: #ffad98;
  margin-top: 378px;
  margin-left: 70px;
  border-radius: 10px;
}
.t6 {
  position: absolute;
  height: 10px;
  width: 10%;
  background-color: #8babff;
  margin-top: 378px;
  margin-left: 70px;
  border-radius: 10px;
}
.b1 {
  width: 81%;
  position: absolute;
  margin-left: 47px;
  height: 5px;
  background-color: #fff6d5;
  margin-top: 225px;
}
.b2 {
  width: 81%;
  position: absolute;
  margin-left: 47px;
  height: 5px;
  background-color: #ffd433;
  margin-top: 215px;
}
.b4 {
  width: 100%;
  height: 20px;
  background-color: #f6f7f9;
  position: absolute;
  margin-top: 270px;
}
.end {
  position: absolute;
  width: 375px;
}
.e2 {
  position: absolute;
  margin-top: 60px;
  width: 375px;
}
</style>
