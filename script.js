let btn = document.querySelector("#btn");
let input = document.querySelector("#input");
let container = document.querySelector(".container");


btn.addEventListener("click", function () {
    if (input.value.length == 0) {
        alert("Please enter what to do");
    } else {
        container.innerHTML += `
        <div class="contain">
        <span id = "eachtask">
        ${input.value}
        </span>
        <button class = "del">
        <i class="fa fa-trash"></i>
        </button>
        </div>`;

        let allTasks = document.querySelectorAll(".del");

        for (let i = 0; i < allTasks.length; i++) {
            allTasks[i].addEventListener("click", function () {
                this.parentNode.remove();
            });
        }

    }
    
    let contain = document.querySelectorAll(".contain");

    for (let i = 0; i < contain.length; i++) {
        contain[i].addEventListener("click", function () {
            this.classList.toggle("complete");
        });
    }
  input.value = ""; 

});