<template>
  <div class="all">
    <div class="head">
      <img @click="gocircle" style="margin-left:10px;margin-top:13px;" class="h1" src="@/assets/images/drawable-xhdpi/data.png" width="25" />
      <span class="text">日常</span>
      <button class="text1">发布</button>
    </div>
    <div class="body">
        <textarea placeholder="说说今天为自己的小目标做了什么吧~" class="b1"></textarea>
    </div>
    <div class="body2">
        选择一个圈子
    </div>
    <div class="end">
        <img class="e1" src="@/assets/images/drawable-xhdpi/rc1.png" width="35px" >
        <img class="e2" src="@/assets/images/drawable-xhdpi/rc2.png" width="40px" >
        <img class="e3" src="@/assets/images/drawable-xhdpi/rc3.png" width="40px" >
         <img class="e4" src="@/assets/images/drawable-xhdpi/rc4.png" width="30px" >
         <span class="e5">仅自己看</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'daily',
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
.all {
  background-color: #ffffff;
 
}
.head {
  height: 60px;
  width: 100%;
}
img {
  position: absolute;
}
.text {
  position: absolute;
  font-size: 22px;
  margin-top: 10px;
  margin-left: 170px;
  text-align: center;
  font-weight: bold;
}
.text1 {
  position: absolute;
  font-size: 16px;
  margin-top: 13px;
  margin-left: 300px;
  width: 60px;
  height: 30px;
  border-radius: 20px;
  background-color: #ffc023;
}
.b1 {
    width: 95%;
    height: 150px;
    margin-left: 10px;
    background-color: #ffffff;
}
.body2 {
    position: absolute;
    width: 120px;
    height: 30px;
    margin-left: 10px;
    padding-top: 5px;
    padding-left: 12px;
    background-color: #f6f7f9;
    border-radius: 20px;
}
.end {
    position: absolute;
    height: 50px;
    width: 100%;
    margin-top: 400px;
    
}
.e1 {
    position: absolute;
    margin-left: 10px;
    margin-top:7px;
}
.e2 {
    position: absolute;
    margin-left: 65px;
    margin-top: 4px;
}
.e3 {
    position: absolute;
    margin-left: 120px;
    margin-top: 4px;
}
.e4 {
    position: absolute;
    margin-left: 260px;
    margin-top: 8px;
}
.e5 {
    position: absolute;
    margin-left: 300px;
    margin-top: 13px;
}
</style>

