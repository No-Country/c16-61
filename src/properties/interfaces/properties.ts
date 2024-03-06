import { type Property } from '@prisma/client'

export type CreateProperty = Omit<Property, 'id' | 'createdAt' | 'updatedAt'>

export type UpdateProperty = Omit<Property, 'createdAt' | 'updatedAt'>
