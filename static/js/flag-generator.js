const colours = [
    'black',
    'darkred',
    'orangered',
    'darkgreen',
    'green',
    'teal',
    'darkslateblue',
    'purple',
    'mediumvioletred',
    'saddlebrown',
];

const brightColours = [
    'greenyellow',
    'whitesmoke',
    'gold',
]

const bandAmount = [1, 2, 2, 3, 3, 3, 3, 4, 4, 5];

const bandOrientation = [
    'horizontal',
    'vertical',
    // diagonal ?
];

const shapeType = [
    'circle',
    'favorite',
    'remove_red_eye',
    'visibility_off',
    'star',
    'star',
    'triangle',
    'triangle',
    'pets',
    'brightness_2',
    'brightness_3',
    'brightness_4',
    'brightness_5',
    'brightness_7',
    'bedtime',
    'brightness_low',
    'pie_chart',
    'camera',
    'gamepad',
    'adjust',
    'navigation',
    'public',
    'public_off',
    'pest_control',
    'trip_origin',
    'tonality',
    'handyman',
    'wine_bar',
    'power',
    'stairs',
    'science',
    'ac_unit',
    'spa',
    'group_work',
    'pending',
    'view_carousel',
    'album',
    'games',
    'block',
    'remove_circle',
    'gps_fixed',
    'self_improvement',
    'lens',
    'trip_origin',
    'coronavirus',
    'build',
    'explore',
    'settings',
    'settings_input_svideo',
    'supervised_user_circle',
    'thumb_up',
    'sports_soccer',
    'emoji_nature',
    'location_city',
    'sports_volleyball',
    'local_police',
    'wb_sunny',
    'hdr_strong',
    'filter_vintage',
    'details',
    'flash_on',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
]

const flag = document.querySelector('.flag');

document.querySelector('.generate').addEventListener('click', (evt) => {
    evt.preventDefault();
    generateRandomFlag(colours);
});


document.addEventListener('DOMContentLoaded', () => generateRandomFlag(colours));

function clear() {
    // Reset output
    flag.classList.remove('flag--vertical');
    while (flag.firstChild) {
        flag.removeChild(flag.firstChild);
    }
}

function createFlag(amount, orientation, colourList, shape) {
    // Set orientation
    flag.classList.add('flag--' + orientation);

    // Set bands
    for (let i = 0; i < amount; i += 1) {
        let band = document.createElement('div');
        band.className = 'band';
        band.style.background = colourList.shift();
        flag.appendChild(band);
    }

    // Set shape
    if (shape) {
        let shapeElement = document.createElement('div');
        if (['circle', 'triangle'].indexOf(shape) !== -1) {
            shapeElement.className = shape;
            shapeElement.style.borderLeftColor = colourList.shift();
        } else {
            shapeElement.className = 'icon';
            shapeElement.innerHTML = shape;
            shapeElement.style.color = colourList.shift();
        }
        flag.appendChild(shapeElement);
    }
}

function generateRandomFlag(localColours) {
    clear();
    // Get options
    const shape = pick(shapeType);
    const orientation = shape === 'triangle' ? 'horizontal' : pick(bandOrientation);
    const amount = pick(bandAmount);
    let availableColours = shape ? colours : [...colours, ...brightColours];
    colourList = pick(availableColours, amount + !!shape);
    colourList = Array.isArray(colourList) ? colourList : [colourList];
    if (!!shape && Math.random() > 0.33) {
        colourList[colourList.length - 1] = pick(brightColours);
    }

    // Output
    encodeOptions(amount, orientation, colourList, shape);
    createFlag(amount, orientation, colourList, shape)
}

function pick(paramList, amount = 1) {
    const list = paramList.slice();
    const splice = (list) => list.splice(Math.floor(Math.random() * list.length), 1)[0];
    if (amount === 1) { return splice(list); }
    let result = [];
    for (let i = 0; i < amount; i += 1) {
        result.push(splice(list));
    }
    return result;
}

function encodeOptions(
    bandAmount,
    bandOrientation,
    bandColours,
    shape,
) {
    let encodedString = '' + bandAmount;
    encodedString += bandOrientation[0];
    bandColours.forEach(bandColour => {
        let index = colours.indexOf(bandColour)
        encodedString += index === -1
            ? ('abc'[brightColours.indexOf(bandColour)])
            : index;
    });
    encodedString = shape
        ? encodedString.substring(0, encodedString.length - 1) + shape[0] + encodedString[encodedString.length - 1]
        : encodedString;

}
