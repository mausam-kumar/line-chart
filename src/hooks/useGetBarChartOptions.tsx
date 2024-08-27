/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChartOptions } from "chart.js";
import { dataSetLength } from "./useGetConfig";

const useGetBarChartOptions = () => {
    const totalDuration = 1000;
    const delayBetweenPoints = totalDuration / dataSetLength;
    const previousY = (ctx: any) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;
    const animation = {
        x: {
            type: 'number' as "number",
            easing: 'easeOutCubic' as "easeOutCubic",
            duration: delayBetweenPoints,
            from: NaN,
            delay(ctx: any) {
                if (ctx.type !== 'data' || ctx.xStarted) {
                    return 0;
                }
                ctx.xStarted = true;
                return ctx.index * delayBetweenPoints;
            }
        },
        y: {
            type: 'number' as "number",
            easing: 'easeOutCubic' as "easeOutCubic",
            duration: delayBetweenPoints,
            from: previousY,
            delay(ctx: any) {
                if (ctx.type !== 'data' || ctx.yStarted) {
                    return 0;
                }
                ctx.yStarted = true;
                return ctx.index * delayBetweenPoints;
            }
        }
    };

    const options: ChartOptions<"bar"> = {
        animations: animation,
        responsive: true,
        elements: {
            point: {
                radius: 0
            }
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                display: false
            },
            y: {
                grid: {
                    display: false,
                },
                display: false
            }
        },
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false,
            },
            tooltip: {
                enabled: false,
            },
        },
    }

    return { options }
};

export default useGetBarChartOptions