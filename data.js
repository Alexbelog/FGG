
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
        {title: '1',  image: '/coins/001.png'},
        {title: '2', image: '/coins/002.png'},
        {title: '3',  image: '/coins/003.png'},
        {title: '4', image: '/coins/004.png'},
        {title: '5',  image: '/coins/005.png'},
        {title: '6', image: '/coins/006.png'},
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

