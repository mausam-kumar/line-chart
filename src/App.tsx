import './App.css'
import DateRange from './components/DateRange'
import Menu from './components/Menu'
import Price from './components/Price'
import RegisterChartComponent from './components/RegisterChartComponent'
import TimeSeries from './components/TimeSeries'
import { ChartFilterProvider } from './context/ChartFilterProvider'

function App() {

  return (
    <div className='flex justify-center w-full py-4'>
      <div className='w-fit'>
        <ChartFilterProvider>
          <Price />
          <Menu />
          <DateRange />
          <RegisterChartComponent>
            <TimeSeries />
          </RegisterChartComponent>
        </ChartFilterProvider>
      </div>
    </div>
  )
}

export default App
