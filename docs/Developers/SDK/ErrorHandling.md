---
hide_table_of_contents: true
---

# Error Handling

## Overview

The FrostEnd SDK is based on Ethers.js, which is a very versatile library. But while handling all the interactions with smart contracts, Ethers.js' error handling process can become quite cryptic. Ethers.js native error handling does not support typing. In addition, the actual error is often nested very deeply. The FrostEnd SDK includes some utilities that helps aid the error handling process while interacting with the contracts.

## FrostEndSdkError

```ts
import { FrostEndSdkError } from '@frostend/sdk-v2';
```

This is the super class for all Error classes in FrostEnd SDK. It is a very simple class, its only has a constructor that accepts the error message.

```ts
try {
  throw new FrostEndSdkError('Hello there');
} catch (e) {
  if (e instanceof FrostEndSdkError) {
      console.log(e.message);
  }
}
```

Output:

```ts
Hello there
```

## `Error(message)` and `Panic(code)`

`Error(message)`` and `Panic(code)` are built-in contract errors.

```ts
import { BuiltinContractError, PanicBuiltinContractError, ErrorBuiltinContractError } from '@frostend/sdk-v2';
```

```ts
class BuiltinContractError extends FrostEndSdkError;
class ErrorBuiltinContractError extends BuiltinContractError;
class PanicBuiltinContractError extends BuiltinContractError;
```

On the contract, there are two built-in errors: `Error(string message)` and `Panic(uint256 code)`. This `BuiltinContractError` is the super class for `ErrorBuiltinContractError` and `PanicBuiltinContractError` respectively.

```ts
try {
  // some contract operation.
} catch (e) {
  if (e instanceof PanicBuiltinContractError) {
      console.log('Panic with code', e.code);
  }
  if (e instanceof ErrorBuiltinContractError) {
      console.log('Error with message', e.message);
  }
}
```

## `FrostEndContractError`

`FrostEndContractError` are errors from FrostEnd protocol contracts.

```ts
import { FrostEndContractError } from '@frostend/sdk-v2';
```

When an error is found, FrostEnd contracts will thrown an Error message as defined in [this contract library](https://github.com/umi-ag/frostend-core-internal-v2/blob/main/contracts/core/libraries/Errors.sol). These errors will be wrapped into `FrostEndContractError`. The instance of this class has two main properties:
- `errorName` - The name of the error. The type of this property is not `string`, but an union of all FrostEnd contracts error's name for type safety. For example:
  - `'marketExpired'`, `'RouterInsufficientLpOut'`, `'RouterExceededLimitYtIn'`, etc. are valid values for `errorName`
  - `'RandomError'` - Indicates that it is not a valid value, as it is not defined in the contracts. 
- `args` - The arguments passed to the Error on the contract side. You can think it like `any[]`. But in reality, it is also a union of tuples of the errors' parameters. 

### Catching Errors

`FrostEndContractError` has a method called `isType(errorName): FrostEndContractError<errorName>`, which check if the current instance's `errorName` is the same type as the passed argument. This method is a type predicate to check for both error name AND the arguments.

For example:

```ts
import { BN } from '@frostend/sdk-v2';
try {
    // ...
} catch (e) {
    if (e instanceof FrostEndContractError) {
        if (e.isType('YieldContractInsufficientSy')) {
            // e.args will now have type [BN, BN] (BN represents uint256 on the contract)
            const actualSy: BN = e.args[0];
            const requiredSy: BN = e.args[1];
            console.log(actualSy.toString(), requiredSy.toString());
        } else if (e.isType('MarketExpired')) {
            // e.args will now have type [] (an empty tuple)
        }
        // ...
    }
}
```
