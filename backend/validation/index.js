exports.taskValidation = (req, res) => {
  req.check("task_name", "Task name is required").notEmpty();
  const errors = req.validationErrors();

  if (errors) {
    const showError = errors.map((err) => err.msg)[0];
    return res.status(400).json({ error: showError });
  }
  next();
};
