const { NFTStorage, File, Blob } = require('nft.storage')

async function main(json) {
    const NFT_STORAGE_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDRkNTNiOTM4RGU1NjlENDE3MmU5NTFhNDVFRjNFMTY2ODZiRTVBRjkiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2Mzk2MTA3MTgyOCwibmFtZSI6Im5lYXJ6ZXJvIn0.HP0r8exRpooc135M3Ct4xt16XVUZ628LPoBQ0aHN4qo'
    const client = new NFTStorage({ token: NFT_STORAGE_TOKEN })

    const blob = new Blob([json])
    const metadata = await client.storeBlob(blob)

    const url = `https://${metadata}.ipfs.nftstorage.link/`
    console.log(url)
    return url
}

json = process.argv[2]
main(json)