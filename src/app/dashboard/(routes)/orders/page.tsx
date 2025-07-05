import { SearchParams } from "@/types"
import { paginateOrders } from "../../(helpers)/_actions/orders"
import AdminPageTitle from "../../(helpers)/_components/common/title"
import { AdminOrdersTable } from "../../(helpers)/_components/orders/table"

type Props = {
  searchParams: Promise<SearchParams>
}

export default async function AllOrders({ searchParams }: Props) {
  const sp = await searchParams
  const orders = await paginateOrders(sp)

  return (
    <div>
      <AdminPageTitle title='Orders' />
      <AdminOrdersTable data={orders.orders} searchParams={sp} hasNextPage={!orders.hasNextPage} showFilters={true} />
    </div>
  )
}
