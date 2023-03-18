class ScrollToPoem {
    constructor() {
        this.imagesLoadedCount = 0;
    }

    setImagesCount(count) {
        this.imagesCount = count;
    }

    ImageOnload(){
        this.imagesLoadedCount++;
        if(this.imagesLoadedCount === this.imagesCount){
            this.Scroll();
        }
    };

    Scroll(){
        const idStartPoem = this.getUrlVars()['poem'];
        console.log(this.getUrlVars()['poem'])
        if(idStartPoem != 0) {
            const startPoem = document.getElementById(idStartPoem);
            startPoem.scrollIntoView({behavior: "smooth"});
        }
    };

    getUrlVars() {
        let vars = {};
        let parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
            vars[key] = value;
        });
        return vars;
    }
}

export default new ScrollToPoem();