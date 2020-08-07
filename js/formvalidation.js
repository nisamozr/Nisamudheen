const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

form.addEventListener('submit',(e) =>{
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
   const nameValue = name.value.trim();
   const emailValue = email.value.trim();
   const subjectValue = subject.value.trim();
   const messageValue = message.value.trim();
   if(nameValue == ""){
       setErrorFor(name,'Enter your name')

   }
   else{
       setSuccessFor(name);
   }
}

function setErrorFor(input,message){
    const formGroup = input.parentElement;
    const small = formGroup.querySelector('small');
    small.innerText = message;

    formGroup.className='form-group error';


}