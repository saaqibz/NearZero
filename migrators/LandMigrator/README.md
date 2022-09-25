# Land Migrator

- Mint land nfts from csv

---

# Setup

- setup venv environment. Check google if you need instruction
- activate env: `source bin/activate`
- install packages: `pip install -r requirements.txt`
- Make sure nft.storage is installed: `pip install git+https://github.com/nftstorage/python-client.git`

- Create a `.env` file with the following:

```
NFT_STORAGE_API_KEY=<get from nft.storage/manage>
```


# Update requirements.txt

`pip freeze > requirements.txt`