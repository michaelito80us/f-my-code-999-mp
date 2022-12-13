// pages/stories/show.js
const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {

  },

  editStory(){
    const index = this.data.story.index
    wx.setStorageSync('index', index)

    wx.switchTab({
      url: '/pages/stories/form',
    })
  },

  deleteStory(){
    const index = this.data.story.index

    wx.showModal({
      title: 'Are you sure?',
      content: 'There is no turning back',
      confirmText: "YES",
      cancelText: "NO",
      complete: (res) => {
        if (res.confirm) {
          app.globalData.stories.splice(index,1)
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
    console.log('story shoy onLoad options', options)
    const index = options.index

    // if we are using global data
    const story = app.globalData.stories[index]
    story['index'] = index
    this.setData({story})

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