function display(num){
    box.value += num

}
function clearAll(){
    box.value = ""
}

function backClear(){
    box.value = box.value.slice(0,-1)
}

function equalTo(){
    try{
        box.value = eval(box.value)
    }
    catch (error){
        box.value = 'Error'
        setTimeout(() => {
            box.value = ""
        },1000)
    }
    
}