// const YourFirstVueApp = {
//   data() {
//     return {
//       text: "This is my first Vue application."
//     }
//   }
// }

// Vue.createApp(YourFirstVueApp).mount("#firstVueApp")

// const Timer = {
//   data() {
//     return {
//       timer: 0
//     }
//   },
//   mounted() {
//     setInterval(() => {
//       this.timer++
//     }, 1000)
//   }
// }

// Vue.createApp(Timer).mount("#timer")

const ReactiveBehavior = {
  data() {
    return {
      onHoverText: "Reactive message"
    }
  }
}
Vue.createApp(ReactiveBehavior).mount("#to-hover-element")
