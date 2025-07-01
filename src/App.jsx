// import { createElement } from "react";
import Header,{ Footer,NetfilixCard }  from "../component/NetfilixCard";

// import UI,{ NetfilixCard }  from "../component/NetfilixCard";


export const App=()=>{
  return(<>
   <Header/>
   {/* <UI.Header/> UI used for getting defualt export/import from cmp */}
   <NetfilixCard/>
   
   <Footer/>
   {/* <UI.Footer/> UI used for getting defualt export/import from cmp */}
   {/* return  createElement('h1',null,'hello thapa'); */}
   </>
)};
// console.log(createElement('h1',null,'hello thapa'));//virtual memory

