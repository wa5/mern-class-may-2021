
var express=require('express');
let router=express.Router();

router.route('/')
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



router.route('/home')
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