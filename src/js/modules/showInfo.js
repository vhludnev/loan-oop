export default class ShowInfo {
   constructor (triggers) {
       this.btns = document.querySelectorAll(triggers);
   }

   init() {
       this.btns.forEach(btn => {  
           const plusBtn = btn.querySelector('svg'),
                 minusBtn = plusBtn.cloneNode();
                   minusBtn.innerHTML = `<path d="M1.00033 6.83366C0.540088 6.83366 0.166992 6.46056 0.166992 6.00033C0.166992 5.54009 0.540088 5.16699 1.00033 5.16699H11.0003C11.4606 5.16699 11.8337 5.54009 11.8337 6.00033C11.8337 6.46056 11.4606 6.83366 11.0003 6.83366H1.00033Z" fill="white"/>`
                   btn.appendChild(minusBtn); 
                   minusBtn.style.display = 'none';

           btn.addEventListener('click', () => {
               if(document.querySelector('.moduleapp')) {
                   if(minusBtn.style.display === 'none') {    
                       plusBtn.style.display = 'none'; 
                       minusBtn.style.display = 'block';                               
                       btn.style.background = 'lightgrey';
                   } else {
                       plusBtn.style.display = 'block'; 
                       minusBtn.style.display = 'none'; 
                       btn.style.background = '#9ec73d';
                   }
               }
                try {
                    const sibling = btn.closest('.module__info-show').nextElementSibling; 
                        
                    sibling.classList.add('animated'); 

                    if (sibling.classList.contains('slideIn')) {
                            sibling.classList.remove('slideIn');
                            sibling.classList.add('slideOutDown');
                            sibling.style.display = 'none';
                    } else {
                            sibling.classList.add('slideIn');
                            sibling.classList.remove('slideOutDown');
                            sibling.style.display = 'block';
                    };    
                } catch(e){};       
           });
       });
   }
}