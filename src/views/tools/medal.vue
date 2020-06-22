<template>
  <div class="all">
    <div class="head">
      <img class="img1" src="@/assets/images/drawable-xhdpi/medal1.png" />
      <img
        @click="gopersonal"
        style="margin-left:10px;margin-top:-200px;position: absolute;"
        class="h1"
        src="@/assets/images/drawable-xhdpi/data.png"
        width="25"
      />
      <span class="head1">我的勋章</span>
      <span class="text">0</span>
      <span class="text1">勋章数量</span>
      <span class="text2">12.3W</span>
      <span class="text3">全国排名</span>
    </div>
    <div class="body"></div>
    <div class="body1">
      <span class="text4">学习勋章</span>
      <span class="text5">打卡</span>
      <span class="text6">0</span>
      <span class="text7">次</span>
      <div class="img2">
        <img style="margin-left:-2px" src="@/assets/images/drawable-xhdpi/medal2.png" width="100" />
        <img style="margin-left:13px" src="@/assets/images/drawable-xhdpi/medal2.png" width="100" />
        <img style="margin-left:18px" src="@/assets/images/drawable-xhdpi/medal2.png" width="100" />
        <span style="margin-left:23px">小学生</span>
        <span style="margin-left:67px">中学生</span>
        <span style="margin-left:68px">高中生</span>
         <span style="margin-left:10px" class="text8">学习打卡7次</span>
         <span style="margin-left:120px" class="text8">学习打卡21次</span>
         <span style="margin-left:240px" class="text8">学习打卡49次</span>
      </div>
       <div class="img3">
        <img style="margin-left:-2px" src="@/assets/images/drawable-xhdpi/medal2.png" width="100" />
        <img style="margin-left:13px" src="@/assets/images/drawable-xhdpi/medal2.png" width="100" />
        <img style="margin-left:18px" src="@/assets/images/drawable-xhdpi/medal2.png" width="100" />
        <span style="margin-left:23px">大学生</span>
        <span style="margin-left:67px">研究生</span>
        <span style="margin-left:68px">博士生</span>
         <span style="margin-left:10px" class="text8">学习打卡100次</span>
         <span style="margin-left:120px" class="text8">学习打卡365次</span>
         <span style="margin-left:240px" class="text8">学习打卡500次</span>
      </div>
    </div>
     <div class="body2">
      <span class="text4">早起勋章</span>
      <span class="text5">打卡</span>
      <span class="text6">0</span>
      <span class="text7">次</span>
      <div class="img4">
        <img style="margin-left:-2px" src="@/assets/images/drawable-xhdpi/medal3.png" width="100" />
        <img style="margin-left:13px" src="@/assets/images/drawable-xhdpi/medal3.png" width="100" />
        <img style="margin-left:18px" src="@/assets/images/drawable-xhdpi/medal3.png" width="100" />
        <span style="margin-left:17px">早起麻雀</span>
        <span style="margin-left:49px">早起喜鹊</span>
        <span style="margin-left:52px">早起猎鹰</span>
         <span style="margin-left:10px" class="text8">早起打卡7次</span>
         <span style="margin-left:120px" class="text8">早起打卡21次</span>
         <span style="margin-left:240px" class="text8">早起打卡49次</span>
      </div>
       <div class="img5">
        <img style="margin-left:-2px" src="@/assets/images/drawable-xhdpi/medal3.png" width="100" />
        <img style="margin-left:13px" src="@/assets/images/drawable-xhdpi/medal3.png" width="100" />
        <img style="margin-left:18px" src="@/assets/images/drawable-xhdpi/medal3.png" width="100" />
        <span style="margin-left:17px">早起孔雀</span>
        <span style="margin-left:50px">早起金雕</span>
        <span style="margin-left:52px">早起凤凰</span>
         <span style="margin-left:10px" class="text8">早起打卡100次</span>
         <span style="margin-left:120px" class="text8">早起打卡365次</span>
         <span style="margin-left:240px" class="text8">早起打卡500次</span>
      </div>
    </div>
    <div class="body3">
      <span class="text4">打卡勋章</span>
      <span class="text5">打卡</span>
      <span class="text6">0</span>
      <span class="text7">次</span>
      <div class="img6">
        <img style="margin-left:-2px" src="@/assets/images/drawable-xhdpi/medal4.png" width="100" />
        <img style="margin-left:13px" src="@/assets/images/drawable-xhdpi/medal4.png" width="100" />
        <img style="margin-left:18px" src="@/assets/images/drawable-xhdpi/medal4.png" width="100" />
        <span style="margin-left:17px">打卡青铜</span>
        <span style="margin-left:49px">打卡白银</span>
        <span style="margin-left:52px">打卡黄金</span>
         <span style="margin-left:10px" class="text8">早起打卡100次</span>
         <span style="margin-left:120px" class="text8">早起打卡200次</span>
         <span style="margin-left:240px" class="text8">早起打卡300次</span>
      </div>
       <div class="img7">
        <img style="margin-left:-2px" src="@/assets/images/drawable-xhdpi/medal4.png" width="100" />
        <img style="margin-left:13px" src="@/assets/images/drawable-xhdpi/medal4.png" width="100" />
        <img style="margin-left:18px" src="@/assets/images/drawable-xhdpi/medal4.png" width="100" />
        <span style="margin-left:17px">打卡铂金</span>
        <span style="margin-left:50px">打卡钻石</span>
        <span style="margin-left:52px">打卡王者</span>
         <span style="margin-left:10px" class="text8">早起打卡500次</span>
         <span style="margin-left:120px" class="text8">早起打卡1000次</span>
         <span style="margin-left:240px" class="text8">早起打卡3000次</span>
      </div>
    </div>
      <div class="body4">
      <span class="text4">学英语勋章</span>
      <span class="text5">打卡</span>
      <span class="text6">0</span>
      <span class="text7">次</span>
      <div class="img8">
        <img style="margin-left:-2px" src="@/assets/images/drawable-xhdpi/medal4.png" width="100" />
        <img style="margin-left:13px" src="@/assets/images/drawable-xhdpi/medal4.png" width="100" />
        <img style="margin-left:18px" src="@/assets/images/drawable-xhdpi/medal4.png" width="100" />
        <span style="margin-left:17px">英语一级</span>
        <span style="margin-left:49px">英语二级</span>
        <span style="margin-left:52px">英语三级</span>
         <span style="margin-left:10px" class="text8">学英语打卡7次</span>
         <span style="margin-left:120px" class="text8">学英语打卡21次</span>
         <span style="margin-left:240px" class="text8">学英语打卡49次</span>
      </div>
       <div class="img9">
        <img style="margin-left:-2px" src="@/assets/images/drawable-xhdpi/medal4.png" width="100" />
        <img style="margin-left:13px" src="@/assets/images/drawable-xhdpi/medal4.png" width="100" />
        <img style="margin-left:18px" src="@/assets/images/drawable-xhdpi/medal4.png" width="100" />
        <span style="margin-left:17px">英语四级</span>
        <span style="margin-left:50px">英语六级</span>
        <span style="margin-left:52px">英语八级</span>
         <span style="margin-left:1px" class="text8">学英语打卡100次</span>
         <span style="margin-left:115px" class="text8">学英语打卡365次</span>
         <span style="margin-left:230px" class="text8">学英语打卡500次</span>
      </div>
      <div class="end">更多勋章类型 敬请期待</div>
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
  height: 1700px;
}
.head {
  height: 50px;
}
.head1 {
  position: absolute;
  font-size: 22px;
  margin-top: -210px;
  text-align: center;
  font-weight: bold;
  margin-left: 145px;

 
}
.img1 {
  
  margin-top: -34px;
  margin-left: 1px;
}
.text {
  position: absolute;
  font-size: 35px;
  font-weight: 300px;
  margin-top: -140px;
  margin-left: 50px;
}
.text1 {
  position: absolute;
  font-size: 16px;

  margin-top: -100px;
  margin-left: 30px;
}
.text2 {
  position: absolute;
  font-size: 35px;
  font-weight: 300px;
  margin-top: -140px;
  margin-left: 255px;
}
.text3 {
  position: absolute;
  font-size: 16px;

  margin-top: -100px;
  margin-left: 275px;
}
.body {
  width: 374px;
  height: 30px;
  background-color: #fdda88;
  margin-top: 119px;
  margin-left: 1px;

}
.body1 {
  position: absolute;
  width: 90%;
  height: 350px;
  background-color: #fff;
  margin-top: -30px;
  margin-left: 20px;
  border-radius: 10px;
  -moz-box-shadow: 2px 2px 10px #b6b6b6; /*firefox*/
  -webkit-box-shadow: 2px 2px 10px #b6b6b6; /*safari或chrome*/
  box-shadow: 2px 2px 10px #b6b6b6; /*opera或ie9*/
}
.body2 {
  position: absolute;
  width: 90%;
  height: 350px;
  background-color: #fff;
  margin-top: 330px;
  margin-left: 20px;
  border-radius: 10px;
  -moz-box-shadow: 2px 2px 10px #b6b6b6; /*firefox*/
  -webkit-box-shadow: 2px 2px 10px #b6b6b6; /*safari或chrome*/
  box-shadow: 2px 2px 10px #b6b6b6; /*opera或ie9*/
}
.body3 {
  position: absolute;
  width: 90%;
  height: 350px;
  background-color: #fff;
  margin-top: 690px;
  margin-left: 20px;
  border-radius: 10px;
  -moz-box-shadow: 2px 2px 10px #b6b6b6; /*firefox*/
  -webkit-box-shadow: 2px 2px 10px #b6b6b6; /*safari或chrome*/
  box-shadow: 2px 2px 10px #b6b6b6; /*opera或ie9*/
}
.body4 {
  position: absolute;
  width: 90%;
  height: 350px;
  background-color: #fff;
  margin-top: 1050px;
  margin-left: 20px;
  border-radius: 10px;
  -moz-box-shadow: 2px 2px 10px #b6b6b6; /*firefox*/
  -webkit-box-shadow: 2px 2px 10px #b6b6b6; /*safari或chrome*/
  box-shadow: 2px 2px 10px #b6b6b6; /*opera或ie9*/
}
.text4 {
  position: absolute;
  margin-left: 10px;
  margin-top: 15px;
  font-weight: bold;
}
.text5 {
  position: absolute;
  margin-left: 250px;
  margin-top: 15px;
  color: #747675;
}
.text6 {
  position: absolute;
  margin-left: 285px;
  font-size: 18px;
  margin-top: 17px;
  color: #fbc45d;
}
.text7 {
  position: absolute;
  margin-left: 298px;
  margin-top: 15px;
  color: #747675;
}
.text8 {
    display: flex;
    flex-direction: row;
    position: absolute;
    font-size: 13px;
    color:#747675; 
  
}
.img2 {
    
    position: absolute;
    margin-top: 40px;
}
.img3 {
    
    position: absolute;
    margin-top: 180px;
}
.img4 {
    
    position: absolute;
     margin-top: 40px;
   
}
.img5 {
    
    position: absolute;
    margin-top: 180px;
  
}
.img6 {
    
    position: absolute;
     margin-top: 40px;
   
}
.img7 {
    
    position: absolute;
    margin-top: 180px;
  
}
.img8 {
    
    position: absolute;
     margin-top: 40px;
   
}
.img9 {
    
    position: absolute;
    margin-top: 180px;
  
}
.end {
    font-size: 14px;
    color:#7d7f7e;
    margin-left: 100px;
    margin-top: 360px;
}
</style>
