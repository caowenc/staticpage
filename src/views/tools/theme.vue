<template>
  <div>
    <div class="head">
      <img @click="gopersonal" style="margin-left:10px;margin-top:15px;" class="h1" src="@/assets/images/drawable-xhdpi/data.png" width="25" />
      <span class="head1">主题广场</span>
    </div>
    <div class="body">
      <div class="t1">
        <p class="text1">默认</p>
        <div>
          <img class="img1" src="@/assets/images/drawable-xhdpi/theme1.png" width="30px" />
          <span class="text2">使用中</span>
          <button class="button1">查看</button>
        </div>
      </div>
      <div class="t2">
        <p class="text3">萌芽发芽</p>
        <div>
          <img class="img2" src="@/assets/images/drawable-xhdpi/theme3.png" />
          <img class="img3" src="@/assets/images/drawable-xhdpi/theme2.png" width="90px" />
          <button class="button2">查看</button>
        </div>
      </div>
      <div class="t3">
        <p class="text4">绽放一夏</p>
        <div>
          <img class="img4" src="@/assets/images/drawable-xhdpi/theme4.png" />
          <img class="img5" src="@/assets/images/drawable-xhdpi/theme2.png" width="90px" />
          <button class="button3">查看</button>
        </div>
      </div>
      <div class="t4">
        <p class="text5">绽放一夏</p>
        <div>
          <img class="img6" src="@/assets/images/drawable-xhdpi/theme5.png" />
          <img class="img8" src="@/assets/images/drawable-xhdpi/theme6.png" />
          <img class="img7" src="@/assets/images/drawable-xhdpi/theme2.png" width="90px" />
          <button class="button4">查看</button>
        </div>
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
.head {
  background-color: white;
  height: 50px;
}
.head1 {
  font-size: 22px;
  margin-top: 35px;
  text-align: center;
  font-weight: bold;
  margin: 115px;
}
.body {
  width: 100%;
  height: 1000px;
}
.t1 {
  position: absolute;
  width: 90%;
  height: 180px;
  background-color: #ffd430;
  margin-top: 20px;
  margin-left: 20px;
  border-radius: 10px;
  -moz-box-shadow: 2px 2px 10px #b6b6b6; /*firefox*/
  -webkit-box-shadow: 2px 2px 10px #b6b6b6; /*safari或chrome*/
  box-shadow: 2px 2px 10px #b6b6b6; /*opera或ie9*/
}
.text1 {
  font-size: 25px;
  font-weight: bold;
  margin-top: 10px;
  margin-left: 10px;
}
.img1 {
  position: absolute;
  margin-left: 10px;
  margin-top: 90px;
}
.text2 {
  font-size: 14px;
  position: absolute;
  margin-left: 40px;
  margin-top: 95px;
}
.button1 {
  background-color: #fff;
  width: 55px;
  height: 25px;
  border-radius: 20px;
  margin-top: 90px;
  margin-left: 250px;
}
.t2 {
  position: absolute;
  width: 90%;
  height: 180px;
  background-color: #cbe1a3;
  margin-top: 230px;
  margin-left: 20px;
  border-radius: 10px;
  -moz-box-shadow: 2px 2px 10px #b6b6b6; /*firefox*/
  -webkit-box-shadow: 2px 2px 10px #b6b6b6; /*safari或chrome*/
  box-shadow: 2px 2px 10px #b6b6b6; /*opera或ie9*/
}
.text3 {
  font-size: 25px;
  font-weight: bold;
  margin-top: 10px;
  margin-left: 5px;
}
.img2 {
  position: absolute;
  margin-top: 10px;
  margin-left: 110px;
  width: 110px;
}
.img3 {
  position: absolute;
  margin-top: -55px;
  margin-left: 260px;
}
.button2 {
  background-color: #fff;
  width: 55px;
  height: 25px;
  border-radius: 20px;
  margin-top: 90px;
  margin-left: 250px;
}
.t3 {
  position: absolute;
  width: 90%;
  height: 180px;
  background-color: #4fd9ca;
  margin-top: 445px;
  margin-left: 20px;
  border-radius: 10px;
  -moz-box-shadow: 2px 2px 10px #b6b6b6; /*firefox*/
  -webkit-box-shadow: 2px 2px 10px #b6b6b6; /*safari或chrome*/
  box-shadow: 2px 2px 10px #b6b6b6; /*opera或ie9*/
}
.text4 {
  font-size: 25px;
  font-weight: bold;
  margin-top: 10px;
  margin-left: 10px;
}
.img4 {
  width: 150px;
  margin-top: -20px;
  margin-left: 90px;
}
.img5 {
  position: absolute;
  margin-top: -55px;
  margin-left: 20px;
}
.button3 {
  position: absolute;
  background-color: #fff;
  width: 55px;
  height: 25px;
  border-radius: 20px;
  margin-top: 80px;
  margin-left: 15px;
}
.t4 {
  position: absolute;
  width: 90%;
  height: 180px;
  background-color: #feaea7;
  margin-top: 660px;
  margin-left: 20px;
  border-radius: 10px;
  -moz-box-shadow: 2px 2px 10px #b6b6b6; /*firefox*/
  -webkit-box-shadow: 2px 2px 10px #b6b6b6; /*safari或chrome*/
  box-shadow: 2px 2px 10px #b6b6b6; /*opera或ie9*/
}
.text5 {
  font-size: 25px;
  font-weight: bold;
  margin-top: 10px;
  margin-left: 10px;
}
.img6 {
  position: absolute;
  width: 200px;
  margin-top: -35px;
  margin-left: 60px;
}
.img7 {
  position: absolute;
  margin-left: 260px;
  margin-top: -55px;
}
.img8 {
  position: absolute;
  margin-left: 160px;
  margin-top: -60px;
}
.button4 {
  background-color: #fff;
  width: 55px;
  height: 25px;
  border-radius: 20px;
  margin-top: 90px;
  margin-left: 260px;
}
</style>
