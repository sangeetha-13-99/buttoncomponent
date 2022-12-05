import React from "react";
import classes from "./SideBar.module.css";
export default function SideBar(){
    let sidebarElements=['colors','typography','spaces','buttons','inputs','grid'];
    let sidebarUI=sidebarElements.map(element=>{
       return element==="buttons"?<li className={classes.selected}>{element}</li>:<li className={classes.list}>{element}</li>;
    })
    return (
        <div className={classes.sidebar}>
            <div className={classes.headinglabel}>
                <span>dev</span>
                <span>challenges.io</span>
            </div>
            <ul className={classes['list-items']}>
                {sidebarUI}
            </ul>
        </div>
    )
}