function encrypt() {
    const plaintext = document.getElementById("plaintext").value;
    const key = parseInt(document.getElementById("key").value);
    const encryptedText = escitalaEncrypt(plaintext, key);
    document.getElementById("result").textContent = "Texto cifrado: " + encryptedText;
}

function decrypt() {
    const ciphertext = document.getElementById("plaintext").value;
    const key = parseInt(document.getElementById("key").value);
    const decryptedText = escitalaDecrypt(ciphertext, key);
    document.getElementById("result").textContent = "Texto descifrado: " + decryptedText;
}

function escitalaEncrypt(text, key) {
    let result = "";
    for (let i = 0; i < key; i++) {
        for (let j = i; j < text.length; j += key) {
            result += text[j];
        }
    }
    return result;
}

function escitalaDecrypt(text, key) {
    const columns = Math.ceil(text.length / key);
    const rows = key;
    const missingChars = columns * rows - text.length;

    let result = new Array(rows);
    for (let i = 0; i < rows; i++) {
        result[i] = new Array(columns);
    }

    let row = 0;
    let col = 0;
    for (let i = 0; i < text.length; i++) {
        result[row][col] = text[i];
        col++;
        if ((col === columns) || (col === columns - 1 && row >= rows - missingChars)) {
            col = 0;
            row++;
        }
    }

    let decryptedText = "";
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            if (result[j][i] !== undefined) {
                decryptedText += result[j][i];
            }
        }
    }

    return decryptedText;
}
