const express = require("express");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const router = express.Router();


// GET /api/projects/:id/members
router.get("/:id/members", async (req, res) => {
    try {
      //Parsed the URL id placeholder into an Integer
      const projectID = parseInt(req.params.id);
  
      const members = await prisma.member_projects.findMany({
        where: { projects_id: projectID },
        include: { members: true},
      })
  
      const membersList = [];
      for (const m of members) {
          membersList.push({
              id: m.members.id,
              name: m.members.name,
              role: m.members.role,
              assigned_at: m.members.assigned_at
          });
      }
  
      res.json({members: membersList})
    } catch (error) {
      console.error("ERROR: ", error)
    }
  })

module.exports = router;