//import { useState } from "react";
import Navbar from "./Navbar";
import ReactDOM from 'react-dom';
const SideDrawer=()=>{
    // const [drawerIsOpen, setDrawerIsOpen] = useState(false);
    // const openDrawer=()=>{
    //     setDrawerIsOpen(true);
    // };
    // const closeDrawer=()=>{
    //     setDrawerIsOpen(false);
    // }

    const content=<aside className="side-drawer"><Navbar/></aside>
    return ReactDOM.createPortal(content,document.getElementById('drawer-hook'))
};
export default SideDrawer;