import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts'

const data = [
  { date: '1 Sep', value: 400 },
  { date: '2 Sep', value: 1000 },
  { date: '3 Sep', value: 600 },
  { date: '4 Sep', value: 1200 },
  { date: '5 Sep', value: 800 },
  { date: '6 Sep', value: 500 },
]

const UserActivityChart = () => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#3182CE" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default UserActivityChart
