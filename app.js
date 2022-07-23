const NewTask = document.getElementById("newtask");
const AddTask = document.getElementById("newbtn");
let RemoveTask = document.querySelectorAll(".fa-xmark");
const TaskList = document.querySelector(".tasklist");
const ClearAll = document.getElementById("clearall");

AddTask.addEventListener("click", AddNewT);
ClearAll.addEventListener("click", ClearAllT);

function AddNewT(){
    
    if(NewTask.value == ""){
        alert("Lütfen Bir Görev Giriniz...");
    }else{
        var li = document.createElement("li");
        li.classList.add("task")

        li.innerText = NewTask.value

        var i = document.createElement("i");
        i.classList = "fa-solid fa-xmark"

        li.appendChild(i);

        TaskList.appendChild(li);

        NewTask.value = "";

        RemoveTask = document.querySelectorAll(".fa-xmark");
        for (var i = 0; i < RemoveTask.length; i++){
            RemoveTask[i].addEventListener("click", RemoveT)
        }

    }
}

function RemoveT(){
    var option = confirm("Emin misiniz?")

    if(option == true){
        var deleted = this.parentElement;
        deleted.remove();
    }
}

function ClearAllT(){
    var option = confirm("Kalıcı olarak tüm görevleri silmek istediğinize emin misiniz?")

    if(option == true){
        var deletedAll = document.querySelectorAll("li")
        for(j = 0; j < deletedAll.length; j++){
            deletedAll[j].remove();
        }
    }
}

