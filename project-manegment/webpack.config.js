const path=require('path')
const webpack=require('webpack')


/**
 * *place holders
 * ![hash]
 * ![name]
 * ![chunkhash]
 * ![id]
 * ![content]
 */

/**
 * *lazy loding
 *! public path
 */

module.exports={
    // mode:"production",
    mode:"development",
   entry:'./src/engine.js',
output:{
    path:path.resolve(__dirname,'build'),
    
    filename:'js/main.js',
     publicPath:'/assets/'
     },

devServer:{
    port:1234,
    contentBase:path.resolve(__dirname,'dist'),
    hot:true
},

plugins:[
    new webpack.HotModuleReplacementPlugin()
]



}