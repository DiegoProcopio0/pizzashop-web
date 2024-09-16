import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import colors from 'tailwindcss/colors'

import { ResponsiveContainer, LineChart, XAxis, YAxis, Line } from 'recharts'

const data = [
  { data: '10/12', revenue: 1200 },
  { data: '11/12', revenue: 200 },
  { data: '12/12', revenue: 900 },
  { data: '13/12', revenue: 700 },
  { data: '14/12', revenue: 500 },
  { data: '15/12', revenue: 1000 },
  { data: '16/12', revenue: 800 },
]

export function RevenueChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no período
          </CardTitle>
          <CardDescription>Receita diária por período</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <XAxis dataKey="data" axisLine={false} tickLine={false} dy={16} />
            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              width={80}
              tickFormatter={(value: number) =>
                value.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })
              }
            />
            <Line
              type="linear"
              strokeWidth={2}
              dataKey="revenue"
              stroke={colors.violet['500']}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
