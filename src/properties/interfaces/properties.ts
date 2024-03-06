import { type Property } from '@prisma/client'

export type CreateProperty = Omit<Property, 'id' | 'createdAt' | 'updatedAt'>
