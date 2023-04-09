import react,{useState,useEffect} from "react"
import { FormGroup,FormControl,InputLabel,Input, Typography ,styled, Button} from "@mui/material"
import { editUser, getUser } from "../service/api";
import { useNavigate,useParams } from "react-router-dom";

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

const EditUser=()=>{


    const [user,setUser]=useState(defaultValue)

    const navigate=useNavigate()
    const {id}=useParams()

    useEffect(()=>{
loadUserDetails()
    },[])

 const loadUserDetails=async()=>{
    const response=await getUser(id)
    setUser(response.data)
 }

   const onValueChange=(e)=>{
     
      setUser({...user,[e.target.name]:e.target.value})
     
   }

   const editUserDetails=async()=>{
         await  editUser(user, id)
         navigate("/all")
   }

    return(
        <Container>
            <Typography variant="h4">Edit User</Typography>
          <FormControl>

            <InputLabel>Name</InputLabel>
            <Input onChange={(e)=>onValueChange(e)} name="name" value={user.name}></Input>
          </FormControl>

          <FormControl>

<InputLabel>Email</InputLabel>
<Input onChange={(e)=>onValueChange(e)} name="email" value={user.email}></Input>
</FormControl>

<FormControl>

<InputLabel>Bio</InputLabel>
<Input onChange={(e)=>onValueChange(e)} name="bio" value={user.bio}></Input>
</FormControl>

<FormControl>
    <Button variant="contained" onClick={()=>editUserDetails()}> Edit User</Button>
</FormControl>
      
        </Container>
    )
}


export default EditUser