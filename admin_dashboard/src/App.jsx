import {
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid,
  Divider,
  VStack,
  HStack,
} from '@chakra-ui/react'
import Sidebar from './components/Sidebar'
import TopStatsCards from './components/TopStatsCards'
import UserActivityChart from './components/UserActivityChart'
import PieChartSection from './components/PieChartSection'
import ActivityLog from './components/ActivityLog'

function App() {
  return (
    <Flex minH="100vh" bg="gray.50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <Box flex="1" p={6} overflowY="auto">
        {/* Top Stats Cards */}
        <TopStatsCards />

        <Divider my={6} />

        {/* Charts Section */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          {/* Line Chart */}
          <Box bg="white" borderRadius="md" boxShadow="md" p={4}>
            <Heading size="md" mb={4}>
              User activity
            </Heading>
            <UserActivityChart />
          </Box>

          {/* Pie Chart and Auth Info */}
          <Box bg="white" borderRadius="md" boxShadow="md" p={4}>
            <PieChartSection />
          </Box>
        </SimpleGrid>

        <Divider my={6} />

        {/* Activity Log */}
        <Box bg="white" borderRadius="md" boxShadow="md" p={4} mt={4}>
          <Heading size="md" mb={4}>
            Activity log
          </Heading>
          <ActivityLog />
        </Box>
      </Box>
    </Flex>
  )
}

export default App
