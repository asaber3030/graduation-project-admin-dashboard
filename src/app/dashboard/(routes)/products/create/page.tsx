import { AdminCreateProductForm } from "@/app/dashboard/(helpers)/_components/products/create-form"

import AdminPageTitle from "@/app/dashboard/(helpers)/_components/common/title"

export default async function CreateProductPage() {
  return (
    <div>
      <AdminPageTitle title='Create Product' />
      <AdminCreateProductForm />
    </div>
  )
}
