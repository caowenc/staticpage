<template>
  <div class="mbpage">
    <div>
      <ul class="m1">
        <li>
          <img class="mb1" src="@/assets/images/drawable-xhdpi/mb2.png" width="22px" height="22px" />
        </li>
        <li class="mb2">目标</li>
        <li>
          <img class="mb3" src="@/assets/images/drawable-xhdpi/mb5.png" width="26px" height="26px" />
        </li>
        <li>
          <img
            class="mb4"
            @click="gosuccess"
            src="@/assets/images/drawable-xhdpi/mb3.png"
            width="26px"
            height="26px"
          />
        </li>
      </ul>
    </div>
    <div class="body">
      <ul>
        <li @click="cur = 0" :class="{ active: cur == 0 }">
          <span>昨</span>
        </li>
        <li @click="cur = 1" :class="{ active: cur == 1 }">
          <span>今</span>
        </li>
        <li @click="cur = 2" :class="{ active: cur == 2 }">
          <span>明</span>
        </li>
      </ul>
    </div>
    <div class="show">
      <div class="yesterday" v-show="cur == 0">
        <img class="y1" src="@/assets/images/drawable-xhdpi/mb4.png" width="60px" />
        <div class="y2">跑步</div>
        <div class="y3">00:00-23:59</div>
      </div>
      <div class="today" v-show="cur == 1">
        <div class="card1">
          <img class="y1" src="@/assets/images/drawable-xhdpi/mb4.png" width="60px" />
          <div class="y2">跑步</div>
          <div class="y3">00:00-23:59</div>
        </div>
        <div class="card2">
          <img class="y1" src="@/assets/images/drawable-xhdpi/mb6.png" width="60px" />
          <div class="y4">羽毛球</div>
          <div class="y3">00:00-23:59</div>
        </div>
      </div>
      <div class="tomorrow" v-show="cur == 2">
        <div class="card1">
          <img class="y1" src="@/assets/images/drawable-xhdpi/mb4.png" width="60px" />
          <div class="y2">跑步</div>
          <div class="y3">00:00-23:59</div>
        </div>
        <div class="card2">
          <img class="y1" src="@/assets/images/drawable-xhdpi/mb6.png" width="60px" />
          <div class="y4">羽毛球</div>
          <div class="y3">00:00-23:59</div>
        </div>
      </div>
    </div>
    <TabBar />
  </div>
</template>

<script>
import TabBar from '../components/tabBar/TabBar'
export default {
  name: 'Target',
  data() {
    return {
      cur: 0
    }
  },
  components: {
    TabBar
  },
  created() {},
  mounted() {},
  methods: {
    gosuccess() {
      this.$router.push('/success')
    }
  },
  computed: {}
}
</script>

<style scoped lang="scss">
ul {
  width: 100%;
}
li {
  margin: 0 auto;
  float: left;
}
.mb1 {
  margin-top: 16px;
  margin-left: 10px;
}
.mb2 {
  font-size: 22px;
  margin-top: 10px;
  text-align: center;
  font-weight: bold;
  margin-left: 135px;
}
.mb3 {
  margin-left: 65px;
  float: left;
  margin-top: 13px;
}
.mb4 {
  margin-left: 30px;
  float: left;
  margin-top: 13px;
}
.body {
  height: 100px;
  position: absolute;
  margin-top: 80px;
  margin-left: 20px;
}
.body ul {
  background: #f6f7f9;
  position: absolute;
  margin-top: 0px;
  width: 130px;
  height: 50;
  display: flex;
  text-align: center;
  flex-direction: row;
  border-radius: 20px;
  transition: 0.2s all linear;
}
.body ul li {
  width: 40px;
}
.show ul {
  position: absolute;
  margin-top: 100px;
}
span {
  margin-left: 0px;
  margin-top: -20px;
}
li:hover {
  font-weight: bold;
  background: #fff;
  border-radius: 20px;
}
.body {
  position: absolute;
}
.yesterday {
  position: absolute;
  width: 100px;
  height: 120px;
  margin-top: 130px;
  margin-left: 20px;
  border-radius: 10px;
  background-color: #fff;
  -moz-box-shadow: 2px 2px 10px #b6b6b6; /*firefox*/
  -webkit-box-shadow: 2px 2px 10px #b6b6b6; /*safari或chrome*/
  box-shadow: 2px 2px 10px #b6b6b6; /*opera或ie9*/
}
.today .card1 {
  position: absolute;
  width: 100px;
  height: 120px;
  margin-top: 130px;
  margin-left: 20px;
  border-radius: 10px;
  background-color: #fff;
  -moz-box-shadow: 2px 2px 10px #b6b6b6; /*firefox*/
  -webkit-box-shadow: 2px 2px 10px #b6b6b6; /*safari或chrome*/
  box-shadow: 2px 2px 10px #b6b6b6; /*opera或ie9*/
}
.today .card2 {
  position: absolute;
  width: 100px;
  height: 120px;
  margin-top: 130px;
  margin-left: 140px;
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
  margin-left: 30px;
}
.y3 {
  font-size: 14px;
  font-weight: 100;
  color: #ababab;
  margin-top: 5px;
  margin-left: 15px;
}
.y4 {
  font-size: 18px;
  font-weight: 700;
  margin-top: 5px;
  margin-left: 25px;
}
.tomorrow .card1 {
  position: absolute;
  width: 100px;
  height: 120px;
  margin-top: 130px;
  margin-left: 20px;
  border-radius: 10px;
  background-color: #fff;
  -moz-box-shadow: 2px 2px 10px #b6b6b6; /*firefox*/
  -webkit-box-shadow: 2px 2px 10px #b6b6b6; /*safari或chrome*/
  box-shadow: 2px 2px 10px #b6b6b6; /*opera或ie9*/
}
.tomorrow .card2 {
  position: absolute;
  width: 100px;
  height: 120px;
  margin-top: 130px;
  margin-left: 140px;
  border-radius: 10px;
  background-color: #fff;
  -moz-box-shadow: 2px 2px 10px #b6b6b6; /*firefox*/
  -webkit-box-shadow: 2px 2px 10px #b6b6b6; /*safari或chrome*/
  box-shadow: 2px 2px 10px #b6b6b6; /*opera或ie9*/
}
</style>