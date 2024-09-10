// Importing necessary modules
import { Router } from "express"; 
import getAllUsers from '../../data/datasources/user_datasource.js';

// Initialize the router instance
const router = Router();

// Middleware to log request URLs
function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

// Applying middleware to the router
router.use(logger);

// In-memory user data for demonstration
const users = [{ name: "Kyle" }, { name: "Sally" }];

// Define route handlers
router.get("/", async (req, res) => {
  try {
    console.log(req.query.name); // Log query parameter 'name'
    const users = await getAllUsers(); // Fetch all users
    res.json(users); // Respond with the list of users as JSON
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' }); // Handle errors
  }
});

router.get("/new", (req, res) => {
  res.render("users/new"); // Render new user form
});

router.post("/", (req, res) => {
  const isValid = false; // Example validation
  if (isValid) {
    users.push({ firstName: req.body.firstName }); // Add new user if valid
    res.redirect(`/users/${users.length - 1}`); // Redirect to new user's page
  } else {
    console.log("Error"); // Log error for invalid input
    res.render("users/new", { firstName: req.body.firstName }); // Re-render form with input data
  }
});

// Define routes for user operations
router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user); // Log user object
    res.send(`Get User With ID ${req.params.id}`); // Respond with user ID
  })
  .put((req, res) => {
    res.send(`Update User With ID ${req.params.id}`); // Respond for updating user
  })
  .delete((req, res) => {
    res.send(`Delete User With ID ${req.params.id}`); // Respond for deleting user
  });

// Param middleware for user ID
router.param("id", (req, res, next, id) => {
  req.user = users[id]; // Attach user to request object
  next(); // Continue to the next middleware/handler
});

// Export the configured router
export default router;
