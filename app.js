//Color code generator
const randomCode=()=>{
    const codes="123456789abcdef";
    let colorCode = "";
    for (let i = 0; i < 6; i++) {
        const code = Math.floor(Math.random()*15)
        colorCode+=codes.substring(code,code+1);
    }
    return colorCode;
}
//Adding click event
document.getElementById("btn").addEventListener("click",()=>{
    const newColor = randomCode();
    document.getElementById("color_code").innerText="#"+newColor;
    document.getElementById("body").style.backgroundColor="#"+newColor;
})