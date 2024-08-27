import './App.css'
import Menu, { DateRange } from './components/Menu'
import Price from './components/Price'
import RegisterChartComponent from './components/RegisterChartComponent'
import TimeSeries from './components/TimeSeries'

function App() {

  return (
    <div className='flex justify-center w-full py-4'>
      <div className='w-fit'>
        <Price />
        <Menu />
        <DateRange />
        <RegisterChartComponent>
          <TimeSeries />
        </RegisterChartComponent>
      </div>
    </div>
  )
}

export default App
