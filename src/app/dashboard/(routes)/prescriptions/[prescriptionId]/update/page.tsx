import AdminPageTitle from "@/app/dashboard/(helpers)/_components/common/title"
import React from "react"

import { AdminUpdatePrescriptionForm } from "@/app/dashboard/(helpers)/_components/prescriptions/update-form"
import { ATFullPrescritpion } from "@/app/dashboard/(helpers)/_types"

import { findPrescriptionById } from "@/app/dashboard/(helpers)/_actions/prescriptions"
import { notFound } from "next/navigation"

type Props = {
  params: {
    prescriptionId: string
  }
}

export default async function UpdatePrescriptionPage({ params }: Props) {
  const prescriptionId = +params.prescriptionId
  const prescription = (await findPrescriptionById(prescriptionId)) as ATFullPrescritpion

  if (!prescription) return notFound()

  const pageTitle = (
    <span>
      Prescription - <b>#{prescription.id}</b>
    </span>
  )

  return (
    <div>
      <AdminPageTitle title={pageTitle} />
      <AdminUpdatePrescriptionForm prescription={prescription} />
    </div>
  )
}
