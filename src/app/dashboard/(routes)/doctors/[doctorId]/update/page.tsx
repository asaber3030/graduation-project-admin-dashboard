import AdminPageTitle from "@/app/dashboard/(helpers)/_components/common/title"
import React from "react"

import { findDoctor } from "@/app/dashboard/(helpers)/_actions/doctors"
import { notFound } from "next/navigation"

import { AdminUpdateDoctorForm } from "@/app/dashboard/(helpers)/_components/doctors/update-form"

type Props = {
  params: {
    doctorId: string
  }
}

export default async function DoctorIdUpdatePage({ params }: Props) {
  const doctorId = +params.doctorId
  const doctor = await findDoctor({ id: doctorId })

  if (!doctor) return notFound()

  const pageTitle = (
    <span>
      Update Doctor - <b>{doctor.name}</b>
    </span>
  )

  return (
    <div>
      <AdminPageTitle title={pageTitle} />
      <AdminUpdateDoctorForm doctor={doctor} />
    </div>
  )
}
