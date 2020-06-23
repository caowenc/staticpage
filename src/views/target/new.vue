<template>
  <div class="all">
    <div class="head">
      <div>
        <img
          @click="gotarget"
          style="margin-left:10px;margin-top:15px;"
          class="h1"
          src="@/assets/images/drawable-xhdpi/data.png"
          width="25"
        />
      </div>
      <div>
        <span class="text">新建目标</span>
      </div>
      <div class="body">
        <ul>
          <li @click="cur = 0" :class="{ active: cur == 0 }">
            <span class="b1">运动</span>
          </li>
          <li @click="cur = 1" :class="{ active: cur == 1 }">
            <span class="b2">学习</span>
          </li>
          <li @click="cur = 2" :class="{ active: cur == 2 }">
            <span class="b3">健康</span>
          </li>
          <li @click="cur = 3" :class="{ active: cur == 3 }">
            <span class="b4">生活</span>
          </li>
        </ul>
      </div>
      <div class="show">
        <div class="sport" v-show="cur == 0">
          <div class="card1">
            <div class="y2">跑步</div>
            <div class="y3">576969人坚持</div>
            <img class="y1" src="@/assets/images/drawable-xhdpi/mb4.png" width="60px" />
          </div>
          <div class="card2">
            <div class="y2">深蹲</div>
            <div class="y3">736969人坚持</div>
            <img class="y1" src="@/assets/images/drawable-xhdpi/new1.png" width="60px" />
          </div>
          <div class="card3">
            <div class="y2" style=" padding-left:-20px">健身操</div>
            <div class="y3">24669人坚持</div>
            <img class="y1" src="@/assets/images/drawable-xhdpi/new2.png" width="60px" />
          </div>
          <div class="card4">
            <div class="y2">瑜伽</div>
            <div class="y3">24669人坚持</div>
            <img class="y1" src="@/assets/images/drawable-xhdpi/new3.png" width="60px" />
          </div>
           <div class="card5">
            <div class="y2">篮球</div>
            <div class="y3">98797人坚持</div>
            <img class="y1" src="@/assets/images/drawable-xhdpi/new4.png" width="60px" />
          </div>
           <div class="card6">
            <div class="y2">跳舞</div>
            <div class="y3">243529人坚持</div>
            <img class="y1" src="@/assets/images/drawable-xhdpi/new5.png" width="60px" />
          </div>
             <div class="card7">
            <div class="y2">足球</div>
            <div class="y3">243529人坚持</div>
            <img class="y1" src="@/assets/images/drawable-xhdpi/new6.png" width="60px" />
          </div>
             <div class="card8">
            <div class="y2">羽毛球</div>
            <div class="y3">243529人坚持</div>
            <img class="y1" src="@/assets/images/drawable-xhdpi/mb6.png" width="60px" />
          </div>
             <div class="card9">
            <div class="y2">滑板</div>
            <div class="y3">243529人坚持</div>
            <img class="y1" src="@/assets/images/drawable-xhdpi/new7.png" width="60px" />
          </div>
        </div>
        <div v-show="cur == 1">
           <div class="card1">
            <div class="y2">阅读</div>
            <div class="y3">576969人坚持</div>
            <img class="y1" src="@/assets/images/drawable-xhdpi/study1.png" width="60px" />
          </div>
          <div class="card2">
            <div class="y2">复习/考试</div>
            <div class="y3">736969人坚持</div>
            <img class="y1" src="@/assets/images/drawable-xhdpi/study2.png" width="60px" />
          </div>
          <div class="card3">
            <div class="y2" style=" padding-left:-20px">学英语</div>
            <div class="y3">24669人坚持</div>
            <img class="y1" src="@/assets/images/drawable-xhdpi/study3.png" width="60px" />
          </div>
          <div class="card4">
            <div class="y2">练字</div>
            <div class="y3">24669人坚持</div>
            <img class="y1" src="@/assets/images/drawable-xhdpi/study4.png" width="60px" />
          </div>
           <div class="card5">
            <div class="y2">线上课</div>
            <div class="y3">98797人坚持</div>
            <img class="y1" src="@/assets/images/drawable-xhdpi/study5.png" width="60px" />
          </div>
           <div class="card6">
            <div class="y2">写作</div>
            <div class="y3">243529人坚持</div>
            <img class="y1" src="@/assets/images/drawable-xhdpi/study6.png" width="60px" />
          </div>
             <div class="card7">
            <div class="y2">绘画</div>
            <div class="y3">243529人坚持</div>
            <img class="y1" src="@/assets/images/drawable-xhdpi/study7.png" width="60px" />
          </div>
             <div class="card8">
            <div class="y2">学吉他</div>
            <div class="y3">243529人坚持</div>
            <img class="y1" src="@/assets/images/drawable-xhdpi/study8.png" width="60px" />
          </div>
             <div class="card9">
            <div class="y2">摄影</div>
            <div class="y3">243529人坚持</div>
            <img class="y1" src="@/assets/images/drawable-xhdpi/study9.png" width="60px" />
          </div>
        </div>
        <div v-show="cur == 2">
           <div class="card1">
            <div class="y2">早睡</div>
            <div class="y3">576969人坚持</div>
            <img class="y1" src="@/assets/images/drawable-xhdpi/life1.png" width="60px" />
          </div>
          <div class="card2">
            <div class="y2">喝水</div>
            <div class="y3">736969人坚持</div>
            <img class="y1" src="@/assets/images/drawable-xhdpi/life2.png" width="60px" />
          </div>
          <div class="card3">
            <div class="y2" style=" padding-left:-20px">早起</div>
            <div class="y3">24669人坚持</div>
            <img class="y1" src="@/assets/images/drawable-xhdpi/life3.png" width="60px" />
          </div>
          <div class="card4">
            <div class="y2">减肥</div>
            <div class="y3">24669人坚持</div>
            <img class="y1" src="@/assets/images/drawable-xhdpi/life4.png" width="60px" />
          </div>
           <div class="card5">
            <div class="y2">吃早餐</div>
            <div class="y3">98797人坚持</div>
            <img class="y1" src="@/assets/images/drawable-xhdpi/life5.png" width="60px" />
          </div>
           <div class="card6">
            <div class="y2">无糖</div>
            <div class="y3">243529人坚持</div>
            <img class="y1" src="@/assets/images/drawable-xhdpi/life6.png" width="60px" />
          </div>
             <div class="card7">
            <div class="y2">刷牙</div>
            <div class="y3">243529人坚持</div>
            <img class="y1" src="@/assets/images/drawable-xhdpi/life9.png" width="60px" />
          </div>
             <div class="card8">
            <div class="y2">护眼</div>
            <div class="y3">243529人坚持</div>
            <img class="y1" src="@/assets/images/drawable-xhdpi/life7.png" width="60px" />
          </div>
             <div class="card9">
            <div class="y2">冥想</div>
            <div class="y3">243529人坚持</div>
            <img class="y1" src="@/assets/images/drawable-xhdpi/life8.png" width="60px" />
          </div>
        </div>
        <div v-show="cur == 3">
          <div class="card1">
            <div class="y2">攒钱</div>
            <div class="y3">576969人坚持</div>
            <img class="y1" src="@/assets/images/drawable-xhdpi/live1.png" width="60px" />
          </div>
          <div class="card2">
            <div class="y2">情绪管理</div>
            <div class="y3">736969人坚持</div>
            <img class="y1" src="@/assets/images/drawable-xhdpi/live2.png" width="60px" />
          </div>
          <div class="card3">
            <div class="y2" style=" padding-left:-20px">护肤</div>
            <div class="y3">24669人坚持</div>
            <img class="y1" src="@/assets/images/drawable-xhdpi/live3.png" width="60px" />
          </div>
          <div class="card4">
            <div class="y2">记手账</div>
            <div class="y3">24669人坚持</div>
            <img class="y1" src="@/assets/images/drawable-xhdpi/live4.png" width="60px" />
          </div>
           <div class="card5">
            <div class="y2">一日三餐</div>
            <div class="y3">98797人坚持</div>
            <img class="y1" src="@/assets/images/drawable-xhdpi/live5.png" width="60px" />
          </div>
           <div class="card6">
            <div class="y2">日记</div>
            <div class="y3">243529人坚持</div>
            <img class="y1" src="@/assets/images/drawable-xhdpi/live6.png" width="60px" />
          </div>
             <div class="card7">
            <div class="y2">树洞</div>
            <div class="y3">243529人坚持</div>
            <img class="y1" src="@/assets/images/drawable-xhdpi/live7.png" width="60px" />
          </div>
             <div class="card8">
            <div class="y2">每日收纳</div>
            <div class="y3">243529人坚持</div>
            <img class="y1" src="@/assets/images/drawable-xhdpi/live8.png" width="60px" />
          </div>
             <div class="card9">
            <div class="y2">电影</div>
            <div class="y3">243529人坚持</div>
            <img class="y1" src="@/assets/images/drawable-xhdpi/live9.png" width="60px" />
          </div>
        </div>
      </div>
      <div class="end">
        <img class="end1" src="@/assets/images/drawable-xhdpi/choose.png" width="50px">
        <button class="end2">自定义</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      active: 0,
      cur: 0
    }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    gotarget() {
      this.$router.push('/target')
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
.text {
  position: absolute;
  font-size: 22px;
  margin-top: 10px;
  margin-left: 140px;
  text-align: center;
  font-weight: bold;
}
.body {
  position: absolute;
  width: 100%;
  display: flex;
  margin-top: 50px;
}
.body ul li {
  flex-direction: row;
  position: absolute;
  width: 100%;
}
li :hover {
  background-color: #ffd430;
}
.b1 {
  position: absolute;
  margin-top: 20px;
  margin-left: 20px;
  padding-top: 3px;
  height: 30px;
  width: 60px;
  text-align: center;
  background-color: #fff;
  border-radius: 20px;
}

.b2 {
  position: absolute;
  margin-top: 20px;
  margin-left: 90px;
  padding-top: 3px;
  height: 30px;
  width: 60px;
  text-align: center;
  background-color: #fff;
  border-radius: 20px;
}
.b3 {
  position: absolute;
  margin-top: 20px;
  margin-left: 160px;
  padding-top: 3px;
  height: 30px;
  width: 60px;
  text-align: center;
  background-color: #fff;
  border-radius: 20px;
}
.b4 {
  position: absolute;
  margin-top: 20px;
  margin-left: 230px;
  padding-top: 3px;
  height: 30px;
  width: 60px;
  text-align: center;
  background-color: #fff;
  border-radius: 20px;
}
.show ul {
  position: absolute;
}
 .card1 {
  position: absolute;
  width: 100px;
  height: 120px;
  margin-top: 130px;
  margin-left: 15px;
  border-radius: 10px;
  background-color: #fff;
  -moz-box-shadow: 2px 2px 10px #b6b6b6; /*firefox*/
  -webkit-box-shadow: 2px 2px 10px #b6b6b6; /*safari或chrome*/
  box-shadow: 2px 2px 10px #b6b6b6; /*opera或ie9*/
}
 .card2 {
  position: absolute;
  width: 100px;
  height: 120px;
  margin-top: 130px;
  margin-left: 135px;
  border-radius: 10px;
  background-color: #fff;
  -moz-box-shadow: 2px 2px 10px #b6b6b6; /*firefox*/
  -webkit-box-shadow: 2px 2px 10px #b6b6b6; /*safari或chrome*/
  box-shadow: 2px 2px 10px #b6b6b6; /*opera或ie9*/
}
 .card3 {
  position: absolute;
  width: 100px;
  height: 120px;
  margin-top: 130px;
  margin-left: 255px;
  border-radius: 10px;
  background-color: #fff;
  -moz-box-shadow: 2px 2px 10px #b6b6b6; /*firefox*/
  -webkit-box-shadow: 2px 2px 10px #b6b6b6; /*safari或chrome*/
  box-shadow: 2px 2px 10px #b6b6b6; /*opera或ie9*/
}
 .card4 {
  position: absolute;
  width: 100px;
  height: 120px;
  margin-top: 270px;
  margin-left: 15px;
  border-radius: 10px;
  background-color: #fff;
  -moz-box-shadow: 2px 2px 10px #b6b6b6; /*firefox*/
  -webkit-box-shadow: 2px 2px 10px #b6b6b6; /*safari或chrome*/
  box-shadow: 2px 2px 10px #b6b6b6; /*opera或ie9*/
}
 .card5 {
  position: absolute;
  width: 100px;
  height: 120px;
  margin-top: 270px;
  margin-left: 135px;
  border-radius: 10px;
  background-color: #fff;
  -moz-box-shadow: 2px 2px 10px #b6b6b6; /*firefox*/
  -webkit-box-shadow: 2px 2px 10px #b6b6b6; /*safari或chrome*/
  box-shadow: 2px 2px 10px #b6b6b6; /*opera或ie9*/
}
 .card6 {
  position: absolute;
  width: 100px;
  height: 120px;
  margin-top: 270px;
  margin-left: 255px;
  border-radius: 10px;
  background-color: #fff;
  -moz-box-shadow: 2px 2px 10px #b6b6b6; /*firefox*/
  -webkit-box-shadow: 2px 2px 10px #b6b6b6; /*safari或chrome*/
  box-shadow: 2px 2px 10px #b6b6b6; /*opera或ie9*/
}
 .card7 {
  position: absolute;
  width: 100px;
  height: 120px;
  margin-top: 410px;
  margin-left: 15px;
  border-radius: 10px;
  background-color: #fff;
  -moz-box-shadow: 2px 2px 10px #b6b6b6; /*firefox*/
  -webkit-box-shadow: 2px 2px 10px #b6b6b6; /*safari或chrome*/
  box-shadow: 2px 2px 10px #b6b6b6; /*opera或ie9*/
}
 .card8 {
  position: absolute;
  width: 100px;
  height: 120px;
  margin-top: 410px;
  margin-left: 135px;
  border-radius: 10px;
  background-color: #fff;
  -moz-box-shadow: 2px 2px 10px #b6b6b6; /*firefox*/
  -webkit-box-shadow: 2px 2px 10px #b6b6b6; /*safari或chrome*/
  box-shadow: 2px 2px 10px #b6b6b6; /*opera或ie9*/
}
 .card9 {
  position: absolute;
  width: 100px;
  height: 120px;
  margin-top: 410px;
  margin-left: 255px;
  border-radius: 10px;
  background-color: #fff;
  -moz-box-shadow: 2px 2px 10px #b6b6b6; /*firefox*/
  -webkit-box-shadow: 2px 2px 10px #b6b6b6; /*safari或chrome*/
  box-shadow: 2px 2px 10px #b6b6b6; /*opera或ie9*/
}
.y1 {
  margin-top: 5px;
  margin-left: 20px;
}
.y2 {
  font-size: 18px;
  font-weight: 700;
  margin-top: 5px;
  margin-left: 10px;
}
.y3 {
  font-size: 12px;
  font-weight: 100;
  color: #ababab;
  margin-top: 10px;
  margin-left: 10px;
}
.end {
  width: 350px;
  height: 50px;
 

}
.end1 {
  margin-top: 600px;
  margin-left: 110px;
}
.end2 {
 width: 350px;
 height: 50px;
 font-size: 20px;
 background-color: #ffd430;
 margin-top: 600px;
 margin-left: 12px;
 padding-left: 45px;
}
</style>
