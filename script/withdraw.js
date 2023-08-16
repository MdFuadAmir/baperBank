
document.getElementById('btn-Withdraw').addEventListener('click', function(){
    const withdrawFild = document.getElementById('withdraw-fild');
    const newWidthrawAmountString = withdrawFild.value;
    const newWidthrawAmount = parseFloat(newWidthrawAmountString);
    console.log(newWidthrawAmount);
    withdrawFild.value = ' ';
    if(isNaN(newWidthrawAmount)){
        alert('please provide a valid number')
        return;

    }
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const priviousTotalWidthroeString = withdrawTotalElement.innerText;
    const priviousWidthrowTotal = parseFloat(priviousTotalWidthroeString);

    

    const balanceTotalElement = document.getElementById('Balance-total');
    const priviousBalanceTotalString = balanceTotalElement.innerText;
    const priviousBalanceTotal = parseFloat(priviousBalanceTotalString);
    console.log(priviousBalanceTotal);

    

    if(newWidthrawAmount > priviousBalanceTotal){
        alert('Bap ar bank a ato tk ni');
        return;
    }

    const currentWidthrowTotal = priviousWidthrowTotal + newWidthrawAmount;
    withdrawTotalElement.innerText = currentWidthrowTotal;

    const newbalanceTotal  = priviousBalanceTotal - newWidthrawAmount;
    balanceTotalElement.innerText = newbalanceTotal;


    
})