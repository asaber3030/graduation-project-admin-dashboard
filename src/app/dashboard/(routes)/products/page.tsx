import AdminPageTitle from "../../(helpers)/_components/common/title"

import { AdminProductsTable } from "../../(helpers)/_components/products/table"
import { SearchParams } from "@/types"
import { LinkBtn } from "@/components/common/link-btn"
import { Plus } from "lucide-react"

import { paginateProducts } from "../../(helpers)/_actions/products"
import { adminRoutes } from "../../(helpers)/_utils/routes"

type Props = {
  searchParams: Promise<SearchParams>
}

export default async function ProductPage({ searchParams }: Props) {
  const sp = await searchParams
  const products = await paginateProducts(sp)

  return (
    <div>
      <AdminPageTitle title='Products'>
        <LinkBtn href={adminRoutes.products.create} icon={Plus}>
          Create Product
        </LinkBtn>
      </AdminPageTitle>
      <AdminProductsTable hasNextPage={!products.hasNextPage} searchParams={sp} data={products.products} />
    </div>
  )
}
