import { BarChart, Bar, XAxis } from 'recharts'

export default function Chart({ data }) {
  return (
    <BarChart width={300} height={230} data={data}>
      <XAxis dataKey="name" />
      <Bar dataKey="trash" fill="#3F97FF" barSize={20} />
    </BarChart>
  )
}
