
const main_heading = document.getElementsByClassName("main_heading")[0];
const main_form = document.getElementsByClassName("main_form")[0];
const submit_btn = document.getElementsByClassName("submitbtn")[0];
const btn = document.getElementsByClassName('donation_btn')[0];
const head = document.querySelector("header")[0]
const displaying = document.getElementsByClassName("hidden")[0];
btn.addEventListener("click",function () {
    main_heading.classList.add("img-blur");
           displaying.classList.remove("hidden");
           head.style.backgroundColor = "black";
         
});
submit_btn.addEventListener("click",function(){
    
    main_form.classList.add("hidden");
    window.alert("Message Sent Successfully");
    main_heading.classList.remove("img-blur");
     
        
})