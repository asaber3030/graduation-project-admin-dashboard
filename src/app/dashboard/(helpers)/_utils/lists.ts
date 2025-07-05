import { Box, BriefcaseBusiness, BriefcaseMedical, CheckCheck, Cog, DollarSign, File, Home, HospitalIcon, LayoutPanelTop, Lock, LockKeyhole, MailPlus, NotepadTextDashed, Pickaxe, Plus, ShoppingCart, Syringe, User, UserPlus, Users, Workflow } from "lucide-react"

import { v4 } from "uuid"
import { adminRoutes } from "./routes"

export const adminSidebarGroups = [
  {
    id: v4(),
    name: "Application",
    items: [
      {
        id: v4(),
        label: "Dashboard",
        url: adminRoutes.dashboard.root,
        icon: Home,
        hasItems: false,
        items: []
      },
      {
        id: v4(),
        label: "Hospitals",
        url: adminRoutes.hospitals.root,
        icon: HospitalIcon,
        hasItems: false,
        items: []
      },
      {
        id: v4(),
        label: "Resource Permissions",
        url: adminRoutes.permissions.root,
        icon: LockKeyhole,
        hasItems: false,
        items: []
      },
      {
        id: v4(),
        label: "Admins",
        url: adminRoutes.admins.root,
        icon: Lock,
        hasItems: false,
        items: []
      },
      {
        id: v4(),
        label: "Patients",
        url: adminRoutes.patients.root,
        icon: Users,
        hasItems: false,
        items: []
      },
      {
        id: v4(),
        label: "Doctors",
        url: adminRoutes.doctors.root,
        icon: BriefcaseMedical,
        hasItems: false,
        items: []
      },
      {
        id: v4(),
        label: "Medicine",
        url: adminRoutes.medicine.root,
        icon: Syringe,
        hasItems: false,
        items: []
      },
      {
        id: v4(),
        label: "Employees",
        url: adminRoutes.employees.root,
        icon: Pickaxe,
        hasItems: false,
        items: []
      },
      {
        id: v4(),
        label: "Departments",
        url: adminRoutes.departments.root,
        icon: LayoutPanelTop,
        hasItems: false,
        items: []
      },
      {
        id: v4(),
        label: "Inventories",
        url: adminRoutes.inventories.root,
        icon: Box,
        hasItems: false,
        items: []
      },
      {
        id: v4(),
        label: "Products",
        url: adminRoutes.products.root,
        icon: ShoppingCart,
        hasItems: false,
        items: []
      },
      {
        id: v4(),
        label: "Categories",
        url: adminRoutes.categories.root,
        icon: CheckCheck,
        hasItems: false,
        items: []
      },
      {
        id: v4(),
        label: "Orders",
        url: adminRoutes.orders.root,
        icon: DollarSign,
        hasItems: false,
        items: []
      },
      {
        id: v4(),
        label: "Prescriptions",
        url: adminRoutes.prescriptions.root,
        icon: NotepadTextDashed,
        hasItems: false,
        items: []
      }
    ]
  },

  {
    id: v4(),
    name: "Settings",
    items: [
      {
        id: v4(),
        label: "Profile",
        url: `/dashboard/profile`,
        icon: User
      }
    ]
  }
]

export const adminDashboardShortcuts = [
  {
    id: v4(),
    label: "Add User",
    icon: UserPlus,
    url: "/"
  },
  {
    id: v4(),
    label: "Add Exam",
    icon: Plus,
    url: "/"
  },
  {
    id: v4(),
    label: "Send E-mails",
    icon: MailPlus,
    url: "/"
  },
  {
    id: v4(),
    label: "View Subscriptions",
    icon: DollarSign,
    url: "/"
  },
  {
    id: v4(),
    label: "App Settings",
    icon: Cog,
    url: "/"
  },
  {
    id: v4(),
    label: "Create Sheets",
    icon: File,
    url: "/"
  },
  {
    id: v4(),
    label: "Careers",
    icon: BriefcaseBusiness,
    url: "/"
  },
  {
    id: v4(),
    label: "Create Category",
    icon: Plus,
    url: "/"
  },
  {
    id: v4(),
    label: "Create Level",
    icon: Plus,
    url: "/"
  },
  {
    id: v4(),
    label: "Plan Control",
    icon: CheckCheck,
    url: "/"
  },
  {
    id: v4(),
    label: "Plan Control",
    icon: CheckCheck,
    url: "/"
  },
  {
    id: v4(),
    label: "Plan Control",
    icon: CheckCheck,
    url: "/"
  },
  {
    id: v4(),
    label: "Plan Control",
    icon: CheckCheck,
    url: "/"
  },
  {
    id: v4(),
    label: "Plan Control",
    icon: CheckCheck,
    url: "/"
  }
]
