import React from "react";
import {
  Flex,
  Spacer,
  Button,
  Box,
  useBreakpointValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Wrap,
  Grid,
  GridItem,
  Text,
  Image,
  Stack,
  InputLeftElement,
  InputLeftAddon,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  MenuItemOption,
  MenuOptionGroup,
  HStack,
  VStack,
  InputGroup,
  Select,
  Container,
  ButtonGroup,
  Divider,
  Heading,
} from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa";
import Iphone from "../../assets/img/you can degein teh page here and (1).png";
export default function Home() {
  return (
    <>

<HStack align={"start"} mt={"-50px"} h={"100%"}>
        <VStack color={"red"} align={"start"} ml={"2%"} mt={"1%"}>
          <HStack justify={"left"} align={"left"}>
            <Text
              color={"#5271FF"}
              whiteSpace={"none"}
              fontFamily={"Poppins"}
              fontSize={"50px"}
              fontWeight={900}
            >
              Verbal
              <span style={{ fontStyle: "italic", fontWeight: "10" }}>
                Wave
              </span>
            </Text>
          </HStack>

          <HStack justify={"left"} align={"left"} mt={"25px"}>
            <Text
              color={"#5271FF"}
              whiteSpace={"none"}
              fontFamily={"Poppins"}
              fontSize={"30px"}
              fontWeight={300}
            >
              Ride the Wave of Conversations Onward
            </Text>
          </HStack>
          <HStack justify={"left"} align={"left"} mt={"25px"}>
            <Text
            fontStyle={"italic"}
              color={"#5271FF"}
              mt={"-50px"}
    
              fontFamily={"Poppins"}
              fontSize={"145px"}
              fontWeight={300}
              w={"1000px"}
            >
             Speak Share Soar
            </Text>
          </HStack>

          <Stack>
              
                <FormControl>
                  <VStack color={"black"} align={"left"}>
                    <Input
                      w={"300px"}
                      fontSize={"20px"}
                      mb={"10px"}
                      borderRadius={"0%"}
                      border={"0px solid black "}
                      borderBottom="1.5px solid black" // Adjust the width and color as needed
                      type="email"
                      placeholder="Username/Email"
                    />

                   
                    <Input
                      w={"300px"}
                      fontSize={"20px"}
                      borderRadius={"0%"}
                      border={"0px solid black "}
                      borderBottom="1.5px solid black" // Adjust the width and color as needed
                      type="password"
                      placeholder="Password"
                    />

                    <HStack>
                    <Button
                      mt={"20px"}
                      borderRadius={"10px"}
                      w={"150px"}
                      fontSize={"20px"}
                      p={"30px 30px"}
                      colorScheme="blue"
                      bgColor={"#5271FF"}
                      color={"white"}
                    
                    >
                     Login
                    </Button>

                 
                    <Button
                      mt={"20px"}
                      borderRadius={"10px"}
                      w={"150px"}
                      fontSize={"20px"}
                      p={"30px 10px"}
                      colorScheme="blue"
                      bgColor={"#5271FF"}
                      color={"white"}
                     
                    >
                  Sgin-up
                    </Button>

                    </HStack>
                    <Button
                   
                      borderRadius={"10px"}
                      w={"300px"}
                      fontSize={"20px"}
                      p={"30px 30px"}
                      colorScheme="gray"
                     
                      bgColor={"white"}
                      color={"#5271FF"}
                      leftIcon={<FaGoogle />}
                    
                    >
                     Sign in with google
                    </Button>
                 
                  </VStack>
                </FormControl>
              </Stack>
        </VStack>

        {/* <Box  bgColor={"red"} mt={"100px"}>

        </Box> */}
        
        </HStack>
    
        
     
    
      
    </>
  );
}
