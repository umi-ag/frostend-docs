---
hide_table_of_contents: true
---

# Overview

## How FrostEnd Works

To understand how FrostEnd works on the contract level, you can:
- Start with FrostEnd's [High Level Architecture](./HighLevelArchitecture.md) for an overview of the components in FrostEnd protocol.
- Refer to the docs about [FrostendRouter](./Contracts/FrostendRouter.md) and [FrostendRouterStatic](./Contracts/FrostendRouterStatic.md) to understand how to perform actions on the protocol on the contract level.
- Refer to the repository for FrostEnd V2 contracts: [GitHub link](https://github.com/umi-ag/frostend-core-v2-public/)

To understand the deeper mechanics and formulas involved in the FrostEnd protocol, you can refer to the 4 whitepapers at [this link](https://github.com/umi-ag/frostend-v2-resources/tree/main/whitepapers):
- SY: explains EIP-5115 Standardized Yield, a token standard to generalize yield generating mechanisms;
- SYS: explains how FrostEnd split any Standardized Yield token into Principal Tokens and Yield Tokens;
- V2_AMM: explains how the AMM works in FrostEnd V2;
- vePENDLE: explains how vePENDLE works;

## How to Integrate FrostEnd

### For on-chain contract systems building on top of FrostEnd:
- For money markets or CDP-like stablecoins looking to accepts PT as collateral: refer to [PT as Collateral doc](./Integration/PTAsCollateral.md)
- For money markets or CDP-like stablecoins looking to accepts FrostEnd's LP token as collateral: refer to [LP as Collateral doc](./Integration/LPAsCollateral.md)
- For systems that need an oracle for PT or LP prices: refer to [this for the PT Oracle](./Integration/PTOracle.md) and [this for the LP Oracle](./Integration/LPOracle.md)

### For off-chain systems building on top of FrostEnd:
- To interact with FrostEnd contracts or to read on-chain information (for a frontend or a bot/script), you can use the FrostEnd SDK. See the docs on how you can [get started with the SDK](./SDK/GettingStarted.md).
- To read details about FrostEnd systems from our backend (for example, to display or monitor details of certain FrostEnd markets), you can use our REST API. See the relevant docs [here](./API/RESTfulAPI.md).

### For mobile wallets who want to feature FrostEnd Earn in your app:
- FrostEnd Earn is already optimized for mobile usage
- You just need to add a link or shortcut for users to navigate to the FrostEnd Earn app at https://app.frostend.com/earn
- If your wallet is not supported on FrostEnd yet, please reach out to us by creating a ticket at the #collab-ticket channel in our Discord at https://frostend.com/discord

### Deployed contract addresses:
* [Ethereum](./Deployments/Ethereum.md)
* [Arbitrum](./Deployments/Arbitrum.md)
* [BNB Chain](./Deployments/BNBChain.md)

Other relevant sections can be found in the navigation sidebar on the left.
