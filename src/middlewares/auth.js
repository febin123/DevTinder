const adminAuth=(req, res, next) => {
    console.log("Admin authentication middleware");

    const token=abc;
    const isAdmin = token === "abc"; // Example check, replace with actual logic
    if (isAdmin) {
        console.log("User is an admin");
        next(); // Proceed to the next middleware or route handler
    } else {
        console.log("User is not an admin");
        res.status(403).send("Access denied. Admins only.");
    }
}

module.exports = adminAuth;