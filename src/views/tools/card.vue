<template>
  <div class="all">
    <div class="head">
      <img @click="gopersonal" style="margin-left:10px;margin-top:13px;" class="h1" src="@/assets/images/drawable-xhdpi/data.png" width="25" />
      <span class="text">我的补签卡</span>
      <span class="text1">记录</span>
    </div>
    <div>
      <img class="img1" src="@/assets/images/drawable-xhdpi/card1.png" />
    </div>
    <div class="body1">
      <img class="img2" src="@/assets/images/drawable-xhdpi/card2.png" width="50px" />
      <span class="text2">补签卡有什么用?</span>
      <span class="text3">所有目标遗漏打卡后，均可使用补签卡进行补签。</span>
    </div>
    <div class="body2">
      <div class="b1">
        <img class="img3" src="@/assets/images/drawable-xhdpi/card2.png" width="50px" />
        <span class="text4">如何获取补签卡?</span>
      </div>
      <div class="b2">
        <span class="text5">邀请好友使用APP</span>
        <img class="img4" src="@/assets/images/drawable-xhdpi/card3.png" width="50px" />
        <span class="text7">×1</span>
        <span class="text6">已邀请0人 （好友登陆成功，即获得奖励）</span>
        <button class="button1">去邀请</button>
      </div>
      <div class="b3">
        <span class="text5">完善个人资料</span>
        <img class="img4" src="@/assets/images/drawable-xhdpi/card3.png" width="50px" />
        <span class="text7">×1</span>
        <span class="text6">填写真实信息，获取补签卡</span>
        <button class="button2">已完善</button>
      </div>
      <div class="b4">
        <span class="text5">成为VIP会员</span>
        <img class="img4" src="@/assets/images/drawable-xhdpi/card3.png" width="50px" />
        <span class="text7">×3</span>
        <span class="text6">VIP用户每月于充值日获得3张补签</span>
        <span class="text8">卡 如：3号充值，每月3号自动获得</span>
        <button class="button3">开通</button>
      </div>
      <div class="b5">
        <span class="text5">观看视频一次</span>
        <img class="img4" src="@/assets/images/drawable-xhdpi/card3.png" width="50px" />
        <span class="text7">×3</span>
        <span class="text6">观看视频并点击视频下方按钮，即</span>
        <span class="text8">可领取补签卡</span>
        <button class="button1">去完成</button>
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
  height: 800px;
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
  margin-left: 130px;
  text-align: center;
  font-weight: bold;
}
.text1 {
  position: absolute;
  font-size: 16px;
  margin-top: 15px;
  margin-left: 320px;
}
.img1 {
  position: absolute;
  margin-top: -30px;
  margin-left: 13px;
}
.body1 {
  position: absolute;
  height: 85px;
  width: 93%;
  background-color: #fff;
  margin-top: 160px;
  margin-left: 14px;
  border-radius: 10px;
}
.img2 {
  position: absolute;
  margin-top: 0px;
  margin-left: -15px;
}
.text2 {
  position: absolute;
  font-size: 17px;
  margin-left: 25px;
  margin-top: 15px;
}
.text3 {
  position: absolute;
  margin-left: 15px;
  margin-top: 45px;
  font-size: 14px;
  color: #a5a5a5;
}
.body2 {
  height: 430px;
  width: 93%;
  background-color: #fff;
  position: absolute;
  margin-top: 270px;
  margin-left: 14px;
  border-radius: 10px;
}
.b1 {
  position: relative;
  height: 50px;
  border-bottom: 1px solid #999;
}
.img3 {
  position: absolute;
  margin-left: -15px;
}
.text4 {
  position: absolute;
  font-size: 17px;
  margin-left: 25px;
  margin-top: 15px;
}
.b2 {
  position: relative;
  height: 80px;
  border-bottom: 1px solid #999;
}
.b3 {
  position: relative;
  height: 80px;
  border-bottom: 1px solid #999;
}
.b4 {
  position: relative;
  height: 100px;
  border-bottom: 1px solid #999;
}
.text5 {
  position: absolute;
  margin-left: 10px;
  margin-top: 10px;
}
.img4 {
  position: absolute;
  margin-left: 140px;
  margin-top: -4px;
}
.text6 {
  position: absolute;
  margin-top: 45px;
  margin-left: 10px;
  font-size: 14px;
  color: #a5a5a5;
}
.text7 {
  position: absolute;
  margin-top: 10px;
  margin-left: 185px;
  color: #e5c93a;
  font-size: 20px;
}
.text8 {
  position: absolute;
  margin-top: 70px;
  margin-left: 8px;
  font-size: 14px;
  color: #a5a5a5;
}
.button1 {
  width: 75px;
  height: 35px;
  margin-top: 20px;
  margin-left: 270px;
  border-radius: 5px;
  background-color: #ffd430;
}
.button2 {
  width: 75px;
  height: 35px;
  margin-top: 20px;
  margin-left: 270px;
  border-radius: 5px;
  background-color: white;
  color: #979797;
}
.button3 {
  width: 75px;
  height: 35px;
  margin-top: 30px;
  margin-left: 270px;
  border-radius: 5px;
  color: white;
  background-color: #29211f;
}
</style>
