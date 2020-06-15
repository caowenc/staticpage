<template>
  <div>
    <div class="head">
      <div>
        <img @click="gomine" class src="@/assets/images/drawable-xhdpi/m1.png" width="40" style="margin-left:-10px;margin-top:10px;" />
      </div>
      <ul>
        <li @click="cur = 0" :class="{ active: cur == 0 }">
          <span>关注</span>
        </li>
        <li @click="cur = 1" :class="{ active: cur == 1 }">
          <span>粉丝</span>
        </li>
      </ul>
    </div>
    <div class="show">
      <div class="t1" v-show="cur == 0">
        <div>
          <img style=" margin-left:10px;margin-top:5px" src="@/assets/images/drawable-xhdpi/tx1.png" width="80px" />
          <div>
            <div class="a1">
              <div></div>
              <div class="b2">阿淮</div>
              <div class="b3">
                <img src="@/assets/images/drawable-xhdpi/girl.png" alt width="40px" />
              </div>
            </div>
            <div class="b5"></div>
          </div>
          <img style=" margin-left:10px;margin-top:5px" src="@/assets/images/drawable-xhdpi/tx5.png" width="80px" />
          <div>
            <div class="a1">
              <div></div>
              <div class="b2">小杨今天学习了吗</div>
              <div class="b3" style="margin-left:165px;">
                <img src="@/assets/images/drawable-xhdpi/boy.png" alt width="40px" />
              </div>
            </div>
            <div class="b5"></div>
          </div>
          <img style=" margin-left:10px;margin-top:5px" src="@/assets/images/drawable-xhdpi/tx2.png" width="80px" />
          <div>
            <div class="a1">
              <div></div>
              <div class="b2">樱桃🍒呀</div>
              <div class="b3" style="margin-left:90px;">
                <img src="@/assets/images/drawable-xhdpi/girl.png" alt width="40px" />
              </div>
            </div>
            <div class="b5"></div>
          </div>
          <img style=" margin-left:10px;margin-top:5px" src="@/assets/images/drawable-xhdpi/tx3.png" width="80px" />
          <div>
            <div class="a1">
              <div></div>
              <div class="b2">挽歌.</div>
              <div class="b3" style="margin-left:50px;">
                <img src="@/assets/images/drawable-xhdpi/girl.png" alt width="40px" />
              </div>
            </div>
            <div class="b5"></div>
          </div>
          <img style=" margin-left:10px;margin-top:5px" src="@/assets/images/drawable-xhdpi/tx4.png" width="80px" />
          <div>
            <div class="a1">
              <div></div>
              <div class="b2">转身未来</div>
              <div class="b3" style="margin-left:90px;">
                <img src="@/assets/images/drawable-xhdpi/boy.png" alt width="40px" />
              </div>
            </div>
            <div class="b5"></div>
          </div>
          <img style=" margin-left:10px;margin-top:5px" src="@/assets/images/drawable-xhdpi/tx6.png" width="80px" />
          <div>
            <div class="a1">
              <div></div>
              <div class="b2">橘生淮北🍊</div>
              <div class="b3" style="margin-left:110px;">
                <img src="@/assets/images/drawable-xhdpi/girl.png" alt width="40px" />
              </div>
            </div>
          </div>
        </div>
        <div class="b5"></div>
      </div>
      <div class="f1" v-show="cur == 1">
        <div>
          <img src="@/assets/images/drawable-xhdpi/fs.png" width="250px" />
        </div>
        <div class="text1">还没有粉丝关注TA</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'focus',
  data() {
    return {
      active: 0,
      cur: 1
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
  width: 375px;
  border-bottom: 1px solid #999;
}
.head ul {
  position: absolute;
  margin-top: -15px;
  display: flex;
  text-align: center;
  flex-direction: row;
  margin-left: 70px;
}
.show ul {
  position: absolute;
  margin-top: 100px;
}
.head li span {
  width: 50%;
  display: flex;
  text-align: center;
  // float: left;
  margin-left: 60px;
  margin-top: -20px;
  position: relative;
  color: #000;
  line-height: 1;
  transition: 0.5s all linear;
  cursor: pointer;
}
.head li::before {
  content: '';
  position: absolute;
  top: 2;
  width: 20%;
  left: 50;
  height: 98%;
  border-bottom: 3px solid rgb(255, 255, 255);
  transition: 0.2s all linear;
}

li:hover::before {
  width: -50%;
  margin-left: 11px;
  top: 0;
  left: 50;
  transition-delay: 0.1s;
  border-bottom-color: #ffd430;
  z-index: 1;
}
li:hover ~ li::before {
  left: 50;
}
span{
  font-weight: bold;
}
li:active {
  background: rgb(223, 209, 209);
  color: #fff;
}
.a1 {
  margin-top: -73px;
  margin-left: 100px;
}
.b2 {
  margin-left: 0px;
  margin-top: 15px;
  font-size: 20px;
}
.b3 {
  margin-left: 50px;
  margin-top: -30px;
  color: #999;
}
.b4 {
  font-size: 14px;
  position: absolute;
  margin-top: -19px;
  margin-left: 95px;
  color: #999;
}
.b5 {
  margin-top: 12px;
  border-bottom: 1px solid #999;
}
.f1 {
  margin: 70px;
}
.text1 {
  font-size: 20px;
  margin-left: 45px;
  color: #b6b6b6;
}
</style>
