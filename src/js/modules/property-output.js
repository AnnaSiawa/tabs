module.exports = () => {
    let tabCharact = document.querySelectorAll('.tab__charact');
    if (tabCharact) {
        tabCharact.forEach(tab => {
            let textareaField = tab.querySelector('.textarea');
            let textareaBtn = tab.querySelector('#btn-textarea');
            let tabList = tab.querySelector('.tab__list');
            let okBtn = tab.querySelector('#btn-ok');
            let removeBtn = tab.querySelector('#btn-cancel');

            let tabItemList = tab.querySelectorAll('.tab__item');
            let arrTabItemList = [...tabItemList];
            let newArrTabItemList = [];

            textareaBtn.addEventListener('click', () => {
                if (textareaField.value !== '') {
                    let newItemList = document.createElement('li');
                    newItemList.innerHTML = textareaField.value;
                    tabList.append(newItemList);
                    if (tabList.offsetParent.dataset.title === 'Горный велосипед' || tabList.offsetParent.offsetParent.dataset.title === 'Горный велосипед') {
                        newItemList.className = 'tab__item mountain';
                    } else {
                        newItemList.className = 'tab__item women';
                    }
                    newArrTabItemList.push(newItemList);
                    // console.log(newArrTabItemList);
                    textareaField.value = '';
                }
            });

            okBtn.addEventListener('click', () => {
                arrTabItemList = arrTabItemList.concat(newArrTabItemList);
                // console.log(arrTabItemList);
                newArrTabItemList = [];
                okBtn.classList.add('disabled');
                removeBtn.classList.add('disabled');
            });

            removeBtn.addEventListener('click', () => {
                newArrTabItemList.forEach(elem => {
                    elem.remove();
                })
                newArrTabItemList = [];
                textareaField.value = '';
                okBtn.classList.add('disabled');
                removeBtn.classList.add('disabled');
            });

            textareaField.addEventListener('input', () => {
                okBtn.classList.remove('disabled');
                removeBtn.classList.remove('disabled');
            });
        });
    }
}
