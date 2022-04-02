

var option_button = document.getElementById('optionBtn');
option_button.onmouseover = function(){
    document.getElementById('popup').style.display ='block';
}
option_button.onmouseout= function(){
    document.getElementById('popup').style.display='none';
}

var settingsBtn = document.getElementById('settingsBt');
settingsBtn.onclick = function(){
    document.getElementById('list').style.display='block';
}
var closeBtn = document.getElementById('closeBt');
closeBtn.onclick = function(){
    document.getElementById('list').style.display = 'none';
}