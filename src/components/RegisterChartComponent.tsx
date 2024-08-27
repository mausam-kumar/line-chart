import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    scales,
    PointElement,
    LineElement,
    Filler,
    plugins as ChartJsPlugin
} from "chart.js";
import { ReactNode } from "react";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    scales,
    PointElement,
    LineElement,
    Filler,
    ChartJsPlugin
);

const RegisterChartComponent = ({ children }: { children: ReactNode }) => {
    return <div>
        {children}
    </div>
};

export default RegisterChartComponent