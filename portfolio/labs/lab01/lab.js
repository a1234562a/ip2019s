/*

*/


function start(e) {
    var name=[
    {
        char:'饒',
        big5:'C4C7',
        cns:'1-7A52',
        unicode:'9952'
    },
    {
        char:'奇',
        big5:'A95F',
        cns:'1-4C61',
        unicode:'5947'
    },
    {
        char:'軒',
        big5:'B061',
        cns:'1-5846',
        unicode:'8ED2'
    }
     ];

     var ele = document.getElementById("div1");

     for (var i=0;i < 3; i++) {
          ele.innerHTML += name[i].char;
          ele.innerHTML += ' big5 =';
          ele.innerHTML += name[i].big5;
          ele.innerHTML += ' cns =';
          ele.innerHTML += name[i].cns;
          ele.innerHTML += ' unicode =';
          ele.innerHTML += name[i].unicode;
          ele.innerHTML += '<br>';
    }
}

/*
https://www.w3schools.com/jsref/met_document_addeventlistener.asp

document.addEventListener(event, function, useCapture)

true - The event handler is executed in the capturing phase
false- Default. The event handler is executed in the bubbling phase
*/
window.addEventListener( "load", start, false );
