import { Router } from "express";
import { getHerbs, getHerbById, addHerb, getHerbSearch } from "../controllers/herbController.js";
import multer, { diskStorage } from "multer";

const router = Router();
const storage = diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads");
    },
    filename: (req, file, cb)  => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({storage});

router.get("/", getHerbs);
router.get("/search", getHerbSearch);
router.get("/:id", getHerbById);
router.post("/", upload.single("image"), addHerb);

export default router;


// router.get("/search", async (req, res) => {
//     try {
//         const { query, location } = req.query;
//         let filter = {};

//         if (query) {
//             filter.$or = [
//                 { name: { $regex: query, $options: "i" } }, // Case-insensitive name search
//                 { botanicalName: { $regex: query, $options: "i" } } // Also search botanical name
//             ];
//         }

//         if (location) {
//             filter["location.state"] = { $regex: location, $options: "i" };
//         }

//         const herbs = await Herb.find(filter);

//         if (herbs.length === 0) {
//             return res.status(404).json({ message: "No herbs found" });
//         }

//         res.json(herbs);
//     } catch (error) {
//         console.error("Search Error:", error);
//         res.status(500).json({ message: "Internal Server Error", error });
//     }
// });