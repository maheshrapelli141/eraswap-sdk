/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { RentalAgreement } from "./RentalAgreement";

export class RentalAgreementFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _lessor: string,
    _lessee: string,
    _maxrent: BigNumberish,
    _security: BigNumberish,
    _cancellationFee: BigNumberish,
    _incentive: BigNumberish,
    _item: string,
    _status: boolean,
    _possibleRents: BigNumberish[],
    _manager: string,
    overrides?: Overrides
  ): Promise<RentalAgreement> {
    return super.deploy(
      _lessor,
      _lessee,
      _maxrent,
      _security,
      _cancellationFee,
      _incentive,
      _item,
      _status,
      _possibleRents,
      _manager,
      overrides || {}
    ) as Promise<RentalAgreement>;
  }
  getDeployTransaction(
    _lessor: string,
    _lessee: string,
    _maxrent: BigNumberish,
    _security: BigNumberish,
    _cancellationFee: BigNumberish,
    _incentive: BigNumberish,
    _item: string,
    _status: boolean,
    _possibleRents: BigNumberish[],
    _manager: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _lessor,
      _lessee,
      _maxrent,
      _security,
      _cancellationFee,
      _incentive,
      _item,
      _status,
      _possibleRents,
      _manager,
      overrides || {}
    );
  }
  attach(address: string): RentalAgreement {
    return super.attach(address) as RentalAgreement;
  }
  connect(signer: Signer): RentalAgreementFactory {
    return super.connect(signer) as RentalAgreementFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RentalAgreement {
    return new Contract(address, _abi, signerOrProvider) as RentalAgreement;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_lessor",
        type: "address",
      },
      {
        internalType: "address",
        name: "_lessee",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_maxrent",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_security",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_cancellationFee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_incentive",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_item",
        type: "string",
      },
      {
        internalType: "bool",
        name: "_status",
        type: "bool",
      },
      {
        internalType: "uint256[]",
        name: "_possibleRents",
        type: "uint256[]",
      },
      {
        internalType: "address",
        name: "_manager",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [],
    name: "agreementConfirmed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "enum RentalAgreement.Check",
        name: "",
        type: "uint8",
      },
    ],
    name: "checked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "enum RentalAgreement.State",
        name: "",
        type: "uint8",
      },
    ],
    name: "contractTerminated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "paidRent",
    type: "event",
  },
  {
    inputs: [],
    name: "amt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "cancelRent",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "cancellationFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "check",
    outputs: [
      {
        internalType: "enum RentalAgreement.Check",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "confirmAgreement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "createdTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint48",
        name: "_condition",
        type: "uint48",
      },
    ],
    name: "finalCheckByLessee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint48",
        name: "_condition",
        type: "uint48",
      },
    ],
    name: "finalCheckByLessor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "incentive",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "initialCheck",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint48",
        name: "_condition",
        type: "uint48",
      },
    ],
    name: "initialCheckByLessee",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint48",
        name: "_condition",
        type: "uint48",
      },
    ],
    name: "initialCheckByLessor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "item",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lessee",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lessor",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "manager",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxRent",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "paidrents",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "payRent",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "payingRent",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "possibleRents",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "productManager",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "additionalCharges",
        type: "uint256",
      },
    ],
    name: "resolveDispute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "security",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "state",
    outputs: [
      {
        internalType: "enum RentalAgreement.State",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "terminateNormally",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "additionalCharges",
        type: "uint256",
      },
    ],
    name: "terminateWithAdditionalCharges",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620021133803806200211383398101604081905262000034916200031a565b600a80546001600160a01b03808d166001600160a01b031992831617909255600b8054928c1692909116919091179055600288905583516200007e906009906020870190620000f2565b50600487905560058690556006859055600d805460ff60a01b1916600160a01b85151502176001600160a01b0319166001600160a01b0383161790558151620000cf90600890602085019062000187565b5050426001555050600e805460ff60901b19169055506200041795505050505050565b828054600181600116156101000203166002900490600052602060002090601f0160209004810192826200012a576000855562000175565b82601f106200014557805160ff191683800117855562000175565b8280016001018555821562000175579182015b828111156200017557825182559160200191906001019062000158565b5062000183929150620001c4565b5090565b8280548282559060005260206000209081019282156200017557916020028201828111156200017557825182559160200191906001019062000158565b5b80821115620001835760008155600101620001c5565b80516001600160a01b0381168114620001f357600080fd5b919050565b600082601f83011262000209578081fd5b81516001600160401b038111156200021d57fe5b60208082026200022f828201620003f3565b838152935081840185830182870184018810156200024c57600080fd5b600092505b848310156200027157805182526001929092019190830190830162000251565b505050505092915050565b80518015158114620001f357600080fd5b600082601f8301126200029e578081fd5b81516001600160401b03811115620002b257fe5b6020620002c8601f8301601f19168201620003f3565b92508183528481838601011115620002df57600080fd5b60005b82811015620002ff578481018201518482018301528101620002e2565b82811115620003115760008284860101525b50505092915050565b6000806000806000806000806000806101408b8d0312156200033a578586fd5b620003458b620001db565b99506200035560208c01620001db565b985060408b0151975060608b0151965060808b0151955060a08b0151945060c08b015160018060401b03808211156200038c578586fd5b6200039a8e838f016200028d565b9550620003aa60e08e016200027c565b94506101008d0151915080821115620003c1578384fd5b50620003d08d828e01620001f8565b925050620003e26101208c01620001db565b90509295989b9194979a5092959850565b6040518181016001600160401b03811182821017156200040f57fe5b604052919050565b611cec80620004276000396000f3fe60806040526004361061013c5760003560e01c806308e5666c14610141578063103097811461016c57806310a521261461018157806316eab96b146101a35780631d4632ac146101b85780631e36586f146101cd5780633bd7ba00146101ef578063481c6a75146101f7578063548799181461020c57806354dc7ccd146102215780635f08a158146102365780636ef569a51461024b57806374017cee146102605780638e6295801461028e578063919840ad146102a1578063a709c4fe146102c3578063b61cdf89146102cb578063c19d93fb146102d3578063c2b7b868146102f5578063c8a3752f14610315578063c9777fc914610335578063f032ea8c14610355578063f17af51714610375578063f2a4a82e1461037d578063f426306f1461039f578063f5a3182b146103b4578063f746882c146103c9575b600080fd5b34801561014d57600080fd5b506101566103dc565b6040516101639190611c3e565b60405180910390f35b34801561017857600080fd5b506101566103e2565b34801561018d57600080fd5b506101a161019c3660046117c7565b6103e8565b005b3480156101af57600080fd5b506101566104b2565b3480156101c457600080fd5b506101566104b8565b3480156101d957600080fd5b506101e26104be565b60405161016391906117ed565b6101a16104cd565b34801561020357600080fd5b506101e2610602565b34801561021857600080fd5b50610156610611565b34801561022d57600080fd5b506101a1610617565b34801561024257600080fd5b506101566106e1565b34801561025757600080fd5b506101566106e7565b34801561026c57600080fd5b5061028061027b3660046117af565b6106ed565b604051610163929190611c47565b6101a161029c3660046117c7565b61071b565b3480156102ad57600080fd5b506102b6610819565b604051610163919061186c565b6101a1610829565b6101a1610ab4565b3480156102df57600080fd5b506102e8610bf5565b6040516101639190611880565b34801561030157600080fd5b506101a16103103660046117af565b610c05565b34801561032157600080fd5b506101a16103303660046117c7565b610e48565b34801561034157600080fd5b506101566103503660046117af565b610f38565b34801561036157600080fd5b506101a16103703660046117c7565b610f59565b6101a161100b565b34801561038957600080fd5b5061039261110a565b604051610163919061188e565b3480156103ab57600080fd5b506101e2611198565b3480156103c057600080fd5b506101e26111a7565b6101a16103d73660046117af565b6111b6565b60025481565b60015481565b600080600e54600160901b900460ff16600381111561040357fe5b146104295760405162461bcd60e51b815260040161042090611b83565b60405180910390fd5b600a546001600160a01b031633146104535760405162461bcd60e51b815260040161042090611b55565b600e805465ffffffffffff191665ffffffffffff8416179055604051600080516020611c568339815191529061048b9060009061186c565b60405180910390a1600e80546000919060ff60981b1916600160981b835b02179055505050565b60075481565b60065481565b600b546001600160a01b031681565b600a546001600160a01b031633146104e457600080fd5b600280600e54600160901b900460ff1660038111156104ff57fe5b1461051c5760405162461bcd60e51b815260040161042090611b83565b600580600e54600160981b900460ff16600781111561053757fe5b146105545760405162461bcd60e51b815260040161042090611a6e565b600080516020611c9783398151915260036040516105729190611880565b60405180910390a1600e54600160601b900465ffffffffffff166001146105ab5760405162461bcd60e51b815260040161042090611ae1565b600b546004546040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156105e7573d6000803e3d6000fd5b50600e80546003919060ff60901b1916600160901b836104a9565b600d546001600160a01b031681565b60045481565b600180600e54600160901b900460ff16600381111561063257fe5b1461064f5760405162461bcd60e51b815260040161042090611b83565b600280600e54600160981b900460ff16600781111561066a57fe5b146106875760405162461bcd60e51b815260040161042090611a6e565b600b546001600160a01b0316331461069e57600080fd5b6040517fff274055432556a9f474da8c11df1d265e3bbf0e8eafad4f12bd72a9c175b4db90600090a1600e80546002919060ff60901b1916600160901b836104a9565b60035481565b60055481565b600081815481106106fd57600080fd5b60009182526020909120600290910201805460019091015490915082565b600080600e54600160981b900460ff16600781111561073657fe5b146107535760405162461bcd60e51b815260040161042090611a6e565b600a546001600160a01b031633141561077e5760405162461bcd60e51b815260040161042090611bce565b600d805465ffffffffffff60a81b1916600160a81b65ffffffffffff851602179055604051600080516020611c56833981519152906107bf9060019061186c565b60405180910390a1600b80546001600160a01b0319163317905560045434146107fa5760405162461bcd60e51b8152600401610420906119f6565b600e805460ff60981b1916600160981b17905561081561100b565b5050565b600e54600160981b900460ff1681565b600b546001600160a01b0316331461084057600080fd5b600280600e54600160901b900460ff16600381111561085b57fe5b146108785760405162461bcd60e51b815260040161042090611b83565b6000805b6008548110156108d2576008818154811061089357fe5b90600052602060002001543414156108ca5760019150600881815481106108b657fe5b6000918252602090912001546003556108d2565b60010161087c565b50806001146108f35760405162461bcd60e51b815260040161042090611918565b7fde56cd81bac5ec7558231ad441ab69a7c068dc8fc88c8159484a8e7b76ca8eb96003546040516109249190611c3e565b60405180910390a1600a546006546001600160a01b03909116906108fc9061095d90606490610957903490606303611404565b90611466565b6040518115909202916000818181858888f19350505050158015610985573d6000803e3d6000fd5b50600d546006546001600160a01b0390911690630366e7f4906109b390606490610957903490600101611404565b600a546006546040516001600160e01b031960e086901b1681526109ed9233926001600160a01b0390911691349160010190600401611801565b6000604051808303818588803b158015610a0657600080fd5b505af1158015610a1a573d6000803e3d6000fd5b5050505050610a366003546007546114a590919063ffffffff16565b60075550506040805180820190915260008054600181018084526003546020850190815290835591805291517f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563600290930292830155517f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56490910155565b600b546001600160a01b03163314610acb57600080fd5b6003600e54600160901b900460ff166003811115610ae557fe5b1415610b035760405162461bcd60e51b8152600401610420906118e1565b60075415610b235760405162461bcd60e51b815260040161042090611965565b600b546004546040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610b5f573d6000803e3d6000fd5b506005543414610b6e57600080fd5b600080516020611c978339815191526003604051610b8c9190611880565b60405180910390a1600a546040516001600160a01b03909116903480156108fc02916000818181858888f19350505050158015610bcd573d6000803e3d6000fd5b50600554600754610bdd916114a5565b600755600e805460ff60901b1916600360901b179055565b600e54600160901b900460ff1681565b600d54604051630935e01b60e21b81526001600160a01b03909116906324d7806c90610c359033906004016117ed565b60206040518083038186803b158015610c4d57600080fd5b505afa158015610c61573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c85919061178f565b610ca15760405162461bcd60e51b815260040161042090611ab9565b600080516020611c978339815191526003604051610cbf9190611880565b60405180910390a1600454811115610ce95760405162461bcd60e51b8152600401610420906119ae565b600a546001600160a01b03166108fc610d086064610957856063611404565b6040518115909202916000818181858888f19350505050158015610d30573d6000803e3d6000fd5b50600d546001600160a01b0316630366e7f4610d526064610957856001611404565b600b54600a546040516001600160e01b031960e086901b168152610d8b926001600160a01b039081169216908790600190600401611801565b6000604051808303818588803b158015610da457600080fd5b505af1158015610db8573d6000803e3d6000fd5b50505050506000610dd4826004546114fd90919063ffffffff16565b600b546040519192506001600160a01b03169082156108fc029083906000818181858888f19350505050158015610e0f573d6000803e3d6000fd5b50600754610e1d90836114a5565b6007908155600e805460ff60901b1916600360901b1780825560ff60981b1916600160981b836104a9565b600b546001600160a01b03163314610e5f57600080fd5b600280600e54600160901b900460ff166003811115610e7a57fe5b14610e975760405162461bcd60e51b815260040161042090611b83565b600380600e54600160981b900460ff166007811115610eb257fe5b14610ecf5760405162461bcd60e51b815260040161042090611a6e565b600e805465ffffffffffff60601b1916600160601b65ffffffffffff861602179055604051600080516020611c5683398151915290610f109060049061186c565b60405180910390a1600e805460ff60981b19166001609a1b179055610f3361153f565b505050565b60088181548110610f4857600080fd5b600091825260209091200154905081565b600a546001600160a01b03163314610f7057600080fd5b600280600e54600160901b900460ff166003811115610f8b57fe5b14610fa85760405162461bcd60e51b815260040161042090611b83565b600e805465ffffffffffff60301b1916600160301b65ffffffffffff851602179055604051600080516020611c5683398151915290610fe99060039061186c565b60405180910390a1600e80546003919060ff60981b1916600160981b836104a9565b600080600e54600160901b900460ff16600381111561102657fe5b146110435760405162461bcd60e51b815260040161042090611b83565b600180600e54600160981b900460ff16600781111561105e57fe5b1461107b5760405162461bcd60e51b815260040161042090611a6e565b600e54600d54600160a81b900465ffffffffffff90811691161480156110b25750600d54600160a81b900465ffffffffffff166001145b156105ab57600080516020611c5683398151915260026040516110d5919061186c565b60405180910390a1600e805460ff60981b1916600160991b1760ff60901b1916600160901b179055611105610617565b610815565b6009805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156111905780601f1061116557610100808354040283529160200191611190565b820191906000526020600020905b81548152906001019060200180831161117357829003601f168201915b505050505081565b600c546001600160a01b031681565b600a546001600160a01b031681565b600a546001600160a01b031633146111cd57600080fd5b600280600e54600160901b900460ff1660038111156111e857fe5b146112055760405162461bcd60e51b815260040161042090611b83565b600580600e54600160981b900460ff16600781111561122057fe5b1461123d5760405162461bcd60e51b815260040161042090611a6e565b600080516020611c97833981519152600360405161125b9190611880565b60405180910390a1600e54600160601b900465ffffffffffff16156112925760405162461bcd60e51b815260040161042090611a26565b6004548311156112b45760405162461bcd60e51b815260040161042090611bf2565b600a546001600160a01b03166108fc6112d36064610957876063611404565b6040518115909202916000818181858888f193505050501580156112fb573d6000803e3d6000fd5b50600d546001600160a01b0316630366e7f461131d6064610957876001611404565b600b54600a546040516001600160e01b031960e086901b168152611356926001600160a01b039081169216908990600190600401611801565b6000604051808303818588803b15801561136f57600080fd5b505af1158015611383573d6000803e3d6000fd5b5050505050600061139f846004546114fd90919063ffffffff16565b600b546040519192506001600160a01b03169082156108fc029083906000818181858888f193505050501580156113da573d6000803e3d6000fd5b506007546113e890856114a5565b6007555050600e805460ff60901b1916600360901b1790555050565b60008261141357506000611460565b8282028284828161142057fe5b041461145d5760405162461bcd60e51b8152600401808060200182810382526021815260200180611c766021913960400191505060405180910390fd5b90505b92915050565b600061145d83836040518060400160405280601a815260200179536166654d6174683a206469766973696f6e206279207a65726f60301b815250611693565b60008282018381101561145d576040805162461bcd60e51b815260206004820152601b60248201527a536166654d6174683a206164646974696f6e206f766572666c6f7760281b604482015290519081900360640190fd5b600061145d83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611735565b600280600e54600160901b900460ff16600381111561155a57fe5b146115775760405162461bcd60e51b815260040161042090611b83565b600480600e54600160981b900460ff16600781111561159257fe5b146115af5760405162461bcd60e51b815260040161042090611a6e565b600e54600160301b810465ffffffffffff908116600160601b90920416141561161057600080516020611c5683398151915260056040516115f0919061186c565b60405180910390a1600e805460ff60981b1916600560981b179055610815565b600d54600c5460405163c8cde07d60e01b81526001600160a01b039283169263c8cde07d9261164692911690309060040161182a565b600060405180830381600087803b15801561166057600080fd5b505af1158015611674573d6000803e3d6000fd5b5050600e80546006935090915060ff60981b1916600160981b836104a9565b6000818361171f5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156116e45781810151838201526020016116cc565b50505050905090810190601f1680156117115780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600083858161172b57fe5b0495945050505050565b600081848411156117875760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156116e45781810151838201526020016116cc565b505050900390565b6000602082840312156117a0578081fd5b8151801515811461145d578182fd5b6000602082840312156117c0578081fd5b5035919050565b6000602082840312156117d8578081fd5b813565ffffffffffff8116811461145d578182fd5b6001600160a01b0391909116815260200190565b6001600160a01b0394851681529290931660208301526040820152606081019190915260800190565b6001600160a01b039283168152911660208201526060604082018190526010908201526f526169736564206465706f737469746560801b608082015260a00190565b602081016008831061187a57fe5b91905290565b602081016004831061187a57fe5b6000602080835283518082850152825b818110156118ba5785810183015185820160400152820161189e565b818111156118cb5783604083870101525b50601f01601f1916929092016040019392505050565b6020808252601f908201527f596f752063616e6e6f742063616e63656c206174207468697320737461676500604082015260600190565b6020808252602d908201527f52656e742076616c756520646f65736e277420636f6d6520756e64657220617660408201526c61696c61626c652072656e747360981b606082015260800190565b60208082526029908201527f596f75206861766520616c7265616479207374617274656420706179696e67206040820152681e5bdd5c881c995b9d60ba1b606082015260800190565b60208082526028908201527f63616e6e6f74206368617267652070656e616c7479206d6f7265207468616e20604082015267736563757269747960c01b606082015260800190565b60208082526016908201527514d958dd5c9a5d1e48185b5bdd5b9d081b995959195960521b604082015260600190565b60208082526028908201527f596f75206d757374207465726d696e6174652074686520636f6e7472616374206040820152676e6f726d616c6c7960c01b606082015260800190565b6020808252602b908201527f4e6f7420696e206465736972656420436865636b20666f722066756e6374696f60408201526a371032bc32b1baba34b7b760a91b606082015260800190565b6020808252600e908201526d1b9bdd08185d5d1a1bdc9a5e995960921b604082015260600190565b6020808252604e908201527f506c65617365207465726d696e61746520636f6e7472616374207573696e672060408201527f74686520277465726d696e61746574576974684164646974696f6e616c43686160608201526d3933b2b99390333ab731ba34b7b760911b608082015260a00190565b60208082526014908201527313db9b1e481b195cdcdbdc8818d85b8818d85b1b60621b604082015260600190565b6020808252602b908201527f4e6f7420696e206465736972656420537461746520666f722066756e6374696f60408201526a371032bc32b1baba34b7b760a91b606082015260800190565b6020808252600a90820152694e6f74206c657373656560b01b604082015260600190565b6020808252602c908201527f596f752063616e6e6f74206368617267652070656e616c7479206d6f7265207460408201526b68616e20736563757269747960a01b606082015260800190565b90815260200190565b91825260208201526040019056fe2ed540b727ef2f5f1c30389076044f81c61a5b4befbfc07ad81b0517f9e692a5536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f772e3cd55ad0cf96ed0ed48cc64406b6168652724412c75219adad0879663f50a2a26469706673582212203d1de3bac7f986e3d1b43abd5bee8c4a3cad4f7fe9422c59ad82f623804bfd7264736f6c63430007050033";
