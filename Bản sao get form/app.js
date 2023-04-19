




// btnSubmit.addEventListener('click', (e) => {
//     localStorage.setItem('Name', JSON.stringify(eleName.value));
//     localStorage.setItem('Email', JSON.stringify(eleEmail.value));
//     localStorage.setItem('Job', JSON.stringify(eleJob.value));
// })


const btnSubmit = document.getElementById('btn-submit');

btnSubmit.onclick = function () {
   let infoMail = document.getElementById('email').value;
   let infoJob = document.getElementById('job').value;
   let infoName = document.getElementById('name').value; 

   console.log('infoMail', 'infoJob', 'infoName');

} 
