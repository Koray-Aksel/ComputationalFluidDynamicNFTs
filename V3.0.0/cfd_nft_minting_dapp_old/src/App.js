import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect, connectCoinbase } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import * as s from "./styles/globalStyles";
import styled from "styled-components";

const disconnectCoinbase = () => {
  walletlinkProvider.close();
  setWalletlinkProvider(null);
};

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

export const StyledButton = styled.button`
  padding: 10px;
  border-radius: 50px;
  border: none;
  background-color: var(--secondary);
  padding: 10px;
  font-weight: bold;
  color: var(--secondary-text);
  width: 100px;
  cursor: pointer;
  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const StyledRoundButton = styled.button`
  padding: 10px;
  border-radius: 100%;
  border: none;
  background-color: var(--primary);
  padding: 10px;
  font-weight: bold;
  font-size: 15px;
  color: var(--primary-text);
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const ResponsiveWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: stretched;
  align-items: stretched;
  width: 100%;
  @media (min-width: 767px) {
    flex-direction: row;
  }
`;

export const StyledLogo = styled.img`
  width: 200px;
  @media (min-width: 767px) {
    width: 300px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;

export const StyledImg = styled.img`
  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);
  border: 4px dashed var(--secondary);
  background-color: var(--accent);
  border-radius: 100%;
  width: 200px;
  @media (min-width: 900px) {
    width: 250px;
  }
  @media (min-width: 1000px) {
    width: 300px;
  }
  transition: width 0.5s;
`;

export const StyledLink = styled.a`
  color: var(--secondary);
  text-decoration: none;
`;

function App() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNftPublic, setClaimingNftPublic] = useState(false);
  const [claimingNftPublicWeth, setClaimingNftPublicWeth] = useState(false);
  const [claimingNftV2Holder, setClaimingNftV2Holder] = useState(false);
  const [claimingNftV2HolderWeth, setClaimingNftV2HolderWeth] = useState(false);
  const [claimingFreeNft, setClaimingFreeNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    CONTRACT_ADDRESS_WETH: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST_V2HOLDER: 0,
    WEI_COST_V2HOLDER_WETH: 0,
    WEI_COST_PUBLIC: 0,
    WEI_COST_PUBLIC_WETH: 0,
    WEI_COST_WETH_ALLOWANCE: 0,
    DISPLAY_COST_V2HOLDER: 0,
    DISPLAY_COST_V2HOLDER_WETH: 0,
    DISPLAY_COST_PUBLIC: 0,
    DISPLAY_COST_PUBLIC_WETH: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const claimNFTsPublic = () => {
    let cost = CONFIG.WEI_COST_PUBLIC;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNftPublic(true);
    blockchain.smartContract.methods
      .mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry1, something went wrong please try again later.");
        setClaimingNftPublic(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
        );
        setClaimingNftPublic(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const claimNFTsPublicWeth = () => {
    let cost = CONFIG.WEI_COST_PUBLIC_WETH;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(0);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNftPublicWeth(true);
    blockchain.smartContractWeth.methods.increaseAllowance(
      CONFIG.CONTRACT_ADDRESS, 
      CONFIG.WEI_COST_WETH_ALLOWANCE).send(
            {gasLimit: String(totalGasLimit), 
             to:CONFIG.CONTRACT_ADDRESS_WETH,
             from: blockchain.account, 
             value: String(0),
            }).once("error", (err) => {
            console.log(err);
            setFeedback("Sorry1c, something went wrong.");
            setClaimingNftPublicWeth(false);
    }).then((receipt) => {
      console.log(receipt);
      setFeedback(`Increased wETH allowance and going to try minting now. You may want to revoke token approvals later just to be safe ;)`);
        dispatch(fetchData(blockchain.account));
      });
    blockchain.smartContract.methods
      .mintWeth(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry1b, something went wrong please try again later.");
        setClaimingNftPublicWeth(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `TREMENDOUS, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
        );
        setClaimingNftPublicWeth(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const claimNFTsV2Holder = () => {
    let cost = CONFIG.WEI_COST_V2HOLDER;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost);
    let totalGasLimit = String(gasLimit);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Discount minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNftV2Holder(true);
    blockchain.smartContract.methods
      .discountMint()
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry2, something went wrong please try again later.");
        setClaimingNftV2Holder(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `AWESOME, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
        );
        setClaimingNftV2Holder(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const claimNFTsV2HolderWeth = () => {
    let cost = CONFIG.WEI_COST_V2HOLDER_WETH;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(0);
    let totalGasLimit = String(gasLimit);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNftV2HolderWeth(true);
    blockchain.smartContractWeth.methods.increaseAllowance(
      CONFIG.CONTRACT_ADDRESS, 
      CONFIG.WEI_COST_WETH_ALLOWANCE).send(
            {gasLimit: String(totalGasLimit), 
             to:CONFIG.CONTRACT_ADDRESS_WETH,
             from: blockchain.account, 
             value: String(0),
            }).once("error", (err) => {
            console.log(err);
            setFeedback("Sorry2c, something went wrong.");
            setClaimingNftPublicWeth(false);
    }).then((receipt) => {
      console.log(receipt);
      setFeedback(`Increased wETH allowance and going to try minting now. You may want to revoke token approvals later just to be safe ;)`);
        dispatch(fetchData(blockchain.account));
      });
    blockchain.smartContract.methods
      .discountMintWeth()
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry2b, something went wrong please try again later.");
        setClaimingNftPublicWeth(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `WAZAM, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
        );
        setClaimingNftPublicWeth(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const claimFreeNFTs = () => {
    let cost = 0;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(0);
    let totalGasLimit = String(gasLimit);
    console.log("FM Cost: ", totalCostWei);
    console.log("FM Gas limit: ", totalGasLimit);
    setFeedback(`Minting your free ${CONFIG.NFT_NAME}...`);
    setClaimingFreeNft(true);
    blockchain.smartContract.methods
      .freeMint()
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry3, something went wrong please try again later.");
        setClaimingFreeNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `Wohoo! You free minted a ${CONFIG.NFT_NAME}! Go visit Opensea.io to view it.`
        );
        setClaimingFreeNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 8) {
      newMintAmount = 8;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("./config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  return (
    <s.Screen>
      <s.Container
        flex={1}
        ai={"center"}
        style={{ padding: 24, backgroundColor: "var(--primary)" }}
        image={CONFIG.SHOW_BACKGROUND ? "./config/images/bg.png" : null}
      >
        <StyledLogo alt={"logo"} src={"./config/images/logo.png"} />
        <s.SpacerSmall />
        <ResponsiveWrapper flex={1} style={{ padding: 24 }} test>
          <s.Container flex={1} jc={"center"} ai={"center"}>
            <StyledImg alt={"example"} src={"./config/images/example.gif"} />
          </s.Container>
          <s.SpacerLarge />
          <s.Container
            flex={2}
            jc={"center"}
            ai={"center"}
            style={{
              backgroundColor: "var(--accent)",
              padding: 24,
              borderRadius: 24,
              border: "4px dashed var(--secondary)",
              boxShadow: "0px 5px 11px 2px rgba(0,0,0,0.7)",
            }}
          >
            <s.TextTitle
              style={{
                textAlign: "center",
                fontSize: 50,
                fontWeight: "bold",
                color: "var(--accent-text)",
              }}
            >
              {data.totalSupply} / {CONFIG.MAX_SUPPLY}
            </s.TextTitle>
            <s.TextDescription
              style={{
                textAlign: "center",
                color: "var(--primary-text)",
              }}
            >
              <StyledLink target={"_blank"} href={CONFIG.SCAN_LINK}>
                {CONFIG.NFT_NAME} Smart Contract Address {CONFIG.CONTRACT_ADDRESS}
              </StyledLink>
            </s.TextDescription>
            <s.SpacerSmall />
            {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
              <>
                <s.TextTitle
                  style={{ textAlign: "center", color: "var(--accent-text)" }}
                >
                  The sale has ended.
                </s.TextTitle>
                <s.TextDescription
                  style={{ textAlign: "center", color: "var(--accent-text)" }}
                >
                  You can still find {CONFIG.NFT_NAME} on
                </s.TextDescription>
                <s.SpacerSmall />
                <StyledLink target={"_blank"} href={CONFIG.MARKETPLACE_LINK}>
                  {CONFIG.MARKETPLACE}
                </StyledLink>
              </>
            ) : (
              <>
                    <s.Container ai={"center"} jc={"center"} fd={"row"}>
                      <StyledButton
                        disabled={claimingFreeNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          claimFreeNFTs();
                          getData();
                        }}
                      >
                        {claimingFreeNft ? "BUSY" : "V1 OWNER FREE MINT"}
                      </StyledButton>
                    </s.Container>
                    <s.SpacerSmall />
                <s.SpacerXSmall />

                    <s.Container ai={"center"} jc={"center"} fd={"row"}>
                      <StyledButton
                        disabled={claimingNftV2Holder ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          claimNFTsV2Holder();
                          getData();
                        }}
                      >
                        {claimingFreeNft ? "BUSY" : "V2 OWNER DISCOUNT MINT"}
                      </StyledButton>
                    </s.Container>

                    <s.SpacerSmall />
                <s.SpacerXSmall />

                    <s.Container ai={"center"} jc={"center"} fd={"row"}>
                      <StyledButton
                        disabled={claimingNftV2HolderWeth ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          claimNFTsV2HolderWeth();
                          getData();
                        }}
                      >
                        {claimingFreeNft ? "BUSY" : "V2 OWNER DISCOUNT MINT (wETH)"}
                      </StyledButton>
                    </s.Container> 
                
                    <s.SpacerSmall />
                <s.SpacerXSmall />


                <s.TextTitle
                  style={{ textAlign: "center", color: "var(--accent-text)" }}
                >
                  V2 Owner Discount Mint: 1 {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST_V2HOLDER}{" "}
                  {CONFIG.NETWORK.SYMBOL} or {CONFIG.DISPLAY_COST_V2HOLDER_WETH} weth
                </s.TextTitle>

                <s.TextTitle
                  style={{ textAlign: "center", color: "var(--accent-text)" }}
                >
                  Public Sale Below: 1 {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST_PUBLIC}{" "}
                  {CONFIG.NETWORK.SYMBOL} or {CONFIG.DISPLAY_COST_PUBLIC_WETH} weth
                </s.TextTitle>
                <s.TextDescription
                  style={{ textAlign: "center", color: "var(--accent-text)" }}
                >
                  (excluding gas fees).
                </s.TextDescription>
                <s.SpacerSmall />
                {blockchain.account === "" ||
                blockchain.smartContract === null ? (
                  <s.Container ai={"center"} jc={"center"}>
                    <s.TextDescription
                      style={{
                        textAlign: "center",
                        color: "var(--accent-text)",
                      }}
                    >
                      Connect to the {CONFIG.NETWORK.NAME} network
                    </s.TextDescription>
                    <s.SpacerSmall />
                    <StyledButton
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(connect());
                        getData();
                      }}
                    >
                      CONNECT (METAMASK)
                    </StyledButton>

                    <StyledButton
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(connectCoinbase());
                        getData();
                      }}
                    >
                      CONNECT (COINBASE WALLET)
                    </StyledButton>

                    {blockchain.errorMsg !== "" ? (
                      <>
                        <s.SpacerSmall />
                        <s.TextDescription
                          style={{
                            textAlign: "center",
                            color: "var(--accent-text)",
                          }}
                        >
                          {blockchain.errorMsg}
                        </s.TextDescription>
                      </>
                    ) : null}
                  </s.Container>
                ) : (
                  <>
                    <s.TextDescription
                      style={{
                        textAlign: "center",
                        color: "var(--accent-text)",
                      }}
                    >
                      {feedback}
                    </s.TextDescription>
                    <s.SpacerMedium />
                    <s.Container ai={"center"} jc={"center"} fd={"row"}>
                      <StyledRoundButton
                        style={{ lineHeight: 0.4 }}
                        disabled={claimingNftPublic ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          decrementMintAmount();
                        }}
                      >
                        -
                      </StyledRoundButton>
                      <s.SpacerMedium />
                      <s.TextDescription
                        style={{
                          textAlign: "center",
                          color: "var(--accent-text)",
                        }}
                      >
                        {mintAmount}
                      </s.TextDescription>
                      <s.SpacerMedium />
                      <StyledRoundButton
                        disabled={claimingNftPublic ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          incrementMintAmount();
                        }}
                      >
                        +
                      </StyledRoundButton>
                    </s.Container>
                    <s.SpacerSmall />
                    <s.Container ai={"center"} jc={"center"} fd={"row"}>
                      <StyledButton
                        disabled={claimingNftPublic ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          claimNFTsPublic();
                          getData();
                        }}
                      >
                        {claimingNftPublic ? "BUSY" : "BUY (PUBLIC SALE)"}
                      </StyledButton>
                    </s.Container>
                    <s.SpacerSmall />

                    <s.Container ai={"center"} jc={"center"} fd={"row"}>
                      <StyledButton
                        disabled={claimingNftPublicWeth ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          claimNFTsPublicWeth();
                          getData();
                        }}
                      >
                        {claimingNftPublicWeth ? "BUSY" : "BUY (PUBLIC SALE, wETH)"}
                      </StyledButton>
                    </s.Container>

                  </>
                )}
              </>
            )}
            <s.SpacerMedium />
          </s.Container>
          <s.SpacerLarge />
          <s.Container flex={1} jc={"center"} ai={"center"}>
            <StyledImg
              alt={"example"}
              src={"./config/images/example.gif"}
              style={{ transform: "scaleX(-1)" }}
            />
          </s.Container>
        </ResponsiveWrapper>
        <s.SpacerMedium />
        <s.Container jc={"center"} ai={"center"} style={{ width: "70%" }}>
          <s.TextDescription
            style={{
              textAlign: "center",
              color: "var(--primary-text)",
            }}
          >
            Please make sure you are connected to the right network (
            {CONFIG.NETWORK.NAME}) and the correct address. Please note:
            Once you make the purchase, you cannot undo this action.
          </s.TextDescription>
          <s.SpacerSmall />
          <s.TextDescription
            style={{
              textAlign: "center",
              color: "var(--primary-text)",
            }}
          >
            We have set the gas limit to {CONFIG.GAS_LIMIT} for the contract to
            successfully mint your NFT. We recommend that you don't lower the
            gas limit.
          </s.TextDescription>
        </s.Container>
      </s.Container>
    </s.Screen>
  );
}

export default App;
