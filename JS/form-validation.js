document.addEventListener('DOMContentLoaded', () => {

  // Toggle password visibility
  document.querySelectorAll('.toggle-password').forEach(icon => {
    icon.addEventListener('click', () => {
      const input = icon.previousElementSibling;
      if (input.type === 'password') {
        input.type = 'text';
        icon.textContent = '🙈';
      } else {
        input.type = 'password';
        icon.textContent = '👁️';
      }
    });
  });

  // Basic form validation
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', e => {
      let valid = true;

      form.querySelectorAll('input[required], textarea[required], select[required]').forEach(field => {
        if (!field.value.trim()) {
          field.style.borderColor = 'red';
          valid = false;
        } else {
          field.style.borderColor = '#ccc';
        }
      });

      if (!valid) {
        e.preventDefault();
        alert('Please fill all required fields!');
      }
    });
  });

});

// form-validation.js
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".newsletter form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        const email = form.querySelector('input[type="email"]');
        if (!email.value.trim()) {
            alert("Please enter your email!");
            e.preventDefault();
        } else if (!/\S+@\S+\.\S+/.test(email.value)) {
            alert("Please enter a valid email address!");
            e.preventDefault();
        }
    });
});
// ====== General Form Validation ======
document.addEventListener("DOMContentLoaded", () => {

    const forms = document.querySelectorAll("form");

    forms.forEach(form => {
        form.addEventListener("submit", function(e) {
            e.preventDefault(); // منع الإرسال مؤقتًا

            let valid = true;

            // جمع كل الحقول
            const inputs = form.querySelectorAll("input");

            inputs.forEach(input => {
                const errorElement = input.nextElementSibling; // small.error

                if (!input.value.trim()) {
                    errorElement.textContent = `⚠ Please enter ${input.placeholder.split(' ')[2] || 'this field'}!`;
                    errorElement.style.color = "#ff4d4d";
                    input.style.borderColor = "#ff4d4d";
                    valid = false;
                } else {
                    errorElement.textContent = "";
                    input.style.borderColor = "#4d6aff"; // default border color
                }
            });

            if(valid){
                // كل شيء تمام
                alert("Form submitted successfully!");
                form.reset();
                inputs.forEach(input => input.style.borderColor = "#ccc");
            }
        });
    });

});

const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // يمنع الفورم من الإرسال مباشرة

  const email = emailInput.value.trim();
  
  if (!email) {
    emailError.textContent = "Email is required!";
  } else if (!email.includes('@')) {
    emailError.textContent = "Email must contain @";
  } else {
    emailError.textContent = "";
    form.submit(); // لو كل شيء صح، يرسل الفورم
  }
});

