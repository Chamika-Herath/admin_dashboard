import { Box, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react';

const data = [
  { title: 'Daily active users', value: 1051, date: '18 Mar 2020' },
  { title: 'Monthly Active Users', value: 1051, date: '18 Mar 2020' },
  { title: 'Daily Time Per Active User', value: 1051, date: '18 Mar 2020' },
];

const TopStatsCards = () => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');
  const subTextColor = useColorModeValue('gray.600', 'gray.400');

  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
      {data.map((item, index) => (
        <Box
          key={index}
          p={5}
          borderRadius="md"
          boxShadow="md"
          bg={cardBg}
          color={textColor}
        >
          <Text fontSize="2xl" fontWeight="bold">
            {item.value}
          </Text>
          <Text>{item.title}</Text>
          <Text fontSize="sm" mt={2} color={subTextColor}>
            {item.date}
          </Text>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default TopStatsCards;
