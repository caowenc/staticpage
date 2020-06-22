<template>
  <div class="all">
    <div class="head">
      <img @click="gopersonal" style="margin-left:10px;margin-top:13px;" class="h1" src="@/assets/images/drawable-xhdpi/data.png" width="25" />
      <span class="text">设置</span>
    </div>
    <div class="b1">
      <span class="text1">按键音效</span>
      <div class="label">
        <input type="checkbox" name="sex" id="male" class="chooseBtn" style="margin-left:250px" />
        <label for="male" class="choose-label"></label>
      </div>
    </div>
    <div class="b2"></div>
    <div class="b1">
      <span class="text1">日历提醒</span>
      <div class="label1">
        <input type="checkbox" name="sex1" id="male1" class="chooseBtn1" />
        <label for="male1" class="choose-label1"></label>
      </div>
    </div>
    <div class="b2"></div>
    <div class="b1">
      <span class="text1">活动弹窗提醒</span>
      <div class="label2">
        <input type="checkbox" name="sex2" id="male2" class="chooseBtn2" />
        <label for="male2" class="choose-label2"></label>
      </div>
    </div>
    <div class="b2"></div>
    <div class="b1">
      <span class="text1">清除缓存</span>
      <span class="text1" style="margin-left:300px;margin-top:15px">41.77M</span>
    </div>
    <div class="b2"></div>
    <div class="button1">
      <button class="bu1">退出登录</button>
    </div>
    <div class="b2"></div>
    <div class="button1">
      <button class="bu1">注销账户</button>
    </div>
    <div class="end">版本号：3.3.0</div>
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
  margin-left: 170px;
  text-align: center;
  font-weight: bold;
}
.chooseBtn {
  display: none;
}

.choose-label {
  box-shadow: black 0px 0px 0px 1px;
  width: 38px;
  height: 21px;
  margin-top: 2px;
  margin-left: 2px;
  display: inline-block;
  //  border: 1px solid black;
  border-radius: 20px;
  position: relative;
  background-color: white;
  overflow: hidden;
}

.choose-label:before {
  content: '';
  position: absolute;
  left: 0;
  width: 15px;
  height: 15px;
  margin-top: 2px;
  margin-left: 2px;
  display: inline-block;
  border-radius: 20px;

  border: 1px solid black;
  background-color: white;
  z-index: 1;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}

.chooseBtn:checked + label.choose-label:before {
  left: 16px;
}

.chooseBtn:checked + label.choose-label {
  background-color: #ffd430;
}
.chooseBtn1 {
  display: none;
}

.choose-label1 {
  box-shadow: black 0px 0px 0px 1px;
  width: 38px;
  height: 21px;
  margin-top: 2px;
  margin-left: 2px;
  display: inline-block;
  //  border: 1px solid black;
  border-radius: 20px;
  position: relative;
  background-color: white;
  overflow: hidden;
}

.choose-label1:before {
  content: '';
  position: absolute;
  left: 0;
  width: 15px;
  height: 15px;
  margin-top: 2px;
  margin-left: 2px;
  display: inline-block;
  border-radius: 20px;

  border: 1px solid black;
  background-color: white;
  z-index: 1;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}

.chooseBtn1:checked + label.choose-label1:before {
  left: 16px;
}

.chooseBtn1:checked + label.choose-label1 {
  background-color: #ffd430;
}
.chooseBtn2 {
  display: none;
}

.choose-label2 {
  box-shadow: black 0px 0px 0px 1px;
  width: 38px;
  height: 21px;
  margin-top: 2px;
  margin-left: 2px;
  display: inline-block;
  //  border: 1px solid black;
  border-radius: 20px;
  position: relative;
  background-color: white;
  overflow: hidden;
}

.choose-label2:before {
  content: '';
  position: absolute;
  left: 0;
  width: 15px;
  height: 15px;
  margin-top: 2px;
  margin-left: 2px;
  display: inline-block;
  border-radius: 20px;

  border: 1px solid black;
  background-color: white;
  z-index: 1;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}

.chooseBtn2:checked + label.choose-label2:before {
  left: 16px;
}

.chooseBtn2:checked + label.choose-label2 {
  background-color: #ffd430;
}
.b1 {
  height: 60px;
  background-color: #fff;
}
.b2 {
  height: 10px;
}
.text1 {
  position: absolute;
  font-size: 18px;
  margin-left: 10px;
  margin-top: 15px;
}
.label {
  position: absolute;
  margin-left: 320px;
  margin-top: 13px;
}
.label1 {
  position: absolute;
  margin-left: 320px;
  margin-top: 13px;
}
.label2 {
  position: absolute;
  margin-left: 320px;
  margin-top: 13px;
}
.button1 {
  width: 100%;
  height: 60px;
  background-color: #fff;
}
.bu1 {
  margin-left: 150px;
  margin-top: 15px;
  font-size: 18px;
  text-align: center;
  background-color: #fff;
  color: #e24234;
}
.end {
  margin-left: 140px;
  margin-top: 150px;
}
</style>
