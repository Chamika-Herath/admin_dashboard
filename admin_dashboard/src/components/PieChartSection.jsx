import { Box, Text, VStack } from '@chakra-ui/react'
import { PieChart, Pie, Cell, Tooltip } from 'recharts'

const pieData = [
  { name: 'Staff', value: 151 },
  { name: 'Students', value: 200 },
  { name: 'Students 2', value: 100 },
  { name: 'Other', value: 200 },
]

const COLORS = ['#3182CE', '#2B6CB0', '#63B3ED', '#BEE3F8']

const PieChartSection = () => {
  return (
    <VStack spacing={4} align="start">
      <Text fontWeight="bold">Daily active users</Text>
      <PieChart width={250} height={200}>
        <Pie
          data={pieData}
          cx={120}
          cy={100}
          innerRadius={40}
          outerRadius={70}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          label
        >
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
      <Box>
        <Text>Microsoft: 100</Text>
        <Text>Internal: 100</Text>
        <Text>SMAL: 100</Text>
      </Box>
    </VStack>
  )
}

export default PieChartSection
