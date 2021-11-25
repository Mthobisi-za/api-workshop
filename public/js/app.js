async function colors() {
    var colors = await axios.get('https://api-tutor.herokuapp.com/v1/colors');
    var rawTemplate = document.querySelector('.elements').innerHTML;
    var template = Handlebars.compile(rawTemplate)
    var result = template({ data: colors.data });
    var div = document.querySelector('.colors');
    div.innerHTML = result;
}
async function brands() {
    var brands = await axios.get('https://api-tutor.herokuapp.com/v1/makes');
    var rawTemplate = document.querySelector('.elements').innerHTML;
    var template = Handlebars.compile(rawTemplate)
    var result = template({ data: brands.data });
    var div = document.querySelector('.brands');
    div.innerHTML = result;
    console.log(result)
}
async function cars() {
    var brands = await axios.get('https://api-tutor.herokuapp.com/v1/cars');
    var rawTemplate = document.querySelector('.secele').innerHTML;
    var template = Handlebars.compile(rawTemplate)
    var result = template({ data: brands.data });
    var div = document.querySelector('.cars');
    div.innerHTML = result;
    console.log(result)
}
colors();
brands();
cars();