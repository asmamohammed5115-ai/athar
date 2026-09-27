$(function() {
    $("#menubtn").click (function () {
            $("#quickmenu").slideToggle();
        });
});



function switchform()
      {
          document.getElementById('loginform').classList.toggle('hidden')
          document.getElementById('registerform').classList.toggle('hidden')
      }

    

function loadDetails(file)
{
    document.getElementById('mymodal').style.display='block';
    fetch(file)
    .then(res => res.text())
    .then(data => document.getElementById('modaltext').innerText = data );
}
function closePopup()
{
    document.getElementById('mymodal').style.display='none';
}



$("#contactform").submit(function(){
        sessionStorage.setItem("send","1");
      });
        if(sessionStorage.getItem("send")){
            toastr.success('تم إرسال رسالتـك بنجـاح !'); 
            sessionStorage.removeItem("send");}



$("#registerform").submit(function(){
    sessionStorage.setItem("account" , "1");
    });
    if(sessionStorage.getItem("account")){
        openSuccess();
        sessionStorage.removeItem("account");}


function openSuccess(){
    fetch("../ajax/account.txt")
        .then(r => r.text())
        .then(data => { document.getElementById('successmsg').innerHTML = data; 
        document.getElementById("successmodal").style.display="block";
    });}

function closesuccess(){
    document.getElementById('successmodal').style.display='none';
}

