var hr= 00 ;
var min = 00 ;
var sec= 00 ;
var ms = 00 ;

var timer = false;

var split_count = -1;

function start(){
    if( !timer ){
        timer = true;
        stopWatch();
    }
}

function stop(){
    timer = false ;
}

function reset(){
    timer = false; 
    clearSplitRecord();
    hr = 00 ;
    sec = 00 ;
    min = 00 ;
    ms = 00 ;
    document.getElementById("hr").innerHTML = "00" ;
    document.getElementById("min").innerHTML = "00" ;
    document.getElementById("sec").innerHTML = "00" ;
    document.getElementById("ms").innerHTML = "00" ;
}

function split(){
    if( timer ){
    split_count = split_count + 1 ;
    var one = 0;
    var two = 0;
    var three = 0;
    var four = 0;
    if( hr < 10 ){
        one = '0'+hr ;
    }else{
        one = hr ;
    }
    if( min < 10 ){
        two = '0'+min ;
    }else{
        two = min ;
    }
    if( sec < 10 ){
        three = '0'+sec ;
    }else{
        three = sec ;
    }
    if( ms < 10 ){
        four = '0'+ms ;
    }else{
        four = ms ;
    }

    if( split_count < 10){
        var x = '<li>' + one +" : "+ two + " : "+ three + "  " + '<span id="milisec">' + four + '</span>' + '</li>'
        document.getElementById("ol").innerHTML += x ;
    }else{
        split_count = 0;
        var x = '<li>' + one +" : "+ two + " : "+ three + "  " + '<span id="milisec">' + four + '</span>' + '</li>'
        document.getElementById("ol").innerHTML = x ;
    }
}
}

function stopWatch() {
    if( timer ){
        ms = ms +1 ;
        if( ms == 100 ){
            ms = 0 ;
            sec = sec + 1;
        }
        if( sec == 60 ){
            sec = 0 ;
            ms = 0 ;
            min = min+1 ;
        }
        if( min == 60 ){
            min = 0 ;
            sec = 0 ;
            ms = 0 ;
            hr = hr+1 ;
        }
        if( ms < 10 ){
            document.getElementById("ms").innerHTML = "0" + ms ;
        }else{
            document.getElementById("ms").innerHTML = ms ;
        }

        if( sec < 10 ){
            document.getElementById("sec").innerHTML = "0" + sec ;
        }else{
            document.getElementById("sec").innerHTML = sec ;
        }
        if( min < 10 ){
            document.getElementById("min").innerHTML = "0" + min ;
        }else{
            document.getElementById("min").innerHTML = min ;
        }
        if( hr < 10 ){
            document.getElementById("hr").innerHTML = "0" + hr ;
        }else{
            document.getElementById("hr").innerHTML = hr ;
        }
        setTimeout("stopWatch()" ,10);
    }
}

function clearSplitRecord(){
    document.getElementById("ol").innerHTML = '' ;
}