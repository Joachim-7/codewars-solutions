class VigenèreCipher {
    constructor(key, abc) {
        this.key = [...key];
        this.abc = [...abc];
        this.size = this.abc.length;
    }
​
    encode(str) {
        return [...str].map((char, i) => {
            const charIndex = this.abc.indexOf(char);
            if (charIndex === -1) return char;
​
            const keyIndex = this.abc.indexOf(this.key[i % this.key.length]);
            return this.abc[(charIndex + keyIndex) % this.size];
        }).join('');
    }
​
    decode(str) {
        return [...str].map((char, i) => {
            const charIndex = this.abc.indexOf(char);
            if (charIndex === -1) return char;
​
            const keyIndex = this.abc.indexOf(this.key[i % this.key.length]);
            return this.abc[(charIndex - keyIndex + this.size) % this.size];
        }).join('');
    }
}