import './App.css'
import Menu from './components/Menu'
import Price from './components/Price'
import RegisterChartComponent from './components/RegisterChartComponent'
import TimeSeries from './components/TimeSeries'

function App() {

  return (
    <div className='flex justify-center w-full'>
      <div className='border w-fit p-4'>
        <Price />
        <Menu />
        <RegisterChartComponent>
          <TimeSeries />
        </RegisterChartComponent>
      </div>
    </div>
  )
}

export default App
