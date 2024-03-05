import { type Property } from '@prisma/client'

export type DashboardProperty = Omit<Property, 'id' | 'createdAt' | 'updatedAt'>
