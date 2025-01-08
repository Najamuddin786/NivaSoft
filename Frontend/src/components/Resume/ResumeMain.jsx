import { Center,Box,Flex,Text, HStack, VStack,Image, Separator } from "@chakra-ui/react";
import Photo from './MyPhoto.jpg'
import { Link } from "react-router-dom";


export default function ResumeMain(){
  const projects = [
    {
      title: "1. Free API Platform",
      technologies: "Node.js, Express.js, MongoDB, Mongoose, Axios",
      links: {
        liveDemo: "https://freeapi-gamma.vercel.app/",
        github: "https://www.google.com/url?q=https://github.com/Najamuddin786/OprenSourceApi/tree/main/Frontend&sa=D&source=apps-viewer-frontend&ust=1736397159894004&usg=AOvVaw3av8dUVbqdqSsC74SfewYS&hl=en"
      },
      description: "A platform that provides free APIs for developers to use in their projects. Features endpoints for product retrieval with filtering options by category."
    },
    {
      title: "2. School Website",
      technologies: "Node.js, Express.js, MongoDB, Mongoose, Axios, React.js, CSS, HTML, JavaScript",
      links: {
        liveDemo: "https://freeapi-gamma.vercel.app/",
        github: "https://www.google.com/url?q=https://github.com/Najamuddin786/OprenSourceApi/tree/main/Frontend&sa=D&source=apps-viewer-frontend&ust=1736397159894004&usg=AOvVaw3av8dUVbqdqSsC74SfewYS&hl=en"
      },
      description: "A comprehensive school management website with user-friendly interfaces, real-time data management, and interactive features. Includes student and staff portals, and secure data handling using modern web technologies."
    },
    {
      title: "3. Full Stack Ecommerce Website",
      technologies: "Node.js, Express.js, MongoDB, Mongoose, Axios",
      links: {
        liveDemo: "https://freeapi-gamma.vercel.app/",
        github: "https://www.google.com/url?q=https://github.com/Najamuddin786/OprenSourceApi/tree/main/Frontend&sa=D&source=apps-viewer-frontend&ust=1736397159894004&usg=AOvVaw3av8dUVbqdqSsC74SfewYS&hl=en"
      },
      description: "A complete ecommerce solution with user authentication, product catalog management, cart functionality, and order tracking. Ensures a smooth user experience and efficient backend operations."
    }
  ];
  
    const technicalSkills1 = [
        { id: 1, name: "HTML" },
        { id: 2, name: "CSS" },
        { id: 3, name: "JavaScript" },
        { id: 4, name: "React" },
        { id: 5, name: "Axios" },
        { id: 6, name: "Chakra UI" }
      ];
    const technicalSkills2 = [
        { id: 7, name: "Node.js" },
        { id: 8, name: "Express.js" },
        { id: 9, name: "Nodemon" },
        { id: 10, name: "MongoDB" },
        { id: 11, name: "Mongoose" },
      ];
      
    const educationDetails = [
        {
          degree: "Bachelor of Computer Applications (BCA)",
          university: "Babasaheb Bhimrao Ambedkar Bihar University",
          duration: "August 2021 - August 2024",
        },
        {
          degree: "12th Grade",
          board: "BSEB (Bihar School Examination Board)",
          duration: "Completed",
        },
        {
          degree: "10th Grade",
          board: "BSEB (Bihar School Examination Board)",
          duration: "Completed",
        },
      ];
      
    const userDetails = [
        {
          name: "+91 8210942893",
          icon: "📞", // Use an appropriate icon for phone
          link: "tel:8210942893", // Clickable link for calling
        },
        {
          name: "786mdnajamuddin@gmail.com",
          icon: "✉️", // Use an appropriate icon for email
          link: "mailto:786mdnajamuddin@gmail.com", // Clickable link for email
        },
        {
          name: "Santpur,Bettiah,Bihar-845438",
          icon: "📍", // Use an appropriate icon for location
          link: "https://www.google.com/maps/place/Bettiah,+Bihar", // Google Maps link for location
        },
        {
          name: "Portfolio",
          icon: "💼", // Use an appropriate icon for portfolio
          link: "https://Najamuddin786.github.io", // Replace with the actual portfolio link
        },
        {
          name: "GitHub",
          icon: "🐱", // GitHub icon
          link: "https://github.com/Najamuddin786", // GitHub profile link
        },
        {
          name: "LinkedIn",
          icon: "🔗", // LinkedIn icon
          link: "https://www.linkedin.com/in/md-najamuddin-77a100234", // LinkedIn profile link
        },
      ];
      

    return <>
           <Flex  gap='8' flexDirection={{base:'column',md:'row'}}  className="animated-box" mx={{base:"2vw",md:"5vw",lg:"10vw"}}  my='10' borderRadius={'xl'} boxShadow={'xl'}> 
            
                <Flex color={'white'} gap='5' flexDirection={'column'} bg='blue.900' w={{base:'100%',md:"300px"}} py='8' borderRadius={'md'}>
                <Center w={{base:'100%',md:"300px"}}>
                    <Image  border={'2px solid blue'} borderRadius={'500px'} w='180px' h='180px' src={Photo}/>
                </Center>
                <VStack w={{base:'100%',md:"300px"}} alignItems={'start'} px='8'>
                    <VStack align={'start'} w='100%' gap='1'>
                        <Text fontSize={'xl'} fontWeight={'700'}>Contact</Text>
                        <Box h='3px' bg='white' w='100%' borderRadius={'50pc'}></Box>
                            {userDetails.map((detail, index) => (
                                <HStack fontSize={'14px'} key={index} spacing={1}>
                                <Text>{detail.icon}</Text>
                                <Link to={detail.link} isExternal>
                                    {detail.name}
                                </Link>
                                </HStack>
                            ))}
                    </VStack>

                    <VStack align={'start'} w='100%' gap='2'>
                        <Text fontSize={'xl'} fontWeight={'700'}>Education</Text>
                        <Box h='3px' bg='white' w='100%' borderRadius={'50pc'}></Box>
                            {educationDetails.map((detail, index) => (
                                <VStack  align={'start'} gap={'0px'}>
                                <Text opacity={'1'}>{detail.degree}</Text>
                                <Text opacity={'0.7'} fontSize={'12px'}>{detail?.university}</Text>
                                <Text opacity={'0.7'} fontSize={'12px'}>{detail?.board}</Text>
                                <Text opacity={'0.7'} fontSize={'12px'}>{detail.duration}</Text>
                                </VStack>
                            ))}
                    </VStack>


                    <VStack align={'start'} w='100%' gap='2'>
                        <Text fontSize={'xl'} fontWeight={'700'}>Technical Skills</Text>
                        <Box h='3px' bg='white' w='100%' borderRadius={'50pc'}></Box>

                           <HStack w='100%' justifyContent={'space-between'} align={'start'}>
                           <VStack align={'start'} pl='10px' gap='1'>
                            <Text fontWeight={'700'} ml='-10px'>Frontend</Text>
                            {technicalSkills1.map((detail, index) => (
                               
                                <Text fontSize={'12px'} opacity={'1'}>{detail.name}</Text>
                                
                            ))}
                            </VStack>
                            <VStack align={'start'} pl='10px' gap='1'>
                            <Text fontWeight={'700'} ml='-10px'>Backend</Text>
                            {technicalSkills2.map((detail, index) => (
                               
                                <Text fontSize={'12px'} opacity={'1'}>{detail.name}</Text>
                                
                            ))}
                            </VStack>
                           </HStack>
                    </VStack>
                    <VStack align={'start'} w='100%' gap='2'>
                        <Text fontSize={'xl'} fontWeight={'700'}>Soft Skills</Text>
                        <Box h='3px' bg='white' w='100%' borderRadius={'50pc'}></Box>

                           <HStack w='100%' justifyContent={'space-between'} align={'start'}>
                           <VStack align={'start'} pl='10px' gap='1'>
                            <Text  ml='-10px'>1. Problem-Solving</Text>
                            <Text  ml='-10px'>2. Communication Skills</Text>
                            <Text  ml='-10px'>3. Team Collaboration</Text>
                            <Text  ml='-10px'>4. Adaptability</Text>
                            <Text  ml='-10px'>5. Time Management</Text>
                           
                          
                            
                            </VStack>
                           </HStack>
                    </VStack>
                    
                </VStack>
                    
                </Flex>

                {/* -------Right------ */}
                <Flex gap='5' flexDirection={'column'} w='100%' p='10' pl='5'>
                            <VStack align={'start'}>
                                <Text fontSize={'4xl'} fontWeight={'700'}>Md Najamuddin</Text>
                                <Text fontSize={'xl'} fontWeight={'700'}>Full Stack Web Developer</Text>
                            </VStack>
                            <VStack align={'start'}>
                                <Text fontSize={'xl'} fontWeight={'700'}>Professional Summary</Text>
                                <Box borderRadius={'xl'} bg='blue.800' h='3px' w='100%'></Box>
                                <Text>Highly skilled Full Stack Web Developer with expertise in the MERN stack (MongoDB, Express.js, React.js, Node.js). Adept at building scalable web applications, ensuring seamless frontend-backend integration, and leveraging Generative AI for innovative solutions. Known for quickly adapting to new technologies and delivering efficient, high-quality code.</Text>
                            </VStack>
                            <VStack align={'start'}>
                                <Text fontSize={'xl'} fontWeight={'700'}>Projects</Text>
                                <Box borderRadius={'xl'} bg='blue.800' h='3px' w='100%'></Box>

                                <Flex flexDirection="column" gap={5}>
  {projects.map((project, index) => (
    <Flex flexDirection="column" key={index} borderWidth="1px" borderRadius="md" p={4} boxShadow="md">
      <Text fontWeight="800" fontSize="lg" mb={2}>{project.title}</Text>
      
      <HStack align="start" mb={2}>
        <Text fontWeight="600">Technologies Used:</Text>
        <Text>{project.technologies}</Text>
      </HStack>
      
      <HStack mb={2}>
        <Text fontWeight="600">Important Links:</Text>
        <HStack color="blue.700" gap={4}>
          <Link href={project.links.liveDemo} isExternal>
            Live Demo Link
          </Link>
          <Link href={project.links.github} isExternal>
            GitHub Link
          </Link>
        </HStack>
      </HStack>
      
      <HStack align="start">
        <Text fontWeight="600">Description:</Text>
        <Text>{project.description}</Text>
      </HStack>
    </Flex>
  ))}
</Flex>

                                
                                
                            </VStack>

                </Flex>


           </Flex>
    </>
}