

    for ( let i = 1; i <= 62; i++) {
        const url = `https://pokeapi.co/api/v2/berry/${i}`;
        fetch(url)
        .then((res) => res.json())
        .then ((data) => {
        const berry = {
            name: data.name,
            size: data.size,
            growthTime: data.growth_time,
            firmness: data.firmness.name,
            naturalGiftType: data.natural_gift_type.name,
            naturalGiftPower: data.natural_gift_power,
            } 
        console.log(berry);
        berryDisplay(berry);
        });
    };

const listTitles = {
    sizeTitle: "Size: ",
    growthTitle: "Growth Time: ",
    firmTitle: "Firmness: ",
    giftTypeTitle: "Natural Gift Type: ",
    giftPowerTitle: "Natural Gift Power: ",
}


function berryDisplay(berry) {
    /* 
    berryItem = [berrySize, berryGrowthTime, berryFirmness, berryNaturalGiftType, berryNaturalGiftPower]
    berryItem = document.createElement('p');
    let berryText = [berrrySizeText, berryGrowthTimeText, berryFirmnessText, berryNaturalGiftTypeText, berryNaturalGiftPowerText]
    berryText = document.createElement('p'); 
    */
    
    let berryElement = document.createElement('dl');
    let berryHeader = document.createElement('h1');
    let berrySizeText = document.createElement('dt');
    let berrySize = document.createElement('dd');
    let berryGrowthTimeText = document.createElement('dt');
    let berryGrowthTime = document.createElement('dd');
    let berryFirmnessText = document.createElement('dt');
    let berryFirmness = document.createElement('dd');
    let berryNaturalGiftType = document.createElement('dd');
    let berryNaturalGiftTypeText = document.createElement('dt');
    let berryNaturalGiftPower = document.createElement('dd');
    let berryNaturalGiftPowerText = document.createElement('dt');
    
    berryHeader.innerText = berry.name;
    berrySizeText.innerHTML = listTitles.sizeTitle;
    berrySize.innerHTML = `${berry.size}`; 
    berryGrowthTimeText.innerHTML = listTitles.growthTitle;
    berryGrowthTime.innerHTML = `${berry.growthTime}`;
    berryFirmnessText.innerHTML = listTitles.firmTitle;
    berryFirmness.innerHTML = `${berry.firmness}`;
    berryNaturalGiftTypeText.innerHTML =  listTitles.giftTypeTitle;
    berryNaturalGiftType.innerHTML = `${berry.naturalGiftType}`;
    berryNaturalGiftPowerText.innerHTML = listTitles.giftPowerTitle;
    berryNaturalGiftPower.innerHTML = `${berry.naturalGiftPower}`;
    
    berryElement.appendChild(berryHeader)
    berryElement.appendChild(berrySizeText)
    berryElement.appendChild(berrySize)
    berryElement.appendChild(berryGrowthTimeText)
    berryElement.appendChild(berryGrowthTime)
    berryElement.appendChild(berryFirmnessText)
    berryElement.appendChild(berryFirmness)
    berryElement.appendChild(berryNaturalGiftPowerText)
    berryElement.appendChild(berryNaturalGiftPower)
    berryElement.appendChild(berryNaturalGiftTypeText)
    berryElement.appendChild(berryNaturalGiftType)
    
    berryList.appendChild(berryElement);
}


const bodyElement = document.getElementById("bodyElement");
bodyElement.style.backgroundImage = "linear-gradient(white, #2a75bb, #3B4CCA, #3c5aa6, black)";
berryList.style.backgroundColor = "#FF0000";
berryList.style.border = "3px solid black";
berryList.style.borderRadius = "border-radius: 2rem";
berryList.style.textTransform = "uppercase";
