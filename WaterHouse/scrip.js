let btn_incremento = document.getElementById("btn_incremento")
let btn_decremento = document.getElementById("btn_decremento")
let total = document.getElementById("total")
let sub_total=document.getElementById("sub_total")

function calculo ()
{
    let valor=total.value
    let  validar= /^[1-9][0-9]*$/.test(valor)
    let valor_anterior
    if(!validar){
        total.value=valor_anterior
    }
    else{
        valor_anterior=valor
    }

}

btn_incremento.onclick= function(){
    total.value=Number(total.value)+1
    calculo()
}


btn_decremento.onclick= function(){
    total.value=Number(total.value)-1
    calculo()
}

total.onchange=function(){
    calculo()
}

function conteo(){
    let cantidad=50*total.value
}

subtotal.onchange=function()
{
    conteo()
}