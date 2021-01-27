"use strict";const fullnameElement=document.querySelector(".js-fullname"),fullnamePreviewElement=document.querySelector(".js-fullnamePreview"),positionElement=document.querySelector(".js-position"),positionPreviewElement=document.querySelector(".js-positionPreview"),emailElement=document.querySelector(".js-email"),emailPreviewElement=document.querySelector(".js-emailPreview"),phoneElement=document.querySelector(".js-phone"),phonePreviewElement=document.querySelector(".js-phonePreview"),linkedinElement=document.querySelector(".js-linkedin"),linkedinPreviewElement=document.querySelector(".js-linkedinPreview"),githubElement=document.querySelector(".js-github"),githubPreviewElement=document.querySelector(".js-githubPreview");function handleFullname(e){const n=e.target.value;fullnamePreviewElement.innerHTML=""===n?"Nombre Apellido":n}function handlePosition(e){const n=e.target.value;positionPreviewElement.innerHTML=""===n?"Front-end developer":n}function handleEmail(e){const n=e.target.value;emailPreviewElement.href=""===n?"":"mailto: "+n}function handlePhone(e){const n=e.target.value;phonePreviewElement.href=""===n?"":"tel: "+n}function handleLinkedin(e){const n=e.target.value;linkedinPreviewElement.href=""===n?"":n}function handleGithub(e){const n=e.target.value;githubPreviewElement.href=""===n?"":n}fullnameElement.addEventListener("keyup",handleFullname),positionElement.addEventListener("keyup",handlePosition),emailElement.addEventListener("keyup",handleEmail),phoneElement.addEventListener("keyup",handlePhone),linkedinElement.addEventListener("keyup",handleLinkedin),githubElement.addEventListener("keyup",handleGithub);const legendDesignElement=document.querySelector(".legend__design"),legendRellenaElement=document.querySelector(".legend__rellena"),legendComparteElement=document.querySelector(".legend__comparte"),collapsableElement=document.querySelector(".collapsable");function handleCollapsable(){collapsableElement.classList.toggle("collapsable--on")}legendDesignElement.addEventListener("click",handleCollapsable),legendRellenaElement.addEventListener("click",handleCollapsable),legendComparteElement.addEventListener("click",handleCollapsable),console.log(">> Ready :)");