
document.getElementById('btn-diposit').addEventListener('click', function(){
    const dipositFild = document.getElementById('input-diposit');
    const newDipositAmountString = dipositFild.value;
    const newDipositAmount = parseFloat(newDipositAmountString);
    console.log(newDipositAmount);

    const dipositTotalElement = document.getElementById('diposit-total');
    const previousDipositTotalString = dipositTotalElement.innerText;
    const previousDipositTotal = parseFloat(previousDipositTotalString);

    const currentDipositTotal = previousDipositTotal + newDipositAmount;
    dipositTotalElement.innerText = currentDipositTotal;

    const balanceTotalElement = document.getElementById('Balance-total');
    const previousBalanceString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceString);

    const currentBalanceTotal = previousBalanceTotal + newDipositAmount;

    balanceTotalElement.innerText = currentBalanceTotal;







    dipositFild.value = ' ';
})