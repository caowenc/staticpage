<template>
  <div>
    <div class="head">
      <img class="bg" src="@/assets/images/drawable-xhdpi/vipbg.png" />
      <ul>
        <li class="jt">
          <img @click="gomine" class="h1" src="@/assets/images/drawable-xhdpi/data.png" width="25" />
        </li>
        <li>
          <span class="head1">我的VIP</span>
        </li>
        <li class="v1">
          <img style=" width:365px;" src="@/assets/images/drawable-xhdpi/vip1.png" />
        </li>
      </ul>
    </div>
    <div class="body">
      <ul>
        <li class="b1">
          <span>vip特权</span>
        </li>
        <li class="b2">
          <span>共8项特权</span>
        </li>
        <img class="m41" src="@/assets/images/drawable-xhdpi/vip2.png" />
        <img class="m41" src="@/assets/images/drawable-xhdpi/vip3.png" />
        <img class="m41" src="@/assets/images/drawable-xhdpi/vip4.png" />
        <img class="m41" src="@/assets/images/drawable-xhdpi/vip5.png" />
        <span class="m51">更多目标</span>
        <span class="m52">广告隐藏</span>
        <span class="m53">个性皮肤</span>
        <span class="m54">多个提醒</span>
        <img class="m41" src="@/assets/images/drawable-xhdpi/vip6.png" />
        <img class="m41" src="@/assets/images/drawable-xhdpi/vip7.png" />
        <img class="m41" src="@/assets/images/drawable-xhdpi/vip8.png" />
        <img class="m41" src="@/assets/images/drawable-xhdpi/vip9.png" />
        <span class="m55">成长记录</span>
        <span class="m55">目标统计</span>
        <span class="m56">打卡周报</span>
        <span class="m56">打卡排行</span>
      </ul>
    </div>
    <div class="body1">
      <p class="b1">权限对比</p>
      <table class="tab">
        <thead>
          <tr class="t1">
            <th class="top1">权限对比</th>
            <th class="top2">普通用户</th>
            <th class="top3">尊贵VIP</th>
          </tr>
        </thead>
        <tbody>
          <tr class="t2">
            <td class="top4">更多目标</td>
            <td class="top5">6个</td>
            <td class="top6">50个</td>
          </tr>
          <tr class="t3">
            <td class="top7">广告隐藏</td>
            <td class="top8">展示</td>
            <td class="top9">无广告</td>
          </tr>
          <tr class="t4">
            <td class="top4">个性皮肤</td>
            <td class="top5">1套</td>
            <td class="top6">不限</td>
          </tr>
          <tr class="t5">
            <td class="top7">多个提醒</td>
            <td class="top8">1个</td>
            <td class="top9">3个</td>
          </tr>
          <tr class="t6">
            <td class="top4">更多抽奖</td>
            <td class="top5">3次</td>
            <td class="top6">6次</td>
          </tr>
          <tr class="t7">
            <td class="top7">数据备份</td>
            <td class="top8">有限使用</td>
            <td class="top9">在线备份</td>
          </tr>
          <tr class="t8">
            <td class="top4">补签卡</td>
            <td class="top5">不享有</td>
            <td class="top6">每月3张</td>
          </tr>
          <tr class="t9">
            <td class="top7">后续特权</td>
            <td class="top8">不享有</td>
            <td class="top9">免费使用</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="end">
      <button class="end1">开通VIP</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vip',
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
.bg {
  margin-left: 1px;
  margin-top: -30px;
}
.bg img {
  width: 100%;
  height: 150px;
}
.jt img {
  position: absolute;
  margin-left: 10px;
  margin-top: -150px;
}
.head1 {
  position: absolute;
  font-size: 22px;
  margin-top: -150px;
  margin-left: 150px;
  font-weight: 600;
}
.v1 {
  position: absolute;
  margin-top: -130px;
  margin-left: 8px;
}
.b1 {
  font-size: 18px;
  font-weight: 600;
  margin-left: 20px;
  margin-top: 50px;
}
.b2 {
  font-size: 14px;
  font-weight: 300;
  margin-top: -15px;
  margin-left: 295px;
}
.m41 {
  width: 50px;
  height: 60px;
  padding-top: 10px;
  margin-left: 35.5px;
}
.m51 {
  font-size: 14px;
  padding-left: 30px;
  color: black;
}
.m52 {
  font-size: 14px;
  padding-left: 30px;
  color: black;
}
.m53 {
  font-size: 14px;
  padding-left: 30px;
  color: black;
}
.m54 {
  font-size: 14px;
  padding-left: 30px;
  color: black;
}
.m55 {
  font-size: 14px;
  padding-left: 30px;
  color: black;
}
.m56 {
  font-size: 14px;
  padding-left: 31px;
  color: black;
}
.tab {
  width: 350;
  height: 450px;
  border: 0;
}
.t1 {
  position: absolute;
  margin-left: 15px;
  margin-top: 10px;
  border-collapse: collapse;
}
.top1 {
  width: 120px;
  height: 50px;
  background-color: #fbf4ea;
  border-top-left-radius: 10px;
  color: #d1a276;
}
.top2 {
  width: 120px;
  height: 50px;
  background-color: #fdf8f2;
  color: black;
  font-weight: 400;
  margin: 0;
}
.top3 {
  margin-left: -100px;
  width: 120px;
  height: 50px;
  background-color: #d2a377;
  color: white;
  // font-weight: 400;
  border-top-right-radius: 10px;
  border: 0;
}
.t2 {
  position: absolute;
  margin-left: 15px;
  margin-top: 58px;
  border-collapse: collapse;
}
.top4 {
  width: 120px;
  height: 50px;
  background-color: #fdfcf8;
  color: black;
  text-align: center;
}
.top5 {
  width: 120px;
  height: 50px;
  background-color: #fdfcf8;
  color: black;
  text-align: center;
}
.top6 {
  width: 120px;
  height: 50px;
  background-color: #fcf9f2;
  color: black;
  text-align: center;
}
.t3 {
  position: absolute;
  margin-left: 15px;
  margin-top: 108px;
  border-collapse: collapse;
}
.top7 {
  width: 120px;
  height: 50px;
  background-color: #fdf8f2;
  color: black;
  text-align: center;
}
.top8 {
  width: 120px;
  height: 50px;
  background-color: #fdf8f2;
  color: black;
  text-align: center;
}
.top9 {
  width: 120px;
  height: 50px;
  background-color: #fbf4ec;
  color: black;
  text-align: center;
}
.t4 {
  position: absolute;
  margin-left: 15px;
  margin-top: 158px;
  border-collapse: collapse;
}
.t5 {
  position: absolute;
  margin-left: 15px;
  margin-top: 208px;
  border-collapse: collapse;
}
.t6 {
  position: absolute;
  margin-left: 15px;
  margin-top: 258px;
  border-collapse: collapse;
}
.t7 {
  position: absolute;
  margin-left: 15px;
  margin-top: 308px;
  border-collapse: collapse;
}
.t8 {
  position: absolute;
  margin-left: 15px;
  margin-top: 358px;
  border-collapse: collapse;
}
.t9 {
  position: absolute;
  margin-left: 15px;
  margin-top: 408px;
  border-collapse: collapse;
}
.end {
  position: absolute;
  margin-left: 10px;
  margin-top: 20px;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 1000;
}
.end1 {
  background-color: #29211f;
  width: 370px;
  height: 50px;
  color: #e7d7c0;
  font-size: 18px;
}
</style>
