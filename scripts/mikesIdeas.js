document.addEventListener('DOMContentLoaded', function () {
    const mikeBtn = document.getElementById('mikeBtn');
    const messages = ["really, you didn't that through", "perhaps you should have run that ideas by Cheryl", "Remember this is for Ethan not Gator", "I wonder why you got bitten by a Croc!!"]
    if (mikeBtn) {  // Check if the element exists to avoid errors
        mikeBtn.addEventListener('click', function () {
            const randomIndex = Math.floor(Math.random() * messages.length);
            const message = messages[randomIndex];
            alert(message)
        });
    } else {
        console.log('Button with ID "mikeBtn" does not exist!');
    }
});