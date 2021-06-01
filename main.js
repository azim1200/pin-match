const genaratePin = document.getElementById('generate-btn');
genaratePin.addEventListener('click', function(){

    let pin = Math.floor(Math.random() * 10000);
    const showPin = document.getElementById("showpin").value=pin;
    
})
let takeNumber = document.getElementsByClassName('button');
    for (let i = 0; i < takeNumber.length; i++) {
        const value = takeNumber[i];
        value.addEventListener('click', function (){

            if(this.id == "clear")
            {
                document.getElementById("typepin").value = " ";

            }
            
            else{
                let output =document.getElementById('typepin').value ;
                output = output + this.id;
                let typePin = document.getElementById("typepin").value = output;
                
            }
        } )
    }
let submitButton = document.getElementById('submit');
submitButton.addEventListener('click', function(){
    const getPin= document.getElementById("typepin").value;
    const setPin = document.getElementById("showpin").value;

    if(getPin == setPin){
        document.getElementById('pin-match').style.display = "block";
    }
    else{
        document.getElementById('pin-notmatch').style.display = "block";
    }
}) 

                   
                
