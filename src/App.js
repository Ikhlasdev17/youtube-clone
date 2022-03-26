
import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout'
import { Loading } from './components/Loading';
function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  if(loading){
    return <Loading />
  }
  return (
    <div className="App">
      <BrowserRouter>
      <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;
