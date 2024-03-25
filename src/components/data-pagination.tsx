import {
  Pagination,
  PaginationContent,
  PaginationEnd,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
  PaginationStart,
} from '@/components/ui'

export type DataPaginationProps = {
  pageIndex: number
  totalCount: number
  perPage: number
}

export function DataPagination({
  pageIndex,
  totalCount,
  perPage,
}: DataPaginationProps) {
  const pages = Math.ceil(totalCount / perPage) || 1
  return (
    <div className="flex items-center justify-between">
      <div className="flex w-full items-center justify-start gap-6 lg:gap-8">
        <span className="text-sm text-muted-foreground">
          Total de {totalCount} items(s)
        </span>
      </div>
      <div className="flex w-full items-center justify-end gap-6 lg:gap-8">
        <span className="text-sm font-medium">
          Página {pageIndex + 1} de {pages}
        </span>
        <Pagination className="mx-0 w-auto">
          <PaginationContent>
            <PaginationItem>
              <PaginationStart href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationEnd href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}
