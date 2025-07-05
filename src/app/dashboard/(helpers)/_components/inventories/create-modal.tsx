"use client"

import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import { useForm } from "react-hook-form"

import { createInventoryAction } from "../../_actions/inventories"
import { showResponseMessage } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { adminRoutes } from "../../_utils/routes"
import { z } from "zod"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { InventorySchema } from "@/schema"
import { LoadingButton } from "@/components/common/loading-button"
import { InputField } from "@/components/common/input-field"
import { LinkBtn } from "@/components/common/link-btn"
import { Form } from "@/components/ui/form"

type Mutation = {
  data: z.infer<typeof InventorySchema.create>
}

type Props = {
  children: React.ReactNode
  departmentId: number
  asChild?: boolean
}

export const AdminCreateInventoryModal = ({ departmentId, asChild, children }: Props) => {
  const [open, setOpen] = useState(false)

  const form = useForm({
    resolver: zodResolver(InventorySchema.create),
    defaultValues: {
      name: "",
      description: "",
      code: ""
    }
  })

  const createMutation = useMutation({
    mutationFn: ({ data }: Mutation) => createInventoryAction(departmentId, data),
    onSuccess: (data) =>
      showResponseMessage(data, () => {
        if (data.status == 200) setOpen(false)
      })
  })

  const handleSubmit = () => {
    createMutation.mutate({ data: form.getValues() })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild={asChild}>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Inventory</DialogTitle>
          <DialogDescription>Create Inventory information, It's assigned to current selected hospital</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-2'>
            <InputField name='code' label='Code' placeholder='Code' control={form.control} />
            <InputField name='name' label='Name' placeholder='Enter Name' control={form.control} />
            <InputField name='description' label='Description' placeholder='Enter Description' isTextarea control={form.control} />

            <section className='flex gap-2'>
              <LoadingButton type='submit' loading={createMutation.isPending} variant='success'>
                Create
              </LoadingButton>
              <LinkBtn variant='outline' type='button' href={adminRoutes.inventories.root}>
                Close
              </LinkBtn>
            </section>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
