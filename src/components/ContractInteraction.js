// SimpleStorage.js
import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

const SimpleStorage = () => {
    const [web3, setWeb3] = useState(null);
    const [contract, setContract] = useState(null);
    const [account, setAccount] = useState('');
    const [storedData, setStoredData] = useState(0);

    useEffect(() => {
        const init = async () => {
            // Connect to MetaMask or other web3 provider
            if (window.ethereum) {
                const web3Instance = new Web3(window.ethereum);
                await window.ethereum.enable();
                setWeb3(web3Instance);

                // Replace with your deployed contract address
                const contractAddress = '0xd9145CCE52D386f254917e481eB44e9943F39138';
                const contractABI = [
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "approve",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "sender",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            },
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "ERC721IncorrectOwner",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "operator",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "ERC721InsufficientApproval",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "approver",
                                "type": "address"
                            }
                        ],
                        "name": "ERC721InvalidApprover",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "operator",
                                "type": "address"
                            }
                        ],
                        "name": "ERC721InvalidOperator",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "ERC721InvalidOwner",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "receiver",
                                "type": "address"
                            }
                        ],
                        "name": "ERC721InvalidReceiver",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "sender",
                                "type": "address"
                            }
                        ],
                        "name": "ERC721InvalidSender",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "ERC721NonexistentToken",
                        "type": "error"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "approved",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "Approval",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "operator",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "bool",
                                "name": "approved",
                                "type": "bool"
                            }
                        ],
                        "name": "ApprovalForAll",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "_fromTokenId",
                                "type": "uint256"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "_toTokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "BatchMetadataUpdate",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "_tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "MetadataUpdate",
                        "type": "event"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "string",
                                "name": "tokenURI",
                                "type": "string"
                            }
                        ],
                        "name": "mint",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "from",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "safeTransferFrom",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "from",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            },
                            {
                                "internalType": "bytes",
                                "name": "data",
                                "type": "bytes"
                            }
                        ],
                        "name": "safeTransferFrom",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "operator",
                                "type": "address"
                            },
                            {
                                "internalType": "bool",
                                "name": "approved",
                                "type": "bool"
                            }
                        ],
                        "name": "setApprovalForAll",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "from",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "Transfer",
                        "type": "event"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "from",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "transferFrom",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "balanceOf",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "getApproved",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "operator",
                                "type": "address"
                            }
                        ],
                        "name": "isApprovedForAll",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "name",
                        "outputs": [
                            {
                                "internalType": "string",
                                "name": "",
                                "type": "string"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "ownerOf",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "bytes4",
                                "name": "interfaceId",
                                "type": "bytes4"
                            }
                        ],
                        "name": "supportsInterface",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "symbol",
                        "outputs": [
                            {
                                "internalType": "string",
                                "name": "",
                                "type": "string"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "tokenURI",
                        "outputs": [
                            {
                                "internalType": "string",
                                "name": "",
                                "type": "string"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "totalSupply",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    }
                ];

                const contractInstance = new web3Instance.eth.Contract(contractABI, contractAddress);
                setContract(contractInstance);

                const accounts = await web3Instance.eth.getAccounts();
                setAccount(accounts[0]);
            }
        };

        init();
    }, []);

    const getStoredData = async () => {
        const data = await contract.methods.get().call();
        setStoredData(data);
    };

    const setStoredDataRandom = async () => {
        const randomValue = Math.floor(Math.random() * 100);
        await contract.methods.set(randomValue).send({ from: account });
        getStoredData();
    };

    return (
        <div className='flex flex-col lg:flex-col items-center  justify-center p-8 bg-black text-white min-h-screen'>

        <div className='mb-4 lg:mb-0 lg:mr-8 p-'>
          <img src="https://res.cloudinary.com/dpok16gsr/image/upload/v1701985020/Properties/laniu7xlzemx2rawwmkn.png" alt="Profile Photo" className="w-full max-w-xs h-auto rounded-full mx-auto lg:mx-0" />
        </div>
        <div className='text-center lg:text-left'>
          <div className='mb-4'>
            <h1 className='text-2xl font-bold'>Simple Storage Contract</h1>
            <p>Account: {account}</p>
            <p>Stored Data: {storedData}</p>
          </div>
          <div className='space-x-2'>
            <button onClick={getStoredData} className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>Get Stored Data</button>
            <button onClick={setStoredDataRandom} className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600'>Set Stored Data (Random)</button>
          </div>
        </div>
      </div>
      
    );
};

export default SimpleStorage;