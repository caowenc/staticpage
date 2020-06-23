<template>
  <div class="all">
    <img
      @click="gopersonal"
      style="margin-left:10px;margin-top:15px;"
      class="h1"
      src="@/assets/images/drawable-xhdpi/data.png"
      width="25"
    />

    <div class="head">
      <ul>
        <li @click="cur = 0" :class="{ active: cur == 0 }">
          <span>统计</span>
        </li>
        <li @click="cur = 1" :class="{ active: cur == 1 }">
          <span>排行</span>
        </li>
      </ul>
      <img class="img1" src="@/assets/images/drawable-xhdpi/count3.png" width="25" />
    </div>
    <div class="show">
      <div class="s1" v-show="cur == 0">
        <div class="body1">
          <img class="img2" src="@/assets/images/drawable-xhdpi/std1.png" width="50px" />
          <p class="t1">番茄概况</p>
          <div class="b1">
            <span class="t2">6</span>
            <span class="t3">分钟</span>
            <span class="t4">总时长</span>
            <div class="verticalBar"></div>
          </div>
          <div class="b1" style="margin-left:190px">
            <span class="t2">6</span>
            <span class="t3">分钟</span>
            <span class="t4">总时长</span>
          </div>
          <hr style="width:90%;margin-top:140px" />
          <div class="b1" style="margin-top:-40px;margin-left:-20px">
            <span class="t2">1</span>
            <span class="t3">次</span>
            <span class="t4">总次数</span>
            <div class="verticalBar" style="margin-left:130px"></div>
          </div>
          <div class="b1" style="margin-top:-40px;margin-left:80px">
            <span class="t2">0</span>
            <span class="t3">分钟</span>
            <span class="t4" style="margin-left:55px">今日时常</span>
            <div class="verticalBar" style="margin-left:140px"></div>
          </div>
          <div class="b1" style="margin-top:-40px;margin-left:190px">
            <span class="t2">0</span>
            <span class="t3">次</span>
            <span class="t4" style="margin-left:55px">总次数</span>
          </div>
          <div class="body2"></div>
          <div class="body3">
            <span class="t5">昨日</span>
            <span class="t8"></span>
            <span class="t6">近7日</span>
            <span class="t7">近30日</span>
          </div>
          <div class="body4">
            <img class="img3" src="@/assets/images/drawable-xhdpi/left.png" width="50px" />
            <span class="t9">2020-06-20</span>
            <span style="margin-left:130px">至</span>
            <span class="t9" style="margin-left:20px">2020-06-20</span>
            <img class="img4" src="@/assets/images/drawable-xhdpi/right.png" width="50px" />
          </div>
          <img class="end" src="@/assets/images/drawable-xhdpi/m2.png" width="130px" />
        </div>
      </div>
      <div class="f1" v-show="cur == 1">
        <div class="std1">
          <span class="s2">日榜</span>
          <span class="s3">周榜</span>
          <img class="img5" src="@/assets/images/drawable-xhdpi/std2.png" width="50px" />>
        </div>
        <div class="std2">
          <span class="s4">未上榜</span>
          <span class="s5">排名</span>
          <img class="img6" src="@/assets/images/drawable-xhdpi/id.png" width="50px" />
          <span class="s5" style="margin-left:160px">bLue</span>
          <span class="s4" style="margin-left:254px">0分钟</span>
          <span class="s5" style="margin-left:250px">专注时间</span>
        </div>
        <hr style="position: absolute;margin-top:148px;width:95%" />
        <div class="std3">
          <div class="d1">
            <img class="img7" src="@/assets/images/drawable-xhdpi/d3.png" width="50px" />
            <img class="img8" src="@/assets/images/drawable-xhdpi/tx2.png" width="55px" />
            <span class="s6">町</span>
            <img class="img9" src="@/assets/images/drawable-xhdpi/d4.png" width="50px" />
            <span class="s8">地球村</span>
            <span class="s7">665分钟</span>
          </div>
         <div class="d2" style="position: absolute;width:100%;margin-top:70px">
            <img class="img7" src="@/assets/images/drawable-xhdpi/d1.png" width="50px" />
            <img class="img8" src="@/assets/images/drawable-xhdpi/tx4.png" width="55px" />
            <span class="s6">文洁</span>
            <img class="img9" src="@/assets/images/drawable-xhdpi/d4.png" width="50px" />
            <span class="s8">地球村</span>
            <span class="s7">486分钟</span>
          </div>
          <div class="d3" style="position: absolute;width:100%;margin-top:140px">
            <img class="img7" src="@/assets/images/drawable-xhdpi/d2.png" width="50px" />
            <img class="img8" src="@/assets/images/drawable-xhdpi/tx5.png" width="55px" />
            <span class="s6">樱桃味</span>
            <img class="img9" src="@/assets/images/drawable-xhdpi/d4.png" width="50px" />
            <span class="s8">地球村</span>
            <span class="s7">346分钟</span>
          </div>
          <div class="d3" style="position: absolute;width:100%;margin-top:210px">
            <span style="position: absolute;font-size:22px;color:#aaaaaa;margin-left:18px;margin-top:180px">4</span>
            <img class="img8" src="@/assets/images/drawable-xhdpi/tx1.png" width="55px" />
            <span class="s6">puff</span>
            <img class="img9" src="@/assets/images/drawable-xhdpi/d4.png" width="50px" />
            <span class="s8">地球村</span>
            <span class="s7">286分钟</span>
          </div>
           <div class="d4" style="position: absolute;width:100%;margin-top:280px">
            <span style="position: absolute;font-size:22px;color:#aaaaaa;margin-left:18px;margin-top:180px">5</span>
            <img class="img8" src="@/assets/images/drawable-xhdpi/tx3.png" width="55px" />
            <span class="s6">元气少女</span>
            <img class="img9" src="@/assets/images/drawable-xhdpi/d4.png" width="50px" />
            <span class="s8">地球村</span>
            <span class="s7">186分钟</span>
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
    return { cur: 1 }
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
  background-color: #fff;
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
  margin-top: 50px;
  height: 0px;
  width: 375px;
  background: #fff;
}

.head ul {
  position: absolute;
  margin-top: -10px;
  width: 50%;
  display: flex;
  flex-direction: row;
  margin-left: 55px;
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
  width: 100%;
  display: flex;
  text-align: center;
  // float: left;
  font-size: 18px;
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
  width: 0%;
  height: 98%;
  border-bottom: 3px solid rgb(255, 255, 255);
  transition: 0.2s all linear;
}

li:hover::before {
  width: 20%;
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
  width: 100%;
  margin-top: 130px;
  margin-left: 10px;
}
.img1 {
  position: absolute;
  margin-left: 310px;
  margin-top: -35px;
}
.s1 {
  position: absolute;
  width: 100%;
}
.body1 {
  position: absolute;
  width: 90%;
  height: 250px;
  margin-top: -60px;
  margin-left: 6px;
  border-radius: 10px;

  background-color: #fff;
  -moz-box-shadow: 2px 2px 10px #b6b6b6; /*firefox*/
  -webkit-box-shadow: 2px 2px 10px #b6b6b6; /*safari或chrome*/
  box-shadow: 2px 2px 10px #b6b6b6; /*opera或ie9*/
}
.img2 {
  position: absolute;
  margin-left: -20px;
  margin-top: 5px;
}
.t1 {
  position: absolute;
  font-size: 18px;
  margin-left: 20px;
  margin-top: 18px;
  font-weight: bold;
}
.t2 {
  position: absolute;
  margin-left: 60px;
  font-size: 22px;
  margin-top: 69px;
}
.t3 {
  position: absolute;
  margin-left: 75px;
  margin-top: 70px;
}
.t4 {
  position: absolute;
  margin-left: 62px;
  font-size: 14px;
  color: #b6b6b6;
  margin-top: 95px;
}
.b1 {
  position: absolute;
  width: 50%;
  height: 40px;
}
.verticalBar {
  width: 1px;
  height: 35px;
  background: #b6b6bb;
  display: inline-block;
  margin-top: 75px;
  vertical-align: top;
  margin-right: 29px;
  margin-left: 180px;
}
.body2 {
  position: absolute;
  height: 20px;
  width: 375px;
  margin-left: -15px;
  margin-top: 150px;
  background-color: #f3f7f8;
}
.body3 {
  position: absolute;
  width: 100%;
}
.t5 {
  position: absolute;
  margin-left: 70px;
  margin-top: 190px;
}
.t8 {
  position: absolute;
  height: 5px;
  width: 20px;
  background-color: #ffd430;
  border-radius: 10px;
  margin-left: 75px;
  margin-top: 215px;
}
.t6 {
  position: absolute;
  margin-left: 140px;
  margin-top: 190px;
  color: #a9a9a9;
}
.t7 {
  position: absolute;
  margin-left: 220px;
  margin-top: 190px;
  color: #a9a9a9;
}
.body4 {
  position: absolute;
  height: 20px;
  width: 85%;
  background-color: #eae4e4;
  border-radius: 10px;
  margin-top: 250px;
  margin-left: 30px;
}
.img3 {
  position: absolute;
  margin-top: -15px;
  margin-left: -10px;
}
.img4 {
  position: absolute;
  margin-top: -15px;
  margin-left: 100px;
}
.t9 {
  position: absolute;
  margin-left: 30px;
  margin-top: 2px;
}
.end {
  position: absolute;
  margin-top: 280px;
  margin-left: 130px;
}
.std1 {
  position: absolute;
  height: 30px;
  width: 120px;
  background-color: #eae4e4;
  border-radius: 20px;
  padding-top: 5px;
  padding-left: 10px;
  margin-top: -50px;
  margin-left: 20px;
}
.s2 {
  position: absolute;
  width: 70px;
  height: 30px;
  background-color: #fff;
  border-radius: 20px;
  margin-top: -5px;
  margin-left: -10px;
  padding-top: 5px;
  padding-left: 15px;
}
.s3 {
  position: absolute;
  margin-left: 65px;
}
.img5 {
  position: absolute;
  margin-left: 250px;
  margin-top: -15px;
}
.std2 {
  position: absolute;
  height: 130px;
  width: 95%;
  margin-left: 1px;
  background-color: #fff;
  -moz-box-shadow: 2px 2px 10px #b6b6b6; /*firefox*/
  -webkit-box-shadow: 2px 2px 10px #b6b6b6; /*safari或chrome*/
  box-shadow: 2px 2px 10px #b6b6b6; /*opera或ie9*/
}
.s4 {
  position: absolute;
  font-size: 20px;
  margin-top: 40px;
  margin-left: 30px;
  font-weight: bold;
}
.s5 {
  position: absolute;
  font-size: 14px;
  margin-top: 70px;
  margin-left: 50px;
  color: #b6b6b6;
}
.img6 {
  position: absolute;
  border-radius: 50px;
  margin-left: 150px;
  margin-top: 10px;
}
.img7 {
    position: absolute;
    margin-top: 170px;
    margin-left: px;
}
.img8 {
    position: absolute;
    margin-top: 165px;
    margin-left: 40px;
}
.img9 {
    position: absolute;
    margin-top: 180px;
    margin-left: 85px;
}
.s6 {
    position: absolute;
    margin-top: 170px;
    margin-left: 120px;
}
.s8 {
     position: absolute;
    margin-top: 194px;
    margin-left: 120px;
    color: #a9a9a9;
}
.s7 {
     position: absolute;
    margin-top: 195px;
    margin-left: 290px;
}
</style>