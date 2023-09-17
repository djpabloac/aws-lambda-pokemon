import { z } from "zod";

export const CreatePokemonDtoSchema = z.object({
  id: z.string().min(1, 'Id is required')
})

export type CreatePokemonDto = z.infer<typeof CreatePokemonDtoSchema>