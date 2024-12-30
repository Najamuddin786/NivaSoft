import { HStack, VStack,Image ,Text, Box} from "@chakra-ui/react"
import './Nav.css'
import { Link } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import { useState } from "react";
import { TbXboxX } from "react-icons/tb";

function Menu(){
    let [hide,setHide]=useState(false)
    const navMenu = [
        { id: 1, name: "Home", link: "/home" },
        { id: 2, name: "About Us", link: "/about" },
      
        { id: 4, name: "Resume", link: "/resume" },
        { id: 5, name: "Our Work", link: "/ourwork" },
        { id: 3, name: "Contact Us", link: "/contact" },
      ];

    return <Box>
                            {/* 11111111111 */}
                <HStack display={{base:"none",md:'flex'}} px='2' fontWeight={{base:"500",lg:"600"}}>
                    {navMenu.map((e,i)=>{
                        return <Link to={e.link} key={e.id}><Text className="nav-item" color={e.name=="Contact Us" ? "white" :''} borderRadius={'sm'} p='1' bg={e.name=='Contact Us' ? "blue.400" :""}>{e.name}</Text></Link>
                    })}
                </HStack>
                <Box display={{base:"block",md:"none"}} onClick={()=>{if(hide){setHide(false)}else{setHide(true)}}} fontSize={'22px'} px='2'>{hide ? <TbXboxX/>: <LuMenu/>}</Box>

                {hide ? <HStack  gap='5' className="animated-box" bg='blue.400' color={'white'} boxShadow={'xl'} borderRadius={'sm'} py='10'  flexDirection={'column'} mx={{base:"2vw"}} top='85px' position={'fixed'} left={'0px'} w={'96vw'}  display={{base:"flex",md:'none'}} px='2' fontWeight={{base:"500",lg:"600"}}>
                    {navMenu.map((e,i)=>{
                        return <Link to={e.link} key={e.id}><Text onClick={()=>setHide(false)} className="nav-item" color={e.name=="Contact Us" ? "white" :''} borderRadius={'sm'} px='2' py='1' bg={e.name=='Contact Us' ? "blue.400" :""}>{e.name}</Text></Link>
                    })}
                    <Box className="nav-item" p='10px' borderRadius={'md'} bg='white' >
                        <Image   borderRadius={'sm'} w='full' src={'https://static.vecteezy.com/system/resources/previews/007/313/359/large_2x/website-design-digital-advertising-agency-concept-with-computer-display-and-flying-web-page-layout-elements-concept-photo.jpg'}/></Box>
                </HStack> :''}
    </Box>
}
export default function NavMain(){

   

    return <>
            <HStack position={'sticky'} top='15px' justifyContent={'space-between'} className="animated-box"  borderRadius={'md'} mt='15px'  mx={{base:"2vw",md:"5vw",lg:"10vw"}} style={{boxShadow:"1px 0px 10px rgba(0, 0, 255, 0.388)"}}>

                <VStack className="nav-item" bg='black' px='5' py='1' borderRadius={'md'}>
                  <Link to={'/'}> <Image className="nav-item" w='150px' src='https://websoftglobal.com/wp-content/uploads/GLOBAL.png'/></Link> 
                </VStack>
                <Menu/>
                

            </HStack>
    </>
}