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
        <Text color={"#5271FF"}  whiteSpace={"none"} fontFamily={"Poppins"} fontSize={"50px"} fontWeight={1000}>
        Verbal
        
          <span style={{fontStyle:'italic', fontWeight:'10'}}>
            {" "}
            Wave
          </span>
      
      </Text>

        </HStack>

   


      </VStack>
      
    </div>
  );
}
