document.addEventListener("DOMContentLoaded", function () {

    const btnMenu = document.querySelector(".header__btn-menu");
    const headerNavigation = document.querySelector(".header__navigation");
    const bodyMain = document.querySelector('body');

    btnMenu.addEventListener("mouseup", function () {
        btnMenu.classList.toggle("_active");
        headerNavigation.classList.toggle("_active");
        bodyMain.classList.toggle('_active');
    });

    document.addEventListener("mouseup", function (event) {
        if (!event.target.closest(".header__navigation") && !event.target.classList.contains("header__btn-menu")) {
            btnMenu.classList.remove("_active");
            headerNavigation.classList.remove("_active");
            bodyMain.classList.remove('_active');
        }
    });

    headerNavigation.addEventListener("mouseup", function (event) {
        event.stopPropagation();
    });


    document.querySelector(".select-selected").addEventListener("click", function () {
        this.nextElementSibling.classList.toggle("show");
        document.querySelector(".custom-select").classList.toggle("_active");
    });

    const selectItems = document.querySelectorAll(".select-item");
    for (const item of selectItems) {
        item.addEventListener("click", function () {
            const value = this.getAttribute("data-value");
            const selectedText = this.textContent;
            document.querySelector(".select-selected").textContent = selectedText;
            document.querySelector(".select-selected").setAttribute("data-value", value);
            document.querySelector(".select-items").classList.remove("show");
        });
    }

    document.addEventListener("click", function (event) {
        if (!event.target.matches(".select-selected")) {
            const dropdown = document.querySelector(".select-items");
            if (dropdown.classList.contains("show")) {
                dropdown.classList.remove("show");
            }

            document.querySelector(".custom-select").classList.remove("_active");
        }
    });

    const defaultLanguage = "en";
    const defaultText = document.querySelector(`[data-value="${defaultLanguage}"]`).textContent;
    document.querySelector(".select-selected").textContent = defaultText;
    document.querySelector(".select-selected").setAttribute("data-value", defaultLanguage);


    const header = document.getElementById('header');

    function addScrollClass() {
        if (window.scrollY >= 20) {
            header.classList.add('_scroll');
        } else {
            header.classList.remove('_scroll');
        }
    }

    window.addEventListener('scroll', addScrollClass);



    /* FORM */
    const form = document.getElementById('form_subscribe');
    const input = document.getElementById('input-sibscribe');
    const label = document.querySelector('.home-subscribe__label');
    const errorSpan = document.querySelector('.error');
    const successSpan = document.querySelector('.succesful');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const emailValue = input.value.trim(); 

        if (!validateEmail(emailValue)) {
            errorSpan.textContent = 'Please enter a valid email address';
            label.classList.add('error');
            successSpan.classList.remove('_active');
        } else {
        
            successSpan.classList.add('_active');
            input.value = '';

            setTimeout(() => {
                successSpan.classList.remove('_active');
            }, 5000);

            errorSpan.textContent = '';
            label.classList.remove('error');
        }
    });

    input.addEventListener('input', function () {
        const emailValue = input.value.trim();

        if (!validateEmail(emailValue)) {
            errorSpan.textContent = 'Please enter a valid email address';
            label.classList.add('error');
        } else {
            errorSpan.textContent = '';
            label.classList.remove('error');
        }
    });

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});