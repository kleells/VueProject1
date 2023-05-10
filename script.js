// 1
const YourFirstVueApp = {
  data() {
    return {
      text: "This is my first Vue application."
    }
  }
}

Vue.createApp(YourFirstVueApp).mount("#firstVueApp")

// 2
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

// 3
const ReactiveBehavior = {
  data() {
    return {
      onHoverText: "Reactive message"
    }
  }
}

Vue.createApp(ReactiveBehavior).mount("#to-hover-element")

// 4
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

// 5
const UserInput = {
  data() {
    return {
      inputText: "Type here"
    }
  }
}

Vue.createApp(UserInput).mount("#inputForm")

// 6
const ConditionalVisibility = {
  data() {
    return {
      visible: true
    }
  }
}

Vue.createApp(ConditionalVisibility).mount("#conditionalVisibility")

// 7
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

// 8
const InterpolateApp   = {
  data() {
    return {
      html: "<span style='color: white'>This text is in white</span>"
    }
  }
}

Vue.createApp(InterpolateApp).mount("#app")

// 9 
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

// 10
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


// 11
app.component("submitButton", {
  created() {
    this.debounceCLick = _.debounce(this.click, 300)
  },
  unmounted() {
    this.debounceClick.cancel()
  }
})

// 12
Vue.createApp({}).mount("#loop-range")

// 13
Vue.createApp({
  data() {
    return {
      items: [
        { content: "Item here"},
        { content: "Item there"}
      ]
    }
  }
}).mount("#to-loop-list")

// 14
Vue.createApp({
  data() {
    return {
      greetings: [
        { content: "Hello"},
        { content: "Hi"},
        { content: "Hey"}
      ]
    }
  }
}).mount("#greeting-array")

// 15
Vue.createApp({
  data() {
    return {
      sampleObject:{
        title: "My Title",
        author: "Author Name",
        length: "Book Length",
        genre: "Book Genre"
      }
    }
  }
}).mount("#object-values")

// 16
Vue.createApp({
  data() {
    return {
      dogObject:{
        breed: "Dachshund/Beagle",
        ageInYears: 0.75,
        owner: "Kallie",
      }
    }
  }
}).mount("#dog-list")

// 17
Vue.createApp({
  data() {
    return {
      catObject:{
        breed: "Tabby",
        ageInYears: 13,
        hungry: true
      }
    }
  }
}).mount("#cat-list")

// 18
Vue.createApp({
  data() {
    return {
      inputText: "",
      textAreaContent: "",
      selected: "Search",
      options: [
        { text: "From a search engine", value: "Search"},
        { text: "From a friend", value: "Friend"},
        { text: "Other", value: "Other"}
      ],
      checkedOptions: [],
      radioButtonPicked: ""
    }
  }
}).mount("#form")