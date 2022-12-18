import classes from "./Button.module.css";

export default function Button({variant,size,color,startIcon,endIcon,disableShadow,disabled,name}){
    let button=`<Button 
        ${variant ? 'variant="'+variant+'"':''}
        ${size ? 'size="'+size+'"':''}
        ${color ? 'color="'+color+'"':''}
        ${startIcon?'startIcon="'+name+'"':''}
        ${endIcon?'endIcon="'+name+'"':''}
        ${disableShadow ? 'disableShadow':''}
        ${disabled ? 'disabled':''}
    />`;
    variant=variant?classes[variant]:classes.default;
    size=size?classes[size]:classes.md;
    color=color?classes[color]:' ';
    disableShadow=disableShadow?classes.disableShadow:' ';
    disabled=disabled?true:false;

    return(
        <div className={classes.btnWrapper}>
            <p className={classes.line}>
            {button}
            </p>
            <button disabled={disabled} className={(variant+' '+color+' '+size+' '+disableShadow).trim()}>
                {startIcon && <i className={classes["material-icons"]}>{startIcon}</i>}
                    Default
                {endIcon && <span className={classes["material-icons"]}>{endIcon}</span>}
            </button>
        </div>
    )
}