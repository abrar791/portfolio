const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');

let activeLink = 0;

links.forEach((link, i) => {
    link.addEventListener('click', () => {
        if(activeLink != i){
            links[activeLink].classList.remove('active');
            link.classList.add('active');
            sections[activeLink].classList.remove('active');

            setTimeout(() => {
                activeLink = i;
                sections[i].classList.add('active');
            }, 1000);
        }
    });
});

const form = document.getElementById('contact-form');
    const btn   = document.getElementById('submit-btn');

    if (form && btn) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();

            btn.disabled = true;
            btn.textContent = 'Sending...';

            try {
                const formData = new FormData(form);

                const response = await fetch(
                    'https://script.google.com/macros/s/AKfycbzZ4g8n6lyl9qNuNbz2ejT7MKIBCd1MednMcOqUgGxxiS-w-cwlWoIscvmxywJ1v5mquA/exec',
                    { method: 'POST', body: formData }
                );

                const result = await response.json();

                if (result.result === 'success') {
                    alert('Thank you! Your message has been sent successfully ✓');
                    form.reset();
                } else {
                    alert('Something went wrong. Please try again.');
                }
            } catch (err) {
                alert('Connection error – please check your internet or try later.');
                console.error('Form submission failed:', err);
            }

            btn.disabled = false;
            btn.textContent = 'Contact';
        });
    }