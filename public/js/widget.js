async function actualData() {
    var option = document.querySelector('.optionval');
    var actualOption = option.options[option.selectedIndex].value;
    var data = await axios.get('http://api-tutor.herokuapp.com/v1/cars/color/' + actualOption);
    var rawTemplate = document.querySelector('.actualData').innerHTML;
    var template = Handlebars.compile(rawTemplate);
    var fullTemplate = template({ data: data.data });
    var div = document.querySelector('.dynamic');
    div.innerHTML = fullTemplate;
}
async function widget() {
    var data = await axios.get('http://api-tutor.herokuapp.com/v1/colors');

    var rawTemplate = document.querySelector('.options').innerHTML;
    var template = Handlebars.compile(rawTemplate);
    var fullTemplate = template({ data: data.data });
    var div = document.querySelector('.widget');
    div.innerHTML = fullTemplate;


    var rawTemplate2 = document.querySelector('.fullscriptoption1').innerHTML;
    var template2 = Handlebars.compile(rawTemplate2);
    var fullTemplate2 = template2({ data: data.data });
    var div2 = document.querySelector('.full1');
    div2.innerHTML = fullTemplate2;

    var btn = document.querySelector('.btn');
    btn.addEventListener('click', actualData);
}
async function makeActualData() {
    var option = document.querySelector('.makeoptionval');
    var actualOption = option.options[option.selectedIndex].value;
    var data = await axios.get('http://api-tutor.herokuapp.com/v1/cars/make/' + actualOption);
    var rawTemplate = document.querySelector('.actualData').innerHTML;
    var template = Handlebars.compile(rawTemplate);
    var fullTemplate = template({ data: data.data });
    var div = document.querySelector('.dynamic');
    div.innerHTML = fullTemplate;
    console.log(data.data);
}
async function fullmakeActualData() {
    var option1 = document.querySelector('.makeoptionval1');
    var actualOption1 = option1.options[option1.selectedIndex].value;
    var option2 = document.querySelector('.makeoptionval2');
    var actualOption2 = option2.options[option2.selectedIndex].value;
    //https://api-tutor.herokuapp.com/v1/cars/make/Toyota/color/Blue
    var data = await axios.get('http://api-tutor.herokuapp.com/v1/cars/make/' + actualOption2 + '/color/' + actualOption1);
    var rawTemplate = document.querySelector('.actualData').innerHTML;
    var template = Handlebars.compile(rawTemplate);
    var fullTemplate = template({ data: data.data });
    var div = document.querySelector('.dynamic');
    div.innerHTML = fullTemplate;
    console.log(data.data);
}
async function widgetMake() {
    var data = await axios.get('http://api-tutor.herokuapp.com/v1/makes');
    var rawTemplate = document.querySelector('.makeOptionval').innerHTML;
    var template = Handlebars.compile(rawTemplate);
    var fullTemplate = template({ data: data.data });
    var div = document.querySelector('.makeWidget');
    div.innerHTML = fullTemplate;

    var rawTemplate = document.querySelector('.fullscriptoption2').innerHTML;
    var template = Handlebars.compile(rawTemplate);
    var fullTemplate = template({ data: data.data });
    var div = document.querySelector('.full2');
    div.innerHTML = fullTemplate;


    var btn = document.querySelector('.makebtn');
    btn.addEventListener('click', makeActualData)

    var btns = document.querySelector('.fullbtn2');
    btns.addEventListener('click', fullmakeActualData)
}

widget();
widgetMake()