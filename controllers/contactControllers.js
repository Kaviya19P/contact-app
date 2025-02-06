
const asyncHandler = require('express-async-handler')
const Contact = require('../models/contactModels')

//get all contact details
const getContacts = asyncHandler ( async ( req, res) => {
    const contacts = await Contact.find({user_id: req.user.id});
    res.status(200).json( contacts );
})

//create a contact
const createContact = asyncHandler ( async (req, res) => {
    console.log(`The request body is :`, req.body);
    const { name, email, phone } = req.body;
    if ( !name || !email || !phone ){
        res.status(400);
        throw new Error('All fields are mandatory');
    }

    const newContact = await Contact.create({
        name,
        email,
        phone,
        user_id: req.user.id
    });

    res.status(201).json(newContact);
    
})

//get a contact details
const getContact = asyncHandler ( async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
})

//update a contact
const updateContact = asyncHandler (async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }

    if()

    const updatedcontact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.status(200).json( updatedcontact );
})

//delete a contact
const deleteContact = asyncHandler ( async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }

    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json( contact );
})

//export modules
module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
};