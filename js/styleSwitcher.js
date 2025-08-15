

const bodySkin = document.querySelectorAll('.body-skin'),
    totalBodySkin = bodySkin.length;

for (let i = 0; i < totalBodySkin; i++) {
    bodySkin[i].addEventListener('change', function(){
        if(this.value === 'dark'){
            document.body.className = 'dark';
        } else {
            document.body.className = '';
        }
    });
}

document.querySelector('.toggle-style-switcher').addEventListener('click', () => {
    document.querySelector('.style-switcher').classList.toggle('open');
});