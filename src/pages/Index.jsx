import React from "react";
import { Box, Heading, Text, VStack, HStack, Image, Button, Divider, Grid, GridItem, Icon } from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box bgImage="https://images.unsplash.com/photo-1478001517127-fccc92f54906?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxpY2UlMjBiYXRoJTIwaW4lMjBuYXR1cmV8ZW58MHx8fHwxNzEyOTc1NjQ1fDA&ixlib=rb-4.0.3&q=80&w=1080" bgSize="cover" bgPosition="center" h="400px" display="flex" alignItems="center" justifyContent="center">
        <VStack spacing={4} textAlign="center" color="white">
          <Heading size="2xl">Ice Bath Rentals Austin</Heading>
          <Text fontSize="xl">Refresh, Rejuvenate, Recover</Text>
          <Button colorScheme="blue" size="lg">
            Book Now
          </Button>
        </VStack>
      </Box>

      {/* About Section */}
      <Box p={8}>
        <Heading mb={4}>About Us</Heading>
        <Text>We provide top-quality ice bath rental services in Austin, Texas. Our ice baths are perfect for athletes, fitness enthusiasts, and anyone looking to experience the benefits of cold therapy. Boost your recovery and overall well-being with our convenient and affordable ice bath rentals.</Text>
      </Box>

      {/* Services Section */}
      <Box p={8} bg="gray.100">
        <Heading mb={4}>Our Services</Heading>
        <Grid templateColumns="repeat(2, 1fr)" gap={8}>
          <GridItem>
            <Image src="https://images.unsplash.com/photo-1484278786775-527ac0d0b608?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0YWJsZSUyMGljZSUyMGJhdGh8ZW58MHx8fHwxNzEyOTc1NjQ1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Portable Ice Bath" borderRadius="md" />
            <Heading size="md" mt={4}>
              Portable Ice Bath Rentals
            </Heading>
            <Text>Rent our portable ice baths for events, training sessions, or personal use. We deliver and set up the ice bath at your desired location.</Text>
          </GridItem>
          <GridItem>
            <Image src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxpY2UlMjBiYXRoJTIwYXQlMjBob21lfGVufDB8fHx8MTcxMjk3NTY0Nnww&ixlib=rb-4.0.3&q=80&w=1080" alt="At-Home Ice Bath" borderRadius="md" />
            <Heading size="md" mt={4}>
              At-Home Ice Bath Rentals
            </Heading>
            <Text>Experience the benefits of cold therapy in the comfort of your own home. We provide ice bath rentals for home use, perfect for regular recovery sessions.</Text>
          </GridItem>
        </Grid>
      </Box>

      {/* Contact Section */}
      <Box p={8}>
        <Heading mb={4}>Contact Us</Heading>
        <HStack spacing={8}>
          <VStack align="start">
            <HStack>
              <Icon as={FaPhone} />
              <Text>512-123-4567</Text>
            </HStack>
            <HStack>
              <Icon as={FaEnvelope} />
              <Text>info@icebathrentalsaustin.com</Text>
            </HStack>
            <HStack>
              <Icon as={FaMapMarkerAlt} />
              <Text>Austin, TX</Text>
            </HStack>
          </VStack>
          <Divider orientation="vertical" />
          <VStack align="start">
            <Heading size="md">Hours of Operation</Heading>
            <Text>Monday - Friday: 9am - 6pm</Text>
            <Text>Saturday: 10am - 4pm</Text>
            <Text>Sunday: Closed</Text>
          </VStack>
        </HStack>
      </Box>
    </Box>
  );
};

export default Index;
