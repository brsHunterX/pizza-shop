import { MagnifyingGlass } from '@phosphor-icons/react'

import { OrderDetails } from '@/components/orders'
import {
  Button,
  Dialog,
  DialogTrigger,
  TableCell,
  TableRow,
} from '@/components/ui'

export function OrderTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              <MagnifyingGlass className="size-/" />
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>
          <OrderDetails />
        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-sm font-medium">
        6587a4d6as685a4sd6a8s5d47
      </TableCell>
      <TableCell className="text-muted-foreground">há 15 minutos</TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-slate-400"></span>
          <span className="font-medium text-muted-foreground">Pendente</span>
        </div>
      </TableCell>
      <TableCell className="font-medium">Bianca Brazolim Dos Santos</TableCell>
      <TableCell className="font-medium">R$ 149,99</TableCell>
      <TableCell>
        <Button variant="outline" size="xs">
          Aprovar
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="ghost" size="xs">
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  )
}
