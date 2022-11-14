// IIFE --> Immediately invoked function expression
(function(){
    function Start() {
        console.log("App Started");
    }
    window.addEventListener("load", Start);

    let deleteButtons = document.querySelectorAll('.btn-danger');
    for (button of deleteButtons) {
        button.addEventListener('click', (event) => {
            if(!confirm("Are you sure?")) {
                event.preventDefault();
                window.location.assign('/book-list');
            }
        });
    }
})();