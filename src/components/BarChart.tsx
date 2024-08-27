/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChartData, ChartOptions } from "chart.js";
import { Bar } from "react-chartjs-2";
import { forwardRef } from "react";

type BarChartProps = {
    data: ChartData<"bar">,
    options: ChartOptions<"bar">,
    height: number,
    width: number,
}

const BarChart = forwardRef(function LineChart(props: BarChartProps, ref: any){
    const { width, height, options, data } = props

    return <div className="overflow-hidden">
        <div style={{ width }}>
            <Bar
                height={height}
                width={width}
                options={{ ...options, maintainAspectRatio: false }}
                data={data}
                ref={ref}
            />
        </div>
    </div>
});

export default BarChart