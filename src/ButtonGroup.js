import classes from "./ButtonGroup.module.css";
import Button from "./Button";
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
export default function ButtonGroup(){
    return (
        <div className={classes.group}>
            <>
                <div className={classes.row}>
                    <Button/>
                    <Button variant="outline"/>
                    <Button variant="text"/>
                    <Button disableShadow/>
                </div>
                <div className={classes.row}>
                    <Button disabled/>
                    <Button disabled variant="text"/>
                </div>
                <div className={classes.row}>
                    <Button startIcon={<ArrowCircleRightRoundedIcon style={{fontSize: "18px"}} />}
                    name="ArrowCircleRightRoundedIcon"/>
                    <Button endIcon={<ArrowCircleRightRoundedIcon style={{fontSize: "18px"}} />}
                    name="ArrowCircleRightRoundedIcon"/>
                </div>
                <div className={classes.row}>
                    <Button size="sm"/>
                    <Button size="md"/>
                    <Button size="lg"/>
                </div>
                <div className={classes.row}>
                    <Button color="default" />
                    <Button color="primary" />
                    <Button color="secondary" />
                    <Button color="danger" />
                </div>
            </>
        </div>
    )
}