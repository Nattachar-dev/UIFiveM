
function openBank(){
    document.getElementById("overview-bank").style.visibility="visible";
}

function closeBank(){
    document.getElementById("overview-bank").style.visibility="hidden";
    clearAllVisibilityElement();
}


function openNormalFinan(id){
    changeIconColorBG(id);
    document.getElementById("normal").style.visibility="visible";
    document.getElementById("tranfer").style.visibility="hidden";
    document.getElementById("quick").style.visibility="hidden";
}

function openTranferFinan(id){
    changeIconColorBG(id);
    document.getElementById("normal").style.visibility="hidden";
    document.getElementById("tranfer").style.visibility="visible";
    document.getElementById("quick").style.visibility="hidden";
}

function openQuickFinan(id){
    changeIconColorBG(id);
    defaultButtonNumber();
    document.getElementById("normal").style.visibility="hidden";
    document.getElementById("tranfer").style.visibility="hidden";
    document.getElementById("quick").style.visibility="visible";
}

function clearAllVisibilityElement(){
    document.getElementById("normal").style.visibility="hidden";
    document.getElementById("tranfer").style.visibility="hidden";
    document.getElementById("quick").style.visibility="hidden";
    $("#confirm").hide();
    defaultIconBG();
}


function changeIconColorBG(id){
    const button = document.getElementById(id);

    defaultIconBG();
    if(id=='btnDeposit'){
            button.style.backgroundImage="url(/external-file/ui-bank/but_press_deposit.png)";
            setPositionAndSize('btnDeposit');
    }
    else if(id=='btnWithdraw'){
        button.style.backgroundImage="url(/external-file/ui-bank/but_press_withdraw.png)";
        setPositionAndSize('btnWithdraw');
    }
    else if(id=='btnTransfer'){
        button.style.backgroundImage="url(/external-file/ui-bank/but_press_transfer.png)";
        setPositionAndSize('btnTransfer');
    }
    else if(id=='btnQuick'){
        button.style.backgroundImage="url(/external-file/ui-bank/but_press_quick_withdraw.png)";
        setPositionAndSize('btnQuick');
    } 

    clearInputValue();
}

function defaultIconBG(){
    document.getElementById('btnDeposit').style.backgroundImage="url(/external-file/ui-bank/but_deposit.png)";
    setPositionAndSize('btnDeposit');

    document.getElementById('btnWithdraw').style.backgroundImage="url(/external-file/ui-bank/but_withdraw.png)";
    setPositionAndSize('btnWithdraw');

    document.getElementById('btnTransfer').style.backgroundImage="url(/external-file/ui-bank/but_transfer.png)";
    setPositionAndSize('btnTransfer');

    document.getElementById('btnQuick').style.backgroundImage="url(/external-file/ui-bank/but_quick_withdraw.png)";
    setPositionAndSize('btnQuick');
}

function setPositionAndSize(id){
    const button = document.getElementById(id);
    button.style.backgroundPosition= 'center';
    button.style.backgroundSize= 'cover';
}

function clearInputValue(){
    const inputs = document.querySelectorAll('#input-money-deposit, #input-money-withdraw, #input-id, #input-money-transfer');
    inputs.forEach(input => {
        input.value = '';
      });
}

function OnConfirm(msg,myYes){
    var confirmBox = $("#confirm");
    confirmBox.find(".message").text(msg);
    confirmBox.find(".yes").unbind().click(function () {
        confirmBox.hide();
        closeBank();
    });
    confirmBox.find(".no").unbind().click(function () {
        confirmBox.hide();
    });
    confirmBox.find(".yes").click(myYes);
    confirmBox.show();
}

function clickNumber(id){
    defaultButtonNumber();
    const button = document.getElementById(id);
    button.style.backgroundColor="#ecbb1b"

}
function defaultButtonNumber(){
    document.getElementById('quick-100').style.backgroundColor="#e6d45a";
    document.getElementById('quick-200').style.backgroundColor="#e6d45a";
    document.getElementById('quick-300').style.backgroundColor="#e6d45a";
    document.getElementById('quick-500').style.backgroundColor="#e6d45a";
    document.getElementById('quick-1k').style.backgroundColor="#e6d45a";
    document.getElementById('quick-5k').style.backgroundColor="#e6d45a";
    document.getElementById('quick-10k').style.backgroundColor="#e6d45a";
    document.getElementById('quick-100k').style.backgroundColor="#e6d45a";
}
