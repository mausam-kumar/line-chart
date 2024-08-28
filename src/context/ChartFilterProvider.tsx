import {
    createContext, Dispatch, ReactNode, SetStateAction, useContext, useState,
  } from "react";
  
  interface ChartFilter {
    dateLabel: string
  }
  interface IChartFilterContext {
    filter: ChartFilter,
    setFilter: Dispatch<SetStateAction<ChartFilter>>
    format: string[]
  }
  const format = ["1d", "3d", "1w", "1m", "6m", "1y", "max"]

  const ChartFilterContext = createContext<IChartFilterContext>(null!);
  
  export const ChartFilterProvider = ({
    children,
  }: {
    children: ReactNode;
  }) => {
    const [filter, setFilter] = useState<ChartFilter>({
      dateLabel: format[2],
    });
  
    return (
      <ChartFilterContext.Provider value={{ filter, setFilter, format }}>
        {children}
      </ChartFilterContext.Provider>
    );
  };
  
  // eslint-disable-next-line react-refresh/only-export-components
  export const useChartFilterContext = () => {
    const context = useContext(ChartFilterContext);
    if (!context) {
      throw new Error(
        "useChartFilterContext must be used within a ChartFilterProvider",
      );
    }
    return context;
  };
  