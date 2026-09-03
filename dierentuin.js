

// var dieren = ['Lion', 'Elephant', 'Tiger', 'Wolf', 'Sheep', 'Bear', 'Monkey', 'Eagle', 'Panda', 'Hippo', 'Shark', 'Rhino', 'Turtle'];

var dieren = ['Lion', 'Elephant', 'Tiger', 'Wolf', 'Sheep'];

var index = 0;

function volgende()
{
    index++;

    if (index > dieren.length - 1)
        index = 0;

    toonFoto();
}

function vorige()
{
    index--;

    if (index < 0)
        index = dieren.length - 1;

    toonFoto();
}

function toonFoto()
{
    document.getElementById('plaatje').src = `https://xanderwemmers.nl/${dieren[index]}.jpg`;
    document.getElementById('dierennaam').innerHTML = dieren[index];
    document.getElementById('aantal').innerHTML = `Foto ${index + 1} van ${dieren.length}`;
}

function randomFoto()
{
    // Math.random geeft een getal tussen 0 en 1
    index = Math.random() * dieren.length;
    index = Math.floor(index);
    console.log(index);
    toonFoto();

}
