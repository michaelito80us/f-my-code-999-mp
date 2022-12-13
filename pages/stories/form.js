// pages/stories/form.js
const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    formName: "",
    formContent: "",
    addNewStory: true
  },

  submitStory(e){
    console.log('form submit', e)
    // for a form the target is:  e.detail.value

    const { name, text } = e.detail.value
    
    // if its editing a story, just modify the story in globalData
    if (this.data.index) {
      const index = this.data.index
      app.globalData.stories[index] = {
        name: name,
        text: text
      }
    } else {
      // if its a new story: adding stories to globalData at index 0
      app.globalData.stories.splice(0,0,{name, text})
    }


    // got back to a previous page
    wx.switchTab({
      url: '/pages/stories/index'
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
    if (wx.getStorageSync('index')) {

      const index = wx.getStorageSync('index')
      console.log({index})
      const story = app.globalData.stories[index]
      this.setData({
        index: index,
        addNewStory: false,
        formName: story.name,
        formContent: story.text
      })
    }
  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {
    this.setData({formName: "", formContent: "", addNewStory: true})
    wx.removeStorageSync('index')
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