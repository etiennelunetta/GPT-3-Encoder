import { decode, encode } from "./Encoder.js"
import encoder from "./encoder_json.js"
export const gpt2Encode = encode
export const gpt2Decode = decode
export const gpt2Vocab = Object.keys(encoder)
