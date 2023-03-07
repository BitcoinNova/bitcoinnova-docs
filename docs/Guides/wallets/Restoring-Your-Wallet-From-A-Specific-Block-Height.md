---
title: Restoring A Bitcoin Nova Sonic Wallet From A Specific Block Height
---


If you find yourself waiting what seems like forever to sync your wallet and you've started syncing from 0, you can probably speed things up by utilizing the scan height feature of the wallet software. This will save you quite a bit of time during the syncing process. Below is a quick guide on how to use the scan height feature of the wallet software.

## Step 1: Find The Estimated Block Height When You Created Your Wallet

It's not necessary to scan blocks and transactions from before your wallet was created. The chances of there being funds in a wallet before it was created are infinitely small. As such, scanning from before the creation block only wastes time.

To find the height of the block look for the date on which you generated your wallet in the [explorer](http://explorer.bitcoinnova.org).

Once we locate the approximate height where our wallet was generated we can use it to synchronize our wallet in a much faster way *(Thanks to having a block height from which to start our wallet scan, our client no longer has to scan all the blockchain of your genesis block).*


## Step 2: Restoring Your Wallet Using A Specific Scan Height

This guide covers both the Bitcoin Nova Sonic Wallet (GUI-based wallet) as well as bitcoinnova-wallet (CLI-based wallet). 

### Bitcoin Nova Sonic Wallet (GUI)

Begin by opening up the Bitcoin Nova Sonic Wallet Application. Under the menu options, select **File** and then choose the **Restore** option.
    
![Restore-Bitcoin-Nova-Sonic-Wallet](https://i.imgur.com/TL8gY7y.png)

Next, we have the option of restoring our wallet file from either our seed or our key file. In this example we will restore our wallet via our seed phrase.

![Restore-Bitcoin-Nova-Sonic-Wallet-Seed-Keys](https://i.imgur.com/jELJB7H.png)

You will be asked to either enter your seed or wallet keys. In this example we will use the seed phrase we wrote down from when we first created our wallet to begin our restoration process and also enter the scan height of `1367900` we discovered in Step #1.

![Restore-Bitcoin-Nova-Sonic-Wallet-Seed](https://i.imgur.com/4qfPhXA.png)

The wallet software will show our Wallets address as a confirmation. If this address is wrong, simply go back and double-check that the seed/key file is correct. Simply click **Next** to continue.

![Restore-Bitcoin-Nova-Sonic-Wallet-Wallet-Address](https://i.imgur.com/scmHIWZ.png)

You will be prompted for a new password to set for the wallet. Afterwards, simply click **Save Wallet As**

![Restore-Bitcoin-Nova-Sonic-Wallet-Password](https://i.imgur.com/k6a2Znu.png)

Congratulations, Our wallet is now restored! It will start scanning from the scan height that we entered. Be patient as it may still take some time to scan through the blocks and transactions depending on how long ago you created the wallet.

### bitcoinnova-wallet (CLI)

*Note*: You can find more information on how to use bitcoinnova-wallet via the [documentation](Using-bitcoinnova-wallet).

For the purposes of this guide, we presume that you have a basic understanding of how to use a bitcoinnova-wallet.
    
Begin by opening bitcoinnova-wallet. You will be greeted by the following screen.

![bitcoinnova-wallet](https://i.imgur.com/9UWaAbV.png)

Since we wish to restore our wallet, we will select either option (3) or (4). 

In this example we will restore via our wallet seed, so we will enter option **3**. 

This will prompt us to enter our wallet's seed phrase.

![bitcoinnova-wallet-seed](https://i.imgur.com/CoT2WFu.png)

Next, we are prompted to type in our starting blockheight. We will use the block height discovered from Step #1 above.

![bitcoinnova-wallet-block](https://i.imgur.com/IXkDTP0.png)

After a brief moment, bitcoinnova-wallet will begin scanning from the block height that we provided.

![bitcoinnova-wallet-sync](https://i.imgur.com/UKlWV74.png)

Congratulations, Our wallet is now restored! It will start scanning from the scan height that we entered. Be patient as it may still take some time to scan through the blocks and transactions depending on how long ago you created the wallet.
