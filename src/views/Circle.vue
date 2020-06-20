<template>
  <div class="all">
    <div class="head">
      <div>
        <img class="t1" src="@/assets/images/drawable-xhdpi/c1.png" width="30px" />
      </div>
      <div class="body">
        <ul>
          <li @click="cur = 0" :class="{ active: cur == 0 }">
            <span>关注</span>
          </li>
          <li @click="cur = 1" :class="{ active: cur == 1 }">
            <span>热区</span>
          </li>
          <li @click="cur = 2" :class="{ active: cur == 2 }">
            <span>最新</span>
          </li>
        </ul>
      </div>
      <img class="t2" src="@/assets/images/drawable-xhdpi/id.png" width="35px" />
    </div>
    <div class="show">
      <div v-show="cur == 0">
        <img class="m41" src="@/assets/images/drawable-xhdpi/f1.png" width="90px" />
        <img class="m41" src="@/assets/images/drawable-xhdpi/f2.png" width="90px" />
        <img class="m41" src="@/assets/images/drawable-xhdpi/f3.png" width="90px" />
        <img class="m41" src="@/assets/images/drawable-xhdpi/f4.png" width="90px" />

        <span class="m51">我的跑...</span>
        <span class="m52">天天背...</span>
        <span class="m53">每日早睡</span>
        <span class="m54">跑步🏃‍</span>
        <hr style="width:100% ;color:#black;position: absolute;margin-top:172px;" />
        <div>
          <span class="more">更多关注圈子</span>
          <span class="more1">&rsaquo;</span>
          <hr style="width:100% ;color:#black;position: absolute;margin-top:215px;" />
        </div>
        <div class="body1">
          <img class="b1" src="@/assets/images/drawable-xhdpi/tx7.jpg" width="50px" />
          <span class="b2">小杨今天学习了</span>
          <img class="b10" src="@/assets/images/drawable-xhdpi/girl.png" width="50px" />
          <span class="b3">2020-05-04 05:47</span>
          <span class="b4">今日打卡</span>
          <span class="b5">明天又开始上网课了</span>
          <span class="b6">时间定了5.11开学</span>
          <div>
            <img class="b7" src="@/assets/images/drawable-xhdpi/tx8.jpg" width="80px" height="80" />
            <img class="b8" src="@/assets/images/drawable-xhdpi/tx9.jpg" width="80px" height="80" />
            <img class="b9" src="@/assets/images/drawable-xhdpi/tx10.jpg" width="80px" height="80" />
          </div>
          <div class="e1">将学习变成一种习惯</div>
          <div class="end">
            <img class="e2" src="@/assets/images/drawable-xhdpi/love.png" width="30px" />
            <span class="e3">19</span>
            <img class="e4" src="@/assets/images/drawable-xhdpi/x1.png" width="30px" />
            <span class="e5">0</span>
          </div>
          <img class="e6" src="@/assets/images/drawable-xhdpi/c2.png" width="50px" />
        </div>
      </div>
      <div class="hot" v-show="cur == 1">
        <img class="hot1" style="margin-top:9px;" src="@/assets/images/drawable-xhdpi/circle1.png" />
        <img class="hot2" style=" margin-top:-40px;" src="@/assets/images/drawable-xhdpi/circle2.png" />
        <span class="hot3">更多</span>
        <span class="hot4">&rsaquo;</span>
        <div class="hot5">
          <span>天天背单词</span>
          <span style="margin-top:5px;">减肥日记</span>
          <span style="margin-top:5px;">每天坚持领壮...</span>
          <img class="hot6" src="@/assets/images/drawable-xhdpi/new.png" width="50px" />
        </div>
        <div class="hot7">
          <span>阅读</span>
          <span style="margin-top:5px;">将学习变成一</span>
          <span style="margin-top:5px;">泡泡脚丫</span>
          <img class="hot6" style="position: absolute;margin-left:60px" src="@/assets/images/drawable-xhdpi/new.png" width="50px" />
        </div>
        <div style="width:100%;height:20px;background-color:#eeeeee;margin-top:100px"></div>
        <div class="hot8">
          <img class="b1" src="@/assets/images/drawable-xhdpi/hot1.png" width="70px" />
          <span class="b2">李斯坦尼奥</span>
          <img class="b10" style="margin-top:17px;margin-left:100px" src="@/assets/images/drawable-xhdpi/boy.png" width="50px" />
          <img class="b11" src="@/assets/images/drawable-xhdpi/gz.png" width="50px" />
          <img class="b12" src="@/assets/images/drawable-xhdpi/gz1.png" width="50px" />
          <span class="b4">Sql竟然能写出python的感觉。😮</span>
          <span class="b5">😫</span>
          <img class="hot9" src="@/assets/images/drawable-xhdpi/hot2.png" width="150" height="120" />
          <div class="e1" style="margin-left:80px;">将学习变成一种习惯</div>
          <div class="end">
            <img class="e2" src="@/assets/images/drawable-xhdpi/love.png" width="30px" />
            <span class="e3">25</span>
            <img class="e4" src="@/assets/images/drawable-xhdpi/x1.png" width="30px" />
            <span class="e5">25</span>
          </div>
         <div>
          <img class="e6" style=" position: absolute;margin-top:-110px;margin-left:310px" src="@/assets/images/drawable-xhdpi/c2.png" width="50px" />
        </div>
        </div>
      </div>
      <div class="new" v-show="cur == 2">
        <div class="new1">
          <img class="b1" src="@/assets/images/drawable-xhdpi/hot1.png" width="70px" />
          <span class="b2">李斯坦尼奥</span>
          <img class="b10" style="margin-top:17px;margin-left:100px" src="@/assets/images/drawable-xhdpi/boy.png" width="50px" />
          <img class="b11" src="@/assets/images/drawable-xhdpi/gz.png" width="50px" />
          <img class="b12" src="@/assets/images/drawable-xhdpi/gz1.png" width="50px" />
          <span class="b3">今天 05:47</span>
          <span class="b4">Sql竟然能写出python的感觉。😮</span>
          <span class="b5">😫</span>
          <img class="hot9" src="@/assets/images/drawable-xhdpi/hot2.png" width="150" height="120" />
          <div class="e1" style="margin-left:80px;">将学习变成一种习惯</div>
          <div class="end">
            <img class="e2" src="@/assets/images/drawable-xhdpi/love.png" width="30px" />
            <span class="e3">25</span>
            <img class="e4" src="@/assets/images/drawable-xhdpi/x1.png" width="30px" />
            <span class="e5">25</span>
          </div>
        </div>
        <div class="new2">
          <img class="b1" style="margin-left：50px" src="@/assets/images/drawable-xhdpi/new2.jpg" width="50px" height="50" />
          <span class="b2">小白要努力</span>
          <img class="b10" style="margin-top:17px;margin-left:100px" src="@/assets/images/drawable-xhdpi/girl.png" width="50px" />
          <img class="b11" src="@/assets/images/drawable-xhdpi/gz.png" width="50px" />
          <img class="b12" src="@/assets/images/drawable-xhdpi/gz1.png" width="50px" />
          <span class="b3">今天 09:47</span>
          <span class="b4">打卡</span>
          <div class="e7" >练字</div>
          <div class="end" style="margin-left:-20px">
            <img class="e2" src="@/assets/images/drawable-xhdpi/love.png" width="30px" />
            <span class="e3">25</span>
            <img class="e4" src="@/assets/images/drawable-xhdpi/x1.png" width="30px" />
            <span class="e5">25</span>
          </div>
            <div>
          <img class="e6" style="margin-left:290px" src="@/assets/images/drawable-xhdpi/c2.png" width="50px" />
        </div>
        </div>
      </div>
    </div>
    <TabBar />
  </div>
</template>

<script>
import TabBar from '../components/tabBar/TabBar'
export default {
  name: 'Circle',
  data() {
    return { cur: 1 }
  },
  components: {
    TabBar
  },
  created() {},
  mounted() {},
  methods: {},
  computed: {}
}
</script>

<style scoped lang="scss">
.head {
  background: #fff;
  height: 50px;
  width: 375px;
  position: fixed;
  border-bottom: 1px solid #999;
}
.head .t1 {
  position: absolute;
  margin-top: 5px;
  margin-left: 15px;
}
.head .t2 {
  position: absolute;
  margin-top: 5px;
  margin-left: 320px;
  border-radius: 50%;
}

.head ul {
  position: absolute;
  margin-top: 30px;
  width: 45%;
  display: flex;
  text-align: center;
  flex-direction: row;
  margin-left: 25px;
}
.show ul {
  position: absolute;
  margin-top: 100px;
}
.head li span {
  width: 50%;
  display: flex;
  text-align: center;
  // float: left;
  margin-left: 60px;
  margin-top: -20px;
}
.head li::before {
  content: '';
  position: absolute;
  margin-left: 50px;
  top: 2;
  width: 2px;
  height: 98%;
  border-bottom: 3px solid white;
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
.head span:hover {
  color: #ffd430;
}
li:hover ~ li::before {
  left: 50;
  color: #ffd430;
}
li:active {
  background: rgb(255, 255, 255);
  color: #ffd430;
}
.m41 {
  margin-top: 60px;
}
.m51 {
  font-size: 14px;
  padding-left: 23px;
  color: black;
}
.m52 {
  font-size: 14px;
  padding-left: 30px;
  color: black;
}
.m53 {
  font-size: 14px;
  padding-left: 34px;
  color: black;
}
.m54 {
  font-size: 14px;
  padding-left: 40px;
  color: black;
}
.more {
  position: absolute;
  margin-top: 15px;
  margin-left: 140px;
  color: #aaaaaa;
}
.more1 {
  position: absolute;
  font-size: 30px;
  font-weight: 100;
  margin-top: 8px;
  margin-left: 240px;
}
.body1 {
  position: absolute;
  height: 20px;
  width: 100%;
  background-color: #eeeeee;
  margin-top: 50px;
}
.b1 {
  margin-top: 30px;
  margin-left: 10px;
  border-radius: 10px;
}
.b2 {
  position: absolute;
  font-weight: bold;
  margin-top: 30px;
  margin-left: 10px;
}
.b10 {
  position: absolute;
  margin-top: 18px;
  margin-left: 125px;
}
.b3 {
  position: absolute;
  margin-top: 55px;
  margin-left: 10px;
  font-size: 12px;
  color: #b1b1b1;
}
.b4 {
  position: absolute;
  font-size: 18px;
  margin-left: 10px;
  margin-top: 80px;
}
.b5 {
  position: absolute;
  margin-top: 105px;
  font-size: 18px;
  margin-left: 10px;
}
.b6 {
  position: absolute;
  font-size: 18px;
  margin-top: 130px;
  margin-left: 10px;
}
.b7 {
  position: absolute;
  margin-top: 90px;
  margin-left: 70px;
}
.b8 {
  position: absolute;
  margin-top: 90px;
  margin-left: 160px;
}
.b9 {
  position: absolute;
  margin-top: 90px;
  margin-left: 250px;
}
.b11 {
  position: absolute;
  margin-top: 15px;
  margin-left: 190px;
}
.b12 {
  position: absolute;
  margin-top: 15px;
  margin-left: 230px;
}
.e1 {
  width: 170px;
  height: 28px;
  background-color: #b6b6b6;
  margin-top: 190px;
  margin-left: 65px;
  text-align: center;
  border-radius: 10px;
}
.e2 {
  position: absolute;
  margin-top: -30px;
  margin-left: 260px;
}
.e3 {
  position: absolute;
  margin-top: -24px;
  margin-left: 290px;
}
.e4 {
  position: absolute;
  margin-top: -31px;
  margin-left: 310px;
}
.e5 {
  position: absolute;
  margin-top: -24px;
  margin-left: 340px;
}
.e6 {
  margin-left: 310px;
  margin-top: 10px;
}
.e7 {
  width: 60px;
  height: 28px;
  background-color: #b6b6b6;
  margin-top: 35px;
  margin-left: 60px;
  text-align: center;
  border-radius: 10px;
}
.hot {
  height: 200px;
}

.hot3 {
  position: absolute;
  margin-left: 150px;
  margin-top: -18px;
  font-size: 16px;
  color: #aaaaaa;
}
.hot4 {
  position: absolute;
  margin-left: 185px;
  margin-top: -24px;
  font-size: 27px;
}
.hot5 {
  position: absolute;
  display: flex;
  width: 50%;
  flex-direction: column;
  padding-top: 5px;
  margin-top: 5px;
  margin-left: 20px;
  border-right: 1px solid #bbbbbb;
}
.hot6 {
  position: absolute;
  margin-left: 110px;
  margin-top: 40px;
}
.hot7 {
  position: absolute;
  display: flex;
  width: 40%;
  flex-direction: column;
  padding-top: 5px;
  margin-top: 5px;
  margin-left: 230px;
}
.hot8 {
  position: absolute;
  height: 400px;
  width: 100%;
}
.hot9 {
  position: absolute;
  margin-top: 140px;
  margin-left: 15px;
}
.new{
  width: 100%;
  height: 200px;
}
.new1 {
  padding-top: 40px;
  height: 380px;
  border-bottom: 1px solid #bbbbbb;
}
.new2 {
  margin-left: 20px;
}
</style>