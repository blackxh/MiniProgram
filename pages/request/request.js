// pages/request/request.js
import request from '../../service/network'

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 1.原生的方式发送网络请求
    this.get_data_origin()

    // 2.使用封装的request发送网络请求
    request({
      url: 'http://123.207.32.32:8000/api/h8/recommend'
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  },
  get_data_origin() {
    // 1.发送最简单的get请求
    // wx.request({
    //   url: 'http://123.207.32.32:8000/api/h8/recommend',
    //   success: function(res) {
    //     console.log(res);
    //   }
    // })

    // 2.get请求：并且携带参数
    // wx.request({
    //   url: 'http://123.207.32.32:8000/api/h8/home/data',
    //   data: {
    //     type: 'sell',
    //     page: 1
    //   },
    //   success: function(res) {
    //     console.log(res);
    //   }
    // })

    // 3.post请求，并且携带参数
    wx.request({
      url: 'http://httpbin.org/post',
      method: 'post',
      data: {
        name: 'xx',
        age: 18
      },
      success: function(res) {
        console.log(res)
      },
      fail: function(err) {
        console.log(err)
      }
    })
  },
  onShareAppMessage: function(options) {
    return {
      title: 'hello word',
      path: '/pages/about/about.js',
      imageUrl: 'http://s3.mogucdn.com/mlcdn/c45406/170915_0a93207ci28kelh617k4hh62l65lb_640x960.jpg'
    }
  }
})