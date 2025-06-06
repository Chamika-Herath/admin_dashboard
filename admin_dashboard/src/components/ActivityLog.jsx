import { VStack, Text } from '@chakra-ui/react'

const logData = [
  'User name here Permissions changed to admin by admin123',
  'User name Successfully logged in',
  'User name here Permissions changed to admin by admin123',
  'User name Successfully logged in',
]

const ActivityLog = () => {
  return (
    <VStack align="start" spacing={4}>
      {logData.map((log, index) => (
        <div key={index}>
          <Text>{log}</Text>
          <Text fontSize="sm" color="gray.500">2hrs ago</Text>
        </div>
      ))}
    </VStack>
  )
}

export default ActivityLog
