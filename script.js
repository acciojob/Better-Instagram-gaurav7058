//your code here


let parent=document.querySelector("#parent");
let count=0;
parent.id=`image-${count++}`;

parent.addEventListener("dragstart",(e)=>{
	parent.style.opactity=0.5;
	e.transferData.setData("image",image.id);
})
parent.addEventListener("dragend",()=>{
	parent.style.opactity=1;
})
let arr=["dragover","dragenter","drop"];

for (let drag of arr) {
	let image=document.querySelectorAll(".image");
	for (let img of image) {
		img.addEventListener(drag,(e)=>{
			 e.preventDefault();
			if(drag == "drop"){
               let cardId = e.dataTransfer.getData('image');
               let taretCard = document.getElementById(cardId);
               img.append(taretCard);
           }
		})
	}
	
}


