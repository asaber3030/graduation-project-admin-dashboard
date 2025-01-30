import React from "react"
import AdminPageTitle from "@/app/dashboard/(helpers)/_components/common/title"

import { AdminCreatePrescriptionForm } from "@/app/dashboard/(helpers)/_components/prescriptions/create-form"

export default function CreatePrescriptionPage() {
  return (
    <div>
      <AdminPageTitle title='Create Prescription' />
      <AdminCreatePrescriptionForm />
    </div>
  )
}
