import { Box, VStack, Text } from '@chakra-ui/react'

const Sidebar = () => {
  return (
    <Box
      w="220px"
      minH="100vh"
      bg="gray.800"
      color="white"
      px={4}
      py={6}
      position="sticky"
      top="0"
    >
      <Box mb={8} textAlign="center" fontWeight="bold" fontSize="xl">
        Logo
      </Box>
      <VStack spacing={4} align="stretch">
        <Text cursor="pointer" _hover={{ bg: 'gray.700' }} p={2} borderRadius="md">Dashboard</Text>
        <Text cursor="pointer" _hover={{ bg: 'gray.700' }} p={2} borderRadius="md">Data Lab</Text>
        <Text cursor="pointer" _hover={{ bg: 'gray.700' }} p={2} borderRadius="md">Surveys</Text>
        <Text cursor="pointer" _hover={{ bg: 'gray.700' }} p={2} borderRadius="md">Library</Text>
        <Text cursor="pointer" _hover={{ bg: 'gray.700' }} p={2} borderRadius="md">Marketplace</Text>
      </VStack>
    </Box>
  )
}

export default Sidebar
