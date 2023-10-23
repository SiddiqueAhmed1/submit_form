// TODO:  take all essential elements

const userForm = document.getElementById('formData');
const msg  = document.querySelector('.msg');
const success = document.querySelector('.success p');
const upload = document.getElementById('upload');
const img = document.getElementById('img');
const gallery = document.querySelector('.gallery');
const reset = document.querySelector('.reset');

// form data taken TODO: 
userForm.addEventListener('submit', (e) => {
  e.preventDefault();
   

   const form_data = new FormData(e.target);
   const data = Object.fromEntries(form_data);

   const fileInput = e.target.querySelector('input[type="file"]');
   
     
   // } else {
   //   const form_data = new FormData(e.target.files);
   //   const imageUrl = URL.createObjectURL(form_data);
   //   const data = Object.fromEntries(form_data);
   
   

   if(!data.name.trim() || !data.email.trim() || !data.mobile.trim() || !fileInput.files.length){
     msg.innerHTML =  creatAlert('All fields are required');
     
   }else if(!isEmail(data.email)){
      msg.innerHTML =  creatAlert('Invalid email address', 'warning');
   
   }else if(!isMobile(data.mobile)){
      msg.innerHTML =  creatAlert('Invalid mobile number', 'info');

   } else{
      success.innerHTML = creatAlert('Your data is succesfully submitted', 'success');
      e.target.reset();
      gallery.innerHTML = '';
   }
   console.log(data, fileInput.files.length);
})

// click on reset button TODO:

reset.onclick = () => {
   gallery.innerHTML = '';
}
// onchange event implement FIXME:
   upload.onchange = (e) => {
   // gallery clear before add new gallery photo
   gallery.innerHTML = '';

      for (let i = 0; i < e.target.files.length; i++){
         const url = URL.createObjectURL(e.target.files[i]);
         const img = document.createElement('img');
         img.setAttribute('src',url);
         img.setAttribute('name','photo');
         img.setAttribute('class', 'w-50 rounded');
         gallery.appendChild(img);
         
      }
      
   }



   //  create element 

   
  
