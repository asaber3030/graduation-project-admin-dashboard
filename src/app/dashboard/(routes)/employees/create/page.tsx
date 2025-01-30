import AdminPageTitle from "@/app/dashboard/(helpers)/_components/common/title"
import React from "react"

import { AdminCreateEmployeeForm } from "@/app/dashboard/(helpers)/_components/employees/create-form"

export default function CreateEmployeePage() {
  return (
    <div>
      <AdminPageTitle title='Create Employee' />
      <AdminCreateEmployeeForm />
    </div>
  )
}
