<template>
  <div>
    <div class="head">
      <img @click="gopersonal" style="margin-left:10px;margin-top:15px;" class="h1" src="@/assets/images/drawable-xhdpi/data.png" width="25" />
      <span class="head1">消息中心</span>
    </div>
    <div class="body">
      <img class="b1" src="@/assets/images/drawable-xhdpi/message1.png" width="80" />
      <img class="b2" src="@/assets/images/drawable-xhdpi/message2.png" width="80" />
      <img class="b3" src="@/assets/images/drawable-xhdpi/message3.png" width="80" />
      <span class="b4">粉丝</span>
      <span class="b5">赞</span>
      <span class="b5">评论</span>
    </div>
    <div class="end">
      <div>
        <img src="@/assets/images/drawable-xhdpi/message4.png" width="90" />
        <span class="e1">系统消息</span>
        <span class="e2">2天前</span>
        <span class="e3">打卡周报第202024期已...</span>
      </div>
      <div>
        <img src="@/assets/images/drawable-xhdpi/message5.png" width="90" />
        <span class="e1">圈子通知</span>
        <span class="e3">暂无圈子通知</span>
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
  height: 150px;
  border-bottom: 1px solid #999;
}
.b1 {
  margin-left: 20px;
  margin-top: 20px;
}
.b2 {
  margin-left: 50px;
  margin-top: 20px;
}
.b3 {
  margin-left: 55px;
  margin-top: 20px;
}
.b4 {
  margin-left: 42px;
  color: #757575;
}
.b5 {
  margin-left: 110px;
  color: #757575;
}
.e1 {
  position: absolute;
  margin-top: 13px;
  font-size: 20px;
  font-weight: bold;
}
.e2 {
  position: absolute;
  margin-top: 13px;
  margin-left: 220px;
  color: #757575;
}
.e3 {
  position: absolute;
  margin-top: 51px;
  color: #757575;
}
</style>
