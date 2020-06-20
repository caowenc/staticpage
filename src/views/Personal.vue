<template>
  <div class="all">
    <div class="mm1" @click="gomine">
      <img class="m1" src="@/assets/images/drawable-xhdpi/mine2.png" />
      <ul>
        <li><img class="m2" src="@/assets/images/drawable-xhdpi/id.png" /></li>
        <li class="m3">bLue</li>
        <li><img class="m4" src="@/assets/images/drawable-xhdpi/old.png" /></li>
        <li class="m5">ID：3567834</li>
        <li><img class="m6" src="@/assets/images/drawable-xhdpi/jt.png" /></li>
      </ul>
    </div>
    <div class="mm3">
      <img @click="govip" class="m7" src="@/assets/images/drawable-xhdpi/vip.png" />
      <img @click="gomoney" class="m8" src="@/assets/images/drawable-xhdpi/yetx.png" />
      <img class="m9" src="@/assets/images/drawable-xhdpi/mrcj.png" />
      <img @click="gomessage" class="m10" src="@/assets/images/drawable-xhdpi/xxzx.png" />
      <span class="m11">余额提现</span>
      <span class="m22">每日抽奖</span>
      <span class="m33">消息中心</span>
    </div>
    <div class="mm4">
      <p>小工具</p>
      <img class="m41" src="@/assets/images/drawable-xhdpi/tool1.png" />
      <img class="m41" src="@/assets/images/drawable-xhdpi/tool2.png" />
      <img class="m41" @click="gotheme"  src="@/assets/images/drawable-xhdpi/tool3.png" />
      <img class="m41" @click="gocard" src="@/assets/images/drawable-xhdpi/tool4.png" />
      <span class="m51">计时器</span>
      <span class="m52"> 我的勋章</span>
      <span class="m53">主题换肤</span>
      <span class="m54">补签卡</span>
      <img class="m41" src="@/assets/images/drawable-xhdpi/tool5.png" />
      <img class="m41" src="@/assets/images/drawable-xhdpi/tool6.png" />
      <img class="m41" src="@/assets/images/drawable-xhdpi/tool7.png" />
      <img class="m41" src="@/assets/images/drawable-xhdpi/tool8.png" />
      <span class="m55">成长记录</span>
      <span class="m55">目标统计</span>
      <span class="m56">打卡周报</span>
      <span class="m56">打卡排行</span>
    </div>
    <div class="mm5">
      <ul>
        <img class="e1" src="@/assets/images/drawable-xhdpi/end1.png" width="35px" />
        <li class="e11">邀请好友<span>&rsaquo;</span></li>
        <img class="e1" src="@/assets/images/drawable-xhdpi/end2.png" width="35px" />
        <li class="e11">联系我们<span>&rsaquo;</span></li>
        <img class="e1" src="@/assets/images/drawable-xhdpi/end3.png" width="35px" />
        <li class="e11">给个好评<span>&rsaquo;</span></li>
        <img class="e1" src="@/assets/images/drawable-xhdpi/end4.png" width="35px" />
        <li class="e12">设置<span>&rsaquo;</span></li>
        <img class="e1" src="@/assets/images/drawable-xhdpi/end5.png" width="35px" />
        <li class="e13">《<span style="color:#5193f4;font-size:16px">用户服务协议</span>》和《<span style="color:#5193f4;font-size:16px">隐私协议</span>》</li>
      </ul>
    </div>
    <div class="mm6"></div>
    <TabBar />
  </div>
</template>

<script>
import TabBar from '../components/tabBar/TabBar'
export default {
  name: 'Personal',
  data() {
    return {}
  },
  components: {
    TabBar
  },
  created() {},
  mounted() {},
  methods: {
    gomine() {
      this.$router.push('/mine')
    },
    govip() {
      this.$router.push('/vip')
    },
    gomoney() {
      this.$router.push('/money')
    },
    gomessage() {
      this.$router.push('/message')
    },
    gotheme() {
      this.$router.push('/theme')
    },
    gocard() {
      this.$router.push('/card')
    }
  },
  computed: {}
}
</script>

<style scoped lang="scss">
.all {
  background: #f6f7f9;
}
.m1 {
  width: 100%;
  height: 60px;
  background: #fff;
}
.mm1 {
  background: #fff;
  height: 50px;
  width: 100%;
}
.mm3 {
  background: #fff;
  height: 300px;
}
ul {
  width: 100%;
}
li {
  margin: 0 auto;
  float: left;
}

.m2 {
  width:60px;
  height: 60px;
  border-radius: 10px;
  margin-left: 16px;
  margin-top: 5px
}
.m3 {
  font-size: 18px;
  margin-top: 10px;
  margin-left: 15px;
}
.m4 {
  width: 46px;
  height: 46px;
  margin-left: 8px; 
}
.m5 {
  font-size: 14px;
  color:lightgray;
  margin-top: 45px;
  margin-left: -94px;
}
.m6 {
  width: 40px;
  height: 40px;
  margin-top: -50px;
  margin-left: 250px;
}
.m7 {
  width: 96%;
  height: 85px;
  margin-left: 8px;
  margin-top: 12px;
}
.m8 {
  width: 60px;
  height: 60px;
  margin-top: 5px;
  margin-left: 30px;
}
.m9 {
  width: 60px;
  height: 60px;
  margin-top: 5px;
   margin-left: 70px;
}
.m10 {
  width: 60px;
  height: 60px;
  margin-top: 5px;
  margin-left: 70px;
}
.m11 {
  font-size: 16px;
  color: black;
  font-weight: 500;
  margin-top: 5px;
  margin-left: 28px;
}
.m22 {
  font-size: 16px;
  color: black;
  font-weight: 500;
  margin-top: 5px;
  margin-left: 68px;
}
.m33 {
  font-size: 16px;
  color: black;
  font-weight: 500;
  margin-top: 5px;
  margin-left: 62px;
}
.mm4 {
  margin-top: 12px;
  background: white;
  height: 220px;
}
p {
  font-size: 17px;
  font-weight: bold;
  margin-left: 18px;
  padding-top: 10px;
}
.m41 {
  width: 50px;
  height: 60px;
  padding-top: 10px;
  margin-left: 35.5px;
}
.m51 {
  font-size: 14px;
  padding-left: 36px;
  color: #666666;
}
.m52 {
  font-size: 14px;
  padding-left: 35px;
  color: #666666;
}
.m53 {
  font-size: 14px;
  padding-left: 34px;
  color: #666666;
}
.m54 {
  font-size: 14px;
  padding-left: 35px;
  color: #666666;
}
.m55 {
  font-size: 14px;
  padding-left: 32px;
  color: #666666;
}
.m56 {
  font-size: 14px;
  padding-left: 31px;
  color: #666666;
}
.mm5 {
  margin-top: 12px;
  background: white;
  height: 280px;
}

.mm5 ul img {
  float: left;
  margin-left: 18px;
  padding-top: 20px;
}
.mm5 li {
  margin-left: 15px;
  padding-top: 20px;
  font-size: 16px;
  font-weight: bold;
  width: 80%;
  border-bottom: 1px solid #999;
}

.mm5 li:last-child {
  border-bottom: 0px;
}
.e11 span {
  margin-left: 195px;
  font-size: 30px;
  font-weight: 100;
  color: #b8b8b8;
}
.e12 span {
  margin-left: 227px;
  font-size: 30px;
  font-weight: 100;
  color: #b8b8b8;
}
.e2 {
  margin-left: 18px;
  padding-top: 20px;
}
.e13 {
  font-weight: bold;
  margin-top: 10px;
}
.mm6 {
  width: 100%;
  // margin-top: 12px;
  background: #f6f7f9;
  height: 120px;
}
</style>
