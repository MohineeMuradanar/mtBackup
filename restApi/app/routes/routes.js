module.exports = (app) => {
    const emp = require("../controller/controller")

    app.post("/emp", emp.create)

    app.get("/emps", emp.findAll)

    app.get("/emp/:id", emp.findOne)

    app.put("/emp/:id", emp.update)

    app.delete("/emp/:id", emp.delete)
}