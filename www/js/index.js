function ajouterTache(){
    let newTask = "<li>" + task.value + "</li>"

    taskList.innerHTML += newTask;
    // il faut demander à jquery de se raffraichier pour ajouter les classes
    $(taskList).listview('refresh')

    task.value=""
    task.focus()
    
}

function renitialiser(){
    taskList.innerHTML = ""
    tacheTermines.innerHTML=""
    task.focus()
}

$(document).on('swipeleft', 'li', function(event){ 
    
    //$(event.target).remove()
    $(event.target).fadeOut("slow")
    $(taskList).listview('refresh')    
});

$(document).on('swiperight', '#taskList li', function(event){  
    // ajoutons dans les taches termines
    console.log(event.target.innerHTML)
    
    
    // supprimer l'element 
    $(event.target).fadeOut("slow", () => {
        let newTacheTermine = "<li>" + event.target.innerHTML + "</li>"
        tacheTermines.innerHTML +=  newTacheTermine
        $(tacheTermines).listview('refresh')
    })

    //$(event.target).remove()
    //$(event.target).addClass("swipeleft")    
    // $(event.target).toggleClass("swipeleft")
    $(taskList).listview('refresh')  
});

$(document).on('swiperight', '#tacheTermines li', function(event){  
    // ajoutons dans les taches termines
    // console.log(event.target.innerHTML)
    
    // supprimer l'element 
    $(event.target).fadeOut("slow", () => {
        let newTacheTermine = "<li>" + event.target.innerHTML + "</li>"
        console.log(newTacheTermine)
        taskList.innerHTML +=  newTacheTermine
        $(taskList).listview('refresh')
    })
    // $(event.target).remove()
    //$(event.target).addClass("swipeleft")    
    // $(event.target).toggleClass("swipeleft")  
});




