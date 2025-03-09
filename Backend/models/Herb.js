import { Schema, model } from "mongoose";

const HerbSchema = new Schema({
    name: String,
    botanicalName: String,
    location: {
        state: String,
        region: String,
        latitude: Number,
        longitude: Number,
    },
    growthConditions: {
        temperature: {
            min: Number,
            max: Number,
        },
        humidity: {
            min: Number,
            max: Number,
        },
        sunlight: String,
    },
    uses: [String],
    symptoms: [
        {
            name: String,
            description: String,
            instructions: String,
        }
    ],
    preparationInstructions: String,
    foundInMedicines: [String],
    image: String,
});


const Herb = model("Herb", HerbSchema);
export default Herb;