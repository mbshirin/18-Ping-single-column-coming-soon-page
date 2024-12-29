document.querySelector(".main .form form").addEventListener("submit",function (event) {
    event.preventDefault()
    const email = document.getElementById("email").value.trim()
    document.querySelector(".main .form form .error").textContent = ""
    document.querySelector(".main .form form .submitted").textContent = ""
    let isValid = true
    if (email === "") {
        document.querySelector(".main .form form .error").textContent = "Email is required."
        isValid = false
    } else if (!validateEmail(email)) {
        document.querySelector(".main .form form .error").textContent = "Please enter a valid email address."
        isValid = false
    }
    if (isValid) {
        document.querySelector(".main .form form .submitted").textContent = "Form submitted successfully!"
    }
    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        return regex.test(email)
    }
})