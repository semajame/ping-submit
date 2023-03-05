
const email = document.getElementById("email");
const send = document.getElementById("button");
const error = document.getElementById("error");

// send.addEventListener('click', () => {

//     if (email.value !== email.value.includes("@gmail.com")){
//         email.style.border = "1px solid var(--light-red)";
//         error.style.display = "block";
//     } else if (email.value === email.value.includes("@gmail.com")){
//         email.style.border = "1px solid gray";
//         email.style.outline = null;
//         error.style.display = "none";

//     }
// })

email.addEventListener('input', () => {
    if (email.value.length < 1){
        email.style.border = "1px solid var(--light-red)";
        error.style.display = "block";
    } else {
        email.style.border = "1px solid gray";
        email.style.outline = null;
        error.style.display = "none";
    }
})