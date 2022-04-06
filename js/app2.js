document.addEventListener("DOMContentLoaded", () => {
    console.log(200);
    let mail = localStorage.getItem("log")
    let config = document.querySelector(".mail")
    let config_2 = document.querySelector(".acc")
    let config_3 = document.querySelector(".acc2")
    //config.textContent = `${mail}`
    //config_2.textContent = `votre compte est` 
    //config_3.innerText = `george@yahoo.com`
    config_3.innerText += `${mail}`
});
