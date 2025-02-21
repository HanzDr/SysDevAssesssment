const express = require("express");
const { PrismaClient } = require("@prisma/client");
const { body, validationResult } = require("express-validator");

const prisma = new PrismaClient();
const router = express.Router();

const validateMember = [
    body("name").trim().notEmpty().withMessage("Name is required."),
    body("role")
        .isIn(["backend", "frontend", "UI/UX"])
        .withMessage("Role must be one of the following: backend, frontend, UI/UX.")
];

router.post("/", validateMember, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            status: "error",
            message: errors.array()[0].msg
        });
    }

    try {
        const { name, role } = req.body;

        const newMember = await prisma.members.create({
            data: { name, role }
        });

        res.status(201).json({
            message: "Member added successfully.",
            data: newMember
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error." });
    }
});

module.exports = router;
