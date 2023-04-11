// this is my function to get all of the data from the api {http://ist.rit.edu/api/}

const proxyServer = 'https://people.rit.edu/~dsbics/proxy/http://ist.rit.edu/api/'
// http://solace.ist.rit.edu/~dsbics/proxy/
// https://people.rit.edu/~dsbics/proxy/

/**
 * return the data recieved form the api specified
 * 
 * @param {string} endpoint - the part of api you wish to access, ex: 'about/'
 * @return api data
 */
async function getData(endpoint) {
    return fetch(`${proxyServer}${endpoint}`)
        .then((res) => res.json());
}

export default getData;