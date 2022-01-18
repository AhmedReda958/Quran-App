import fetch from 'node-fetch';
import T from "./twit-congig.js"


// tweet ayat
const Tweet =(text)=>{
    T.post('statuses/update', { status: text }, (err, data, res) =>{
        if (err) console.log(err)
    })
}
// check ayat length 
const validator =(aya , length =140 )=>{
    if (aya.length <= length) {
         Tweet(`﴿${aya}﴾`);
        
    }else tweetRandomVerse(validator)
}

// get verse-key then get the verse
const tweetRandomVerse = (action) => {
    const ayah = Math.floor(Math.random() * 6236) + 1

    fetch("https://api.alquran.cloud/ayah/" + ayah)
        .then((response) => response.json())
        .then((data) => action(data.data.text))
        .catch((err) => console.log(err));
    
}

export {
    tweetRandomVerse as default,
    validator,
    Tweet
}


