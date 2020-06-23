<template>
  <div class="all">
     <div class="head">
     <img @click="gocircle" style="position: absolute; margin-left:10px;margin-top:18px;" class="h1" src="@/assets/images/drawable-xhdpi/data.png" width="25" />
     <input class="input" type="text" placeholder="请输入您要搜索的内容" >
     <span class="text1">搜索</span>
      <span class="text2">推荐圈子</span>
 </div> 
 <div class="body1">
  <div class="a0">
        <img src="@/assets/images/drawable-xhdpi/p4.png" width="100px" />
      </div>
      <div class="a1">
        <div class="b2">将学习变成一中习惯</div>
        <div class="b3">4.5w热度</div>
        <div class="b4">21477日常</div>
        <div class="b5"></div>
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
       <div class="q4">
      <div class="a0">
        <img style=" margin-left:10px;margin-top:10px" src="@/assets/images/drawable-xhdpi/tx2.png" width="80px" />
      </div>
      <div class="a1" style=" margin-top:-60px">
        <div class="b2">学英语</div>
        <div class="b3">2.7w热度</div>
        <div class="b4">32532日常</div>
        <div class="b5"></div>
      </div>
       <div class="q4">
      <div class="a0">
        <img style=" margin-left:10px;margin-top:10px" src="@/assets/images/drawable-xhdpi/end4.png" width="78px" />
      </div>
      <div class="a1" style=" margin-top:-60px">
        <div class="b2">复习巩固</div>
        <div class="b3">8.7w热度</div>
        <div class="b4">3255443日常</div>
       
      </div>
      <div class="end">到底了，没有更多</div>
    </div>
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
       gocircle() {
      this.$router.push('/circle')
    }
  },
  computed: {}
}
</script>

<style scoped lang="scss">
.input{
    position: absolute;
    margin-top: 11px;
    margin-left: 50px;
    width: 260px;
    height: 40px;
    background-color: #f3f7f8;
}
.text1 {
    position: absolute;
    margin-left: 320px;
    margin-top: 17px;
    font-size: 18px;
    color: #ffca39;
}
.text2 {
    position: absolute;
    margin-left: 10px;
    margin-top: 70px;
    font-weight: bold;
}
.body1 {
    position: absolute;
    margin-top: 100px;
}
.a1 {
  margin-top: -73px;
  margin-left: 100px;
  width: 100%;
  height: 70px;
  border-bottom: 1px solid #aaaaaa;
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
