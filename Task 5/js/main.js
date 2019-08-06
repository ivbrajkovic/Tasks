/*
 *   Tracking typing speed in word per second (WPS).
 *   It does not track the whole lenght of text area, but only the curent typing word.
 *   It assume a word lenght of 5 chars, it start tracking when first char is presed
 *   (escluding delete and backspace keys) and keep tracking until 5 chars are elapsed,
 *   then show the result on page.
 */
(() => {
    const wordLenght = 4; // bcs it start from 0
    const commentEl = document.getElementById('comment');
    const speedEl = document.getElementById('speed');

    let chars = 0;
    let time = 0;

    commentEl.onkeyup = function(e) {
        let key = e.keyCode || charCode;
        if (key === 8 || key === 46) return; // if it's del or backspace, exit the function

        if (!chars) {
            // if first char set timer
            time = new Date().getTime();
            chars++;
        } else if (chars == wordLenght) {
            // if full word (5 chars) get time
            time = new Date().getTime() - time;
            speedEl.innerText = time / 1000;
            chars = 0;
        } else {
            // increment chars counter
            chars++;
        }
    };
})();
