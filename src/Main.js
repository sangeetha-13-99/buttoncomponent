import classes from "./Main.module.css";
import ButtonGroup from "./ButtonGroup";
export default function Main(){
    return (
        <div className={classes.main} >
            <p className={classes.heading}>Buttons</p>
            <ButtonGroup/>
        </div>
    )
}