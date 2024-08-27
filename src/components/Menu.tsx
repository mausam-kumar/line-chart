import { useState } from "react";

const MenuItem = ({ label, handleClick, selected }: { label: string, handleClick?: () => void, selected: string }) => {
    const isActive = selected === label;
    return <div className="w-fit relative">
        <button onClick={handleClick} className={`font-circularStd text-xl ${isActive ? "text-black1" : "text-gray2"}`}>{label}</button>
        <span className={`absolute -bottom-3 left-0 ${isActive ? "w-full border-2 border-blue1" : "w-0"} transform transition-all duration-200`}></span>
    </div>
};

const List = ["Summary", "Chart", "Statistics", "Analysis", "Settings"]

const format = ["1d", "3d", "1w", "1m", "6m", "1y", "max"]

const Menu = () => {
    const [selected, setSelected] = useState("Chart")

    return <div>
        <div className="flex gap-x-5 mt-8">
            {
                List.map((label) => {
                    return <MenuItem
                        handleClick={() => setSelected(label)}
                        label={label}
                        key={label}
                        selected={selected}
                    />
                })
            }
        </div>
        <div className="border-b border-gray3 mt-3" />
    </div>
};

export const DateRange = () => {

    return <div className="flex justify-end w-full gap-x-6 mt-8">
        {
            format.map((label) => {
                return <MenuItem
                    label={label}
                    key={label}
                    selected=""
                />
            })
        }
    </div>
};

export default Menu