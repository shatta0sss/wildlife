const letterMap={"K":1_000,"M":1_000_000,"B":1_000_000_000,"T":1_000_000_000_000}
const roundToDP=(num,decimalPlaces)=>{return(Math.floor(num*10**decimalPlaces)/10**decimalPlaces).toString()}
const formatLargeNumber=(num,precisionCutoff=1000,minDP,maxDP)=>{if(num<precisionCutoff)return formatNumber(num,minDP,maxDP)
num=Math.floor(num);let newNum=num;let suffix=""
Object.entries(letterMap).forEach(([letter,divisor])=>{if(num/divisor<1000&&num/divisor>=1){suffix=letter
newNum=num/divisor;}})
return `${roundToDP(newNum,2)}${suffix.toLowerCase()}`}
const numberWordMap=["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten"]
const priceLabels=Array.from(document.querySelectorAll(".price-label"))
const stageLabels=Array.from(document.querySelectorAll(".stage-label"))
const prevStageLabels=Array.from(document.querySelectorAll(".prev-stage-label"))
const defaultStage=2