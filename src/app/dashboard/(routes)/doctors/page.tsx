import AdminPageTitle from "@/app/dashboard/(helpers)/_components/common/title"

import { AdminDoctorsTable } from "@/app/dashboard/(helpers)/_components/doctors/table"
import { SearchParams } from "@/types"
import { LinkBtn } from "@/components/common/link-btn"
import { Plus } from "lucide-react"

import { paginateDoctors } from "@/app/dashboard/(helpers)/_actions/doctors"
import { adminRoutes } from "@/app/dashboard/(helpers)/_utils/routes"

export default async function Doctors({ searchParams }: { searchParams: SearchParams }) {
  const doctors = await paginateDoctors(searchParams)

  return (
    <div>
      <AdminPageTitle title='Doctors'>
        <LinkBtn icon={Plus} variant='outline' href={adminRoutes.doctors.create}>
          Create
        </LinkBtn>
      </AdminPageTitle>

      <AdminDoctorsTable
        searchParams={searchParams}
        data={doctors.doctors}
        hasNextPage={doctors.hasNextPage}
      />
    </div>
  )
}
