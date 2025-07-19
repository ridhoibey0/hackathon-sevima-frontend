import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Flex,
  Text,
  Icon,
  Heading,
  Select,
  Input,
  Textarea,
  InputGroup,
  InputLeftAddon,
  Button,
} from "@chakra-ui/react";
import { Form, Link } from "react-router-dom";

import { BiArrowBack } from "react-icons/Bi";
import { createComplain } from "@/services";
import { RiFile2Fill } from "react-icons/ri";

const Complaint = () => {
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const fotoRef = useRef();
  const fotoSelfieRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        imageProof: fotoRef.current.files,
        imageSelfie: fotoSelfieRef.current.files,
        location,
        description,
        category_id: category,
      };
      const response = await createComplain(data);
      alert("berhasil buat laporan", response.data.message);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box bgColor="secondary" fontFamily="mukta">
      <Box
        maxW="540px"
        minH="100vh"
        margin="auto"
        backgroundColor="background"
        position="relative"
      >
        <Flex margin="0px 24px" padding="42px 0px" alignItems="center">
          <Link to="/">
            <Icon as={BiArrowBack} />
          </Link>
          <Heading fontSize="lg" fontWeight="700" ml="28px">
            Keluhan
          </Heading>
        </Flex>
        <Box padding="0px 24px" backgroundColor="background">
          <Form onSubmit={handleSubmit}>
            <Flex flexDir={"column"} className="content">
              <Text marginBottom={"10px"}>Pilih Kategori</Text>
              <Select
                placeholder="Pilih Kategori Keluhan"
                background="#FFFFFF"
                border="1px solid #CCCCCC"
                borderRadius="8px"
                required
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value={1}>Plumbing</option>
                <option value={2}>Listrik</option>
                <option value={3}>Kebersihan</option>
                <option value={4}>Keamanan</option>
              </Select>
              <Text margin={"10px 0 10px 0"}>Lokasi Unit</Text>
              <Input
                className="Input"
                type="text"
                placeholder="Masukan Lokasi Unit"
                width="100%"
                background="#FFFFFF"
                border="1px solid #CCCCCC"
                borderRadius="8px"
                height="3rem"
                w="100%"
                required
                focusBorderColor="black"
                onChange={(e) => setLocation(e.target.value)}
              />
              <Text margin={"10px 0 10px 0"}>Deskripsi Keluhan</Text>
              <Textarea
                className="Input"
                placeholder="Jelaskan detail keluhan"
                background="#FFFFFF"
                border="1px solid #CCCCCC"
                borderRadius="8px"
                height="3rem"
                w="100%"
                required
                focusBorderColor="black"
                onChange={(e) => setDescription(e.target.value)}
              ></Textarea>
              <Text margin={"10px 0 10px 0"}>Foto Keluhan</Text>
              <InputGroup>
                <InputLeftAddon>
                  <Icon as={RiFile2Fill} />
                </InputLeftAddon>
                <Input
                  width="100%"
                  background="#FFFFFF"
                  border="1px solid #CCCCCC"
                  className="Input"
                  type="file"
                  multiple
                  ref={fotoRef}
                  accept="image/*"
                  placeholder="phone number"
                />
              </InputGroup>
              <Text margin={"10px 0 10px 0"}> Ambil foto Selfie</Text>
              <InputGroup>
                <InputLeftAddon>
                  <Icon as={RiFile2Fill} />
                </InputLeftAddon>
                <Input
                  w="100%"
                  type="file"
                  accept="image/*"
                  capture="environment"
                  ref={fotoSelfieRef}
                />
              </InputGroup>

              <Button type="submit" margin={"20px 0 20px 0"}>
                Submit
              </Button>
            </Flex>
          </Form>
        </Box>
      </Box>
    </Box>
  );
};

export default Complaint;
