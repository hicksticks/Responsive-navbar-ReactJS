import React from 'react';

function NewFTM() {
  return (
    <div style={{
      verticalAlign: 'top',
      backgroundColor: '',
      padding: '4rem'
    }}>
      <h1>New to FTM ?</h1>

Both SpookySwap and SpiritSwap let you transfer your assets from one chain to an other. Both bridges use Multichain technology on the back end. This is done by transferring and converting your tokens to the same wallet address, but on the Fantom network. 
Go to https://spookyswap.finance/bridge or https://swap.spiritswap.finance/#/bridge. 
Choose the network and the token you want to transfer from the list
Input the amount you want to transfer 
Confirm transaction
Once confirmation is received, connect to Fantom's network, you tokens will be displayed. If they are not displayed, you need to add them manually to your Metamask : Go to https://ftmscan.com/ and look for the contract address of the token you transferred. You can also add tokens via the swap interface. 

    </div>
  );
}

export default NewFTM;