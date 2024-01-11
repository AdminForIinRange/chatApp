import React from "react";
import {
  Flex,
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
export default function Home() {
  return (
    <div>

      <VStack align={"start"} ml={"2%"} mt={"1%"}>

        <HStack justify={"left"} align={"left"}>
        <Text color={"#5271FF"}  whiteSpace={"none"} fontFamily={"Poppins"} fontSize={"50px"} fontWeight={900}>
        Verbal
        
          <span style={{fontStyle:'italic', fontWeight:'10'}}>
        
            Wave
          </span>
      
      </Text>

        </HStack>

        <HStack justify={"left"} align={"left"} mt={"25px"}>
        <Text color={"#5271FF"}  whiteSpace={"none"} fontFamily={"Poppins"} fontSize={"50px"} fontWeight={300}>
        Ride the Wave of Conversations Onward
        
         
      
      </Text>

        </HStack>


   


      </VStack>
      
    </div>
  );
}
