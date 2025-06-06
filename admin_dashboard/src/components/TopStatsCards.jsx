import { SimpleGrid, Box, Text, Heading } from '@chakra-ui/react'

const stats = [
  {
    label: 'Daily active users',
    value: '1051',
    date: '18 Mar 2020',
  },
  {
    label: 'Monthly Active Users',
    value: '1051',
    date: '18 Mar 2020',
  },
  {
    label: 'Daily Time Per Active User',
    value: '1051',
    date: '18 Mar 2020',
  },
]

const TopStatsCards = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
      {stats.map((stat, index) => (
        <Box
          key={index}
          bg="white"
          borderRadius="md"
          boxShadow="md"
          p={4}
        >
          <Heading size="lg">{stat.value}</Heading>
          <Text fontWeight="semibold">{stat.label}</Text>
          <Text fontSize="sm" color="gray.500">{stat.date}</Text>
        </Box>
      ))}
    </SimpleGrid>
  )
}

export default TopStatsCards
