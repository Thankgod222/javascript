// const req = new XMLHttpRequest () ;

// req.onload = function () {
//     console.log('ALL DONE  WITH REQUEST!!!')
//     const data = JSON.parse(this.responseText);
    
// }

// req.onerror = function () {
//     console.log('error!!!')
//     console.log(this);
// }
// req.open('GET', 'https://api.tvmaze.com/search/shows?q=girls')
// req.send();

/*-------------------------------------------------------------------------*/
/* FETCH */
/*-------------------------------------------------------------------------*/

// fetch('https://api.tvmaze.com/search/shows?q=girls')
// .then(res => {
//     console.log('RESPONSE, WAITING TO PARSE...', res)
//     return res.json()
// })
// .then(data => {
//     console.log('DATA PARSED...', data)
// })
// .catch(e => {
//     console.log('OH NO! ERROR!', e)
// })
 
/*------------------------------------*/
/* AXIOS -IMPORTANT */
/*------------------------------------*/
const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } };
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    makeImages(res.data);
    form.elements.query.value = '';
    
})
const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img); 
        }
        
    }
}







  