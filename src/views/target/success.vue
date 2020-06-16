<template>
  <div>
    <div class="head">
      <div>
        <img @click="gotarget" style="margin-left:10px;margin-top:15px;" class="h1" src="@/assets/images/drawable-xhdpi/data.png" width="25" />
      </div>
      <div>
        <span class="text">成就卡片</span>
        <span class="text1">卡包</span>
      </div>
    </div>
    <div class="body">
      <div style="position:relative;">
        <img class="s1" src="@/assets/images/drawable-xhdpi/success.png" />
        <div class="s2">万众一心</div>
        <div class="s3">共克时艰</div>
      </div>
      <div class="body1">
        <div>
          <p class="t1">Come On China！ Come On Wuhan!</p>
          <p class="t2">万众一心，共克时艰！</p>
          <p class="t3">—— 小目标</p>
        </div>
      </div>
      <div class="end">
        <button class="share">分享</button>
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
    gotarget() {
      this.$router.push('/target')
    }
  },
  computed: {}
}
</script>

<style scoped lang="scss">
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
.s1 {
  height: 460px;
  width: 380px;
  margin-left: -4px;
  margin-top: 40px;
}
.s2 {
  position: absolute;
  font-size: 50px;
  margin-top: 220px;
  margin-left: 85px;
  color: white;
  font-weight: lighter;
}
.s3 {
  position: absolute;
  font-size: 50px;
  margin-top: 300px;
  margin-left: 85px;
  color: white;
  font-weight: 50;
}
.body1 {
  position: absolute;
  margin-top: 484px;
  margin-left: 20px;
  height: 100px;
  width: 332px;
  background: white;
  -moz-box-shadow: 2px 2px 10px #b6b6b6; /*firefox*/
  -webkit-box-shadow: 2px 2px 10px #b6b6b6; /*safari或chrome*/
  box-shadow: 2px 2px 10px #b6b6b6; /*opera或ie9*/
}
.t1 {
  margin-left: 10px;
  margin-top: 10px;
}
.t2 {
  font-size: 17px;
  margin-top: 5px;
  margin-left: 10px;
  font-weight: 600;
}
.t3 {
  margin-left: 220px;
  margin-top: 5px;
}
.end {
  position: absolute;
  margin-top: 605px;
  margin-left: 110px;
}
.share {
  width: 150px;
  height: 50px;
  background-color: #dad5d5;
  border-radius: 20px;
}
</style>