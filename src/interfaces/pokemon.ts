export interface PokemonResult {
  name: string,
  url: string;
}

export interface PokeApiResponse {
  count: number,
  next: string,
  previous: string,
  results: Array<PokemonResult>;
}