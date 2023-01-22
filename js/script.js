const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const buttonAdd = document.querySelector("header button#add")
const buttonClear = document.querySelector("header button#clear")

buttonAdd.addEventListener("click", add)
form.addEventListener("change", save)
buttonClear.addEventListener("click", clear)

function add(){
    const today = new Date().toLocaleDateString("pt-br").slice(0, -5);
    if(nlwSetup.dayExists(today)){
        alert("Dia já adicionado ❌")
        return;
    }
    nlwSetup.addDay(today)
}

function clear(){
    localStorage.clear('NLWSetup@habits')
    document.location.reload() 
}

function save(){
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data)) 
}

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}

nlwSetup.setData(data)

nlwSetup.load();