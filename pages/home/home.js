// pages/home/home.js
Page({
  data: {
    name: 'xiehuan',
    age: 18,
    students: [
      { id: 110, name: 'kobe', age: 30 },
      { id: 110, name: 'james', age: 28 },
      { id: 110, name: 'xiehuan', age: 18 },
      { id: 110, name: 'wbq', age: 20 }
    ],
    counter: 0,
    imagePath: '',
    list: []
  },
  handleBtnClick() {
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleSubtraction() {
    this.setData({
      counter: this.data.counter - 1
    })
  },
  handleGetUserInfo(event) {
    console.log(event)
  },
  handleChooseAlbum() {
    wx.chooseImage({
      success: (res) => {
        const path = res.tempFilePaths[0]
        this.setData({
          imagePath: path
        })
      },
    })
  },
  onLoad() {
    wx.request({
      url: 'http://123.207.32.32:8000/recommend',
      success: (res) => {
        // console.log(res)
        const data = res.data.data.list
        this.setData({
          list: data
        })
      }
    })
  },
  imageLoad() {
    console.log('图片加载完成');
    
  }
})