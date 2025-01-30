import AdminPageTitle from "@/app/dashboard/(helpers)/_components/common/title"

import { AdminEmployeesTable } from "@/app/dashboard/(helpers)/_components/employees/table"
import { SearchParams } from "@/types"
import { Plus } from "lucide-react"
import { LinkBtn } from "@/components/common/link-btn"

import { paginateEmployees } from "@/app/dashboard/(helpers)/_actions/employees"
import { adminRoutes } from "@/app/dashboard/(helpers)/_utils/routes"

export default async function Employees({ searchParams }: { searchParams: SearchParams }) {
  const employees = await paginateEmployees(searchParams)

  return (
    <div>
      <AdminPageTitle title='Employees'>
        <LinkBtn icon={Plus} variant='outline' href={adminRoutes.employees.create}>
          Create
        </LinkBtn>
      </AdminPageTitle>

      <AdminEmployeesTable
        data={employees.employees}
        hasNextPage={employees.hasNextPage}
        searchParams={searchParams}
      />
    </div>
  )
}
