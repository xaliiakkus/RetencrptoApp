import {Transactions,Services,Navbar,Loader,Footer, Welcome} from '../src/Components/index';
const App = () => {
  return (
    <div className='min-h-screen'>
        <div className='gradient-bg-welcome'>
          <Navbar/>
          <Welcome/>
        </div>
        <Services/>
        <Transactions/>
        <Footer/>
    </div>
  )
}

export default App