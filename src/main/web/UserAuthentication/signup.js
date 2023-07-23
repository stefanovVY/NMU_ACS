document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Perform client-side validation (e.g., check password strength, matching passwords)

    // Send the signup data to the server using an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/signup', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Successful signup, handle accordingly (e.g., show success message)
            } else {
                // Signup failed, handle accordingly (e.g., show error message)
            }
        }
    };
    const data = JSON.stringify({ username, password });
    xhr.send(data);
});