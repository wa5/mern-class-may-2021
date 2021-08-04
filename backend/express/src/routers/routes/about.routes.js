
var express=require('express');
let router=express.Router();
const {aboutGet,aboutPost,aboutPut,aboutDelete}=require('../../controllers/about.Ctrl')



router.route('/')
.get(aboutGet)
.post( aboutPost)
.delete(aboutPut )
.put(aboutDelete);



router.route('/about')
.get((req, res) => {
    res.send("datat")
})

.post( (req, res) => {
    res.send("datat")
})

.delete( (req, res) => {
    res.send("datat")
})


.put((req, res) => {
    res.send("datat")
});
module.exports=router;