import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import AxiosQuery from './AxiosQuery'
import ReactQuery from './ReactQuery'
import Layour from './Layour'
import { ReactQueryDevtools } from 'react-query/devtools'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layour />} />
        <Route index element={<Home />} />
        <Route path="axios-query" element={<AxiosQuery />} />
        <Route path="react-query" element={<ReactQuery />} />
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App
