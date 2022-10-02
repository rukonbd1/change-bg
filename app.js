//Color code generator

const randomCode=(code)=>{
    if(code=="hex"){
        console.log(code)
        const codes="123456789abcdef";
        let colorCode = "";
        for (let i = 0; i < 6; i++) {
            const code = Math.ceil(Math.random()*15)
            colorCode+=codes.substring(code,code+1);
        }
        return colorCode;
    }
    else if(code =="rgb"){
        console.log(code)
        let arr1=[]
        for (let i = 0; i < 3; i++) {
            const code = Math.ceil(Math.random()*255);
            arr1.push(code);
            
        }
       return arr1;
    }
    else{
        let arr2=[];
        const code = Math.ceil(Math.random()*360);
        arr2.push(code);
        for (let i = 0; i < 2; i++) {
            const code = Math.ceil(Math.random()*100);
            arr2.push(code);
            
        }
        return arr2;
    }    
}

//Adding change event

let option = document.getElementById('option');
let value="hex";
option.addEventListener('change',(e)=>{
    value=e.target.value;
})

// Adding clicking event

document.getElementById("btn").addEventListener("click",()=>{
    let colorCode=document.getElementById("color_code");
    const newColor = randomCode(value);

    if(value=="hex"){
        colorCode.innerText="#"+newColor;
        document.body.style.backgroundColor="#"+newColor;
    }

    else if(value=="rgb"){
        colorCode.innerText="rgb("+newColor[0]+","+newColor[1]+","+newColor[2]+")";
        document.body.style.backgroundColor="rgb("+newColor[0]+","+newColor[1]+","+newColor[2]+")"; 
    }

    else{
        colorCode.innerText="hsl("+newColor[0]+","+newColor[1]+"%,"+newColor[2]+"%)";
        document.body.style.backgroundColor="hsl("+newColor[0]+","+newColor[1]+"%,"+newColor[2]+"%)"; 
    }
})


