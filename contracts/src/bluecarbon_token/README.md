# Deploy fungible token

- CLONE:
`git clone git@github.com:near-examples/FT.git`

- Deploy:
`near dev-deploy --wasmFile res/fungible_token.wasm --helperUrl https://near-contract-helper.onrender.com`

- Init:
`near call dev-1664119472789-71001777229299 new '{"owner_id": "blue_carbon.nearzero.testnet", "total_supply": "1000000000000000", "metadata": { "spec": "ft-1.0.0", "name": "Blue Carbon Token", "symbol": "BCT", "decimals": 8 }}' --accountId dev-1664119472789-71001777229299`
