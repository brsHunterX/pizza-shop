import { Helmet } from 'react-helmet-async'

import { DataPagination } from '@/components'
import { OrderTableFilters, OrderTableRow } from '@/components/orders'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui'

export function OrderPage() {
  return (
    <>
      <Helmet title="Pedidos" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
        <div className="space-y-2.5">
          <OrderTableFilters />
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16"></TableHead>
                  <TableHead className="w-36">Identificador</TableHead>
                  <TableHead className="w-36">Realizado há</TableHead>
                  <TableHead className="w-36">Status</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead className="w-36">Total do pedido</TableHead>
                  <TableHead className="w-40"></TableHead>
                  <TableHead className="w-36"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 10 }).map((_, i) => (
                  <OrderTableRow key={i} />
                ))}
              </TableBody>
            </Table>
          </div>
          <DataPagination pageIndex={0} totalCount={105} perPage={10} />
        </div>
      </div>
    </>
  )
}
