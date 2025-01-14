const externalAddrs  = {
  // https://data.chain.link/eth-usd
  CHAINLINK_SEIUSD_PROXY: "0x1E7e89BBEBd18E727548010A739116184fb82Ed4", 
  // https://docs.tellor.io/tellor/integration/reference-page
  TELLOR_MASTER:"0x46d094983cbd2F392f97A9434D436321a3472e8F",
  // https://uniswap.org/docs/v2/smart-contracts/factory/
  // UNISWAP_V2_FACTORY: "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f", // ethereum
  UNISWAP_V2_FACTORY: "0x5AB469c5700b2D78bE03905E5169efB5B7AD0035", // seiv2
  // UNISWAP_V2_ROUTER02: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D", // ethereum
  UNISWAP_V2_ROUTER02: "0xa981D95e32d0C7F5ab975b208F3Ea7C21efF09B7", // seiv2
  // https://etherscan.io/token/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2
  WSEI_ERC20: "0x26841a0A5D958B128209F4ea9a1DD7E61558c330", // seiv2
  // WSEI_ERC20: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", // ethereum
}

const fluidAddrs = {
  GENERAL_SAFE:"0x42d0b8efF2fFF1a70B57C8E96bE77C2e49A774c3", // to be passed to FLOToken as the bounties/hackathons address
  FLO_SAFE:"0x42d0b8efF2fFF1a70B57C8E96bE77C2e49A774c3", // to be passed to FLOToken as the FLO multisig address
  DEPLOYER: "0x552594b83058882C2263DBe23235477f63e7D60B", // Mainnet REAL deployment address
  // DEPLOYER: '0x31c57298578f7508B5982062cfEc5ec8BD346247'
}

// Beneficiaries for lockup contracts. 
const beneficiaries = {
  ACCOUNT_1: "0x9be7273368E34214c2B05cBE7d432B13356b76aa",  
  ACCOUNT_2: "0x566454eF325a5eA22a831eBb4fF236F74E1372CD"
}

const OUTPUT_FILE = './seiv2Deployment/seiv2TestnetDeploymentOutput.json'

const delay = ms => new Promise(res => setTimeout(res, ms));
const waitFunction = async () => {
  return delay(90000) // wait 90s
}

const GAS_PRICE = 2000000000
const TX_CONFIRMATIONS = 3 // for mainnet

const SEIV2SCAN_BASE_URL = 'https://seitrace.com//address'

module.exports = {
  externalAddrs,
  fluidAddrs,
  beneficiaries,
  OUTPUT_FILE,
  waitFunction,
  GAS_PRICE,
  TX_CONFIRMATIONS,
  SEIV2SCAN_BASE_URL,
};