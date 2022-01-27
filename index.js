import tweetRandomVerse ,{validator} from './components/tweetRandomVerses.js';
import dailyPage from './components/tweetPage.js'

// just tweet when the app run
tweetRandomVerse(validator)

setInterval(() => {
    let hour = new Date().getHours() 
    // 2 pm 
    if (hour == 14) {
        dailyPage()

    }
}, 30*60*1000);

// timer to tweet 
// timer is set to 15m

setInterval(() => {
    tweetRandomVerse(validator)
}, 15*60*1000);