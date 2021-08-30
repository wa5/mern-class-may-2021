const mobileGet=(req, res) => {
    console.log(req.query.mname);
    res.render('mobiles', { mname: req.query.mname })
}
const mobilePost=(req, res) => {
    console.log(req.body.mname);
    res.render('mobiles', { mname: req.body.mname,
        email:req.body.email })
}
const mobilePut=(req, res) => {
    res.send("datat")
}
const mobileDelete=(req, res) => {
    res.send("datat")
}

module.exports={mobileGet,mobilePost}
