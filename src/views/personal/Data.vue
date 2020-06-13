<template>
  <div class="all">
    <div class="head">
      <img @click="gomine" style="margin-left:10px;margin-top:15px;" class="h1" src="@/assets/images/drawable-xhdpi/data.png" width="25" />
      <span class="head1">编辑资料</span>
    </div>
    <div class="body">
      <div>
        <ul>
          <li class="b1">头像</li>
          <li><img style="border-radius: 100px;margin-left:205px;margin-top:25px;" src="@/assets/images/drawable-xhdpi/id.png" width="65" /></li>
          <li class="b3"><span>&rsaquo;</span></li>
        </ul>
      </div>
      <div class="bb1">
        <ul >
          <li class="b1">ID</li>
          <li class="b4">3562987</li>
        </ul>
        <ul>
          <li class="b1">昵称</li>
          <li class="b4" style="margin-top:50px">bLue</li>
          <li class="b3" style="margin-top:2px;margin-left:350;"><span>&rsaquo;</span></li>
        </ul>
        <ul>
          <li class="b1">性别</li>
          <li class="b4" style="margin-top:45px;margin-left：-350px;">男</li>
          <li class="b3" style="margin-top:0px;margin-left:350;"><span>&rsaquo;</span></li>
        </ul>
        <ul>
          <li class="b1">生日</li>
          <li class="b4" style="margin-left：250px;margin-top:-20px;">2000-10-01</li>
          <li class="b3" style="margin-top:-70px"><span>&rsaquo;</span></li>
        </ul>
        <ul>
          <li class="b1">地区</li>
          <li class="b4" style="margin-left：250px;margin-top:-20px;">南京市栖霞区</li>
          <li class="b3" style="margin-top:-65px"><span>&rsaquo;</span></li>
        </ul>
        <ul>
          <li class="b1">个性签名</li>
          <li class="b4" style="margin-left：300px;margin-top:-20px;">认真生活</li>
          <li class="b3" style="margin-top:-65px"><span>&rsaquo;</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Data',
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
.all {
  height: 667px;
  background-color: #f6f7f9;
}
.head {
  background-color: white;
  height: 50px;
}
.head1 {
  font-size: 22px;
  margin-top: 10px;
  text-align: center;
  font-weight: bold;
  margin: 115px;
}
.body {
 
  padding-left: 20px;
  padding-right: 10px;
  background-color: white;
  height: 600px;
}
.body .b1{
  margin-left: -1px;
}

.body ul {
  height: 100px;
  border-bottom: 1px solid #b8b8b8;
}
.body ul li {
  float: left;
}
.b1 {
  font-size: 18px;
  font-weight: 500;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin-left: 20px;
  margin-top: 50px;
}
.b3 span {
  position: absolute;
  margin-top: 35px;
  margin-left: 10px;
  font-size: 35px;
  font-weight: 50;
  color: #b6b6b6;
  display: flex;
  justify-content: flex-end;
}
.b4 {
  display: flex;
  font-size: 18px;
  color: #b8b8b8;
  margin-left: 220px;
  margin-top: 50px;
  justify-content: flex-end;
}
.bb1 {
  margin-top: 10px;
}
.bb1 ul{
    margin-top: -16px;
}
.bb1 ul li {
  margin-top: 40px;
}
// .bb1 ul li span {
//   text-align: right;
// }
.bb1 :last-child{
    border-bottom: 0px;
}
</style>
