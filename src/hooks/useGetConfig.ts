import { useMemo } from "react";

export const dataSetLength = 40;
const useGetConfig = () => {

    const { labels, randomNumbers } = useMemo(() => {
        const empArray = new Array(dataSetLength).fill(0)
        const labels = empArray.reduce((acc, ele, index) => {
            return [...acc, index + ele]
        }, [])

        const randomNumbers = empArray.reduce((acc) => {
            const min = 10000
            const max = 50000
            const val = Math.floor(Math.random() * (max - min + 1)) + min
            return [...acc, val]
        }, [])
        return { labels, randomNumbers }
    }, [])

    const height = 300;
    const width = 600;

    return { labels, randomNumbers, height, width }
};

export default useGetConfig