<template>
  <div class="all">
    <img src="@/assets/images/drawable-xhdpi/ranking0.png" alt />
    <div>
      <img @click="gopersonal" style="margin-left:10px;margin-top:15px;" class="h1" src="@/assets/images/drawable-xhdpi/data.png" width="25" />
    </div>
    <span class="text">打卡排行</span>
    <img class="img1" src="@/assets/images/drawable-xhdpi/ranking2.png" width="25" />
    <div class="header">
      <span class="text">嘟吧</span>
      <span class="text" style="margin-left:165px;">仙人卷</span>
      <span class="text" style="margin-left:285px;">与其</span>
      <span class="text3">打卡</span>
      <span class="text4">1100</span>
      <span class="text5">次</span>
      <span class="text3" style="margin-left:150px">打卡</span>
      <span class="text4" style="margin-left:180px">1115</span>
      <span class="text5" style="margin-left:215px">次</span>
      <span class="text3" style="margin-left:265px">打卡</span>
      <span class="text4" style="margin-left:295px">1100</span>
      <span class="text5" style="margin-left:325px">次</span>
    </div>
    <div class="head">
      <ul>
        <li @click="cur = 0" :class="{ active: cur == 0 }">
          <span>周榜</span>
        </li>
        <li @click="cur = 1" :class="{ active: cur == 1 }">
          <span>月榜</span>
        </li>
        <li @click="cur = 2" :class="{ active: cur == 2 }">
          <span>总榜</span>
        </li>
      </ul>
    </div>
    <div class="show">
      <div class="week" v-show="cur == 0">
        <div class="w1">
          <span class="a1">1193</span>
          <img class="a2" src="@/assets/images/drawable-xhdpi/id.png" width="45px" />
          <span class="a3">bLue</span>
          <span class="a4">0次</span>
        </div>
        <div class="w2">
          <div class="ww1" >
          <span class="a1">4</span>
          <img class="a2" src="@/assets/images/drawable-xhdpi/tx4.png" width="55px" />
          <span class="a3">小二</span>
          <span class="a4">0次</span>
          <hr style="width:100%;margin-top:55px" />
          </div>
          <div class="ww2">
          <span class="a1">5</span>
          <img class="a2" style="margin-left:69px;margin-top:10px" src="@/assets/images/drawable-xhdpi/tx3.png" width="48px" />
          <span class="a3">~琳琳</span>
          <span class="a4">0次</span>
          <hr style="width:100%;margin-top:55px;" />
          </div>
          <div class="ww3">
          <span class="a1" style="margin-top:20px">6</span>
          <img class="a2" src="@/assets/images/drawable-xhdpi/tx2.png" width="55px" />
          <span class="a3">挽歌</span>
          <span class="a4">0次</span>
          <hr style="width:100%;margin-top:55px" />
          </div>
          <div class="ww4">
          <span class="a1" style="margin-top:20px">7</span>
          <img class="a2" src="@/assets/images/drawable-xhdpi/tx6.png" width="55px" />
          <span class="a3">cherr</span>
          <span class="a4">0次</span>
          <hr style="width:100%;margin-top:55px" />
          </div>
           <div class="ww5">
          <span class="a1" style="margin-top:20px">8</span>
          <img class="a2" style="margin-left:69px;margin-top:10px" src="@/assets/images/drawable-xhdpi/tx5.png" width="48px" />
          <span class="a3">樱桃味</span>
          <span class="a4">0次</span>
          <hr style="width:100%;margin-top:55px" />
          </div>
        </div>
      </div>
      <div class="week" v-show="cur == 1">
        <div class="w1">
          <span class="a1">1193</span>
          <img class="a2" src="@/assets/images/drawable-xhdpi/id.png" width="45px" />
          <span class="a3">bLue</span>
          <span class="a4">0次</span>
        </div>
        <div class="w2">
          <div class="ww1" >
          <span class="a1">4</span>
          <img class="a2" src="@/assets/images/drawable-xhdpi/tx3.png" width="50px" />
          <span class="a3">泡芙</span>
          <span class="a4">0次</span>
          <hr style="width:100%;margin-top:55px" />
          </div>
          <div class="ww2">
          <span class="a1">5</span>
          <img class="a2" src="@/assets/images/drawable-xhdpi/tx2.png" width="55px" />
          <span class="a3">~puff</span>
          <span class="a4">0次</span>
          <hr style="width:100%;margin-top:55px;" />
          </div>
          <div class="ww3">
          <span class="a1" style="margin-top:20px;">6</span>
          <img class="a2" style="margin-left:66px;margin-top:10px" src="@/assets/images/drawable-xhdpi/tx1.png" width="48px" />
          <span class="a3">~</span>
          <span class="a4">0次</span>
          <hr style="width:100%;margin-top:55px" />
          </div>
          <div class="ww4">
          <span class="a1" style="margin-top:20px">7</span>
          <img class="a2" src="@/assets/images/drawable-xhdpi/tx6.png" width="55px" />
          <span class="a3">~</span>
          <span class="a4">0次</span>
          <hr style="width:100%;margin-top:55px" />
          </div>
           <div class="ww5">
          <span class="a1" style="margin-top:20px">8</span>
          <img class="a2" style="margin-left:69px;margin-top:10px" src="@/assets/images/drawable-xhdpi/tx5.png" width="48px" />
          <span class="a3">~</span>
          <span class="a4">0次</span>
          <hr style="width:100%;margin-top:55px" />
          </div>
      </div>
      </div>
      <div class="week1" v-show="cur == 2">
         <div class="w1">
          <span class="a1">1193</span>
          <img class="a2" src="@/assets/images/drawable-xhdpi/id.png" width="45px" />
          <span class="a3">bLue</span>
          <span class="a4">0次</span>
        </div>
        <div class="w2">
          <div class="ww1" >
          <span class="a1">4</span>
          <img class="a2" src="@/assets/images/drawable-xhdpi/tx4.png" width="55px" />
          <span class="a3">小二</span>
          <span class="a4">0次</span>
          <hr style="width:100%;margin-top:55px" />
          </div>
          <div class="ww2">
          <span class="a1">5</span>
          <img class="a2" style="margin-left:69px;margin-top:10px" src="@/assets/images/drawable-xhdpi/tx3.png" width="48px" />
          <span class="a3">~琳琳</span>
          <span class="a4">0次</span>
          <hr style="width:100%;margin-top:55px;" />
          </div>
          <div class="ww3">
          <span class="a1" style="margin-top:20px">6</span>
          <img class="a2" src="@/assets/images/drawable-xhdpi/tx2.png" width="55px" />
          <span class="a3">~</span>
          <span class="a4">0次</span>
          <hr style="width:100%;margin-top:55px" />
          </div>
          <div class="ww4">
          <span class="a1" style="margin-top:20px">7</span>
          <img class="a2" src="@/assets/images/drawable-xhdpi/tx6.png" width="55px" />
          <span class="a3">~</span>
          <span class="a4">0次</span>
          <hr style="width:100%;margin-top:55px" />
          </div>
           <div class="ww5">
          <span class="a1" style="margin-top:20px">8</span>
          <img class="a2" style="margin-left:69px;margin-top:10px" src="@/assets/images/drawable-xhdpi/tx5.png" width="48px" />
          <span class="a3">~</span>
          <span class="a4">0次</span>
          <hr style="width:100%;margin-top:55px" />
          </div>
        </div>
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
.img1 {
  position: absolute;
  margin-top: 15px;
  margin-left: 320px;
}
.head img {
  margin-top: -130px;
}
.head {
  position: fixed;

  margin-top: 150px;
  height: 200px;
  width: 375px;
 
}
.head ul {
  position: absolute;
  margin-top: 0px;
  width: 45%;
  display: flex;
  text-align: center;
  flex-direction: row;
  margin-left: 40px;
}
.head li span {
  width: 50%;
  display: flex;
  text-align: center;
  // float: left;
  margin-left: 60px;
  margin-top: -70px;
}
.head li::before {
  content: '';
  position: absolute;
  margin-top: -50px;
  margin-left: 70px;
  top: 2;
  width: 2px;
  height: 0%;
  border-bottom: 4px solid #fec58e;
  transition: 0.2s all linear;
}

li:hover::before {
  width: 20%;

  margin-left: 20px;
  top: 0;
  left: 50;
  transition-delay: 0.1s;
  border-bottom-color: #ffd430;
  z-index: 1;
}

li:hover ~ li::before {
  left: 50;
}
li:active {
  background: #ffc792;
}

.header .text {
  margin-left: 55px;
  margin-top: 265px;
  font-size: 16px;
}
.header .text3 {
  position: absolute;
  margin-top: 290px;
  font-size: 14px;
  margin-left: 35px;
}
.header .text4 {
  position: absolute;
  margin-top: 292px;
  font-size: 14px;
  margin-left: 65px;
  color: red;
}
.header .text5 {
  position: absolute;
  margin-top: 290px;
  font-size: 14px;
  margin-left: 95px;
}
.show {
  position: absolute;
  margin-top: 340px;
  width: 100%;
  height: 400px;
  background-color: #fddaa2;
}
.week .w1 {
  width: 95%;
  height: 50px;
  margin-left: 9px;
  border-radius: 10px;
  background-color: #fff;
}
.a1 {
  position: absolute;
  font-size: 18px;
  margin-left: 10px;
  margin-top: 20px;
  color: #b7b7b7;
}
.a2 {
  position: absolute;
  margin-left: 65px;
  border-radius: 50%;
  margin-top: 8px;
}
.a3 {
  position: absolute;
  margin-left: 130px;
  font-size: 17px;
  margin-top: 15px;
  font-weight: 100;
}
.a4 {
  position: absolute;
  font-size: 17px;
  margin-top: 13px;
  margin-left: 300px;
  color: #b7b7b7;
}
.w2 {
  position: absolute;
  width: 95%;
  height: 300px;
  margin-left: 9px;
  border-radius: 10px;
  margin-top: 20px;
  background-color: #fff;
}
.ww1{
  position: absolute;
  height: 50px;
  margin-top: -5px;
  width: 100%;
  
}
.ww2{
  position: absolute;
  height: 50px;
  width: 100%;
  margin-top: 50px;
}
.ww3{
  position: absolute;
  height: 50px;
  width: 100%;
  margin-top: 100px;
}
.ww4{
  position: absolute;
  height: 50px;
  width: 100%;
  margin-top: 150px;
}
.ww5{
  position: absolute;
  height: 50px;
  width: 100%;
  margin-top: 200px;
}
</style>