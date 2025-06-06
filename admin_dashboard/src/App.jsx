import {
  Box,
  Flex,
  useColorModeValue,
  Divider,
  SimpleGrid,
  Heading,
} from '@chakra-ui/react';
import Sidebar from './components/Sidebar';
import TopStatsCards from './components/TopStatsCards';
import UserActivityChart from './components/UserActivityChart';
import PieChartSection from './components/PieChartSection';
import ActivityLog from './components/ActivityLog';
import ColorModeSwitcher from './components/ColorModeSwitcher';

function App() {
  const bg = useColorModeValue('gray.50', 'gray.800');
  const cardBg = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('gray.800', 'white');

  return (
    <Box minH="100vh" bg={bg}>
      <Sidebar />
      <ColorModeSwitcher />

      <Box
        ml={{ base: 0, md: '250px' }}
        p={{ base: 4, md: 6 }}
        color={textColor}
      >
        <TopStatsCards cardBg={cardBg} textColor={textColor} />

        <Divider my={6} />

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          <Box bg={cardBg} borderRadius="md" boxShadow="md" p={4}>
            <Heading size="md" mb={4} color={textColor}>
              User activity
            </Heading>
            <UserActivityChart textColor={textColor} />
          </Box>

          <Box bg={cardBg} borderRadius="md" boxShadow="md" p={4}>
            <PieChartSection textColor={textColor} />
          </Box>
        </SimpleGrid>

        <Divider my={6} />
        

        <Box bg={cardBg} borderRadius="md" boxShadow="md" p={4} mt={4}>
          <Heading size="md" mb={4} color={textColor}>
            Activity log
          </Heading>
          <ActivityLog textColor={textColor} />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
