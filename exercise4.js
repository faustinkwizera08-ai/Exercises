function countVowers(str) {
    const vowers = "aeiou";
    let count = 0;
    let Vowers = new Set(vowers);
    for (let i = 0; i < str.length; i++) {
        if (Vowers.has(str[i])) {
            count++;
        }
    }
    return count;
}
console.log(countVowers("rwandan music"));