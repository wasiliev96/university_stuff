// encrypt data
function encrypt() {

    // Getting user input
    let keyword = document.getElementById('keyword').value.toUpperCase().replace(/\s/g, "").split('');
    keyword = Unifier(keyword);

    let phrase = document.getElementById('userinput').value.toUpperCase().replace(/\s/g, "").split('');
    phrase = Unifier(phrase);
    console.log(keyword, phrase);

    // Making matrix
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let w = 4;
    let h = 4;

    // Fill the matrix
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < i.length; j++) {


        }

    }
};


// check array for double letter
function Unifier(keyword) {
    // console.log('keyword: ' + keyword);
    let result = [];
    for (let str of keyword) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }
    return result;
}