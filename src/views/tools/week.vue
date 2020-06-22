<template>
  <div class="all">
    <div class="head">
      <img @click="gopersonal" style="margin-left:10px;margin-top:13px;" class="h1" src="@/assets/images/drawable-xhdpi/data.png" width="25" />
      <span class="text">打卡周报</span>
    </div>
    <div class="body">
      <div class="body1">
        <img class="img1" src="@/assets/images/drawable-xhdpi/week1.png" />
        <div class="text1">06/08 - 06/14</div>
        <div class="text2">2020年第24周</div>
      </div>
      <div class="body2">
        <img class="img1" src="@/assets/images/drawable-xhdpi/week2.png" />
        <div class="text1">04/20 - 04/26</div>
        <div class="text2">2020年第17周</div>
      </div>
      <div class="body3">
        <img class="img1" src="@/assets/images/drawable-xhdpi/week1.png" />
        <div class="text1">04/13 - 04/19</div>
        <div class="text2">2020年第16周</div>
      </div>
      <div class="body4">
        <img class="img1" src="@/assets/images/drawable-xhdpi/week2.png" />
        <div class="text1">03/02 - 03/08</div>
        <div class="text2">2020年第10周</div>
      </div>
      <div class="body5">
        <img class="img1" src="@/assets/images/drawable-xhdpi/week1.png" />
        <div class="text1">02/24 - 03/01</div>
        <div class="text2">2020年第10周</div>
      </div>
      <div class="text3">到底了，没有更多了</div>
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
  height: 667px;
}
.head {
  height: 60px;
  width: 100%;
  background-color: #fff;
  position: fixed;
  left: 0;
  z-index: 1;
}
img {
  position: absolute;
}
.text {
  position: absolute;
  font-size: 22px;
  margin-top: 10px;
  margin-left: 150px;
  text-align: center;
  font-weight: bold;
}
.img1 {
  margin-top: -50px;
  margin-left: 10px;
}
.text1 {
  position: absolute;
  width: 300px;
  margin-left: 40px;
  margin-top: 20px;
  font-size: 25px;
  color: #f6f7f9;
  font-family: Arial, Helvetica, sans-serif;
}
.text2 {
  width: 120px;
  height: 30px;
  background-color: #fff;
  position: absolute;
  margin-left: 40px;
  font-size: 14px;
  font-weight: 100px;
  color: #42ace8;
  text-align: center;
  margin-top: 60px;
  padding-top: 5px;
}
.text3 {
  position: absolute;
  margin-top: 710px;
  margin-left: 120px;
  color: #a5a5a5;
}

.body1 {
  position: absolute;
  margin-top: 80px;
  margin-left: 4px;
}
.body2 {
  position: absolute;
  margin-top: 210px;
  margin-left: 4px;
}
.body3 {
  position: absolute;
  margin-top: 340px;
  margin-left: 4px;
}
.body4 {
  position: absolute;
  margin-top: 470px;
  margin-left: 4px;
}
.body5 {
  position: absolute;
  margin-top: 600px;
  margin-left: 4px;
}
</style>
