const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const gallery = [
  {title:"Hostel Group – Togetherness", image:"/images/gallery-group-1.jpg"},
  {title:"Happy Memories", image:"/images/gallery-group-2.jpg"},
  {title:"Friends Forever", image:"/images/gallery-group-3.jpg"},
  {title:"Fun Times", image:"/images/gallery-group-4.jpg"},
  {title:"Great Moments", image:"/images/gallery-group-5.jpg"},
  {title:"Hostel Celebration", image:"/images/gallery-event.jpg"}
];

const mess = [
  {title:"Healthy Breakfast", image:"/images/mess-breakfast-main.jpg"},
  {title:"Morning Breakfast", image:"/images/mess-breakfast-2.jpg"},
  {title:"Lunch Thali", image:"/images/mess-lunch-thali.jpg"},
  {title:"Special Meal", image:"/images/mess-special-meal.jpg"},
  {title:"Veg Thali", image:"/images/mess-veg-thali.jpg"},
  {title:"Idli Sambar Combo", image:"/images/mess-idli-sambar.jpg"},
  {title:"Idli Sambar with Banana", image:"/images/mess-idli-sambar-banana.jpg"}
];

const celebrations = [
  {title:"Ganpati Celebration Entrance", image:"/images/celebration-entrance.jpg"},
  {title:"Ganpati Decoration", image:"/images/ganpati-decoration.jpg"},
  {title:"Lights Decoration", image:"/images/lights-decoration.jpg"},
  {title:"Evening Celebration Vibes", image:"/images/evening-celebration.jpg"}
];


const sports = [
  {title:"Hostel Sports Ground", image:"/images/sports-ground.jpg"}
];

const features = [
  ["24×7 Security","Secure entry, visitor management and CCTV-ready campus."],
  ["Wi-Fi Campus","Fast internet zones for study and daily work."],
  ["Mess Facility","Fresh, hygienic meals with a rotating weekly menu."],
  ["Sports Ground","Space for cricket, football, volleyball and fitness."],
  ["Bus Facility","Convenient transport support for students."],
  ["Celebrations","Cultural events, Ganpati celebrations and hostel activities."]
];

app.get("/api/gallery", (req,res)=>res.json(gallery));
app.get("/api/features", (req,res)=>res.json(features));
app.get("/api/mess", (req,res)=>res.json(mess));
app.get("/api/celebrations", (req,res)=>res.json(celebrations));
app.get("/api/sports", (req,res)=>res.json(sports));
app.get("/api/health", (req,res)=>res.json({status:"OK", message:"Hostel server is running"}));

app.post("/api/contact", (req,res)=>{
  const {name,email,message}=req.body;
  if(!name || !email || !message) return res.status(400).json({success:false,message:"Please fill all fields."});
  console.log("New message:", {name,email,message});
  res.json({success:true,message:"Message received successfully!"});
});

app.get("*",(req,res)=>res.sendFile(path.join(__dirname,"public","index.html")));

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Hostel website running on port ${PORT}`);
});