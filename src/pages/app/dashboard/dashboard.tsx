import { Card, CardHeader, CardTitle } from '@/components/ui/card.tsx'
import { DollarSign } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex items-center justify-between pb-2">
              <CardTitle>Resultado total do mês</CardTitle>
              <DollarSign className="size-4 text-muted-foreground" />
            </CardHeader>
          </Card>
        </div>
      </div>
    </>
  )
}
