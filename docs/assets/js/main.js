"use strict";const inputsTextConfig=[{inputClass:".js-fullname",cardClass:".js-fullnamePreview",defaultValue:"Nombre Apellidos",cardPrefix:"",cardElementAttribute:"innerHTML",propertyName:"name"},{inputClass:".js-position",cardClass:".js-positionPreview",defaultValue:"Front-end developer",cardPrefix:"",cardElementAttribute:"innerHTML",propertyName:"job"},{inputClass:".js-email",cardClass:".js-emailPreview",defaultValue:"",cardPrefix:"mailto:",cardElementAttribute:"href",propertyName:"email"},{inputClass:".js-phone",cardClass:".js-phonePreview",defaultValue:"",cardPrefix:"tel:",cardElementAttribute:"href",propertyName:"phone"},{inputClass:".js-linkedin",cardClass:".js-linkedinPreview",defaultValue:"",cardPrefix:"https://www.linkedin.com/in/",cardElementAttribute:"href",propertyName:"linkedin"},{inputClass:".js-github",cardClass:".js-githubPreview",defaultValue:"",cardPrefix:"https://www.github.com/",cardElementAttribute:"href",propertyName:"github"}],userData={photo:"",palette:"",name:"",job:"",email:"",phone:"",linkedin:"",github:""};function updateAllInputs(){for(const e of inputsTextConfig){const t=document.querySelector(e.inputClass),a=document.querySelector(e.cardClass);let l=t.value;userData[e.propertyName]=l,"innerHTML"===e.cardElementAttribute?(l=""===t.value?e.defaultValue:t.value,a.innerHTML=l):"href"===e.cardElementAttribute&&(""===t.value?l="#":(l=l.replace(e.cardPrefix,""),l=e.cardPrefix+l),a.href=l)}saveInLocalStorage()}const inputTextElements=document.querySelectorAll(".js-input-text");for(const e of inputTextElements)e.addEventListener("keyup",updateAllInputs);const legendElements=document.querySelectorAll(".legend");function handleCollapsable(e){e.currentTarget.closest(".collapsable").classList.toggle("collapsable--on")}for(const e of legendElements)e.addEventListener("click",handleCollapsable);const paletteElements=document.querySelectorAll(".js-palette"),cardElement=document.querySelector(".js-card");function handlePalette(){cardElement.classList.remove("palette01","palette02","palette03");const e=document.querySelector(".js-palette:checked").value;cardElement.classList.add("palette"+e),userData.palette=e,saveInLocalStorage()}for(const e of paletteElements)e.addEventListener("click",handlePalette);const fr=new FileReader,uploadBtn=document.querySelector(".js__profile-trigger"),fileField=document.querySelector(".js__profile-upload-btn"),profileImage=document.querySelector(".js__profile-image"),profilePreview=document.querySelector(".js__profile-preview");let photo="";function getImage(e){const t=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(t)}function writeImage(){photo=fr.result,updatePhoto()}function updatePhoto(){const e=photo||"http://beta.adalab.es/Project-promo-l-module-2-team-8/assets/images/image-default.jpg";profilePreview.style.backgroundImage=`url(${e})`,profileImage.style.backgroundImage=`url(${e})`,userData.photo=photo,saveInLocalStorage()}function fakeFileClick(){fileField.click()}function getUserData(){return{photo:photo,palette:parseInt(document.querySelector(".js-palette:checked").value),name:document.querySelector(".js-fullname").value,job:document.querySelector(".js-position").value,email:document.querySelector(".js-email").value,phone:document.querySelector(".js-phone").value,linkedin:document.querySelector(".js-linkedin").value,github:document.querySelector(".js-github").value}}function saveInLocalStorage(){const e=JSON.stringify(userData);localStorage.setItem("userData",e)}function getFromLocalStorage(){const e=localStorage.getItem("userData");if(null!==e){const t=JSON.parse(e);document.querySelector(".js-fullname").value=t.name,document.querySelector(".js-position").value=t.job,document.querySelector(".js-email").value=t.email,document.querySelector(".js-phone").value=t.phone,document.querySelector(".js-linkedin").value=t.linkedin,document.querySelector(".js-github").value=t.github,photo=t.photo;const a=document.querySelectorAll(".js-palette");for(const e of a)e.value===t.palette&&(e.checked=!0);updateAllInputs(),handlePalette(),updatePhoto()}else{document.querySelector(".js-fullname").value=userData.name,document.querySelector(".js-position").value=userData.job,document.querySelector(".js-email").value=userData.email,document.querySelector(".js-phone").value=userData.phone,document.querySelector(".js-linkedin").value=userData.linkedin,document.querySelector(".js-github").value=userData.github,photo=userData.photo;const e=document.querySelectorAll(".js-palette");for(const t of e)"paletteOne"===t.id?t.checked=!0:t.checked=!1;updateAllInputs(),handlePalette(),updatePhoto()}}function handleResetBtn(){resetUserData(),resetLocalStorage(),getFromLocalStorage(),hiddenElement.classList.add("comparte__nav2--hidden")}function resetUserData(){userData.photo="",userData.palette="",userData.name="",userData.job="",userData.email="",userData.phone="",userData.linkedin="",userData.github=""}function resetLocalStorage(){localStorage.removeItem("userData")}uploadBtn.addEventListener("click",fakeFileClick),fileField.addEventListener("change",getImage),getFromLocalStorage();const resetBtnElement=document.querySelector(".js-btn-reset");resetBtnElement.addEventListener("click",handleResetBtn);const createBtn=document.querySelector(".js-create-btn"),cardResultElement=document.querySelector(".js-card-result"),hiddenElement=document.querySelector(".js-hidden-div"),twitterBtnElement=document.querySelector(".js-twitter");function handleCreateBtn(e){e.preventDefault(),hiddenElement.classList.remove("comparte__nav2--hidden"),console.log("Mis datos",getUserData());const t=getUserData();fetch("https://profileawesome.herokuapp.com/card",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(handleData),disableBtn()}function disableBtn(){createBtn.disabled=!0}function handleData(e){!0===e.success?(cardResultElement.innerHTML=e.cardURL,cardResultElement.href=e.cardURL,twitterBtnElement.href="https://twitter.com/intent/tweet?text=Mi%20nueva%20tarjeta%20"+e.cardURL):cardResultElement.innerHTML=e.error}createBtn.addEventListener("click",handleCreateBtn);