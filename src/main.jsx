import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { TodoList } from './project/Todo/TodoList'
// import {App} from './App.jsx'
// import {Practices} from './Practices.jsx'
//  import {ProfileMy} from '../component/ProfileMy.jsx'
// import {SyntheticEvent} from '../component/SyntheticEvent.jsx'
// import {Eventprops} from '../component/Eventprops.jsx'
// import {Eventprog} from '../component/Eventprog.jsx'
// import { State, Sibling } from '../component/hook/State';
// import {Sibling} from '../component/hook/State.jsx'
// import { DerivedState } from '../component/hook/DerivedState';
// import { LiftingState } from '../component/hook/LiftingState';
// import { EventToggle } from '../component/hook/EventToggle';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Practices/> */}
    {/* <ProfileMy /> */}
    {/* <SyntheticEvent/> */}
    {/* <Eventprops/>
    <Eventprog/> */}
    {/* <State/>
    <Sibling/> */}
    {/* <DerivedState/> */}
    {/* <LiftingState/> */}
    {/* <EventToggle/> */}
    <TodoList/>
  </StrictMode>,
)


// important
// bun pm cache rm
// bun install --force
// bun add esbuild
// bun install
// bun run dev