// This is here to save having to call on the api all the time to check properties

let exampleData = {
    name: String,
    sprites: {
        back_default: String,
        back_female: String,
        back_shiny: String,
        back_shiny_female: String,
        front_default: String,
        front_female: String,
        front_shiny: String,
        front_shiny_female: String,
        other: {
            dream_world: { front_default: String, front_female: String },
            home: {
                front_default: String,
                // ... used here to avoid typing all the forms again and again
                "...": String,
            },
            // ... used here to avoid typing all the forms again and again
            // NB: official-artwork needs to be used for SV pokemon, as they don't have sprites.
            "official-artwork": { front_default: String, "...": String },
            versions: {
                "generation-RomanNumeral": { versionName: { back_default: String, "...": String } },
            },
        },
    },
    // Pokemon have either 1 or 2 types, this is needed for sandwiches
    types: [{ name: String, url: String }],

    // moves list is needed to check for the moves Explosion and Self-Destruct
    // - shiny hunters want to bring a pokemon with Damp/Rain Dance to stop them suiciding
    moves: [
        {
            move: { name: String, url: String },
            version_group_details: [
                {
                    level_learned_at: Number,
                    move_learn_method: { name: String, url: String },
                    version_group: { name: String, url: String },
                },
            ],
        },
    ],

    // Not sure if this one is needed or not.
    forms: [{ name: String, url: String }],

    // These properties are unneeded for this project (i think)
    // NB: I'm wrapping them in {} just to hide them
    unneeded: {
        location_area_encounters: String,
        stats: [{ base_stat: Number, effort: Number, stat: { name: String, url, String } }],
        abilities: [{ ability: { name: String, url: String }, isHidden: Boolean, slot: Number }],
        base_experience: Number,
        order: Number,
        past_types: [],
        species: { name: String, url: String },
        game_indices: [{ game_index: Number, version: { name: String, url: String } }],
        height: Number,
        held_items: [
            {
                item: { name: String, url: String },
                version_details: [{ rarity: Number, version: { name: String, url: String } }],
            },
        ],
        id: Number,
        is_default: Boolean,
    },
};