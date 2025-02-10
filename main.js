
let container=document.querySelector(".content .card ")

let containerVideo=document.querySelector(".contentVideo .card")

 let close=document.querySelector (".card")




let contant=[
    {
        img:"imgs/on (1).jpeg"
    },
    {
        img:"imgs/on (2).jpeg"
    },
  
    {
        img:"imgs/on (4).jpeg"
    },
    {
        img:"imgs/on (5).jpeg"
    },
    {
        img:"imgs/on (6).jpeg"
    },
    {
        img:"imgs/on (7).jpeg"
    },
    {
        img:"imgs/on (8).jpeg"
    },
    {
        img:"imgs/on (9).jpeg"
    },
    {
        img:"imgs/on (10).jpeg"
    },
    {
        img:"imgs/on (11).jpg"
    },
    {
        img:"imgs/on (12).jpg"
    },
    {
        img:"imgs/on (13).jpg"
    },
    {
        img:"imgs/on (14).jpg"
    },
    {
        img:"imgs/on (15).jpg"
    },
    {
        img:"imgs/on (16).jpg"
    },
    {
        img:"imgs/on (17).jpg"
    },
    {
        img:"imgs/on (18).jpg"
    },
    {
        img:"imgs/on (19).jpg"
    },
    {
        img:"imgs/on (20).jpg"
    },
    {
        img:"imgs/on (21).jpg"
    },
    {
        img:"imgs/on (22).jpg"
    },
    {
        img:"imgs/on (23).jpg"
    },
    {
        img:"imgs/on (24).jpg"
    },
    {
        img:"imgs/on (25).jpg"
    },
    {
        img:"imgs/on (26).jpg"
    },
    {
        img:"imgs/on (27).jpg"
    },
    {
        img:"imgs/on (28).jpg"
    },
    {
        img:"imgs/on (29).jpg"
    },
    {
        img:"imgs/on (30).jpg"
    },
    {
        img:"imgs/on (31).jpg"
    },
    {
        img:"imgs/on (32).jpg"
    },
    {
        img:"imgs/on (33).jpg"
    },
    {
        img:"imgs/on (34).jpg"
    },
    // {
    //     img:"imgs/on (35).jpg"
    // },
    // {
    //     img:"imgs/on (36).jpg"
    // },
 

];

  function show(){

       var item=""
    
      for(var i=0; i<contant.length;i++){
           item+=`
           <div class="card_img">
         <img src="${contant[i].img}" alt="" class="photo" onclick="replacePhoto('${contant[i].img}')">
          </div>
        
           `;
        }
        container.innerHTML=item;
     
 }
      
       
 function replacePhoto(pramiter){
    var img=document.querySelector ('.photo');
           img.src=pramiter;
            close.style.display='block'
      }



     show();
    
    



let prodectVideo=[
    {
    
    video:"imgs/video (15).mp4"
        
    },
    {
   video:"imgs/video (2).mp4"
        
    },
    {
    video:"imgs/video (13).mp4"
        
    },
    {
     video:"imgs/video (4).mp4"
        
    },
    {
    video:"imgs/video (5).mp4"
    },
    {
    
         video:"imgs/video (6).mp4"
    },
    {
     video:"imgs/video (7).mp4"
        
    },
    {
    video:"imgs/video (8).mp4"
        
    },
    {
        video:"imgs/video (9).mp4"  
    }
   
]

function showVideio(){
    var video='';
    for(var i =0; i<prodectVideo.length; i++){

       video+= `
          <div class="card_video">
             <video src="${prodectVideo[i].video}" controls loop  ></video> 
        </div>
        
        `

    }
containerVideo.innerHTML=video



}
showVideio()


 function closePhoto(){
 
     close.style.display='none'
 
 }


