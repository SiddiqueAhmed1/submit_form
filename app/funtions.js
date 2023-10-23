// dataReset
const dataReset = (e) => {
   const data = document.querySelector('#formData');
   data.reset();
   
}

// create alert
const creatAlert = (msg, type = 'danger',) => {
    return `<p class="alert alert-${type} d-flex justify-content-between text-primary">${msg}
    <button onclick="dataReset()"  class="btn-close" data-bs-dismiss="alert"></button>
    </p>`
}
// isMobile checking

const isMobile = (mobile) => {
    const pattern = /^[01|8801][0-9]{10}$/;
    return pattern.test(mobile);
}
// isEmail checking
const isEmail = (email) => {
    const pattern = /^[a-z]{3,}@[a-z]{3,}\.[a-z]{3,}$/;
    return pattern.test(email);
}





