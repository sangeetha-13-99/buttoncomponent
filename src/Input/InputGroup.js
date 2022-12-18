import styled from "styled-components";
import Input from "./Input";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LockIcon from '@mui/icons-material/Lock';
const Group = styled.div`
    width:100%;
    height:100%;
`;
const Wrapper = styled.div`
    margin:20px 50px 20px 0;
    display:flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;

    @media screen and (max-width:1199px){
        margin:12px;
    }

`;
// const Footer=styled.div`
//     color: #9E9E9E;
//     text-align: center;
//     margin:20px 0;
// `;

export default function InputGroup(){
    return (
        <Group>
            <>
                <Wrapper>
                    <Input/>
                </Wrapper>
                <Wrapper>
                    <Input error/>
                </Wrapper>
                <Wrapper>
                    <Input disabled/>
                </Wrapper>
                <Wrapper>
                    <Input helperText="Some interesting text"/>
                    <Input helperText="Some interesting text" error/>
                </Wrapper>
                <Wrapper>
                    <Input startIcon={<LocalPhoneIcon/>} name="LocalPhoneIcon"/>
                    <Input endIcon={<LockIcon/>} name="LockIcon"/>
                </Wrapper>
                <Wrapper>
                    <Input value="text"/>
                </Wrapper>
                <Wrapper>
                    <Input size="sm"/>
                    <Input size="md"/>
                </Wrapper>
                <Wrapper>
                    <Input fullWidth />
                </Wrapper>
                <Wrapper>
                    <Input multiline rows="4"/>
                </Wrapper>
            </>
            {/* <Footer> created by sangeetha Jula - devChallenges.io </Footer> */}
        </Group>
    )
}