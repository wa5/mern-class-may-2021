var nodemailer=require('nodemailer');

var tranporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'waseemahmed116@gmail.com',
        pass:'jhdshjds'
    }
});

var mailOptions={
    from:'waseemahmed116@gmail.com',
    to:'sonusabu229@gmail.com',
    subject:'sonu which icecream u want',
    text:'hi sonu when is ur mrigr pls do not forget to call us to ur mirrage  '
};
tranporter.sendMail(mailOptions,(error,info)=>{

    if(error){
        console.log(error);
    }else{
        console.log("happy happy send the mail");
    }
})