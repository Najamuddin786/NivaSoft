import {Box,Center,Flex,HStack,VStack,Text} from '@chakra-ui/react'
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import ContactLast from './ContactLast.jsx';

export default function ContactMain(){
    const contactDetails = [
        {
          name: "Address",
          icon:<FaMapMarkerAlt/>,
          value: ["Websoft Global IT Services, Nazeerabad, Satna(M.P.) – India"]
        },
        {
          name: "E-mail",
          icon:<MdEmail/>,
          value: [
            "786mdnajamuddin@gmail.com",
            "786mdnajamuddin@gmail.com"
          ]
        },
        {
          name: "Phone",
          icon:<IoIosCall/>,
          value: ["+91-8210942893"]
        }
      ];
      

    return <>
            <Box my='1vh'>
            <VStack alignItems={'center'} justifyContent={'center'} color={'white'} h='300px' bg="rgb(2,0,36)" style={{background:'linear-gradient(49deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 49%, rgba(0,212,255,1) 49%, rgba(2,0,36,1) 100%)'}}>
                <Box fontWeight={'700'} fontSize={'3xl'}>Contact</Box>
                <Box textAlign={'center'}>We are eagerly waiting to respond you. Call us 
                    directly or E-mail to our team.</Box>

            </VStack>

            <Flex flexWrap={'wrap'} my='5' gap='5' px={{base:"2vw",md:"5vw",lg:"10vw"}} justifyContent={'space-between'}>
                {contactDetails.map((e,i)=>{
                    return <Flex className="animated-box" borderRadius={'md'} textAlign={'center'}  justifyContent={'center'} h='220px' w={{base:'100%',sm:'47%',md:'48%',xl:'32%'}} p='5' boxShadow={'xl'}  flexDirection={'column'}>
                                <Center fontSize={'4xl'}>
                                    <Box color={'blue.800'}>{e.icon}</Box>
                                    </Center>
                                <Text fontSize={'1xl'} fontWeight={'700'}>{e.name}</Text>
                                <Text>{e?.value[0]}</Text>
                                <Text>{e?.value[1]}</Text>
                        </Flex>
                })}
            </Flex>


            <ContactLast/>

            </Box>
    </>
}