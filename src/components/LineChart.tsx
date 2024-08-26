/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChartData, ChartOptions } from "chart.js";
import { Line } from "react-chartjs-2";
import { forwardRef } from "react";

type LineChartProps = {
    data: ChartData<"line">,
    options: ChartOptions<"line">,
    height: number,
    width: number
}

const LineChart = forwardRef(function LineChart(props: LineChartProps, ref: any){
    const { width, height, options, data } = props
    console.log(ref, "ref")
    return <div className="overflow-hidden">
        <div style={{ width }}>
            <Line
                height={height}
                width={width}
                options={{ ...options, maintainAspectRatio: false }}
                data={data}
                ref={ref}
            />
        </div>
    </div>
});

export default LineChart