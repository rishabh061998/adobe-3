import react,{useState} from "react"
import { FormGroup,FormControl,InputLabel,Input, Typography ,styled, Button} from "@mui/material"
import { addUser } from "../service/api";
import { useNavigate } from "react-router-dom";

const defaultValue = {
    name: '',
    email: '',
    bio: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const AddUser=()=>{


    const [user,setUser]=useState(defaultValue)

    const navigate=useNavigate()

   const onValueChange=(e)=>{
     
      setUser({...user,[e.target.name]:e.target.value})
     
   }

   const addUserDetails=async()=>{
         await  addUser(user)
         navigate("/all")
   }

    return(
        <Container>
            <Typography variant="h4">Add User</Typography>
          <FormControl>

            <InputLabel>Name</InputLabel>
            <Input onChange={(e)=>onValueChange(e)} name="name"></Input>
          </FormControl>

          <FormControl>

<InputLabel>Email</InputLabel>
<Input onChange={(e)=>onValueChange(e)} name="email"></Input>
</FormControl>

<FormControl>

<InputLabel>Bio</InputLabel>
<Input onChange={(e)=>onValueChange(e)} name="bio"></Input>
</FormControl>

<FormControl>
    <Button variant="contained" onClick={()=>addUserDetails()}> Add User</Button>
</FormControl>
      
        </Container>
    )
}


export default AddUser