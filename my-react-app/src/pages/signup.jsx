import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import {useNavigate} from "react-router-dom"


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
} from '@chakra-ui/react';
import { addusers } from '../redux/auth/action';

export default function Signup() {
  const navigate = useNavigate();
  const [val,setVal] = useState({})
 const dispatch = useDispatch()

    const handlechange = (e)=>{
       const {name,value} = e.target
       setVal({...val , [name]:value})
    }

    const handleSubmit = ()=>{
       document.getElementById("username").value=""
       document.getElementById("mobile").value=""
       document.getElementById("fullname").value=""
       document.getElementById("email").value=""
       document.getElementById("password").value=""

       alert("User is Registered")
       dispatch(addusers(val))
       //console.log(val)
       navigate("/signin")
    }

  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            Create your PopX account ✌️
          </Text>
        </Stack>
        <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8} w={500}>
          <Stack spacing={4}>
          <FormControl id="email" isRequired>
                 <FormLabel>Full Name</FormLabel>
                 <Input onChange={(e)=>handlechange(e)} type="text" placeholder='Enter Full Name' id="fullname" name="fullname"/>
              </FormControl>
             <FormControl id="firstName" isRequired>
                  <FormLabel>User Name</FormLabel>
                  <Input onChange={(e)=>handlechange(e)} type="text" placeholder='Enter Username' id="username" name="username"/>
              </FormControl>
              <FormControl id="password" isRequired>
                 <FormLabel>Phone number</FormLabel>
                 <InputGroup>
                    <Input onChange={(e)=>handlechange(e)} type="number" placeholder='Enter Phone Number' id="mobile" name="mobile"/>
                 </InputGroup>
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
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              
              <Text align={'center'} onClick={()=>navigate("/signin")} cursor={"pointer"}>
                Already a user? Login
              </Text>
             
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}