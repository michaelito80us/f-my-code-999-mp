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
    // console.log('form submit', e)
    // for a form the target is:  e.detail.value

    const { name, text } = e.detail.value

    let story = { name , text }
    
    // if its editing a story, just modify the story in globalData
    if (this.data.id) {
      const id = this.data.id
      // const index = this.data.index
      // app.globalData.stories[index] = {
      //   name: name,
      //   text: text
      // }

      wx.request({
        url: `${app.globalData.host}/${id}`,
        method: 'PUT',
        data: { story },
        success(res) {
          console.log({res})
        }
      })
    } else {
      // if its a new story: adding stories to globalData at index 0
      // app.globalData.stories.splice(0,0,{name, text})
      wx.request({
        url: `${app.globalData.host}`,
        method: 'POST',
        data: { story },
        success(res) {
          console.log({res})
        }
      })

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
    const page = this
    if (wx.getStorageSync('id')) {

      const id = wx.getStorageSync('id')
      // console.log({index})
      // const story = app.globalData.stories[index]
      // this.setData({
      //   index: index,
      //   addNewStory: false,
      //   formName: story.name,
      //   formContent: story.text
      // })

      wx.request({
        url: `${app.globalData.host}/${id}`,
        success(res) {
          // console.log({res})
          page.setData({
            id: res.data.story.id,
            addNewStory: false,
            formName: res.data.story.name,
            formContent: res.data.story.text
          })
        }
      })
    }
  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {
    this.setData({formName: "", formContent: "", addNewStory: true})
    wx.removeStorageSync('id')
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