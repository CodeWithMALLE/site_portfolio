function countToTen(){
    let count = 0;
    while(count < 10){
        document.getElementById("thecount").innerHTML += "<br>" + count;
        count++;
    }
}