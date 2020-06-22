<template>
  <div>
    <img class="img1" src="@/assets/images/drawable-xhdpi/invite1.png" />
    <div>
      <img @click="gopersonal" style class="img" src="@/assets/images/drawable-xhdpi/data.png" width="25" />
      <div class="body1">
        <span class="text1">我的专属邀请码</span>
        <hr style=" position: absolute;border:1px dashed #b6b6b6;margin-top:-660px;width:338px;margin-left: 20px;" />
        <span class="text2">st_365dbf</span>
        <div class="b1">
          <button class="text3">复制</button>
        </div>
      </div>
      <div class="body2">
        <span class="text4">邀请记录</span>
        <span class="text5">已邀请好友：0位</span>
        <span class="text6">获取补签卡：0张</span>
        <hr style=" position: absolute;border:1px dashed #b6b6b6;width:338px;margin-top:540px;margin-left: 20px;" />
        <span class="text7">还没有邀请过好友哦~</span>
      </div>
      <div class="body3">
        <span class="text4" style="margin-top:-260px">邀请规则</span>
        <div class="circle" style="margin-top:-180"></div>
        <span class="e1">被邀请好友需复制邀请码打开APP接受邀受邀请”</span>
        <span class="e2">中输入邀请码请；或者在“邀请好友”页面点击右</span>
        <span class="e3">上角“接受邀受邀请”中输入邀请码</span>
        <div class="circle1"></div>
        <span class="e4">每邀请一位好友注册成功，您将获得补签卡一张</span>
        <div class="circle2"></div>
        <span class="e5">同一设备。同一账号有且只能获得一次奖励</span>
        <div class="circle3"></div>
        <span class="e6">被邀请好友24小时内接受邀请为有效邀请。</span>
      </div>
      <div class="end">
        <button class="button1">邀请好友</button>
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
.img {
  position: absolute;
  margin-left: 10px;
  margin-top: -990px;
}
.body1 {
  position: absolute;
  width: 100%;
}
.b1 {
  position: absolute;
  width: 70px;
  height: 25px;
}
.text1 {
  position: absolute;
  margin-top: -690px;
  margin-left: 120px;
  font-size: 18px;
  color: #d16838;
  font-weight: bold;
}
.text2 {
  position: absolute;
  margin-top: -640px;
  font-size: 22px;
  margin-left: 50px;
}
.text3 {
  position: absolute;
  margin-top: -640px;
  width: 65px;
  background-color: #ffd430;
  font-size: 18px;
  margin-left: 270px;
  border-radius: 5px;
}
.text4 {
  position: absolute;
  margin-top: -540px;
  margin-left: 150px;
  font-size: 18px;
  color: #d16838;
}
.text5 {
  position: absolute;
  margin-top: -500px;
  margin-left: 100px;
}
.text5 {
  position: absolute;
  margin-top: -500px;
  margin-left: 30px;
  font-size: 14px;
  color: #77625d;
}
.text6 {
  position: absolute;
  margin-top: -500px;
  margin-left: 240px;
  font-size: 14px;
  color: #77625d;
}
.text7 {
  position: absolute;
  margin-top: -400px;
  margin-left: 110px;
  font-size: 18px;
  font-weight: bold;

  color: #aaaaaa;
}
.circle {
  position: absolute;
  height: 10px;
  width: 10px;
  border-radius: 50px;
  background: #ff8500;
  margin-top: -210px;
  margin-left: 30px;
}
.circle1 {
  position: absolute;
  height: 10px;
  width: 10px;
  border-radius: 50px;
  background: #ff8500;
  margin-top: -160px;
  margin-left: 30px;
}
.circle2 {
  position: absolute;
  height: 10px;
  width: 10px;
  border-radius: 50px;
  background: #ff8500;
  margin-top: -130px;
  margin-left: 30px;
}
.circle3 {
  position: absolute;
  height: 10px;
  width: 10px;
  border-radius: 50px;
  background: #ff8500;
  margin-top: -100px;
  margin-left: 30px;
}
.e1 {
  position: absolute;
  margin-top: -227px;
  margin-left: 45px;
  font-size: 14px;
}
.e2 {
  position: absolute;
  margin-top: -209px;
  margin-left: 45px;
  font-size: 14px;
}
.e3 {
  position: absolute;
  margin-top: -190px;
  margin-left: 45px;
  font-size: 14px;
}
.e4 {
  position: absolute;
  margin-top: -165px;
  margin-left: 45px;
  font-size: 14px;
}
.e5 {
  position: absolute;
  margin-top: -135px;
  margin-left: 45px;
  font-size: 14px;
}
.e6 {
  position: absolute;
  margin-top: -105px;
  margin-left: 45px;
  font-size: 14px;
}
.end {
  width: 100%;
  height: 50px;
  margin-top: -4px;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 1000;
}
.button1 {
  background-color: #ffd430;
  width: 100%;
  height: 50px;
}
</style>
