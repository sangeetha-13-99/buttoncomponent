
import { TextareaAutosize } from "@mui/material";
import styled,{css} from "styled-components";
const OuterWrapper=styled.div`
    margin:0 40px 0 0;
    & .line{
        font-size:14px;
        font-family: 'Ubuntu Mono';
        margin-bottom:32px ;
    }
    @media screen and (max-width:1199px){
            margin:10px 20px 10px 0;
    }
`;
const InputWrapper=styled.div`
    position:relative;
    display:flex;
    flex-direction:column;
    width:200px;
    & label{
        display:block;
        position:absolute;
        top:-17px;
        font-family: 'Noto Sans JP', sans-serif;
        font-weight:400;
        font-size: 12px;
        line-height: 17px;
        color: #333333;
        position:absolute;
    }
    & p{
        margin:0;
        font-family: 'Noto Sans JP', sans-serif;
        font-weight:400;
        font-size: 10px;
        line-height: 14px;
        color: #828282;
    }
    ${(props)=>
        (!props.error && !props.disabled && css `
            & input, & textarea{
                border: 1px solid #828282;
                &:hover {
                    border: 1px solid #333333;
                }
                &:hover ~ label, &:hover ~ p{
                    color: #333333;
                }
                &:focus{
                    border: 1px solid #2962FF;
                }
                &:focus ~ label, &:focus ~ p{
                    color: #2962FF;
                }
            }
        `)||
        (props.error && !props.disabled && css `
            & label, & p{
                color: #D32F2F;
            }
            & input, & textarea{
                border: 1px solid #D32F2F;
                &:hover {
                    border: 1px solid #333333;
                }
                &:hover ~ p,&:hover ~ label{
                    color: #333333;
                }
                &:focus{
                    border: 1px solid #D32F2F;
                }
                &:focus ~ label, &:focus ~ p{
                    color: #D32F2F;
                }
            }
        `)|| (props.disabled && css `
            & input:disabled,  & input:disabled:focus,  & input:disabled:hover ,& textarea:disabled{
                background: #F2F2F2;
                border: 1px solid #E0E0E0;
            }
    `)}
    ${(props)=> (props.size=="sm" && css `
         & input{
             padding:10px 12px;
         }`)||
          (props.fullWidth && css `
            width:100%;
          `)
    }  
    ${(props)=>
            props.startIcon && css`
            .icon-left{
                position:absolute;
                top:15px;
                left:3%;
            }
            & input{
                padding-left:30px;
            }
    `}
    ${(props)=>
            props.endIcon && css`
            .icon-right{
                position:absolute;
                top:15px;
                right:3%;
            }
            & input{
                padding-right:30px;
            }
        ` 
    } 
`;
const InputElement=styled.input`
    width:100%;
    box-sizing:border-box;
    padding:18px 12px;
    outline:none;
    border-radius: 8px;
    color: #333333;
    text-transform: capitalize;
    
    &::placeholder {
        font-family: 'Noto Sans JP', sans-serif;
        font-weight:500;
        font-size: 14px;
        line-height: 20px;
        color: #828282;
    }
`;
const TextElement=styled.textarea`
    resize:none;
    width:100%;
    box-sizing:border-box;
    padding:18px 12px;
    outline:none;
    border-radius: 8px;
    color: #333333;
    text-transform: capitalize;
    overflow:hidden;
    line-height: 20px;
    &::placeholder {
        font-family: 'Noto Sans JP', sans-serif;
        font-size: 14px;
        font-weight:500;
        line-height: 20px;
        color: #828282;
    }
`

export default function Input(props){
    let Input=`<Input 
        ${props.error ? 'error':''}
        ${props.size ? 'size="'+props.size+'"':''}
        ${props.multiline ? 'multiline':''}
        ${props.fullWidth ? 'fullWidth':''}
        ${props.rows ? 'rows='+`"${props.rows}"`:''}
        ${props.value ? 'value='+`"${props.value}"`:''}
        ${props.helperText ? "helperText="+`${props.helperText}`:''}
        ${props.startIcon?'startIcon="'+`${props.name}`+'"':''}
        ${props.endIcon?'endIcon="'+`${props.name}`+'"':''}
        ${props.disabled ? 'disabled':''}
    />`;

    return (
        <OuterWrapper>
            <p className="line">
                {Input}
            </p>
            <InputWrapper {...props}>
                    {props.startIcon  && <i className="icon-left">{props.startIcon}</i>}
                    {!props.multiline &&
                        <InputElement disabled={props.disabled} value={props.value} placeholder={!props.value?'Placeholder':''}/>
                    }
                    {props.multiline &&
                        <TextElement rows={props.rows}  cols={props.cols}  placeholder={!props.value?'Placeholder':''} disabled={props.disabled} value={props.value} ></TextElement>
                    }
                    {props.endIcon && <i className="icon-right">{props.endIcon}</i>}
                    <label>Label</label>
                    {props.helperText && <p>{props.helperText}</p>}
            </InputWrapper>   
        </OuterWrapper>
    )}