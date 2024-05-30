
async function loadJsonData(url) {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Network response was not ok. Status code: ' + response.status);
    }

    return await response.json();
}

function toDataSet(json) {
    let result = [];

    for (let i = 0; i < json.length; i++) {
        const quantity = json[i].quantity || 1;
        for (let j = 0; j < quantity; j++) {
            result.push(json[i])
        }
    }

    return result
}

const dataSets = {
    items: [
        'foo',
        'bar',
    ],
    coin: [
        {title: 'Action',  image: '/frames/ppOverheat.gif'},
        {title: 'Adventure', image: '/frames/ppOverheat.gif'},
        {title: 'Stealth',  image: '/frames/ppOverheat.gif'},
        {title: 'Survival Horror', image: '/frames/ppOverheat.gif'},
        {title: 'FPS',  image: '/frames/ppOverheat.gif'},
        {title: 'Racing', image: '/frames/ppOverheat.gif'},
        {title: 'Strategy', image: '/frames/ppOverheat.gif'},
        {title: 'Platformer', image: '/frames/ppOverheat.gif'},
    ],
    coin2: [
        {title: '101',  image: '/coins/007.png'},
        {title: '102',  image: '/coins/007.png'},
        {title: '103', image: '/coins/007.png'},
        {title: '104',  image: '/coins/007.png'},
        {title: '105',  image: '/coins/007.png'},
        {title: '106', image: '/coins/007.png'},
        {title: '107',  image: '/coins/007.png'},
        {title: '108',  image: '/coins/007.png'},
        {title: '109',  image: '/coins/007.png'},
        {title: '110', image: '/coins/007.png'},
        {title: '111',  image: '/coins/007.png'},
        {title: '112', image: '/coins/007.png'},
        {title: '113', image: '/coins/007.png'},
        {title: '114', image: '/coins/007.png'},
        {title: '115', image: '/coins/007.png'},
        {title: '116', image: '/coins/007.png'},
        {title: '117', image: '/coins/007.png'},
        {title: '118', image: '/coins/007.png'},
        {title: '119', image: '/coins/007.png'},
        {title: '120', image: '/coins/007.png'},
    ],
    enemies: [
        {title: '1',  image: '/coins/001.png'},
        {title: '2',  image: '/coins/002.png'},
        {title: '3', image: '/coins/003.png'},
        {title: '4',  image: '/coins/004.png'},
        {title: '5',  image: '/coins/005.png'},
        {title: '6', image: '/coins/006.png'},
        {title: '7',  image: '/coins/007.png'},
        {title: '8',  image: '/coins/008.png'},
        {title: '9',  image: '/coins/009.png'},
        {title: '10', image: '/coins/010.png'},
        {title: '11',  image: '/coins/011.png'},
        {title: '12', image: '/coins/012.png'}
    ],
};

loadJsonData('wheel-items.json')
    .then(json => {
        dataSets.items = toDataSet(json);
    })
    .catch(error => {
        console.error(error);
    })
;

