import Herb from "../models/Herb.js";

export const addHerb = async (req, res) => {
    try {
        console.log(req.body);
        // const herbData = JSON.parse(req.body);
        // console.log(herbData);
        const {name, botanicalName, location, growthConditions, uses, symptoms, preparationInstructions, foundInMedicines} = req.body;
        const image = req.file ? req.file.filename : "default-image.png";
        console.log(name, botanicalName);
        const newHerb = new Herb({
            name,
            botanicalName,
            location,
            growthConditions,
            uses,
            symptoms,
            preparationInstructions,
            foundInMedicines,
            image,
        });
        await newHerb.save();
        res.status(201).json(newHerb);
    } catch (error) {
        res.status(500).json({message: "Error adding herb", error});
    }
};

export const getHerbs = async (req, res) => {
    try {
        const herbs = await Herb.find();
        res.json(herbs);
    } catch (error) {
        res.status(500).json({message: "Error fetching herbs", error});
    }
};

export const getHerbById = async (req, res) => {
    try {
        const herb = await Herb.findById(req.params.id);
        if(!herb) return res.status(404).json({message: "Herb not found"}); 
        res.json(herb);
    } catch (error) {
        res.status(500).json({message: "Error fetching herb", error});
    }
};

export const getHerbSearch = async (req, res) => {
    try {
        // console.log(req);
        // console.log(req.query);
        const { query, location } = req.query;
        let filter = {};

        // Search by name (case insensitive)
        if (query) {
            filter.$or = [
                { name: { $regex: query, $options: "i" } }, 
                { botanicalName: { $regex: query, $options: "i" } }
            ];
        }

        // Search by location (state)
        if (location && typeof location === "string") {
            filter["location.state"] = { $regex: location, $options: "i" };
        }

        const herbs = await Herb.find(filter);

        if (herbs.length === 0) {
            return res.status(404).json({ message: "No herbs found" });
        }

        res.json(herbs);
    } catch (error) {
        console.error("Search Error:", error);
        res.status(500).json({ message: "Internal Server Error", error });
    }
};