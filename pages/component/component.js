// pages/component/component.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counter: 0
  },
  handleIncrement() {
    // console.log(1111111111);
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleTabClick(event) {
    // console.log(event);
    
  },
  handleIncrementCpn() {
    // 1.获取组件对象
    const my_sel = this.selectComponent('.sel-class')
    // console.log(my_sel);

    // 2.通过setData修改组件中的数据（不合理）
    // my_sel.setData({
    //   counter: my_sel.data.counter + 10
    // })

    // 3.通过方法对数据进行修改
    my_sel.incrementCounter(20)
  }
 
})