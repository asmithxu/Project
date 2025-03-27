window.onload = function() {
    // initialize variables
    let kelButton = document.querySelector('button.deliver');

    // create functions
    function setCopyrightYear() {
        document.querySelector('footer span').innerHTML += 'ⓒ ' + new Date().getFullYear()
    }

    // invoke functions
    setCopyrightYear();

    // set event listeners here
    kelButton.addEventListener('click', function(e){
        e.target.parentElement.parentElement.remove();
        document.querySelector('#sampleBool').innerHTML = 'true';
    })
}