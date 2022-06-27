import Slider from './slider';

export default class MainSlider extends Slider {
    constructor(btns) {
        super(btns);
    };


    showSlides(n) {
        if (n > this.slides.length) {
            this.slideIndex = 1;
        }

        if (n < 1) {
            this.slideIndex = this.slides.length;
        }

        try {
            this.hanson.style.opacity = '0';
            if (n === 3) {         
                setTimeout(() => {
                    this.hanson.style.opacity = '1';
                    this.hanson.classList.add('animated', 'slideInUp')
                }, 3000)
            } else {
                this.hanson.classList.remove('animated', 'slideInUp')
            }
        } catch (e) {}

        [...this.slides].forEach(slide => {
           slide.style.display = 'none';
        });


        this.slides[this.slideIndex - 1].style.display = 'block';
    }

    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }

    bindTriggers() {
        this.btns.forEach(item => {
            item.addEventListener('click', () => {
                this.plusSlides(1);
            });

            item.parentNode.previousElementSibling.addEventListener('click', (e) => {
                e.preventDefault();
                this.slideIndex = 1;
                this.showSlides(this.slideIndex);
            });
        });

        document.querySelectorAll('.prevmodule').forEach(item => {
            item.addEventListener('click', () => this.plusSlides(-1))
        });

        document.querySelectorAll('.btn.menu__block-schedule').forEach((item, idx) => {
            item.addEventListener('click', () => {
                if (window.location.pathname.includes('modules.html')) {
                    window.location.href = "/appointment.html"
                }
                this.plusSlides(5-idx)
            })
        });

        document.querySelectorAll('.sidecontrol > a').forEach(item => {
            item.addEventListener('click', () => {
                if (window.location.pathname.includes('modules.html')) {
                    window.location.href = "/"
                }
            })
        });
    }

    render() {
        if (this.container) {
            try {
                this.hanson = document.querySelector('.hanson');
            } catch (e) {}
    
            this.showSlides(this.slideIndex);

            this.bindTriggers();
        }
    }
}