import classes from "./Main.module.css";
import ButtonGroup from "./Button/ButtonGroup";
import InputGroup from "./Input/InputGroup"
export default function Main(props){
    return (
        <div className={classes["main-wrapper"]}>
            <div className={classes.main} >
                <p className={classes.heading}>{props.heading}</p>
                {props.heading==="buttons" && <ButtonGroup/>}
                {props.heading==="inputs" && <InputGroup/>}
            </div>
            <div className={classes.footer}>
                created by sangeetha Jula - devChallenges.io
            </div>
        </div>
    )
}