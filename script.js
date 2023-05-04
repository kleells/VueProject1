const YourFirstVueApp = {
  data() {
    return {
      text: "This is my first Vue application."
    }
  }
}

Vue.createApp(YourFirstVueApp).mount("#firstVueApp")

const Timer = {
  data() {
    return {
      timer: 0
    }
  },
  mounted() {
    setInterval(() => {
      this.timer++
    }, 1000)
  }
}

Vue.createApp(Timer).mount("#timer")

const ReactiveBehavior = {
  data() {
    return {
      onHoverText: "Reactive message"
    }
  }
}

Vue.createApp(ReactiveBehavior).mount("#to-hover-element")

const UserInteraction = {
  data() {
    return {
      text: "racecars"
    }
  },
  methods: {
    checkPalindrome() {
      this.text = this.text.split("").reverse().join("")
    }
  }
}

Vue.createApp(UserInteraction).mount("#textToReverse")

const UserInput = {
  data() {
    return {
      inputText: "Type here"
    }
  }
}

Vue.createApp(UserInput).mount("#inputForm")

const ConditionalVisibility = {
  data() {
    return {
      visible: true
    }
  }
}

Vue.createApp(ConditionalVisibility).mount("#conditionalVisibility")

const List   = {
  data() {
    return {
      listItems: [
        { item: "Study Vue course" },
        { item: "Learn React Native" },
        { item: "Study Angular" }
      ]
    }
  }
}

Vue.createApp(List).mount("#list")

const InterpolateApp   = {
  data() {
    return {
      html: "<span style='color: white'>This text is in white</span>"
    }
  }
}

Vue.createApp(InterpolateApp).mount("#app")

const intApp = Vue.createApp({
  data() {
    return {
      value: 0
    }
  }
})

const appInstance = intApp.mount("#app1")
console.log(appInstance.$data.value)

appInstance.value = 10000
console.log(appInstance.$data.value)

appInstance.$data.value = 5555
console.log(appInstance.value)


const app = Vue.createApp({
  data() {
    return {
      sampleString: "Hello "
    }
  },
  methods: {
    addToString() {
      this.sampleString += "Hello "
    }
  }
})

const componentInstance = app.mount("#app2")

console.log(componentInstance.sampleString)

componentInstance.addToString()
componentInstance.addToString()
componentInstance.addToString()
componentInstance.addToString()

console.log(componentInstance.sampleString)

app.component("submitButton", {
  created() {
    this.debounceCLick = _.debounce(this.click, 300)
  },
  unmounted() {
    this.debounceClick.cancel()
  }
})
