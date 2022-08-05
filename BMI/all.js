const height = document.querySelector('#height');
const weight = document.querySelector('#weight');
const calculation = document.querySelector('.calculation');
const record = document.querySelector('.record');
const header = document.querySelector('.header');
const resultNumber = document.querySelector('.result-number');
const resultText = document.querySelector('.result-text');
const resultBMI = document.querySelector('.result-BMI');
var i = 0;

window.onload = function () {
    var bmiData = localStorage.getItem('getData');
    if (bmiData == null) {
        bmiData = "<h1>BMI 紀錄</h1>"
    }
    record.innerHTML = bmiData;

    const deleteBtn = document.querySelectorAll('.record-item');

    for (let index = 0; index < deleteBtn.length; index++) {
        intStr1 = deleteBtn[index].id.replace(/[A-Za-z$-]/g, "");
        i = parseInt(intStr1);
        const deleteBtn_ = document.querySelector('#deleteBtn' + intStr1);
        const recordItem = document.querySelector('#record-item' + intStr1);
        deleteBtn_.addEventListener('click', function () {

            var getItem = localStorage.getItem('getData');
            var deleteData = deleteBtn_.parentElement;
            var deleteDataHTML = deleteData.outerHTML;
            recordItem.remove();
            getItem = getItem.replace(deleteDataHTML, '');
            localStorage.setItem('getData', getItem)
        })

    }

}

calculation.addEventListener('click', function () {
    let re = /^[-]?[0-9]*\.?[0-9]+(eE?[0-9]+)?$/;
    if (!re.test(height.value) || !re.test(weight.value)) {
        alert('請輸入正確數值');
        return;
    }

    const bmi = weight.value / ((height.value / 100) * (height.value / 100));
    var bmi1 = bmi.toFixed(2);
    var str = document.createElement('div');
    str.classList.add('record-item');
    record.appendChild(str);


    var result = document.createElement('div');
    result.classList.add('result');
    header.appendChild(result);

    var resultNumber = document.createElement('p');
    resultNumber.classList.add('result-number');
    result.appendChild(resultNumber);

    var resultBMI = document.createElement('p');
    resultBMI.classList.add('result-BMI');
    result.appendChild(resultBMI);

    var resultText = document.createElement('span');
    resultText.classList.add('result-text');
    result.appendChild(resultText);

    var reset = document.createElement('a');
    reset.classList.add('reset');
    reset.href = 'javascript:;';
    reset.addEventListener('click', function () {
        calculation.removeAttribute('style');
        result.remove();
        height.value = '';
        weight.value = '';
    })
    result.appendChild(reset);

    calculation.style['opacity'] = '0';
    calculation.style['z-index'] = '0';
    resultBMI.innerHTML = 'BMI';
    resultNumber.innerHTML = bmi1;


    if (bmi1 < 18.5) {
        result.style['border-color'] = 'rgb(49, 186, 249)';
        result.style['color'] = 'rgb(49, 186, 249)';
        result.style['opacity'] = '1';
        result.style['z-index'] = '1';
        reset.style['background-color'] = 'rgb(49, 186, 249)';
        resultText.innerHTML = '過瘦';
    } else if (18.5 <= bmi1 && bmi1 < 24) {
        result.style['border-color'] = 'rgb(134, 215, 63)';
        result.style['color'] = 'rgb(134, 215, 63)';
        result.style['opacity'] = '1';
        result.style['z-index'] = '1';
        reset.style['background-color'] = 'rgb(134, 215, 63)';
        resultText.innerHTML = '理想';
    } else if (24 <= bmi1 && bmi1 < 27) {
        result.style['border-color'] = 'rgb(255, 152, 45)';
        result.style['color'] = 'rgb(255, 152, 45)';
        result.style['opacity'] = '1';
        result.style['z-index'] = '1';
        reset.style['background-color'] = 'rgb(255, 152, 45)';
        resultText.innerHTML = '過重';
    } else if (27 <= bmi1 && bmi1 < 30) {
        result.style['border-color'] = 'rgb(255, 108, 3)';
        result.style['color'] = 'rgb(255, 108, 3)';
        result.style['opacity'] = '1';
        result.style['z-index'] = '1';
        reset.style['background-color'] = 'rgb(255, 108, 3)';
        resultText.innerHTML = '輕度肥胖';
    } else if (30 <= bmi1 && bmi1 < 35) {
        result.style['border-color'] = 'rgb(255, 108, 3)';
        result.style['color'] = 'rgb(255, 108, 3)';
        result.style['opacity'] = '1';
        result.style['z-index'] = '1';
        reset.style['background-color'] = 'rgb(255, 108, 3)';
        resultText.innerHTML = '中度肥胖'
    } else if (bmi1 >= 35) {
        result.style['border-color'] = ' rgb(255, 18, 0)';
        result.style['color'] = ' rgb(255, 18, 0)';
        result.style['opacity'] = '1';
        result.style['z-index'] = '1';
        reset.style['background-color'] = ' rgb(255, 18, 0)';
        resultText.innerHTML = '重度肥胖';
    }



    var iconImg = document.createElement('img');
    iconImg.src = "./assets/icons_loop.png";
    reset.appendChild(iconImg);

    var itemMask = document.createElement('div');
    itemMask.classList.add('item-mask');
    if (bmi1 < 18.5) {
        itemMask.style['background-color'] = 'rgb(49, 186, 249)';
    } else if (18.5 <= bmi1 && bmi1 < 24) {
        itemMask.style['background-color'] = ' rgb(134, 215, 63)';
    } else if (24 <= bmi1 && bmi1 < 27) {
        itemMask.style['background-color'] = ' rgb(255, 152, 45)';
    } else if (27 <= bmi1 && bmi1 < 30) {
        itemMask.style['background-color'] = '  rgb(255, 108, 3)';
    } else if (30 <= bmi1 && bmi1 < 35) {
        itemMask.style['background-color'] = 'rgb(255, 108, 3)';
    } else if (bmi1 >= 35) {
        itemMask.style['background-color'] = ' rgb(255, 18, 0)';
    }
    str.appendChild(itemMask);
    var itemResult = document.createElement('div');
    itemResult.classList.add('item-result');
    if (bmi1 < 18.5) {
        itemResult.innerHTML = '過瘦';
    } else if (18.5 <= bmi1 && bmi1 < 24) {
        itemResult.innerHTML = '理想';
    } else if (24 <= bmi1 && bmi1 < 27) {
        itemResult.innerHTML = '過重';
    } else if (27 <= bmi1 && bmi1 < 30) {
        itemResult.innerHTML = '輕度肥胖';
    } else if (30 <= bmi1 && bmi1 < 35) {
        itemResult.innerHTML = '中度肥胖';
    } else if (bmi1 >= 35) {
        itemResult.innerHTML = '重度肥胖';
    }
    str.appendChild(itemResult);


    var itemSectionml30 = document.createElement('div');
    itemSectionml30.classList.add('item-section');
    itemSectionml30.classList.add('ml-30');
    str.appendChild(itemSectionml30);

    var title = document.createElement('span');
    title.classList.add('title');
    title.innerHTML = 'BMI';
    itemSectionml30.appendChild(title);

    var number = document.createElement('span');
    number.classList.add('number');
    number.innerHTML = bmi1;
    itemSectionml30.appendChild(number);

    var itemSectionml42 = document.createElement('div');
    itemSectionml42.classList.add('item-section');
    itemSectionml42.classList.add('ml-42');
    str.appendChild(itemSectionml42);

    var title1 = document.createElement('span');
    title1.classList.add('title');
    title1.innerHTML = 'weight';
    itemSectionml42.appendChild(title1);

    var number1 = document.createElement('span');
    number1.classList.add('number');
    number1.innerHTML = weight.value + 'kg';
    itemSectionml42.appendChild(number1);

    var itemSectionml43 = document.createElement('div');
    itemSectionml43.classList.add('item-section');
    itemSectionml43.classList.add('ml-42');
    str.appendChild(itemSectionml43);

    var title2 = document.createElement('span');
    title2.classList.add('title');
    title2.innerHTML = 'height';
    itemSectionml43.appendChild(title2);

    var number2 = document.createElement('span');
    number2.classList.add('number');
    number2.innerHTML = height.value + 'cm';
    itemSectionml43.appendChild(number2);

    var date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const joined = [day, month, year].join('-');

    var itemDate = document.createElement('div');
    itemDate.classList.add('item-date');
    itemDate.innerHTML = joined;
    str.appendChild(itemDate);

    var img = document.createElement('img');
    i = i + 1;
    img.setAttribute("id", "deleteBtn" + i);
    str.setAttribute("id", "record-item" + i);
    img.classList.add('deleteBtn');
    img.src = "./assets/iconfinder_basket_1814090.png";
    str.appendChild(img);
    const deleteBtn = document.querySelector('#deleteBtn' + i);
    const recordItem = document.querySelector('#record-item' + i);
    deleteBtn.addEventListener('click', function () {

        var getItem = localStorage.getItem('getData');
        var deleteData = deleteBtn.parentElement;
        var deleteDataHTML = deleteData.outerHTML;
        recordItem.remove();
        getItem = getItem.replace(deleteDataHTML, '');
        localStorage.setItem('getData', getItem)
    })

    var getData = record.innerHTML
    localStorage.setItem('getData', getData)
})