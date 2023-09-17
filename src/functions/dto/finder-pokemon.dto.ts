import { z } from "zod";

export const FinderPokemonDtoSchema = z.object({
  id: z.string().min(1, 'Id is required')
})

export type FinderPokemonDto = z.infer<typeof FinderPokemonDtoSchema>