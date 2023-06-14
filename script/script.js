const btn = document.querySelector('button');

btn.addEventListener('click', function(e){
    e.preventDefault();

    const name = document.querySelector('#name').value;
    const age = document.querySelector('#age').value;

    checkerBox(age)
})

function checkerBox(age){

    const alertAceptChecker = document.querySelector('.acept-checker');
    const alertBlockChecker = document.querySelector('.block-checker');

    if(Number(age) < 18){
        alertAceptChecker.style = 'display: none';
        alertBlockChecker.style = 'display: block';
    }else{
        alertAceptChecker.style = 'display: block';
        alertBlockChecker.style = 'display: none';
    }
}