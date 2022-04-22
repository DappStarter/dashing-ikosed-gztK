require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note pizza hospital inflict clinic army giggle'; 
let testAccounts = [
"0x38abecf658d05a9f4b8c8ee89f011cc6125e3639a20d07611f598d338137e265",
"0xe1760f30620207722d2c922d539620a44aa8138e7a28a7c507bd43364aed41e3",
"0x4fe965dc6f9f3628c0bfdf95a09608515a1948a8a00835a8c5abf0b5861d7405",
"0xc903d05eb4e93342228ac57624d66e00d3ead271ad6748207d2e5deced2a82eb",
"0xbce7e369acc59d8d43045b4ae945e39f26c2744a43eb23c13344bf52ed5ed765",
"0xf9c36aa0d13c2f9865f5ba95adf6de605c2cd2ae12e8a26cebc8201e8aef653a",
"0x7d3c176e184b2fad90a6d8e47ccf01975dd64b390b82ae5886fa1cb5144d8a93",
"0xbfc3022a04d8ee7e257c2e8b2d9f1aa6688dbb21a7b5a2a5ee1a57adfb6dc6df",
"0xa8e044e9a37b9540c47cb4f5595ddb751f1e8c54580a5c9557d9c59d6962637d",
"0xd9d9353430f56f29e6d9639b69d495855a78a64fa5caf0e345859cdd849703aa"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

