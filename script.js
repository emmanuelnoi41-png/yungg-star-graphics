document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("whatsappForm");
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const selectedServicesNodes = document.querySelectorAll('input[name="service"]:checked');
        const selectedServicesArray = Array.from(selectedServicesNodes).map(input => input.value);
        
        if(selectedServicesArray.length === 0) {
            alert("Please select at least one service.");
            return;
        }

        const servicesString = selectedServicesArray.join(", ");
        
        const description = document.getElementById("descriptionBox").value.trim();
        
        if(!description) {
            alert("Please enter a project description.");
            return;
        }
        
        const customerName = document.getElementById("customerName").value.trim();
        if(!customerName) {
            alert("Please enter your name.");
            return;
        }
        
        const finalMessage = `Hello Yungg Star Graphics! My name is ${customerName} and I want to order: ${servicesString}\n\nProject Description: ${description}`;
        
        const encodedMessage = encodeURIComponent(finalMessage);
        const whatsappNumber = "233533057655";
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        
        window.open(whatsappLink, "_blank");
    });
    
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 150) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const animatedElements = document.querySelectorAll('.heroContent, .serviceCard, .aboutContent, .testimonialCard, .contactWrapper, .sectionTitle, .heroTitle, .heroSubtitle');
    animatedElements.forEach((el, index) => {
        el.classList.add('fade-up');
        if(el.tagName === 'H1' || el.tagName === 'H2' || el.tagName === 'P') {
            el.style.transitionDelay = `${0.1 * (index % 3)}s`;
        }
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

    const faqQuestions = document.querySelectorAll('.faqQuestion');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            question.classList.toggle('active');
            const answer = question.nextElementSibling;
            if (question.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.style.maxHeight = 0;
            }
        });
    });
});
