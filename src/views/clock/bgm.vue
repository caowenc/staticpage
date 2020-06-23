<template>
  <div class="all">
    <div class="head">
      <img class="img" @click="goclock" src="@/assets/images/drawable-xhdpi/data.png" width="35px" />
      <span class="text">选择背景音乐</span>
    </div>
    <div class="body">
      <div class="b1">
        <span class="text1">无</span>
        <img class="img1" src="@/assets/images/drawable-xhdpi/music1.png" width="60px" />
      </div>
      <div class="b2">
        <span class="text1">海滩</span>
        <img class="img1" src="@/assets/images/drawable-xhdpi/music2.png" width="60px" />
      </div>
      <div class="b3">
        <span class="text1">空灵</span>
        <img class="img1" src="@/assets/images/drawable-xhdpi/music2.png" width="60px" />
      </div>
      <div class="b4">
        <span class="text1">放松</span>
        <img class="img1" src="@/assets/images/drawable-xhdpi/music2.png" width="60px" />
      </div>
      <div class="b5">
        <span class="text1">轻缓</span>
        <img class="img1" src="@/assets/images/drawable-xhdpi/music2.png" width="60px" />
      </div>
      <div class="b6">
        <span class="text1">雷雨夜</span>
        <img class="img1" src="@/assets/images/drawable-xhdpi/music2.png" width="60px" />
      </div>
      <div class="b6" style="margin-top:360px">
        <span class="text1">日系浪漫</span>
        <img class="img1" src="@/assets/images/drawable-xhdpi/music2.png" width="60px" />
      </div>
      <div class="b6" style="margin-top:420px">
        <span class="text1">山间瀑布</span>
        <img class="img1" src="@/assets/images/drawable-xhdpi/music2.png" width="60px" />
      </div>
      <div class="b6" style="margin-top:480px">
        <span class="text1">清新吉他</span>
        <img class="img1" src="@/assets/images/drawable-xhdpi/music2.png" width="60px" />
      </div>
      <div class="b6" style="margin-top:540px">
        <span class="text1">夏天夜晚</span>
        <img class="img1" src="@/assets/images/drawable-xhdpi/music2.png" width="60px" />
      </div>
      <div class="b6" style="margin-top:600px">
        <span class="text1">情迷的夜晚</span>
        <img class="img1" src="@/assets/images/drawable-xhdpi/music2.png" width="60px" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bgm',
  data() {
    return {
      active: 0
    }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    goclock() {
      this.$router.push('/clock')
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
.head {
  width: 100%;
  height: 60px;

  position: fixed;
  background-color: #fff;
  z-index: 1;
}
.img {
  margin-left: 10px;
  margin-top: 10px;
}
.text {
  position: absolute;
  font-size: 22px;
  margin-top: 10px;
  margin-left: 80px;
  text-align: center;
  font-weight: bold;
}
.b1 {
  position: absolute;
  width: 95%;
  height: 120px;
  margin-left: 20px;
  border-bottom: 1px solid #aaaaaa;
}
.text1 {
  position: absolute;
  margin-left: 5px;
  margin-top: 80px;
}
.img1 {
  position: absolute;
  margin-top: 60px;
  margin-left: 290px;
}
.b2 {
  position: absolute;
  width: 95%;
  height: 120px;
  margin-left: 20px;
  margin-top: 60px;
  border-bottom: 1px solid #aaaaaa;
}
.b3 {
  position: absolute;
  width: 95%;
  height: 120px;
  margin-left: 20px;
  margin-top: 120px;
  border-bottom: 1px solid #aaaaaa;
}
.b4 {
  position: absolute;
  width: 95%;
  height: 120px;
  margin-left: 20px;
  margin-top: 180px;
  border-bottom: 1px solid #aaaaaa;
}
.b5 {
  position: absolute;
  width: 95%;
  height: 120px;
  margin-left: 20px;
  margin-top: 240px;
  border-bottom: 1px solid #aaaaaa;
}
.b6 {
  position: absolute;
  width: 95%;
  height: 120px;
  margin-left: 20px;
  margin-top: 300px;
  border-bottom: 1px solid #aaaaaa;
}
</style>
