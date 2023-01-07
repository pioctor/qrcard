// import jsQR from "jsqr";
// const jsQR = require("jsqr");

function qrParse(video){
    const canvas = new OffscreenCanvas(240,320)
    const render = canvas.getContext("2d")
    return new Promise((res)=>{
        const loop = setInterval(()=>{
            render.drawImage(video, 0, 0, canvas.width, canvas.height)
            const img = render.getImageData(0, 0, canvas.width, canvas.height)
            const result = jsQr(img.data, img.width, img.height)
            if(result){
                clearInterval(loop)
                return res(result.data)
            } 
        })
    })
}


const log = document.getElementById("log")
const video = document.getElementById("video")
const result = document.getElementById("result")
log.value = "init"

(async()=>{
    video.srcObject = await navigator.mediaDevices.getUserMedia({
        audio:false,
        video: {
            facingMode:"environment"
        }
    })
    result.value = await qrParse(video)
})()