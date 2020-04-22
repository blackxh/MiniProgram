// components/my-event/my-event.js
Component({
  methods: {
    handleIncrement() {
      // console.log(1111111111);
      this.triggerEvent('increment', {}, {})
    }
  }
})