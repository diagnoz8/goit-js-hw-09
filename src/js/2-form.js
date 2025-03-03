console.log("Form");
const formData =  {
email: "", 
message: ""
}
const localStorageKey = "feedback-form-state";
const feedbackForm = document.querySelector(".feedback-form")
const email = feedbackForm.email;
const message = feedbackForm.message;
const savedData = JSON.parse(localStorage.getItem(localStorageKey)) || {};
email.value = savedData.email ?? "";
message.value = savedData.message ?? "";
formData.email = email.value;
formData.message = message.value;

feedbackForm.addEventListener("input", (evt) => { 
    
    if
        (evt.target.type === "email")
    {
        formData.email = evt.target.value.trim(); 
        
    }
    
    else if
        (evt.target.tagName === "TEXTAREA")
    {
        formData.message = evt.target.value.trim(); 
        
    }
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
});
feedbackForm.addEventListener("submit", (evt) =>{
    evt.preventDefault();
    if (email.value === "" || message.value === "" ) {
        alert("Fill please all fields")
    }
    else{
      console.log(formData);
      localStorage.removeItem(localStorageKey);
      feedbackForm.reset();
      formData.email= "";
      formData.message= "";
        }
    }
)     
