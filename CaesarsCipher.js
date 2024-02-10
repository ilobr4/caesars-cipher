function GetKey () {

    const mes = document.getElementById('message').value.trim();

    const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var max = 0,
    maxChar = '';

    mes.split('').forEach(function(char) {
        if (mes.split(char).length > max) {
            max = mes.split(char).length;
            if (char !== "!" && char !== "?" && char !== "." && char !== "," && char !== " " && char !== "-" && char !== '"' && char !== "'") {
                maxChar = char;
            }
        }
    });

    console.log(maxChar);

    var pos = abc.indexOf(maxChar);
    var shift = 26 - (abc.indexOf('e') - pos);
        shift = shift % 26;
    console.log(shift);
    return CaesarsCipherBruFo(mes, shift);
}

function CaesarsCipherBruFo (mes, shift) {

    const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const key = shift;
    let result = "";

    const str = mes.toLowerCase();

    for (let i = 0; i < str.length; i++) {

        if (str[i] == "\n") {
            result += "<br/>";
        }
        if (str[i].charCodeAt(0) < 97 || str[i].charCodeAt(0) > 122) {
            result += str[i];
        } else {
            var letter = abc.indexOf(str[i]);
            let decryptedIndex = (letter - key) % 26;
            if (decryptedIndex < 0) {
                decryptedIndex += 26;
            }
            result += abc[decryptedIndex];
        }
    }
    console.log("Key: " + key + "\n" + result);
    return (document.getElementById('result').innerHTML = "Key: " + key + "<br/>" + "<br/>" + result);
}


function CaesarsCipher () {

    const mes = document.getElementById('message').value.trim();
    const key = parseInt(document.getElementById('shift').value);

    const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let result = "";
    //console.log(mes);
    const str = mes.toLowerCase();

    if (key < 1 || key > 26 || key === 'undefined' || key === null || isNaN(key)) {
        return (document.getElementById('result').innerHTML = "Wrong key! Try a number between 1 and 26");
    }

    for (let i = 0; i < str.length; i++) {

        if (str[i] == "\n") {
          result += "<br/>";
        }

        if (str[i].charCodeAt(0) < 97 || str[i].charCodeAt(0) > 122) {
            result += str[i];
        } else {
            var letter = abc.indexOf(str[i]);
            result += abc[(letter + key) % 26];
        }
    }
    console.log("Key: " + key + "\n" + result);
    return (document.getElementById('result').innerHTML = "Key: " + key + "<br/>" + "<br/>" + result);
}