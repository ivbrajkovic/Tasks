(() => {
    //////////////////////////////////////////////////////////////////////
    // DOM elements
    //
    const box = document.getElementById('box');
    const hRange = document.getElementById('hRange');
    const hRangeText = document.getElementById('hRangeText');
    const wRange = document.getElementById('wRange');
    const wRangeText = document.getElementById('wRangeText');
    //
    //////////////////////////////////////////////////////////////////////

    //////////////////////////////////////////////////////////////////////
    // Vertical slider group
    //
    hRange.addEventListener('input', function(e) {
        hRangeText.value = this.value;
        box.style.height = this.value + 'px';
    });
    //
    hRangeText.addEventListener('keypress', function(e) {
        if (!isNumber(e.key)) e.preventDefault();
    });
    //
    hRangeText.addEventListener('input', function(e) {
        if (checkValue(this, hRange)) box.style.height = this.value + 'px';
    });
    //
    //////////////////////////////////////////////////////////////////////

    //////////////////////////////////////////////////////////////////////
    // Horizontal slider group
    //
    wRange.addEventListener('input', function(e) {
        wRangeText.value = this.value;
        box.style.width = this.value + 'px';
    });
    //
    wRangeText.addEventListener('keypress', function(e) {
        if (!isNumber(e.key)) e.preventDefault();
    });
    //
    wRangeText.addEventListener('input', function(e) {
        if (checkValue(this, wRange)) box.style.width = this.value + 'px';
    });
    //
    //////////////////////////////////////////////////////////////////////

    /**
     * Check if digit
     *
     * @param {char} key
     * @returns {boolean} true - is digit, false - not digit
     */
    function isNumber(key) {
        return /[0-9]/.test(key);
    }

    /**
     * Check if input value is in range 1 - 500
     *
     * @param {element} input
     * @param {element} range
     * @returns {boolean} true - is digit, false - not digit
     */
    function checkValue(input, range) {
        let value = parseInt(input.value);
        if (value < 1 || value > 500) {
            input.style.background = '#E87676';
            return false;
        }
        input.style.background = '#FFF';
        range.value = value;
        return true;
    }
})();
