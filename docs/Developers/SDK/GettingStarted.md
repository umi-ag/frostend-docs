---
hide_table_of_contents: true
---

# Getting Started

## Overview

FrostEnd SDK is a typescript package to interact with the FrostEnd protocol.

## Installation

With NPM:
```sh
npm i @frostend/sdk-v2
```

With Yarn:
```sh
yarn add @frostend/sdk-v2
```

## Preparation

FrostEnd SDK is built on top of the [Ethers.js](https://docs.ethers.org/v5/) library. To interact with the contracts using Ethers.js, first we need to prepare two things:
- A `provider`, which is a connection to the Ethereum network.
- A `signer`, which holds your private key and can sign things.

Typically, `provider` and `signer` that interacts with the Ethereum network via JSON-RPC can be created  as follows:

```ts
import ethers from 'ethers';

const jsonRpcUrl = 'your-json-rpc-url';
const privateKey = 'your-private-key';
const provider = new ethers.providers.JsonRpcProvider(jsonRpcUrl);
const signer = new ethers.Wallet(privateKey, provider);
```

Please check the [documentation of Ethers.js](https://docs.ethers.org/v5/getting-started) for the usage of `provider` and `signer`.

To demonstrate the usage of the SDK, we will use a prepared `provider` and some test accounts with filled balances in a local forked network. Check how you can [try out the FrostEnd SDK in a local playgrond](./Playground.md) to see how they are created.

```ts
import ethers from 'ethers';
import { provider, testAccounts } from './sdk-doc-playground.mjs';

{
    const address = testAccounts[0].address;
    const ethBalance = ethers.utils.formatEther(await testAccounts[0].wallet.getBalance());
    console.log('Test account info:', { address, ethBalance });
}
```

Output:
```ts
Test account info: {
  address: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
  ethBalance: '9959.796037708252906401'
}
```

## Create FrostEnd SDK Router

FrostEnd SDK Router is an object that interacts with [FrostendRouter contract](https://etherscan.io/address/0x0000000001e4ef00d069e71d6ba041b0a16f7ea0). It can be created as follows:

```ts
import { Router } from '@frostend/sdk-v2';

const router = Router.getRouter({
    chainId: 1, // ethereum chain id
    provider,
    signer: testAccounts[0].wallet,
});

console.log('Router address:', router.address);
```

Output:
```ts
Router address: 0x0000000001e4ef00d069e71d6ba041b0a16f7ea0
```

## Usage

Please check out the next guides for detailed explanation on using the FrostEnd SDK.

## Other resources

- Source code: https://github.com/umi-ag/frostend-sdk-core-v2-public
- API reference: https://umi-labs.github.io/frostend-sdk-core-v2-public/index.html
