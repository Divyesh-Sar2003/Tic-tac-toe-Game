const cellElements = document.querySelectorAll(".game_board .cell");

cellElements.forEach(cell=>{
    cell.oneclick=()=>
    {    
        console.log(cell.innerText);
    }
})