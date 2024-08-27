import { ChartData } from "chart.js";
import LineChart from "./LineChart";
import { useCallback, useEffect, useRef, useState } from "react";
import { Chart } from 'chart.js';
import useGetConfig from "../hooks/useGetConfig";
import colors from "../constant";
import useGetChartOption from "../hooks/useGetChartOptions";

const TimeSeries = () => {
    const [gradient, setGradient] = useState<CanvasGradient | string>(colors.voilet1)
    const chartRef = useRef<Chart | null>(null)
    const { labels, randomNumbers, height, width } = useGetConfig()
    const { options, afterDrawPlugin } = useGetChartOption()

    const getGradientColor = useCallback(() => {
        const chart = chartRef.current;
        const ctx = chart?.ctx;
        if (!ctx) return;

        const gradient = ctx.createLinearGradient(0, 0, 0, chart.height);
        gradient.addColorStop(0, colors.voilet2);
        gradient.addColorStop(1, colors.white);
        setGradient(gradient)
    }, [])

    useEffect(() => {
        getGradientColor()
    }, [getGradientColor])

    const data: ChartData<"line"> = {
        labels,
        datasets: [
            {
                data: randomNumbers,
                backgroundColor: gradient,
                borderWidth: 1,
                borderColor: colors.voilet1,
                fill: true
            },
        ],
    };

    return <div
        // onMouseMove={(e) => {
        //     const chart = chartRef.current
        //     if (chart) {
        //         const rect = chart.canvas.getBoundingClientRect();
        //         setMousePosition({
        //             x: e.clientX - rect.left,
        //             y: e.clientY - rect.top,
        //         });
        //     }
        // }}
        // onMouseLeave={() => setMousePosition(null)}
    >
        <LineChart ref={chartRef}
            data={data}
            options={options}
            height={height}
            width={width}
            plugins={[afterDrawPlugin]}
        />
    </div>
};

export default TimeSeries;