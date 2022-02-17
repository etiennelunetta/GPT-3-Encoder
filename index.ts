import { decode, encode } from "./Encoder.js"
import encoder from "./encoder_json.js"
export const neoxEncode = encode
export const neoxDecode = decode
export const neoxVocab = Object.keys(encoder)
