import './App.css'
import CurrentPrice from './components/CurrentPrice'
import RegisterChartComponent from './components/RegisterChartComponent'
import TimeSeries from './components/TimeSeries'

function App() {

  return (
    <div className='flex justify-center w-full'>
      <div className='border w-fit p-4'>
        <RegisterChartComponent>
          <CurrentPrice price={63179.71} currency='USD' />
          <TimeSeries />
        </RegisterChartComponent>
      </div>
    </div>
  )
}

export default App
