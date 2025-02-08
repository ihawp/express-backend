async function getData(url) {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

getData('https://ihawp.com/projects')
    .then(response => console.log(response));