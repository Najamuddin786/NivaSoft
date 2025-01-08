import { Flex,Text,Box, VStack, HStack } from "@chakra-ui/react"
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";

export default function SmailContact(){

    return <>
            <VStack alignItems={{base:'center',sm:'start'}}>
            <Text fontSize={'20px'} fontWeight={'700'}>Contact Us</Text>
            <HStack>
                <Box fontSize={'24px'} fontWeight={'700'}><IoMdCall/></Box>
                <Text> +91 8210942893</Text>
            </HStack>
            <HStack>
                <Box  fontSize={'24px'} fontWeight={'700'}><IoMdCall/></Box>
                <Text> +91 8210940010</Text>
            </HStack>
            <HStack>
                <Box fontSize={'24px'} fontWeight={'700'}><MdEmail/></Box>
                <Text>786mdnajamuddin@gmail.com</Text>
            </HStack>
            <HStack>
                <Box fontSize={'24px'} fontWeight={'700'}><MdAccessTime/></Box>
                <Text>Mon-Sat: 08:00 am - 02:00 pm </Text>
            </HStack>
                
            </VStack>
    </>
}