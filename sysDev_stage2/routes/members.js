const express = require("express");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const router = express.Router();

// POST /api/members - Add a new member
router.post("/", async (req, res) => {
    try {
        const { name, role } = req.body;  // Extract name and role from request body

        if (!name || !role) {
            return res.status(400).json({ error: "Name and role are required." });
        }

        const validRoles = ["backend", "frontend", "UI/UX"];

        if(!validRoles.includes(role)){
            return res.status(400).json({ status: "error", message: "Role must be one of the following: backend, frontend, UI/UX." });
        }

        // Create a new member in the database
        const newMember = await prisma.members.create({
            data: { name, role },
        });

        res.status(201).json({
            message: "Member added successfully.",
            data: newMember,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error." });
    }
});


module.exports = router;
