import { useMemo } from "react";
import { useChartFilterContext } from "../context/ChartFilterProvider";

export const dataSetLength = 60;
const useGetConfig = () => {
    const { filter } = useChartFilterContext()
    const randomNum = [10000, 11000, 10200, 10400, 10200, 10500, 14000, 20000, 15000, 14000, 15000, 14000, 13500, 18500, 17000, 20000, 30000, 24000, 22000, 23000, 25000, 22000, 25000, 22500, 25000, 23000, 18000, 20000, 21000, 23000, 21500, 22500, 22000, 14000, 13500,]

    const { labels, randomNumbers } = useMemo(() => {
        const empArray = new Array(dataSetLength).fill(0)
        const labels = empArray.reduce((acc, ele, index) => {
            return [...acc, index + ele]
        }, [])
        
        const newEmpArray = new Array(dataSetLength-randomNum.length).fill(0)
        const randomNumbers = newEmpArray.reduce((acc) => {
            const min = 19000
            const max = 27000
            const val = Math.floor(Math.random() * (max - min + 1)) + min
            return [...acc, val]
        }, [])
        return { labels, randomNumbers: randomNumbers as number[] }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [randomNum.length, filter.dateLabel])

    const height = 300;
    const width = 700;
    
    return { labels, randomNumbers: [...randomNum, ...randomNumbers], height, width }
};

export default useGetConfig