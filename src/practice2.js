function func(){
    var h =parseInt(document.getElementById("hour").value);
    
    let minute= x(h);
    let second =y(h);
    document.getElementById("tom").innerText=minute
    document.getElementById("tos").innerText=second;
}
function x(h){
    return h*60;
}
function y(h){
    return (h*60*60);
}