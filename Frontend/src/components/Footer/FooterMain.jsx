import { Box,Flex,Text, HStack,Image, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import SmailContact from "./SmailContact";

export default function FooterMain(){

    const navigationMenu = [
        { title: "Home", link: "/" },
        
        { title: "About Us", link: "/about" },
        { title: "Our Word", link: "/ourwork" },
        {
          title: "Resume",
          link: "/resume",
         
        },
        { title: "Map", link: "/map" },
        
        { title: "Contact Us", link: "/contact" },
        
      ];

    return <>
            <Flex  flexDirection={'column'}  style={{background:'linear-gradient(49deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 49%, rgba(0,212,255,1) 49%, rgba(2,0,36,1) 100%)'}}>
                {/* -------------- 1st */}
                <Flex px={{base:"2vw",md:"5vw",lg:"10vw"}} flexWrap={'wrap'} flexDirection={{base:"column",sm:"row"}}  py='10' color={'white'} gap='5' alignItems={{base:'center',sm:'start'}} justifyContent={'space-between'}>
                    <Flex gap='5' flexDirection={'column'} alignItems={{base:'center',sm:'start'}}>
                        <Image borderRadius={'xl'} w={{base:'100%',md:"250px"}} bg='white' src='https://websoftglobal.com/wp-content/uploads/GLOBAL.png'/>
                        <Text  _hover={{color:"black"}}>NivaSoft is Digtal Agency<br />
                        We Provide Digital Solution <br />
                        founded in 2024.</Text>
                    </Flex>

                {/* -------------- 2nd */}
                
                    <VStack gap='1'  alignItems={{base:'center',sm:'start'}}>
                        <Text fontSize={'20px'} fontWeight={'700'}>Quick Links</Text>
                        {navigationMenu.map((e,i)=>{
                            return <Link key={i} to={e.link}><Text  _hover={{color:"black"}}>{e.title}</Text></Link>
                        })}
                    </VStack>
                    <VStack gap='1' alignItems={'left'}>
                        <SmailContact/>
                    </VStack>
                    <VStack alignItems={{base:'center',sm:'start'}} gap='1' >
                        <Text fontSize={'20px'} fontWeight={'700'}>Address</Text>
                        <Text  _hover={{color:"black"}}>
                        Ward-8,Santpur Tower,Nautan <br />
                         Bettiah,West Champaran <br /> Bihar-845438
                        </Text>
                    </VStack>

                
                </Flex>
                {/* -------------- 3nd */}

                <HStack px={{base:"2vw",md:"5vw",lg:"10vw"}} color='white' bg='blue.900'  w='100vw' justifyContent={'space-between'}>
                        <Text  _hover={{color:"black"}}>© All rights reserved</Text>
                        <Link><Text  _hover={{color:"black"}} fontWeight={'700'}>NivaSoft</Text></Link>
                </HStack>
            </Flex>
    </>
}