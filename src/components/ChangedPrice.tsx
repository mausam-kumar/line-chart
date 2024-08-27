import { FC } from "react"
import { addCommas } from "../utils"

type ChangedPriceProps = {
    price: number
    percentageChange: number
}
const ChangedPrice: FC<ChangedPriceProps> = ({ price, percentageChange }) => {
    return <p className="font-circularStd font-normal text-green1 text-lg">{`+${addCommas(price)} (${percentageChange})%`}</p>
}

export default ChangedPrice