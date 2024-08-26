import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    scales,
    ChartData,
    ChartOptions,
    PointElement,
    LineElement
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    scales,
    PointElement,
    LineElement
);

type LineChartProps = {
    data: ChartData<"line">,
    options: ChartOptions<"line">,
    height: number,
    width: number
}

const LineChart = ({ data, options, height, width }: LineChartProps) => (
    <div className="overflow-hidden">
        <div style={{ width }}>
            <Line
                height={height}
                width={width}
                options={{ ...options, maintainAspectRatio: false }}
                data={data}
            />
        </div>
    </div>
);

export default LineChart