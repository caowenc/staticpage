<template>
  <div>
     <div class="head">
      <img @click="gopersonal" style="margin-left:10px;margin-top:15px;" class="h1" src="@/assets/images/drawable-xhdpi/data.png" width="25" />
      <span class="head1">我的补签卡</span>
      <span class="head2">记录</span>
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
.head2{
  position: absolute;
  font-size: 16px;
  margin-top: 15px;
  margin-left: 320px;
}</style>
