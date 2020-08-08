
const arrayOfUrls = [];
const target = {};
let replaceText;

const searchAndProcess = (source, search, fn) => {
    // source is a nested javascript object
    console.log('source :', JSON.stringify(source), '\n');
    // search is the string to find in the object
    console.log('To search :', search, '\n');
    console.log('replace with : ', 'cdn.bookmyshow.com');

    // Input your code
    search = (search == '' || search == undefined) ? null : search;
    let valuePassed = Object.values(source);
    valuePassed.filter(e => {
        if (typeof (e) === 'string' && e.split('/').length > 1) {
            //check if search matches the entire domain
            replaceText = (e.split('/')[0] == search) ? e.replace(e.split('/')[0], 'cdn.bookmyshow.com') : 'Please provide a valid search.The search entered must match the entire domain';
            target[e] = replaceText;
            arrayOfUrls.push(replaceText);
        }
        if (e.banners) {
            e.banners.map(element => {
                //check if search matches the entire domain
                replaceText = (element.imageUrl.split('/')[2] == search) ? element.imageUrl.replace(element.imageUrl.split('/')[2], 'cdn.bookmyshow.com') : 'Please provide a valid search.The search entered must match the entire domain';
                target[element.imageUrl] = replaceText;
                arrayOfUrls.push(replaceText);
            })

        }

    })
    // arrayOfUrls : array containing all changed url domain 
    // target : object containing the previous url and changed url 
    return { arrayOfUrls: arrayOfUrls, target: target };
}

module.exports = {
    searchAndProcess: searchAndProcess,
}