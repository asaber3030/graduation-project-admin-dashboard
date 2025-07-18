import { URLShortcut } from "../(helpers)/_components/dashboard/url-shortcut"
import { URLBox } from "../(helpers)/_components/dashboard/url-box"
import { Plus, Users } from "lucide-react"
import { Metadata } from "next"

import { adminGlobalIcons } from "../(helpers)/_utils/constants"
import { adminRoutes } from "../(helpers)/_utils/routes"
import { tableCounts } from "../(helpers)/_actions/dashboard"

export const metadata: Metadata = {
  title: "Dashboard"
}

export default async function Home() {
  const counts = await tableCounts()

  return (
    <div className='space-y-4'>
      <div className=''>
        <h1 className='text-3xl font-bold mb-3'>Statistics</h1>
        <div className='grid xl:grid-cols-4 grid-cols-1 gap-2'>
          <URLBox
            num={counts.patients}
            label='Patients'
            icon={adminGlobalIcons.patients}
            href={adminRoutes.patients.root}
          />
          <URLBox
            num={counts.hospitals}
            label='Hospitals'
            icon={adminGlobalIcons.hospital}
            href={adminRoutes.hospitals.root}
          />
          <URLBox
            num={counts.doctors}
            label='Doctors'
            icon={adminGlobalIcons.doctors}
            href={adminRoutes.doctors.root}
          />
          <URLBox
            num={counts.medicine}
            label='Medicine'
            icon={adminGlobalIcons.medicine}
            href={adminRoutes.medicine.root}
          />
          <URLBox
            num={counts.employees}
            label='Employees'
            icon={adminGlobalIcons.employees}
            href={adminRoutes.employees.root}
          />
          <URLBox
            num={counts.departments}
            label='Departments'
            icon={adminGlobalIcons.departments}
            href={adminRoutes.departments.root}
          />
          <URLBox
            num={counts.inventories}
            label='Inventories'
            icon={adminGlobalIcons.inventories}
            href={adminRoutes.inventories.root}
          />
          <URLBox
            num={counts.prescriptions}
            label='Prescriptions'
            icon={adminGlobalIcons.prescriptions}
            href={adminRoutes.prescriptions.root}
          />
        </div>
      </div>

      <div className=''>
        <h1 className='text-3xl font-bold mb-3'>Shortcuts</h1>
        <div className='grid xl:grid-cols-6 grid-cols-1 gap-2'>
          <URLShortcut label='Create Doctor' icon={Plus} href={adminRoutes.doctors.root} />
          <URLShortcut label='Patients' icon={Users} href={adminRoutes.doctors.root} />
          <URLShortcut label='Hospitals' icon={Users} href={adminRoutes.doctors.root} />
          <URLShortcut label='Prescriptions' icon={Users} href={adminRoutes.doctors.root} />
          <URLShortcut label='Inventories' icon={Users} href={adminRoutes.doctors.root} />
          <URLShortcut label='Medicine' icon={Users} href={adminRoutes.doctors.root} />
          <URLShortcut label='Permissions' icon={Users} href={adminRoutes.doctors.root} />
          <URLShortcut label='Employees' icon={Users} href={adminRoutes.doctors.root} />
        </div>
      </div>
    </div>
  )
}
