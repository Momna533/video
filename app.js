/*const btn = document.querySelector(".btn");
const video = document.querySelector(".video_container");


btn.addEventListener("click", ()=>{
    if(!btn.classList.contains("slide")){
        btn.classList.add("slide")
        video.pause();
    }else{
        btn.classList.remove("slide");
        video.play();
    }
})
const preloader = document.querySelector(".preloader");
window.addEventListener("load",()=>{
    preloader.classList.add("hide_preloader")
})*/
/*
const btn = document.querySelector(".btn");
const video = document.querySelector(".video_container");


btn.addEventListener("click", ()=>{
    if(!btn.classList.contains("slide")){
        btn.classList.add("slide")
        video.pause();
    }else{
        btn.classList.remove("slide");
        video.play();
    }
})
const preloader = document.querySelector(".preloader");
window.addEventListener("load",()=>{
    preloader.classList.add("hide_preloader")
})*/

const btn = document.querySelector(".btn");
const video = document.querySelector(".video_container");

btn.addEventListener("click",()=>{
    if(!btn.classList.contains("slide")){
        btn.classList.add('slide');
        video.pause();
    }else{
        btn.classList.remove("slide");
        video.play();
    }
})
const preloader = document.querySelector(".preloader");
window.addEventListener("load", ()=>{
    preloader.classList.add("hide_preloader")
})