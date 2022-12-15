// pages/stories/show.js
const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {

  },

  editStory(){
    const id = this.data.story.id
    wx.setStorageSync('id', id)

    wx.switchTab({
      url: '/pages/stories/form',
    })
  },

  deleteStory(){
    const id = this.data.story.id

    wx.showModal({
      title: 'Are you sure?',
      content: 'There is no turning back',
      confirmText: "YES",
      cancelText: "NO",
      complete: (res) => {
        if (res.confirm) {
          // app.globalData.stories.splice(index,1)
          wx.request({
            url: `${app.globalData.host}/${id}`,
            method: 'DELETE',
            success(res) {
              console.log({res})
            }
          })
          wx.switchTab({
            url: '/pages/stories/index',
          })
        }
      }
    })

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {
    const page = this
    console.log('story shoy onLoad options', options)
    const id = options.id

    // if we are using global data
    // const story = app.globalData.stories[index]
    // story['index'] = index
    // this.setData({story})

    // if we are calling the API
    wx.request({
      url: `${app.globalData.host}/${id}`,
      success(res) {
        page.setData({story: res.data.story})
      }
    })


  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage() {

  }
})