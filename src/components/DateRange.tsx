import { useChartFilterContext } from "../context/ChartFilterProvider";

const DateItem = ({ label, handleClick, selectedLabel }: { label: string, handleClick?: () => void, selectedLabel: string }) => {
    const isActive = selectedLabel === label;
    return <div className="w-fit">
        <button onClick={handleClick} className={`font-circularStd text-xl px-3 py-1 rounded-md ${isActive ? "text-white bg-blue1" : "text-gray2"}`}>{label}</button>
    </div>
};

const DateRange = () => {
    const { filter, format, setFilter } = useChartFilterContext()

    return <div className="flex justify-end w-full gap-x-6 mt-8">
        {
            format.map((label) => {
                return <DateItem
                    label={label}
                    key={label}
                    selectedLabel={filter.dateLabel}
                    handleClick={() => setFilter({ ...filter, dateLabel: label })}
                />
            })
        }
    </div>
};

export default DateRange