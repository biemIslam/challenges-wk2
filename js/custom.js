var initCount = 0;
document.getElementById('show-count').innerHTML = 0;

document.getElementById('plus').addEventListener('click', () => {
    initCount += 1;
    if (initCount > 0) {
        var belowZero = document.getElementById('show-count').innerHTML = initCount;
        document.getElementById('show-count').style.color = "green"
    }

    else if (initCount == 0) {
        var belowZero = document.getElementById('show-count').innerHTML = initCount;
        document.getElementById('show-count').style.color = "white"
    }

    else {
        document.getElementById('show-count').innerHTML = initCount;
    }
    // document.getElementById('show-count').innerHTML = initCount;
    // alert('jhfgkjhtgr')
});

document.getElementById('minus').addEventListener('click', () => {
    initCount -= 1;
    if (initCount < 0) {
        var belowZero = document.getElementById('show-count').innerHTML = initCount;
        document.getElementById('show-count').style.color = "red"
    }

    else if (initCount == 0) {
        var belowZero = document.getElementById('show-count').innerHTML = initCount;
        document.getElementById('show-count').style.color = "white"
    }
        
    else {
        document.getElementById('show-count').innerHTML = initCount;
    }
});

document.getElementById('reset').addEventListener('click', () => {
    initCount = 0
    document.getElementById('show-count').innerHTML = initCount;
    document.getElementById('show-count').style.color = "white"
})



