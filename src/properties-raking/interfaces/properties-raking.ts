import { type PropertyRating } from '@prisma/client'

export type CreatePropertyRating = Omit<PropertyRating, 'id' | 'createdAt' | 'updatedAt'>
