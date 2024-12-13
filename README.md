# Final Submission ReadMe
**TX Link as a result of running `yarn enroll` is: [Transaction Link](https://explorer.solana.com/tx/3isz4ezCmgz4eG9SGHjqHgQS2iYniXz2rr5HST4TfmJ4o9HyhHZJ52v8Augm6pKhz1rTYD3aLv7DA3DhwWZitE2x?cluster=devnet)**

## Explanation of the project.
This project contains one folder named `airdrop`, in it are files named `keygen.ts` for generating a new wallet account with both its public and private keys, `airdrop.ts` for airdropping SOL needed for transactions throughout the project, `transfer.ts` for simulating transaction of SOL between two different wallets, and `enroll.ts` for enrolling a user with their GitHub username.

### Running the project
- Clone the project using 
    ```sh
    git clone https://github.com/Lansa-18/Turbine-Assignment.git
    ```
- After that run `yarn install` to download all the required dependencies of the project.
- Ensure you have **Anchor** installed using 
    ```sh
    yarn add @coral-xyz/anchor@0.30.0
    ```
- ❗ You would need to downgrade the web3.js library because the current anchor and solana/web3.js libraries overlap with each other. ❗
- Do that using 
    ```sh
    yarn add @solana/web3.js@1.91.8
    ```
- You also need to install the rpc-websocket library for Anchor to work.
    ```sh
    yarn add rpc-websockets@7.11.0
    ```

- Now that we have set the environment up, to run the scripts, ensure you are in the `airdrop` directory using 
    ```sh
    cd airdrop
    ```
- Run any of the desired commands: `yarn keygen`, `yarn airdrop`, `yarn transfer`, `yarn enroll`