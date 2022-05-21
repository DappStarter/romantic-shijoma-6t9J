require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include kiwi flame table educate ranch remind home harvest fat swap security'; 
let testAccounts = [
"0x7aa89b1bf89066ad4f5920eb0c205f2d8f75f7a39fb8523045120b2fc83a15d2",
"0x4b03551c5e40b584102036723ed0bef10f05647b2c260dbc9b19e4349c9b9c98",
"0x0f7147cc4e269f480eedbc42eae758e4a326e02154a5ea312f7ced73c69b7481",
"0xe44a8247ab643351e74d6336d5bbc43aad79db8af706fd210df42af4a9fb05ee",
"0x9a6ad0efc0b3672cf90c5c80fc1f496342e21cb18dbdb110e6796506089e14e1",
"0xbe74bdaef9ebfa80e75a5133c538a82288b3d9d0197007dbd5cee7fad4ec7ed1",
"0xf46e84424150fff90549e39d943da682eac64038d6c09f97f4c84afc8b61c5da",
"0x101a6b3b60da7969167cc993a03ca03fbe1985e1de5f650d485c4832560f8b9c",
"0xe666e238dba852b60c47988f68de8ca2eeb918c7a857dedff8be33916b167113",
"0x81d960ad21212d00c84c948986a771ce45d49fecc18f7f3283df605bf156ce9c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

