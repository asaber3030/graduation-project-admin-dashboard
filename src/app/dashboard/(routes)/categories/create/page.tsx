import AdminPageTitle from "@/app/dashboard/(helpers)/_components/common/title"

import { AdminCreateCategoryForm } from "@/app/dashboard/(helpers)/_components/categories/create-form"
import { getHospitals } from "@/actions/app"

export default async function CreateProductPage() {
  const hospitals = await getHospitals()
  return (
    <div>
      <AdminPageTitle title='Create Category' />
      <AdminCreateCategoryForm hospitals={hospitals} />
    </div>
  )
}
