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
    Filler
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
    Filler
);

const RegisterChartComponent = ({ children }: { children: ReactNode }) => {
    return <div>
        {children}
    </div>
};

export default RegisterChartComponent