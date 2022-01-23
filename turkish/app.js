// const counters = document.querySelectorAll('.counter');
// const speed = 200; // The lower the slower

// counters.forEach(counter => {
// 	const updateCount = () => {
// 		const target = +counter.getAttribute('data-target');
// 		const count = +counter.innerText;

// 		// Lower inc to slow and higher to slow
// 		const inc = target / speed;

// 		// console.log(inc);
// 		// console.log(count);

// 		// Check if target is reached
// 		if (count < target) {
// 			// Add inc to count and output in counter
// 			counter.innerText = count + inc;
// 			// Call function every ms
// 			setTimeout(updateCount, 1);
// 		} else {
// 			counter.innerText = target;
// 		}
// 	};

// 	updateCount();
// });

// const openModal = document.querySelector('.open-modal')
// const openedModal = document.querySelector('.opened-modal')

// openModal.addEventListener('click', (e) => {
// 	 e.preventDefault()
// 	 openedModal.style.opacity = 1;
// })

// Deneme Clicking Event

// const cmtiles1 = document.querySelector('.cmtiles1');

// const fullscreaned = function(e) {
// 	e.preventDefault()

// }

// cmtiles1.addEventListener('click', fullscreaned)

// Clicking Event

const gallery = document.querySelectorAll(".gallery .image");
const previewBox = document.querySelector(".preview-box");
const previewImg = previewBox.querySelector("img");
const closeIcon = previewBox.querySelector(".icon");
const currentImg = previewBox.querySelector(".current-img");
const totalImg = previewBox.querySelector(".total-img");
const shadow = document.querySelector(".shadow");
const cementName = document.querySelectorAll(".image .cement-name")

console.log(gallery);
window.onload = () => {
  for (let i = 0; i < gallery.length; i++) {
    // totalImg.textContent = gallery.length;
    let newIndex = i;
    let clickImgIndex;
    gallery[i].onclick = () => {
 
      clickImgIndex = newIndex;
      
      function preview () {
        for (let i = 0; i < cementName.length; i++) {
          currentImg.textContent = cementName[newIndex].innerText;
          
        }
        let selectedImgUrl = gallery[newIndex].querySelector("img").src;
        previewImg.src = selectedImgUrl;
       
        
      }

      const prevBtn = document.querySelector(".prev");
      const nextBtn = document.querySelector(".next");
      if (newIndex == 0) {
        prevBtn.style.display = "none"
      }
      if (newIndex == gallery.length - 1) {
        nextBtn.style.display = "none"
      }
      

      prevBtn.onclick = () => {
        newIndex --;
        if(newIndex == 0) {
          preview();
          prevBtn.style.display = "none";
        } else {
          preview()
          nextBtn.style.display = "block";
        }
        
      }
      nextBtn.onclick = () => {
        newIndex ++;
        if(newIndex >= gallery.length - 1) {
          preview();
          nextBtn.style.display = "none";
        } else {
          preview();
          prevBtn.style.display = "block";
        }
        
      }


      preview();
      previewBox.classList.add("show");
      shadow.style.display = "block";
      document.querySelector("body").style.overflow = "hidden";

      closeIcon.onclick = () => {
      newIndex = clickImgIndex;
      previewBox.classList.remove("show");
      prevBtn.style.display = "block";
      nextBtn.style.display = "block";
      shadow.style.display = "none";
      document.querySelector("body").style.overflow = "auto";
      }
    }
  }
}

