const Post = require('../models/Post')

// exporting getIndex
module.exports = {
    getIndex: (req,res)=>{
      // telling response to renders index ejs
        res.render('login.ejs')
    },
    getPond: async (req, res) => {
      try {
          // const posts =  await Post.find({ user: req.params.id })
          res.render('pond.ejs', { id: req.params.id })
      } catch (err) {
          console.error(err)
      }
  },
  getLake: async (req, res) => {
    try {
      // return user profile
      //render login
    }
    catch (err) {
      console.error(err)
    }
  }
}
