(function() {
    // Veera Venkata Satya Vrath Juvvadi
    // ITMD 541-01 Graduate Student

    // 1. Change hero headline
    const heroHeadline = document.querySelector('#hero h1');
    if (heroHeadline) {
        heroHeadline.textContent = 'Uplift Your Brand with Stellar Marketing';
        console.log('Hero headline updated');
    } else {
        console.error('Hero headline not found');
    }

    // 2. Change hero subtext with bold and italic
    const heroSubtext = document.querySelector('#hero p');
    if (heroSubtext) {
        heroSubtext.innerHTML = 'Utilize cutting-edge strategies from <b><i>Stellar Marketing</i></b> to help your business thrive and excel.';
        console.log('Hero subtext updated');
    } else {
        console.error('Hero subtext not found');
    }

    // 3. Change hero background image
    const heroSection = document.querySelector('#hero');
    if (heroSection) {
        heroSection.style.backgroundImage = 'url(https://picsum.photos/id/683/1280/720)';
        heroSection.style.backgroundSize = 'cover';
        heroSection.style.backgroundPosition = 'center';
        console.log('Hero background image updated');
    } else {
        console.error('Hero section not found');
    }

    // 4. Match navbar background color to footer
    const navbar = document.querySelector('header'); // Target the header, not just nav
    const footer = document.querySelector('footer');
    if (navbar && footer) {
        const footerBgColor = window.getComputedStyle(footer).backgroundColor; // rgb(31, 41, 55)
        navbar.style.backgroundColor = footerBgColor;
        navbar.style.setProperty('background-color', footerBgColor, 'important');
        console.log('Navbar background color set to match footer:', footerBgColor);
        console.log('Navbar current color:', window.getComputedStyle(navbar).backgroundColor);
    } else {
        console.error('Navbar or footer not found');
    }

    // 5. Remove Get Started CTA
    const ctaButton = document.querySelector('#hero a');
    if (ctaButton) {
        ctaButton.remove();
        console.log('CTA button removed');
    } else {
        console.warn('CTA button not found');
    }

    // 6. Center align section headings
    const sectionHeadings = document.querySelectorAll('#services h2, #solutions h2, #contact h2');
    if (sectionHeadings.length > 0) {
        sectionHeadings.forEach(heading => {
            heading.style.textAlign = 'center';
            heading.style.setProperty('text-align', 'center', 'important');
            console.log(`Centered heading: ${heading.textContent}`);
        });
    } else {
        console.error('Section headings not found');
    }

    // 7. Change services icons color
    const serviceIcons = document.querySelectorAll('#services .material-symbols-outlined');
    if (serviceIcons.length > 0) {
        serviceIcons.forEach(icon => {
            icon.style.color = '#47C714';
            icon.style.setProperty('color', '#47C714', 'important');
        });
        console.log(`Found and updated ${serviceIcons.length} service icons`);
    } else {
        console.error('Service icons not found');
    }

    // 8. Change digital marketing icon to 'Ads Click'
    const digitalMarketingIcon = document.querySelector('#services .material-symbols-outlined:first-child');
    if (digitalMarketingIcon) {
        digitalMarketingIcon.textContent = 'ads_click';
        console.log('Digital marketing icon updated to "ads_click"');
    } else {
        console.error('Digital marketing icon not found');
    }

    // 9. Create style tag for solutions tiles layout
    const styleTag = document.createElement('style');
    styleTag.textContent = `
        @media (min-width: 1024px) {
            #solutions [data-section="product_cards"] {
                display: grid !important;
                grid-template-columns: repeat(4, 1fr) !important;
                gap: 20px !important;
            }
        }
    `;
    document.head.appendChild(styleTag);
    console.log('Solutions tiles layout CSS applied');

    // 10. Change Musicians image
    const musiciansTile = document.querySelector('#solutions [data-section="product_cards"] > div:nth-child(4) img'); // Musicians is 4th
    if (musiciansTile) {
        musiciansTile.src = 'https://picsum.photos/id/453/400/300';
        console.log('Musicians tile image updated to:', musiciansTile.src);
    } else {
        console.error('Musicians tile image not found');
    }

    // Graduate Requirements: Form handling
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const nameInput = contactForm.querySelector('input[name="name"]').value.trim();
            const emailInput = contactForm.querySelector('input[name="email"]').value.trim();

            if (nameInput && emailInput) {
                alert(`Thank you, ${nameInput}! We will be in touch with you shortly at ${emailInput}.`);
            } else {
                alert('Please provide a name and email.');
            }
        });
        console.log('Form handler attached');
    } else {
        console.error('Contact form not found');
    }

    console.log('Lab 4 script executed - check errors above if changes didn\'t apply');
})();