// public/js/login.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const loginBtn = document.getElementById('loginBtn');

    form.addEventListener('input', () => {
        const allFieldsFilled = Array.from(form.querySelectorAll('input')).every((input) => input.value);
        loginBtn.disabled = !allFieldsFilled;
    });

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => (data[key] = value));

        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.text();
        alert(result || 'No response from server');
    });
});
