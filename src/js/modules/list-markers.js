module.exports = () => {
    let tabList = document.querySelectorAll('.tab__list');

    tabList.forEach(tab => {
        if (tab.offsetParent.dataset.title === 'Горный велосипед' || tab.offsetParent.offsetParent.dataset.title === 'Горный велосипед') {
            // console.log(tab.offsetParent.dataset.title);
            // console.log(tab.offsetParent.offsetParent.dataset.title);
            let itemsList = tab.querySelectorAll('li');
            itemsList.forEach(item => {
                item.classList.add('mountain');
            });
        } else {
            let itemsList = tab.querySelectorAll('li');
            itemsList.forEach(item => {
                item.classList.add('women');
            });
        }
    });
}


