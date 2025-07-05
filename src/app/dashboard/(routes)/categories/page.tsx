import AdminPageTitle from "../../(helpers)/_components/common/title"

import { AdminCategoriesTable } from "../../(helpers)/_components/categories/table"
import { SearchParams } from "@/types"
import { LinkBtn } from "@/components/common/link-btn"
import { Plus } from "lucide-react"

import { adminRoutes } from "../../(helpers)/_utils/routes"
import { paginateCategories } from "../../(helpers)/_actions/categories"

type Props = {
  searchParams: Promise<SearchParams>
}

export default async function CategoriesPage({ searchParams }: Props) {
  const sp = await searchParams
  const categories = await paginateCategories(sp)

  return (
    <div>
      <AdminPageTitle title='Categories'>
        <LinkBtn href={adminRoutes.categories.create} icon={Plus}>
          Create Category
        </LinkBtn>
      </AdminPageTitle>
      <AdminCategoriesTable hasNextPage={!categories.hasNextPage} searchParams={sp} data={categories.categories} />
    </div>
  )
}
