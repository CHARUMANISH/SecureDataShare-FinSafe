import ConsentManagerABI from '../abis/ConsentManager.json';

export const initContract = async () => {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  return new ethers.Contract(
    process.env.REACT_APP_CONTRACT_ADDRESS,
    ConsentManagerABI,
    signer
  );
};

export const grantConsent = async (contract, consentData) => {
  return await contract.grantConsent(
    consentData.dataType,
    consentData.thirdParty,
    consentData.duration
  );
};