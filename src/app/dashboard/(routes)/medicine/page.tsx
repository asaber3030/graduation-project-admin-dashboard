import AdminPageTitle from "@/app/dashboard/(helpers)/_components/common/title"

import { AdminMedicineTable } from "@/app/dashboard/(helpers)/_components/medicine/table"
import { ATFullMedicine } from "@/app/dashboard/(helpers)/_types"
import { SearchParams } from "@/types"
import { LinkBtn } from "@/components/common/link-btn"
import { Plus } from "lucide-react"

import { paginateMedicine } from "@/app/dashboard/(helpers)/_actions/medicine"
import { adminRoutes } from "@/app/dashboard/(helpers)/_utils/routes"

export default async function InventoriesPage({ searchParams }: { searchParams: SearchParams }) {
  const medicine = await paginateMedicine(searchParams)

  return (
    <div>
      <AdminPageTitle title='Medicine'>
        <LinkBtn icon={Plus} variant='outline' href={adminRoutes.medicine.create}>
          Create
        </LinkBtn>
      </AdminPageTitle>

      <AdminMedicineTable
        data={medicine.medicine as ATFullMedicine[]}
        hasNextPage={medicine.hasNextPage}
        searchParams={searchParams}
      />
    </div>
  )
}
