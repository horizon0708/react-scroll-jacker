import * as React from 'react'
import ReactScrollJacker from 'react-scroll-jacker';

const ScrollerJackerTest = props => {
  return <div>
    <div style={{height:"300px"}}>
     <h1>Normal Scrollin'</h1>
    </div>
    
    <ReactScrollJacker height={2400}>
      <ReactElement color="red"> Help! </ReactElement> 
      <ReactElement color="blue"> Our scroll has been hijacked! </ReactElement> 
      <ReactElement color="purple"> Won't somebody please think of the UX ? </ReactElement>
      <ReactElement color="green"> UX?? Where we are going, we don't need UX. </ReactElement>
      
      {/* you can add any number of ReactElements in here !! */}
    </ReactScrollJacker>
    <div style={{height:"500px"}}>
     <h1>Oh Thank god</h1>
    </div>
    </div>
};

const ReactElement = (props ) => {
  return <div style={{height: "600px",width:"100%", backgroundColor: props.color }}>
  <div>
  <h1 style={{padding: "250px", color: "white"}}>
    {props.children ? props.children : null}
    </h1>
  </div>

  </div>
}

export { ScrollerJackerTest };
