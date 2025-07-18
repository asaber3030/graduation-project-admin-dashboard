import FilterAll from "@/app/dashboard/(helpers)/_components/common/filter"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DefaultTableFooter } from "@/app/dashboard/(helpers)/_components/common/table-footer"
import { SearchParams } from "@/types"
import { Edit, Trash } from "lucide-react"
import { DeleteModal } from "../common/delete-modal"
import { EmptyState } from "@/components/common/empty-state"
import { Category } from "@prisma/client"
import { OrderBy } from "../../_utils/order-by"
import { LinkBtn } from "@/components/common/link-btn"
import { Button } from "@/components/ui/button"

import { deleteProductAction } from "../../_actions/products"
import { diffForHuman } from "@/lib/utils"
import { adminRoutes } from "../../_utils/routes"
import { deleteCategoryAction } from "../../_actions/categories"

type Props = {
  data: Category[]
  searchParams: SearchParams
  hasNextPage: boolean
  showFilters?: boolean
}

export const AdminCategoriesTable = ({ showFilters = true, hasNextPage, searchParams, data }: Props) => {
  return (
    <div>
      {showFilters && <FilterAll searchParams={searchParams} orderByArray={OrderBy.products} parentClassName='mb-4' />}
      {data.length === 0 ? (
        <EmptyState />
      ) : (
        <section>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='w-[100px]'>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Image</TableHead>
                <TableHead>Last Update</TableHead>
                <TableHead className='text-right'>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((category) => (
                <TableRow key={`inventory-row-${category.id}`}>
                  <TableCell className='font-medium'>{category.id}</TableCell>
                  <TableCell>{category.name}</TableCell>
                  <TableCell>
                    <img src={category.image || "/defaults/logo.png"} alt={category.name} className='w-10 h-10 object-cover rounded' />
                  </TableCell>
                  <TableCell>{diffForHuman(category.updatedAt)}</TableCell>
                  <TableCell className='text-right space-x-2'>
                    <DeleteModal deletedId={category.id} forceAction={deleteCategoryAction}>
                      <Button variant='destructive' icon={Trash}>
                        Delete
                      </Button>
                    </DeleteModal>
                    <LinkBtn href={adminRoutes.categories.update(category.id)} icon={Edit} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <DefaultTableFooter searchParams={searchParams} hasNextPage={!hasNextPage} />
        </section>
      )}
    </div>
  )
}
