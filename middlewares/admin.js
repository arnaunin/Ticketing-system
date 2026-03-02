export default function admin(req, res, next) {
  if (req.user.role !== "admin") {
    return res.status(403).json({
      message: "Access Denied, Don\'t have permission to perfom this action",
    });
  }
  next();
}
