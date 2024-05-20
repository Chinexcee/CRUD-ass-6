const express = require("express")
const dotenv = require("dotenv")

const { 
        handleGetCustomer,
        postCustomerdb,
        getOneCustomer,
        customerUpdateInfo,
        deleteCustomer} = require("./functions")
const mongoose = require("mongoose")




dotenv.config()


const app = express()

// middleware
app.use(express.json())


const PORT = process.env.PORT || 8000




app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})

mongoose.connect(process.env.CONFIG_MONGODB)
.then(()=> console.log("MongoDB connected..."))







app.get("/customers", handleGetCustomer)
app.post("/post-customer", postCustomerdb )
app.get("/one-customer/:id", getOneCustomer)
app.patch("/update/:id", customerUpdateInfo)
app.delete("delete-customer/:id", deleteCustomer)


