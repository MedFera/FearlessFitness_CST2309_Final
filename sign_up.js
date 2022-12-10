function required(){
    var first;
    var last;
    var email;
    var phone;
    var state;
    var agree;


    var img1 = document.createElement("img");
    img1.src = 'images/dancing_shark_gif.gif';

    first = document.form1.first_name.value;
    last = document.form1.last_name.value;
    email = document.form1.email.value;
    phone = document.form1.phone.value;
    state = document.form1.state.value;
    agree = document.form1.agreement.value;
    

    if(state == " ") {
        alert("You have not selected a Gym Location!");
    }
    else {
        alert("Thank you " + first + " " + last +
        " for your interest in our gym. Our next available" +
        " agent will contact you shortly.");
        document.getElementById("Submitted").appendChild(img1);
    }


}