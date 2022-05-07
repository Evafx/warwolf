let result = document.querySelector("#result")
if(localStorage.killed == 0 && localStorage.witchkilled == 0){
    result.innerHTML = '今晚是平安夜！'
}else{
    if(localStorage.witchkilled == 0){
        result.innerHTML = '今晚死亡的玩家是' + localStorage.killed + "号"
    }else{
        result.innerHTML = '今晚双死，死亡的玩家是' + localStorage.killed + "号和" + localStorage.witchkilled + "号"
    } 
}
    