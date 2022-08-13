import { BarChart, Bar, XAxis } from 'recharts'

export default function Chart({ data }) {
  return (
    <BarChart width={300} height={230} data={data}>
      <XAxis dataKey="name" tickLine={false} axisLine={false} />
      <Bar dataKey="cnt" fill="#3F97FF" />
    </BarChart>
  )
}
