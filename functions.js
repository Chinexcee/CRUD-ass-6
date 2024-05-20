 const customer = require("./model/customerModel")



const handleGetCustomer = async(req, res)=>{

  const listCustomer =
  await customer.find()

  return res.status(200).json({message: "Customer information",

  count: listCustomer.length,
  listCustomer 
})
}

const getOneCustomer= async(req, res)=>{


  try {
    const { id } = req.params

    const oneCustomer = await customer.findById(id)
  
    return res.status(200).json({
      message: "Customer details",
      onecustomer
    })
  } catch (error) {
    return res.statys(500).json({message: error.message})
  }
}

// Adding a new customer
const postCustomerdb = async(req, res)=>{
  const {name, email, phone,location, acct, grade, manager} = req.body

  const newCustomer = new customer({name, email, phone,location, acct, grade, manager})
  await newCustomer.save()

  try {
    return res.status(200).json({message: "Customer information", 
    customer: newCustomer
    
    
    })
  } catch (error) {
    return res.status(500).json(error.message)
  }
  
}

// Update a customer"s information

const customerUpdateInfo = async(req, res)=>{


  const {id} = req.params

  const { email} = req.body

  const updatedCustomer = await customer.findByIdAndUpdate(
      id,
      { email},
      {new: true}
  )

  return res.status(200).json({
      message: "Successful",
      user: updateCustomer
  })
      
}

const deleteCustomer = async(req, res)=>{

  try {
    const { id } = req.params

    const customerDeleted = await customer.findByIdAndDelete(id)
  
    return res.status(200).json({
        message: "Successful",
    })
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
 
}





module.exports = {
  
  handleGetCustomer,
  postCustomerdb,
  getOneCustomer,
  customerUpdateInfo,
  deleteCustomer
}