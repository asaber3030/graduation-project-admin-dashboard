import AdminPageTitle from "@/app/dashboard/(helpers)/_components/common/title"

import { AdminCreateProductForm } from "@/app/dashboard/(helpers)/_components/products/create-form"

import { findProductById } from "@/app/dashboard/(helpers)/_actions/products"
import { notFound } from "next/navigation"
import { AdminUpdateProductForm } from "@/app/dashboard/(helpers)/_components/products/update-form"

type Props = {
  params: Promise<{ productId: string }>
}

export default async function CreateProductPage({ params }: Props) {
  const { productId } = await params
  const product = await findProductById(+productId)

  if (!product) return notFound()

  return (
    <div>
      <AdminPageTitle title='Update Product' />
      <AdminUpdateProductForm product={product} />
    </div>
  )
}
