// PIN definido en el código
const PIN = "0104";  // Aquí puedes cambiar el PIN a lo que desees
let enteredPassword = "";

function enterNumber(number) {
    if (enteredPassword.length < 4) {  // Limitar el PIN a 4 dígitos
        enteredPassword += number;
        updatePasswordDisplay();
    }
}

function clearPassword() {
    enteredPassword = "";
    updatePasswordDisplay();
}

function deleteLast() {
    enteredPassword = enteredPassword.slice(0, -1);
    updatePasswordDisplay();
}

function updatePasswordDisplay() {
    const passwordDisplay = document.getElementById('passwordDisplay');
    passwordDisplay.value = enteredPassword;
}

function submitPassword() {
    // const errorMessage = document.getElementById('errorMessage');
    
    if (enteredPassword === PIN) {
        alert('PIN Correcto. Redirigiendo...');
        // Aquí puedes redirigir a otra página, por ejemplo:
        window.location.href = 'cards.html';
        clearPassword();
    } else {
        // errorMessage.textContent = "PIN incorrecto. Intente nuevamente.";
        alert('PIN incorrecto. Intente nuevamente.');
        clearPassword();
    }
}
