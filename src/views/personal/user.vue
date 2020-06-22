<template>
  <div>
      <div class="head">
        <img class="img" src="@/assets/images/drawable-xhdpi/jt1.png" width="35px">
        <span class="text">用户服务协议</span>
      </div>
      <div class="body">

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
  methods: {},
  computed: {}
}
</script>

<style scoped lang="scss">
.head {
    width: 100%;
    height: 60px;
    background-color: #ffd430;
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
</style>
