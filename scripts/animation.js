
/*document.querySelector('.logos').style = 'scale:2';*/
/*window.onload = function slider(){}*/

function slider(){
    const box = document.getElementById('inkscapeContainer');
    const numChild = document.getElementById('inkscapeContainer').childElementCount;
    
    for (let i = 2; i < numChild; ++i) {
            var count = 1;
            setTimeout(function() {
            count = ++count;

            if(count>2){
                box.children[count-1].style = "opacity:0";
            }
            box.children[count].style = "opacity:1";
            if(count == numChild){
                count = 1;
                i = 1;
            }
        }, 4500 * (i-1));
    }
}
