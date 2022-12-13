// pages/stories/index.js
const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    name: "Michael",
    fontSize: 46,
    fontColor: "yellow",
    globalMessage: app.globalData.message,
  },

  goToStory(e) {
    console.log('this is the event of goToStory', e)
    //  from data- in the wxml, the items will all be passed ass lower case.
    //  see data-storyIndex="{{index}}" ---> is passed as storyindex

    wx.navigateTo({
      url: `/pages/stories/show?index=${e.currentTarget.dataset.storyindex}`,
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {

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
    this.setData({stories: app.globalData.stories})

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