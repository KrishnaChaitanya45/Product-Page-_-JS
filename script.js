console.log("Hello World");
const container = document.getElementById("cart_menu");
const icon = document.getElementById("cart_icon");
const imagebox = document.getElementById("image_box");
const imagebox1 = document.getElementById("imagebox1");
const img1 = document.getElementById("img1");
const image1 = document.getElementById("image1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const minus =document.getElementById("minus");
const add =document.getElementById("add");
const cartvalue =document.getElementById("cart_value");
const carticon =document.getElementById("cart_number");
const remove =document.querySelector("#cancel");
const previous =document.querySelector("#prev");
const next =document.querySelector("#next");



    icon.addEventListener("click",()=>{
    container.style.display = "flex";
    console.log("clicked")
        });
    icon.addEventListener("dblclick",()=>{
        container.style.display = "none";
    });
    var value = 0;
    img1.addEventListener("click" , ()=>{
            img1.style.border = "4px solid red"
            img2.style.removeProperty("border")
            img3.style.removeProperty("border")
            img4.style.removeProperty("border")
            imagebox.src = "./images/image-product-1.jpg";
            value = 1
            
        })
        img2.addEventListener("click" , ()=>{
            
            imagebox.src = "./images/image-product-2.jpg"
            image1.src = "./images/image-product-2.jpg"
            img2.style.border = "4px solid red"
            img1.style.removeProperty("border")
            img3.style.removeProperty("border")
            img4.style.removeProperty("border")
             value = 2
        })
        img3.addEventListener("click" , ()=>{
            
            img3.style.border = "4px solid red"
            img1.style.removeProperty("border")
            img2.style.removeProperty("border")
            img4.style.removeProperty("border")
            imagebox.src = "./images/image-product-3.jpg"
            image1.src = "./images/image-product-3.jpg"
            value = 3
        })
        img4.addEventListener("click" , ()=>{
            
            imagebox.src = "./images/image-product-4.jpg"
            image1.src = "./images/image-product-4.jpg"
            img4.style.border = "4px solid red"
            img1.style.removeProperty("border")
            img2.style.removeProperty("border")
            img3.style.removeProperty("border");
            
             value = 4
        })
        minus.addEventListener("click",()=>{
           
            if(number <= 0){
                console.log("its zero")
                carticon.innerText = `(0)`;
            }
            else{
                number--
               
                carticon.innerText = `(${number})`;
                cartvalue.innerText = number;

            }
            
           


        })
       
         
        
        var number = 0;
        add.addEventListener("click",()=>{
       number++


     cartvalue.innerText = number;
     carticon.innerText = `(${number})`;
   
 })
 remove.addEventListener("click",()=>{
    imagebox1.style.display = "none"
 })

 imagebox.addEventListener("click", ()=>{

  
    imagebox1.style.display = "flex"

 })
 imagebox1.addEventListener("dblclick", ()=>{
    //  imagebox1.src = imagebox.src
     imagebox1.style.display = "none"

 })
 next.addEventListener('click' ,  ()=>{
     if(value >= 4){
        imagebox1.style.display = "none"
     
     }else{
        console.log(image1.src)
        value++
        image1.src = `http://localhost:3000/images/image-product-${value}.jpg`

     }
     

 })
 previous.addEventListener('click' ,  ()=>{
    
     if(value <= 1){
         imagebox1.style.display = "none"

     }
     else{
         value -- 

         image1.src = `http://localhost:3000/images/image-product-${value}.jpg`
     }
 })

        
                
            
            

        
     

