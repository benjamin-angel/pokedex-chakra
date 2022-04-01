//Interfaces for the initial fetch from pokeapi
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

//Interfaces for individual pokemon
export interface PokemonAbility {
  ability: {
    name: string,
    url: string,
  },
  is_hidden: boolean,
  slot: number;
}

export interface PokemonDetailedResult {
  abilities: Array<PokemonAbility>,
  base_experience: number,
  forms: Array<PokemonResult>,
  game_indices: Array<{
    game_index: number,
    version: {
      name: string,
      url: string,
    };
  }>,
  height: number,
  held_items: Array<{
    item: {
      name: string,
      url: string,
    },
    version_details: Array<{
      rarity: number,
      version: {
        name: string,
        url: string,
      };
    }>;
  }>,
  id: number,
  is_default: boolean,
  location_area_encounters: string,
  moves: Array<{
    move: {
      name: string,
      url: string,
    },
    version_group_details: Array<{
      level_learned_at: number,
      move_learn_method: {
        name: string,
        url: string,
      },
      version_group: {
        name: string,
        url: string,
      };
    }>;
  }>,
  name: string,
  order: number,
  species: {
    name: string,
    url: string,
  },
  sprites: {
    back_default: string | null,
    back_female: string | null,
    back_shiny: string | null,
    back_shiny_female: string | null,
    front_default: string | null,
    front_female: string | null,
    front_shiny: string | null,
    front_shiny_female: string | null,
    other: any,
    versions: {},
  };
  stats: Array<{
    base_stat: number,
    effort: number,
    stat: {
      name: string,
      url: string;
    };
  }>;
  types: Array<{
    slot: number,
    type: {
      name: string,
      url: string,
    };
  }>;
  weight: number;

};