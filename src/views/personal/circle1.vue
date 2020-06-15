<template>
  <div class="all">
    <div class="head">
      <img @click="gomine" style="margin-left:10px;margin-top:10px;" class="h1" src="@/assets/images/drawable-xhdpi/data.png" width="25" />
      <span class="head1">加入的圈子</span>
    </div>
    <div>
      <div class="a0">
        <img src="@/assets/images/drawable-xhdpi/p4.png" width="100px" />
      </div>
      <div class="a1">
        <div class="b2">将学习变成一中习惯</div>
        <div class="b3">4.5w热度</div>
        <div class="b4">21477日常</div>
        <div class="b5"></div>
      </div>
    </div>
    <div>
      <div class="q2">
        <img style=" margin-left:10px" src="@/assets/images/drawable-xhdpi/q1.png" width="80px" />
      </div>
      <div class="a1" style=" margin-top:-60px">
        <div class="b2">我的跑步日记</div>
        <div class="b3">1707热度</div>
        <div class="b4">853日常</div>
        <div class="b5"></div>
      </div>
    </div>
    <div class="q3">
      <div class="a0">
        <img style=" margin-left:10px" src="@/assets/images/drawable-xhdpi/p2.png" width="80px" />
      </div>
      <div class="a1" style=" margin-top:-60px">
        <div class="b2">天天背单词</div>
        <div class="b3">8.2w热度</div>
        <div class="b4">25626日常</div>
        <div class="b5"></div>
      </div>
    </div>
    <div class="q4">
      <div class="a0">
        <img style=" margin-left:10px;margin-top:10px" src="@/assets/images/drawable-xhdpi/p3.png" width="80px" />
      </div>
      <div class="a1" style=" margin-top:-60px">
        <div class="b2">将学习变成一中习惯</div>
        <div class="b3">2.9w热度</div>
        <div class="b4">8463日常</div>
        <div class="b5"></div>
      </div>
      <div class="end">到底了，没有更多</div>
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
    gomine() {
      this.$router.push('/mine')
    }
  },
  computed: {}
}
</script>

<style scoped lang="scss">
.head {
  height: 50px;
  border-bottom: 1px solid #999;
}
.head1 {
  font-size: 20px;
  margin-top: 5px;
  text-align: center;
  font-weight: bold;
  margin: 115px;
}

.a1 {
  margin-top: -73px;
  margin-left: 100px;
}
.b2 {
  margin-left: 10px;
  font-size: 17px;
}
.b3 {
  font-size: 14px;
  margin-left: 10px;
  margin-top: 10px;
  color:#999;
}
.b4 {
  font-size: 14px;
  position: absolute;
  margin-top: -19px;
  margin-left: 95px;
  color:#999;
}
.b5 {
  margin-top: 10px;
  border-bottom: 1px solid #999;
}
.q3 {
  margin-top: 10px;
}
.end {
    font-size: 14px;
    margin-top: 20px;
    text-align: center;
     color:#999;
}
</style>
