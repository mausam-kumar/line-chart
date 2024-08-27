import { FC } from "react";
import { addCommas } from "../utils";

type CurrentPriceProps = {
    price: number
    currency: string
};

const CurrentPrice: FC<CurrentPriceProps> = ({ price, currency }) => {

    return <div className="relative w-60 font-circularStd">
        <p className="text-5xl text-black1">{addCommas(price)}</p>
        <p className="absolute top-0 right-0 text-2xl text-gray1">{currency}</p>
    </div>
};

export default CurrentPrice;