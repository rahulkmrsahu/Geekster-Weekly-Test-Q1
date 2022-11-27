

function calVolume(){
    var radius=document.getElementById('radius').value;
    
    var volume=(4/3)*Math.PI*radius*radius*radius;

    document.getElementById('volume').value=volume;
    return false;

}