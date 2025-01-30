import AdminPageTitle from "@/app/dashboard/(helpers)/_components/common/title"

import { AdminCreateInventtoryModal } from "@/app/dashboard/(helpers)/_components/inventories/create-form"

export default async function CreateInventoryPage() {
  return (
    <div>
      <AdminPageTitle title='Create Inventory' />
      <AdminCreateInventtoryModal />
    </div>
  )
}
