import { BarChart, Bar } from 'recharts'

export default function Chart({ data }) {
  return (
    <BarChart width={300} height={230} data={data}>
      <Bar dataKey="cnt" fill="#3F97FF" />
    </BarChart>
  )
}
