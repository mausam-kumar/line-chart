import ChangedPrice from "./ChangedPrice";
import CurrentPrice from "./CurrentPrice";

const Price = () => {
    return <div className="space-y-2">
        <CurrentPrice price={63179.71} currency='USD' />
        <ChangedPrice price={2161.42} percentageChange={3.54} />
    </div>
};

export default Price