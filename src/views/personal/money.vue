<template>
  <div class="all">
    <div>
      <img @click="gopersonal" style="margin-left:10px;margin-top:15px;" class="h1" src="@/assets/images/drawable-xhdpi/data.png" width="25" />
    </div>
    <span class="text">我的钱包</span>
    <span class="text1">账单</span>
    <div class="head">
      <ul>
        <li @click="cur = 0" :class="{ active: cur == 0 }">
          <span>账户</span>
        </li>
        <li @click="cur = 1" :class="{ active: cur == 1 }">
          <span>优惠券</span>
        </li>
      </ul>
    </div>
    <div class="show">
      <div class="t0" v-show="cur == 0">
        <p class="t1">我的余额</p>
        <p class="t2">￥0.00</p>
        <button class="t3">提现</button>
        <div class="text2">
          <p class="t4">自2019年1月15日起，小目标平台将对提现操作进行如下</p>
          <p class="t4">调整：</p>
          <p class="t4">1、用户提现将收取1%的手续费</p>
          <p class="t4">2、余额满10元可提现，申请后一个工作日内到账。</p>
          <p class="t4">3、一个支付宝账号仅能绑定一个小目标账号提现，反之</p>
          <p class="t4">亦然。</p>
          <p class="t4">如有任何疑问，请联系官方客服 QQ ：938289078</p>
        </div>
      </div>
      <div class="f1" v-show="cur == 1">
        <img  class="f2" src="@/assets/images/drawable-xhdpi/yh.png" width="250px" />
        <div class="text3">呀，什么都没有</div>
       <button class="end">去抽奖</button>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'Circle',
  data() {
    return { cur: 0 }
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
  width: 90%;
  height: 500px;
}
img {
  position: absolute;
}
.text {
  position: absolute;
  font-size: 22px;
  margin-top: 10px;
  margin-left: 140px;
  text-align: center;
  font-weight: bold;
}
.text1 {
  position: absolute;
  font-size: 16px;
  margin-top: 15px;
  margin-left: 320px;
}
.head {
  position: fixed;
  margin-top: 100px;
  height: 0px;
  width: 375px;
  background: #fff;
  border-bottom: 1px solid #999;
}
.head .t1 {
  position: absolute;
  margin-top: 5px;
  margin-left: 15px;
}

.head ul {
  position: absolute;
  margin-top: -10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-left: 20px;
}
.head ul li {
  margin-left: 50px;
  width: 50%;
}
.show ul {
  position: absolute;
  margin-top: 160px;
}
.head li span {
  width: 50%;
  display: flex;
  text-align: center;
  // float: left;
  margin-left: 15px;
  margin-top: -20px;
  position: relative;
  color: #000;
  line-height: 1;
  transition: 0.5s all linear;
  cursor: pointer;
}
.head li::before {
  content: '';
  position: absolute;
  margin-left: 60px;
  top: 2;
  width: 10%;

  height: 98%;
  border-bottom: 3px solid rgb(255, 255, 255);
  transition: 0.2s all linear;
}

li:hover::before {
  width: -50%;
  margin-left: 11px;
  top: 0;
  left: 50;
  transition-delay: 0.1s;
  border-bottom-color: #ffd430;
  z-index: 1;
}
.head span:hover {
  color: #ffd430;
}
li:hover ~ li::before {
  left: 50;
  color: #ffd430;
}
li:active {
  background: rgb(223, 209, 209);
  color: #ffd430;
}
.show {
  position: absolute;
  margin-top: 130px;
  margin-left: 10px;
}
.t1 {
  margin-left: 150px;
  margin-top: 20px;
}
.t2 {
  font-size: 45px;
  font-weight: bold;
  margin-left: 100px;
  margin-top: 10px;
}
.t3 {
  color: #000;
  background-color: #ffd430;
  width: 300px;
  height: 40px;
  font-size: 18px;
  font-weight: bold;
  margin-left: 30px;
  margin-top: 25px;
  text-align: center;
}
.text2 {
  margin-top: 40px;
}
.t4 {
  margin-left: 0px;
  margin-top: 2px;
  font-size: 14px;
  color: #302f2e;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.f1 {
  margin: 50px;
  width: 100%;
  height:0px;
}
.f2 {
  position: absolute;
  margin-top: -250px;
}
.text3 {
  font-size: 20px;
  margin-left: 70px;
  margin-top: 300px;
  color: #b6b6b6;
}
.end {
  width: 180px;
  height: 50px;
  background-color: #ffd430;
  margin-left: 50px;
  margin-top: 30px;
}
</style>