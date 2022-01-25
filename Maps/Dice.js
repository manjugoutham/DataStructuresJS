let count = 1;
let dicemap = new Map();
let stopCount = 0;
let maxcount = 1;
let mincount = 11;
let numbermaxcount = 0,numbermincount = 0;

    while (stopCount < 10) {
        let dieValue = Math.floor(Math.random() * 6 + 1);
        if (dicemap.has(dieValue)) {
            count = dicemap.get(dieValue) + 1;
        }
        dicemap.set(dieValue, count);
        if (count > stopCount)
            stopCount = count;
            
    }
    console.log(dicemap);

    for ([key, value] of dicemap.entries()) {
        if (value > maxcount) {
            maxcount = value;
            numbermaxcount = key;
        }
        if (value < mincount) {
            mincount = value;
            numbermincount = key;
        }
    }
    console.log("\nMinimum Count : " + numbermincount + "\n Maximum Count : " + numbermaxcount);