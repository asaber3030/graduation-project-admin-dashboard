import AdminPageTitle from "@/app/dashboard/(helpers)/_components/common/title"

import { AdminInventoriesTable } from "@/app/dashboard/(helpers)/_components/inventories/table"
import { SearchParams } from "@/types"
import { Plus } from "lucide-react"

import { paginateInventories } from "@/app/dashboard/(helpers)/_actions/inventories"
import { adminRoutes } from "@/app/dashboard/(helpers)/_utils/routes"
import { LinkBtn } from "@/components/common/link-btn"

export default async function InventoriesPage({ searchParams }: { searchParams: SearchParams }) {
  const inventories = await paginateInventories(searchParams)

  return (
    <div>
      <AdminPageTitle title='Inventories'>
        <LinkBtn icon={Plus} variant='outline' href={adminRoutes.inventories.create}>
          Create
        </LinkBtn>
      </AdminPageTitle>

      <AdminInventoriesTable
        data={inventories.inventories}
        searchParams={searchParams}
        hasNextPage={true}
      />
    </div>
  )
}
