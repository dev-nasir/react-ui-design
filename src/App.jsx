import Bannar from "./components/bannar"
import Button from "./components/button"
import Card from './components/card'
import Input from "./components/input"
import Rank from "./components/rank"
import Landing from "./pages/landing"



function App() {

  return (
    <>

      {/* <div style={{ marginLeft: "50px" }}>
        <Button title="Connect twitter" />
        <div style={{ marginTop: '10px' }}>
          <Card>
            <div>
              <div>hi</div>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </div>
          </Card>
          <div>
            
          </div>
          <Input/>
          
         
          <Bannar>
            <div>
             <div>hi</div>
            </div>
          </Bannar>
          <Rank/>
        
          
         
        </div>
      </div> */}
      <Landing/>
    </>
  )
}

export default App
