<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal">
        <header class="modal-header">
          <slot name="header">
            <img src="@/assets/images/drawable-xhdpi/zan.png" width="250px" />
          </slot>
        </header>
        <section class="modal-body">
          <slot name="body">
            <p class="btn-close" @click="close">
              "bLue"共获得
              <span>0</span>个赞！
            </p>
          </slot>
        </section>
        <footer class="modal_footer">
          <slot name="footer">
            <button type="button" class="btn-green" @click="close">确认</button>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'modal',
  data() {
    return {
      active: 0
    }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    close() {
      this.$emit('close')
    }
  },
  computed: {}
}
</script>

<style scoped lang="scss">
.modal-fade-enter,
.model-fade-leave-active {
  opacity: 0;
}
.modal-fade-enter-active,
.model-fade-leave-active {
  transition: opacity.5s ease;
}

.model-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  background: #ffffff;
  box-shadow: 2px 2px 2px 2px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}
.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}
.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
  justify-content: space-between;
}
.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}
.modal-body {
  position: relative;
  padding: 20px 20px;
}
.btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}
.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}
</style>
