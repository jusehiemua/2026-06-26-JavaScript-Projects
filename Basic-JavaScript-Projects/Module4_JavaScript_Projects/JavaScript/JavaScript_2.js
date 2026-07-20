/*
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const message = document.getElementById("formMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const fullName = document.getElementById("fullName").value.trim();
        const email = document.getElementById("email").value.trim();

        if (fullName === "" || email === "") {
            message.textContent = "Please enter your full name and email address before submitting.";
        } else {
            message.textContent = "Thank you, " + fullName + "! We have received your message.";
            form.reset();
        }
    });
});
*/

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const message = document.getElementById("formMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const fullName = document.getElementById("fullName").value.trim();
        const email = document.getElementById("email").value.trim();
        const telPhone = document.getElementById("telPhone").value.trim();
        const mailingAddress = document.getElementById("mailingAddress").value.trim();
        const message1 = document.getElementById("message").value.trim();
        /*    
            alert("the fullName msg = " + fullName);
            alert("the email msg = " + email);
            alert("the telPhone msg = " + telPhone);
            alert("the mailingAddress msg = " + mailingAddress);
            alert("the message msg = " + message1);
         */
        /*   
            if (fullName === "" || email === "" ||
                telPhone === "" || mailingAddress === "" ||
                message === "") {*/
        //message.textContent = "Please enter your full name and email address before submitting.";
        if (fullName === "") {
            document.getElementById('fullName').style.border = '2px solid red';
            document.getElementById('fullName').addEventListener('focus', function () {
                this.style.borderColor = '';
            });
        }
        if (email === "") {
            document.getElementById('email').style.border = '2px solid red';
            document.getElementById('email').addEventListener('focus', function () {
                this.style.borderColor = '';
            });
        }
        if (telPhone === "") {
            document.getElementById('telPhone').style.border = '2px solid red';
            document.getElementById('telPhone').addEventListener('focus', function () {
                this.style.borderColor = '';
            });
        }
        if (mailingAddress === "") {
            document.getElementById('mailingAddress').style.border = '2px solid red';
            document.getElementById('mailingAddress').addEventListener('focus', function () {
                this.style.borderColor = '';
            });
        }
        if (message1 === "") {
            document.getElementById('message').style.border = '2px solid red';
            document.getElementById('message').addEventListener('focus', function () {
                this.style.borderColor = '';
            });
        }

        /* } else */


        if (fullName === "" || email === "" ||
            telPhone === "" || mailingAddress === "" ||
            message1 === "") {
            //message.textContent = "Please enter your full name and email address before submitting.";
            message.textContent = "Please fill in the field(s) with red borders before submitting.";
        }
        else {//all fields are filled so you are cleared to submit
            //alert("I am here1");
            message.textContent = "Thank you, " + fullName + "! We have received your message.";
            //alert("I am here2");
            //alert(document.ElementsById("formMessage"));
            form.reset();
        }
    });

    form.addEventListener("reset", function () {

        document.getElementById("fullName").style.border = "";
        document.getElementById("email").style.border = "";
        document.getElementById("telPhone").style.border = "";
        document.getElementById("mailingAddress").style.border = "";
        document.getElementById("message").style.border = "";

        // Clear the confirmation message
        formMessage.textContent = "";

    });




});