/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChartOptions, Plugin, TooltipModel } from "chart.js";
import { dataSetLength } from "./useGetConfig";
import { addCommas } from "../utils";

const useGetLineChartOption = () => {
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

    const afterDrawPlugin: Plugin<'line'> = {
        id: 'customGridLines',
        afterDraw: (chart) => {
            const activeElements = chart.tooltip?.getActiveElements();
            if (activeElements?.length) {
                const ctx = chart.ctx;
                const chartArea = chart.chartArea;
                ctx.save();
                const activePoint = activeElements[0].element;
                const x = activePoint.x;
                const y = activePoint.y;

                ctx.beginPath();
                ctx.setLineDash([5, 5]);
                ctx.moveTo(x, chart.chartArea.top);
                ctx.lineTo(x, chart.chartArea.bottom);
                ctx.strokeStyle = '#999999';
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(chart.chartArea.left, y);
                ctx.lineTo(chart.chartArea.right, y);
                ctx.strokeStyle = '#999999';
                ctx.stroke();

                ctx.restore();
                const tooltip = chart.tooltip as TooltipModel<'line'>;
                if (tooltip) {
                    tooltip.xAlign = 'right';
                    tooltip.caretX = chartArea.right;
                    tooltip.caretY = y;
                }
            }
        }
    };


    const options: ChartOptions<"line"> = {
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
                mode: 'nearest',
                intersect: false,
                backgroundColor: '#1A243A',
                titleColor: '#ffffff',
                bodyColor: '#ffffff',
                boxHeight: 0,
                boxPadding: 0,
                boxWidth: 0,
                padding: 4,
                cornerRadius: 4,
                callbacks: {
                    label: function (context) {
                        return `${context.parsed.y}`;
                    },
                    labelColor: function () {
                        return {
                            borderColor: 'transparent',
                            backgroundColor: 'transparent'
                        };
                    },
                },
                titleFont: {
                    family: 'CircularStd',
                    size: 0,
                },
                bodyFont: {
                    family: 'CircularStd',
                    size: 18,
                },
            },
        },

        onHover: (event, _elements, chart) => {
            if (event.native) {
                const elementsAtEvent = chart.getElementsAtEventForMode(event.native, 'nearest', { intersect: false }, true);

                if (elementsAtEvent.length) {
                    const firstElement = elementsAtEvent[0];
                    const datasetIndex = firstElement.datasetIndex;
                    const index = firstElement.index;
                    const value = chart.data.datasets[datasetIndex].data[index];
                    const labelElement = document.getElementById('hoveredValue')!
                    labelElement.innerText = `${addCommas(Number(value))}`;
                } else {
                    const labelElement = document.getElementById('hoveredValue')!
                    labelElement.innerText = '';
                }
            }
        }
    }

    return { options, afterDrawPlugin }
}

export default useGetLineChartOption