fname = document.getElementById("firstName")
lname = document.getElementById("lastName")
email = document.getElementById("email")
password = document.getElementById("password")
confirmPassword = document.getElementById("confirmPassword")
Checkbox = document.getElementById("checkbox1")
btn = document.getElementById("btn")

passInstruction = document.getElementById("line")



btn.addEventListener("click", function (e) {
    e.preventDefault()
    firstname = fname.value
    lastname = lname.value
    EmailValue = email.value
    PasswordValue = password.value
    CpasswordValue = confirmPassword.value

    if (firstname === "" || lastname === "") {
        alert("Please enter your first and last name.");
        return;
    }
    if (!email.value.includes("@") || !email.value.includes(".")) {
        alert("Please enter valid Email")
        return;
    }
    if (PasswordValue.length < 6) {
        passInstruction.innerText = "⚠️ Password must be at least 6 characters.";
        passInstruction.style.color = "red";
        return;
    }
    if (PasswordValue !== CpasswordValue) {
        alert("Passwords do not match.");
        return;
    }
    if (!Checkbox.checked) {
        alert("please accept term and condtion")
        return;
    }
    alert("Form submitted successfully!"); 

    window.location.href = "next.html";
    
})