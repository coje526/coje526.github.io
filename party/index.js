(function () {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('JFFuE1su-rEaMkj8w');
})();
function getPrice(q) {
    let shop = 100
    return shop * q
}
function sendEmail() {
    let templateParams = {
        from_name: "Jenny",
        to_email: $('#myText').val(),
        message: "Hi!",
        price: getPrice($('#q').val())
    };

    console.log(templateParams)

    emailjs.send('service_90ageyj', 'template_f6pbzvg', templateParams)
        .then(function (response) { 
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            console.log('FAILED...', error);
        });
}

$('#button-addon2').on('click',function(){
    sendEmail()
})