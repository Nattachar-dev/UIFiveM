function openContactListBox(newAction,oldAction){
    document.getElementById(oldAction).style.visibility="hidden";
    document.getElementById(newAction).style.visibility="visible";
}

function plusContact(){
    document.getElementById('add-contact-box').style.visibility="visible";
}

function removeContact(){
    document.getElementById('remove-contact-box').style.visibility="visible";
}

function OnConfirmSendMsg(){
    document.getElementById('confirm-send-box').style.visibility="visible";
}

function closeItself(id){
    document.getElementById(id).style.visibility="hidden";
}