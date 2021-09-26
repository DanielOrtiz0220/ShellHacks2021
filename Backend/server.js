require('dotenv').config(); 

const nodemailer = require('nodemailer');


let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});



let mailOption = {
    from: 'latinxnewsletters@gmail.com',
    to: 'jbaez061@fiu.edu',
    subject: 'LatinX Newsletter,',
    html: `<h1>This is Albert Baez a famous LatinX physcist & inventor!</h1>
           <p><a href="https://freeimage.host/i/RZXXIe"><img src="https://iili.io/RZXXIe.md.jpg" alt="RZXXIe.md.jpg" border="0"></a></p>
           <p>Mr.Baez was born in Puebla, Mexico and moved into the heart of New York Brooklyn.
           He was later called Dr.Baez for his doctorate in physics and bacherlors in math.
           Dr.Baez is the inventor of X-ray reflection microscope, which help us anaylze living
           cells and figuring out what is wrong with them. This invention is used everyday to help
           save peoples lives all the time.</p>
           <p>If you want to know more about this go visit the website www.latinX.com for more knowledge.</p>`
};



transporter.sendMail(mailOption, function(err, data) {
    if(err){
        console.log('Error Occurs: ', err);
    } else {
        console.log('Email sent!!!!')
    }
});