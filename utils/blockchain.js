import { ethers } from 'ethers';

export const initContract = async () => {
  if (!window.ethereum) throw new Error("No Ethereum provider found");
  
  await window.ethereum.request({ method: 'eth_requestAccounts' });
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  
  // Replace with your actual contract ABI and address
  const contract = new ethers.Contract(
    '0xYourContractAddress',
    ['function grantConsent(string,string,uint256)'],
    signer
  );
  
  return contract;
};