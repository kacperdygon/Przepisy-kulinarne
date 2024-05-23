const addStepButton = document.querySelector('.add-step-button');
const addStepButtonFormat = document.querySelector('.add-step-button').textContent;
const stepsEditSection = document.querySelector('.steps-edit-section');
let stepsArray = document.querySelectorAll('.step');
let stepDeletionButtonsArray = document.querySelectorAll('.delete-step-button')
let stepFormat;





reloadStepFormat();

function reloadStepFormat(){
    stepFormat = `<div><h3>Krok ${stepsArray.length + 1}: </h3><textarea name='' id=''></textarea></div><div><h4>Dodaj zdjęcie<input type='file'></h4><button class='delete-step-button'>Usuń krok</button></div></div>`;

    stepToAdd = document.createElement("div");
    stepToAdd.classList.add('step');
    stepToAdd.innerHTML = stepFormat;

    for(let i = 0; i < stepsArray.length; i++){
        stepDeletionButtonsArray[i].addEventListener("click", function(){
            stepsArray[i].remove();
        })
    }

}

function reloadSteps(){
    stepsArray = document.querySelectorAll('.step');
    stepDeletionButtonsArray = document.querySelectorAll('.delete-step-button');
    
}

function addStep(){
    
    stepsEditSection.appendChild(stepToAdd);
    stepsEditSection.appendChild(addStepButton);

}



addStepButton.addEventListener('click', function(e){
    
    reloadSteps();
    addStep();
    reloadSteps();
    reloadStepFormat();
    reloadSteps();
    

})