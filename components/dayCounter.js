import fs from 'fs';

function dayCounter() {
    fs.readFile('dayCounter.txt', "utf-8", (err, data) => {
        if (err) { console.log(err) }
        
        const newpage = Number(data) + 1
        // if we finsh all pages
        if (newpage> 604) newpage = 1
        console.log(newpage);
      
    fs.writeFile('dayCounter.txt',String(newpage), function (err) {
      if (err) throw err;
    
    })
    
    })
}

export default dayCounter