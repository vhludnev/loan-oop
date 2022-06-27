export default class Download {
    constructor(triggers) {
        this.btns = document.querySelectorAll(triggers);
        this.path = 'assets/img/mainbg.jpg';
    }

   downloadItem(path) {
        const element = document.createElement('a');

        element.setAttribute('href', path);
        element.setAttribute('download', 'nice_picture.jpeg');

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
   }

   init() {
        this.btns.forEach(item => {
            item.style.cursor = 'pointer';
            item.classList.add('animated');
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                item.classList.add('flash');
                setTimeout(()=> {
                    item.classList.remove('flash');
                }, 500)
                this.downloadItem(this.path);
            });
        });
    }
}