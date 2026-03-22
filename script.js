// Smooth Scroll for Service Cards
function scrollToContact() {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
}

// Nav Link Smooth Scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Navbar offset
                behavior: 'smooth'
            });
        }
    });
});

// Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const btn = this.querySelector('button');
        const model = document.getElementById('model').value;
        
        btn.innerText = "SENDING TICKET...";
        btn.disabled = true;

        setTimeout(() => {
            alert(`SUCCESS: Ticket generated for ${model}. We will contact you via email.`);
            btn.innerText = "Submit Ticket";
            btn.disabled = false;
            contactForm.reset();
        }, 1500);
    });
}