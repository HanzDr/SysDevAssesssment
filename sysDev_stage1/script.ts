import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// async function deleteData(){
//     await prisma.members.deleteMany()
//     await prisma.projects.deleteMany()
//     await prisma.member_projects.deleteMany()
// }

// deleteData();

// Adding data into members table
// async function addMembers() {
    
//     try {

//         await prisma.members.createMany({
//             data: [
//                 {name: "Alice", role: "Developer" },
//                 {name: "Bob", role: "Manager" },
//                 {name: "Mark", role: "Secretary"},
//                 {name: "Shain", role: "Data Architect"}
//             ],
//         });

//     } catch (error) {
//         console.error("Error in adding members ", error);
//     } finally {
//         await prisma.$disconnect();
//     }
// }

// addMembers();


// Adding data into projects table
// async function addProjects() {
//     try {

//         await prisma.projects.createMany({
//             data: [
//                 {name: "Website", description: "Build a website"},
//                 {name: "Database", description: "Create a database"},
//                 {name: "UI", description: "Design a User Interface"},
//                 {name: "Chatbot", description: "Create a chatbot"}
//             ],
//         })
//     } catch (error) {
//         console.error("Error in adding projects ", error);
//     } finally {
//         await prisma.$disconnect();
//     }
    
// }


// addProjects();


// Assigning members to project
async function assignMembersToProjects() {
    try {
        await prisma.member_projects.createMany({
            data: [
                { member_id: 1, projects_id: 1 },
                { member_id: 3, projects_id: 2 },
                { member_id: 2, projects_id: 1 },
                { member_id: 2, projects_id: 2 },
                { member_id: 3, projects_id: 3 }
            ]
        });
        console.log("Members assigned to projects!");
    } catch (error) {
        console.error("Error assigning members: ", error);
    } finally {
        await prisma.$disconnect();
    }
}

assignMembersToProjects();



// async function getMembers (){
//     try {
//         const members = await prisma.members.findMany({
//             select: {
//                 id: true,
//                 name: true,
//                 role: true,
//                 created_at: true,
//                 updated_at: true
//             }
//         })
//         console.log("Here are the members: ", members);
//         return members
//     } catch (error) {
//         console.error("Error in getting members ", error);
//     } finally {
//         await prisma.$disconnect();
//     }
// }

// getMembers();


// async function getMemberAssignment() {
//     try {
//         const assignments = await prisma.member_projects.findMany({
//             select: {
//                 member_id: true,
//                 projects_id: true,
//                 members: {
//                     select: {name: true, role: true, created_at: true}
//                 },
//                 projects: {
//                     select: {id: true, name: true, description: true, created_at: true}
//                 }
//             }
//         })
//         console.log("Here are the assignments: ", assignments)
//     } catch (error) {
//         console.error("Error in getting assignments ", error);
//     } finally {
//         await prisma.$disconnect();
//     }
// }

// getMemberAssignment();

// async function getProjects(){

//     try {
//         await prisma.projects.findMany({
//             select: {
//                 id: true,
//                 name: true,
//                 description: true,
//                 created_at: true
//             }
//         })
//         console.log("Successfully retrieved data from projects table");
//     } catch (error){
//         console.log("Error in getting projects: ", error);
//     } finally {
//         await prisma.$disconnect();
//     }
    
// }

// getProjects();