function getImage (imagename){
    var newimg=imagename.replace(/^.*\\/,"");
    $('#getImage').html(newimg);
}