

//container where rows and blocks are added
const container = document.querySelector('#container');

//default rows and columns
let userRows = 20;
let userColumns = 20;
let userColor = 'black';



//listeners and startup

generateRows();
generateColumns();


const colorPicker = document.querySelector('#colorpicker');
colorPicker.addEventListener('change', watchColorPicker);
colorPicker.addEventListener('change', applyColor);



//new grid
const submitButton = document.querySelector('.submit');
submitButton.addEventListener('click',rowsColumns);
submitButton.addEventListener('click',generateRows);
submitButton.addEventListener('click',generateColumns);
submitButton.addEventListener('click',applyColor);


//functions

//getting the values in input boxes for rows and columns
function rowsColumns(){
    userRows=document.getElementById('rows').value;
    userColumns =document.getElementById('columns').value;
    console.log(userRows);
    console.log(userColumns);
}


//function for resetting color for new grid
function applyColor(){
const blocks = document.querySelectorAll('.block');
blocks.forEach( block => block.addEventListener('mouseover',addColor));
}


//generate rows and columns function after clicking submit to reset
function generateRows(){
    removeAllChildNodes(container);
    for (let i = 0; i < userRows; i++){
        const content = document.createElement('div');
        content.classList.add('row');
        container.appendChild(content);
    }
}

function generateColumns(){
    const rows = document.querySelectorAll('.row');
    rows.forEach(row => {
    for (let i = 0; i < userColumns; i++){
        const content = document.createElement('div');
        content.classList.add('block');
        row.appendChild(content);
    }}
);
}

//remove all existing boxes before creating new grid
function removeAllChildNodes(parent){
    while (parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

//function for mouseover, replaces classlist
function addColor(e){
    this.setAttribute('style', `background: ${userColor};`);
}

const blocks = document.querySelectorAll('.block');
blocks.forEach( block => block.addEventListener('mouseover',addColor));

function reset(){
blocks.forEach( block => resetColor);
}

function resetColor(){
   let a = document.getElementsByClassName('block');
   [...a].forEach(x => x.removeAttribute('style', 'background'));
}


const resetButton = document.querySelector('.resetButton');
resetButton.addEventListener('click',resetColor);

function watchColorPicker(e){
    userColor = e.target.value;
    }   