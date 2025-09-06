
console.log("hello")

const url="https://openapi.programming-hero.com/api/levels/all"
//console.log(url)

 
   const loaddata=()=>{ fetch(url).then(res=>res.json())
 .then(datas=> allLevels(datas.data))
   }

 const allLevels =(posts)=>{
   // console.log(posts)
    // 1.get the container
    const container = document.getElementById("lesseon-container")
    container.innerHTML =""
    // 2.get every lesson
    posts.forEach(post => {
        // 3.create element
        let btndiv = document.createElement("div")
        btndiv.innerHTML =`
         <button onclick="loadword(${post.level_no})" class="btn btn-outline 
          bg-blue-700 text-white lesson-btn" id="lesson-btn${post.level_no}"> <i class="fa-solid fa-book"></i> lesson-${post.level_no}</button> `
    // 4.append div
    container.appendChild(btndiv)
    });
        
 }

 const loadword =(id)=>{
    const url =`https://openapi.programming-hero.com/api/level/${id}`
    fetch(url).then(res =>res.json()).then((datas) => {
      removeclass()
      const clicked_btn = document.getElementById(`lesson-btn${id}`);
      clicked_btn.classList.add("active")
      allword(datas.data);
    })
    }

    const removeclass= ()=>{
      const btnclass = document.querySelectorAll(".lesson-btn")
     // console.log(btnclass)
      btnclass.forEach((btn)=>btn.classList.remove("active"));
    }
    
 

 const allword =(words)=>{
const cartcon = document.getElementById("cart-container")
    cartcon.innerHTML =""

    if(words.length == 0){
        cartcon.innerHTML =`  <div class="col-span-full">
            <img src="assets/alert-error.png" alt="" class="mx-auto">
            <p class="text-[10px] text-gray-400 font-bangla">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
            <h1 class="text-2xl py-3 font-bangla">নেক্সট Lesson এ যান</h1>
        
           </div>`
    }
    // 2.get every lesson
    words.forEach(word => {
        // 3.create element
        let cart = document.createElement("div")
        cart.innerHTML =`
        <div class="bg-white p-7 text-center rounded font-bold">
          <h1 class="text-xl">${word.word ? word.word : "Not found"} </h1>
         <p class="text-[16px] py-3 font-semibold">Meaning /Pronounciation</p>
         <h1 class="text-xl font-bangla font-semibold">"${word.meaning ? word.meaning : "Not found"}"</h1>

         <div class="flex justify-between items-center mt-10">

         <button onclick= "my_modal_5.showModal()" class="p-2 bg-[#ecf2fa] rounded hover:bg-[#ecf2fa80]"><i class="fa-solid fa-circle-info"></i></button>
         <button class="p-2 bg-[#ecf2fa] rounded hover:bg-[#ecf2fa80]"><i class="fa-solid fa-volume-high"></i></button>
        </div>
     </div>
 `
    // 4.append div
    cartcon.appendChild(cart)
    });
        

 }




 
 loaddata()
