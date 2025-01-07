import { Box,Flex,HStack,Input,Text,Button, Textarea, VStack, Center,Image } from "@chakra-ui/react";
import { useState } from "react";
// import emailjs from '@emailjs/browser';



function Send(){
    return <Flex borderRadius={'500px'}  w={{base:"100%",md:"48%",lg:"45%",xl:'33%'}} gap='8' bg='white'  flexDirection={'column'}>
    
            <Center><Button  w='100%'>Massage Sending Completed</Button></Center>
</Flex>
}

export default function ContactLast(){

    let [data,setData]=useState({name:"",number:"",massage:""})
    let [send,setSend]=useState(false)

    function setDa(){
        if(data.name==false){
            alert('Please Enter Your Name')

        }else if(data.number==false){
            alert('Please Enter Your Number')

        }else if(data.massage==false){
            alert('Please Enter Your Massage')
        }
        if(data.name && data.number && data.massage){
            console.log(data)
            emailjs.init('1az4QfowAhgDDgLMV');

            emailjs.send('service_reo0aru', 'template_bgvbsfc', data)
                .then(() => {
                    setSend(true)
                })
                .catch((error) => {
                    console.error('Failed to send email:', error);
                });

        }

    }

    return <>
           <Flex zIndex={'10'}  flexWrap={'wrap'} my='5' gap='5' py='3vw' px={{base:"2vw",md:"5vw",lg:"10vw"}} justifyContent={'space-between'} style={{background:'linear-gradient(49deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 49%, rgba(0,212,255,1) 49%, rgba(2,0,36,1) 100%)'}}>
               
                <HStack  gap='10' flexDirection={{base:'column',md:"row"}} w='100%' justifyContent={'space-between'}>

                    {/* ----------------Contect Us */}

                   
                   {send ? <Send/> :''}
                   {send==false ?<Flex gap='5' h='400px' bg='rgba(255, 255, 255, 0.2)' className="animated-box" borderRadius={'md'} textAlign={'center'}  justifyContent={'center'} w={{base:'100%',xl:'48%'}} p='5' boxShadow={'xl'}  flexDirection={'column'}>
                        <VStack alignItems={'left'} gap='0'>
                            <HStack fontWeight={'600'} alignItems={'center'}><Text>Name</Text><Text color={'red'}>*</Text></HStack>
                            <Input placeholder="Enter Your Name" required onChange={(e)=>{setData({...data,name:e.target.value})}}/>
                        </VStack>
                        <VStack alignItems={'left'} gap='0'>
                            <HStack fontWeight={'600'} alignItems={'center'}><Text>Number</Text><Text color={'red'}>*</Text></HStack>
                            <Input placeholder="Enter Your Number" required onChange={(e)=>{setData({...data,number:e.target.value})}}/>
                        </VStack>
                        <VStack alignItems={'left'} gap='0'>
                            <HStack fontWeight={'600'} alignItems={'center'}><Text>Massage</Text><Text color={'red'}>*</Text></HStack>
                            <Textarea placeholder="Enter Your Massage" required onChange={(e)=>{setData({...data,massage:e.target.value})}}/>
                        </VStack>
                       <Center><Button onClick={setDa} w='100%'>Submit</Button></Center>
                    </Flex> :""}
                    


{/* ------------------Sidebar */}
<Flex 
  h="400px" 
  flexDirection={{ base: "column", md: "row" }} 
  gap="10" 
  alignItems="start" 
  borderRadius="md" 
  w={{ base: "100%", md: "48%", lg: "45%", xl: "60%" }} 
  bg="white" 
  px={{ base: "2", sm: "2" }} 
  py="2"
>
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14256.274224975501!2d84.45834625085199!3d26.7102567485503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39936cd8b7e34fe5%3A0xf18e68501b538967!2sKamal%20Sah%20High%20Schol%20%2C%20Nautan!5e0!3m2!1sen!2sin!4v1736245922659!5m2!1sen!2sin" 
    style={{ border: "0" }} 
    allowFullScreen="" 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade"
    height='100%'
    width='100%'
  />
</Flex>

                </HStack>
           </Flex>
    </>
}