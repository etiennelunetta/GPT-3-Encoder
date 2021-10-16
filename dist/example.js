"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Encoder_1 = require("./Encoder");
const str = 'This is an example sentence to try encoding out on!';
const encoded = (0, Encoder_1.encode)(str);
console.log('Encoded this string looks like: ', encoded);
console.log('We can look at each token and what it represents');
for (let token of encoded) {
    console.log({ token, string: (0, Encoder_1.decode)([token]) });
}
const decoded = (0, Encoder_1.decode)(encoded);
console.log('We can decode it back into:\n', decoded);
//# sourceMappingURL=example.js.map