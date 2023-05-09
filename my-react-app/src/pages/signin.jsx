import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';


import { useNavigate} from 'react-router-dom';
import { getusers } from '../redux/auth/action';

export default function Signin() {
  const [val,setVal] = useState({})
    const dispatch = useDispatch()
    const data = useSelector((store)=>store.users)
    const navigate = useNavigate()
     console.log(data.users)
     

    
     const handlechange = (e)=>{
      
        const {name,value} = e.target
        setVal({...val , [name]:value})
        
     }
    
    const handleSubmit = async()=>{
        
        dispatch(getusers(val,navigate))
        // navigate("/main")
    
    }
  return (
    <Flex minH={'100px'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign In
          </Heading>
          
        </Stack>
        <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8} w={500}>
          <Stack spacing={4}>
             <FormControl id="firstName" isRequired>
                  <FormLabel>User Name</FormLabel>
                  <Input onChange={(e)=>handlechange(e)} type="text" placeholder='Enter Username' id="username" name="username"/>
              </FormControl>
              <FormControl id="email" isRequired>
                 <FormLabel>Email address</FormLabel>
                 <Input onChange={(e)=>handlechange(e)} type="email" placeholder='Enter Email ID' id="email" name="email"/>
              </FormControl>
              <FormControl id="password" isRequired>
                 <FormLabel>Password</FormLabel>
                 <InputGroup>
                    <Input onChange={(e)=>handlechange(e)} type="password" placeholder='Enter Password' id="password" name="password"/>
                 </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button loadingText="Submitting" size="lg" bg={'blue.400'} color={'white'} _hover={{ bg: 'blue.500',}}
                onClick={handleSubmit} id="add">
                Sign In
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}