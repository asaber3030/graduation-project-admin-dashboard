"use server"

import { APIResponse } from "@/types"
import { Admin } from "@prisma/client"

import { getHeaders } from "@/lib/api"
import { cookies } from "next/headers"
import { API_URL, COOKIE_NAME } from "@/lib/constants"

type GetAdminResponseType = {
  admin: Admin
}

export async function getCurrentAdmin() {
  const token = cookies().get(COOKIE_NAME)?.value
  const res = await fetch(`${API_URL}/current-user`, getHeaders(token))
  const data: APIResponse<GetAdminResponseType, any> = await res.json()
  return data.data?.admin as Admin
}
