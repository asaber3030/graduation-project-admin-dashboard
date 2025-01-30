import AdminPageTitle from "@/app/dashboard/(helpers)/_components/common/title"

import { AdminPrescriptionsTable } from "@/app/dashboard/(helpers)/_components/prescriptions/table"
import { SearchParams } from "@/types"
import { LinkBtn } from "@/components/common/link-btn"
import { Plus } from "lucide-react"

import { paginatePrescriptions } from "@/app/dashboard/(helpers)/_actions/prescriptions"
import { adminRoutes } from "@/app/dashboard/(helpers)/_utils/routes"

export default async function Prescriptions({ searchParams }: { searchParams: SearchParams }) {
  const prescriptions = await paginatePrescriptions(searchParams)

  return (
    <div>
      <AdminPageTitle title='Prescriptions'>
        <LinkBtn icon={Plus} variant='outline' href={adminRoutes.prescriptions.create}>
          Create
        </LinkBtn>
      </AdminPageTitle>

      <AdminPrescriptionsTable
        data={prescriptions.prescriptions}
        searchParams={searchParams}
        hasNextPage={prescriptions.hasNextPage}
      />
    </div>
  )
}
