var btn = document.querySelector("#btn");
var txt = document.querySelector("#txt");
var txt_result = document.querySelector("#txt_result");
var times = document.getElementById("num");   

    txt.onkeyup = () =>{
        txt_result.value = "";
    }


btn.onclick = () => {
    var x;
        for (x = 0; x < times.value; x++) {
                txt_result.value += txt.value;      
        }
        console.log(times.value)
}
function copy() {
    console.log("workss ")
        /* Get the text field */
      
        /* Select the text field */
        txt_result.select();
        txt_result.setSelectionRange(0, 99999); /* For mobile devices */
      
        /* Copy the text inside the text field */
        document.execCommand("copy");
      
        /* Alert the copied text */
    }