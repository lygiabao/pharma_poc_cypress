function usernameLength (usernameLength) {
    const allChars = "ABCDEFGHIJKLMN123456789";
    const allChars_length = allChars.length;
    let randomUsername = '';
    for (let i = 0; i < usernameLength; i++) {
        randomUsername += allChars.charAt(Math.floor(Math.random() * allChars_length))
    }
    return randomUsername;
}

console.log(usernameLength(9))

