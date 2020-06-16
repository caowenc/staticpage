<template>
  <div class="all">
    <div class="head">
      <img @click="gopersonal" class src="@/assets/images/drawable-xhdpi/m1.png" width="40" style="margin-left:-5px;margin-top:10px;" />
      <button
        @click="godata"
        style="background-color: #ffd430;border-radius:20px;
           width:90px;height:30px; margin-left:270px;margin-top:55px;"
      >编辑资料</button>
    </div>
    <div class="head1">
      <img class="h1" src="@/assets/images/drawable-xhdpi/id.png" width="90" />
      <ul>
        <li style="font-size:25px;font-weight:300px;margin-top:10px;margin-left:12px;">bLue</li>
        <li style="margin-top:-37px;margin-left:80px;">
          <img src="@/assets/images/drawable-xhdpi/old.png" width="45px" />
        </li>
        <li style="font-size:14px;margin-left:12px;color:#b8b8b8">认真生活</li>
      </ul>
      <div class="all1">
        <div class="body" @click="gofocus">
          <span style="margin-left:10px; font-weight: bold;font-size:16px;;">6</span>
          <p style="margin-top:5px;color:#999;font-size:14px;">关注</p>
        </div>
        <div class="body" @click="gofans">
          <span style="margin-left:25px; font-weight: bold;font-size:16px;">0</span>
          <p style="margin-left:15px;margin-top:5px;color:#999;font-size:14px;">粉丝</p>
        </div>
        <div class="body" @click="gocircle1">
          <span style="margin-left:25px; font-weight: bold;font-size:16px;">4</span>
          <p style="margin-left:15px;margin-top:5px;color:#999;font-size:14px;">圈子</p>
        </div>
        <div class="body1">
          <span style="margin-left:25px; font-weight: bold;font-size:16px;">0</span>
          <p style="margin-left:15px;margin-top:5px;color:#999;font-size:14px;">获赞</p>
        </div>
      </div>
    </div>
    <div class="end">
      <img style="margin-left:100px;margin-top:10;" src="@/assets/images/drawable-xhdpi/m2.png" width="200" />
      <span style="font-size:18px;margin-left:-190px;color:#999;">暂未发布打卡日记</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mine',
  data() {
    return {
      active: 0
    }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    godata() {
      this.$router.push('/Data')
    },
    gopersonal() {
      this.$router.push('/Personal')
    },
    gocircle1() {
      this.$router.push('/circle1')
    },
    gofocus() {
      this.$router.push('/focus')
    },
    gofans() {
      this.$router.push('/fans')
    }
  },
  computed: {}
}
</script>
<style scoped lang="scss">
.all {
  height: 667px;
  background-color: #f6f7f9;
}
.head {
  background-color: #dfe9f5;
  width: 100%;
  height: 150px;
}
.h1 {
  margin-top: -80px;
  border-radius: 10px;
  margin-left: 15px;
  border: 2px solid white;
}
.head1 {
  background-color: rgb(255, 255, 255);
  height: 180px;
}
.end {
  margin-top: 15px;
  background-color: rgb(255, 255, 255);
  height: 320px;
}
.body {
  padding-left: 21px;
  width: 25%;
  float: left;
  border-right: 1px solid #999;
  margin-top: 20px;
}
.body1 {
  float: left;
  margin-left: 25px;
  margin-top: 20px;
}
</style>
