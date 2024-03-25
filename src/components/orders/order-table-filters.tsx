import { MagnifyingGlass, TrashSimple } from '@phosphor-icons/react'

import {
  Button,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui'

export function OrderTableFilters() {
  return (
    <form className="flex items-center gap-2" action="">
      <span className="text-sm font-semibold">Filtros</span>
      <Input className="h-8 w-auto" placeholder="ID do pedido" />
      <Input className="h-8 w-[320px]" placeholder="Nome do cliente" />
      <Select defaultValue="all">
        <SelectTrigger className="h-8 w-[180px]">
          <SelectValue placeholder="Selecione o status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos Status</SelectItem>
          <SelectItem value="pending">Pendente</SelectItem>
          <SelectItem value="canceled">Cancelado</SelectItem>
          <SelectItem value="proccessing">Em preparo</SelectItem>
          <SelectItem value="delivering">Em entrega</SelectItem>
          <SelectItem value="delivered">Entregue</SelectItem>
        </SelectContent>
      </Select>
      <Button type="submit" variant="secondary" size="xs">
        <MagnifyingGlass className="mr-2 size-4" />
        Filtrar resultados
      </Button>
      <Button type="reset" variant="outline" size="xs">
        <TrashSimple className="mr-2 size-4" />
        Remover filtros
      </Button>
    </form>
  )
}
