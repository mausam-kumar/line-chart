/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChartOptions, Plugin } from "chart.js";
import { dataSetLength } from "./useGetConfig";
// import { useState } from "react";

const useGetChartOption = () => {
    const totalDuration = 3000;
    // const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null);
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

    // const onMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, chart: Chart | null) => {
        
    //     if (chart) {
    //         const rect = chart.canvas.getBoundingClientRect();
    //         setMousePosition({
    //             x: e.clientX - rect.left,
    //             y: e.clientY - rect.top,
    //         });
    //     }
    // }

    const afterDrawPlugin: Plugin<'line'> = {
        id: 'customGridLines',
        afterDraw: (chart) => {
          const activeElements = chart.tooltip?.getActiveElements();
          if (activeElements?.length) {
            const ctx = chart.ctx;
            ctx.save();
            const activePoint = activeElements[0].element;
            const x = activePoint.x;
            const y = activePoint.y;
    
            // Draw vertical line
            ctx.beginPath();
            ctx.setLineDash([5, 5]);
            ctx.moveTo(x, chart.chartArea.top);
            ctx.lineTo(x, chart.chartArea.bottom);
            ctx.strokeStyle = '#d3d3d3';
            ctx.stroke();
    
            // Draw horizontal line
            ctx.beginPath();
            ctx.moveTo(chart.chartArea.left, y);
            ctx.lineTo(chart.chartArea.right, y);
            ctx.strokeStyle = '#d3d3d3';
            ctx.stroke();
            
            ctx.restore();
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
                display: false,
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
                enabled: true,
                backgroundColor: '#1A243A',
                titleColor: '#FFFFFF',
                bodyColor: '#FFFFFF',
            },
        },
    }

    return { options, afterDrawPlugin }
}

export default useGetChartOption