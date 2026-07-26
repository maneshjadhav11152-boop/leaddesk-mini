const Lead = require("../models/Lead");


// Create Lead

exports.createLead = async(req,res)=>{

    try{

        const {
            name,
            email,
            budget,
            message
        } = req.body;


        const newLead = new Lead({

            name,
            email,
            budget,
            message

        });


        await newLead.save();


        res.status(201).json({

            success:true,

            message:"Lead submitted successfully",

            lead:newLead

        });


    }
    catch(error){

        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};



// Get All Leads

exports.getLeads = async(req,res)=>{

    try{

        const leads = await Lead.find()
        .sort({createdAt:-1});


        res.json(leads);


    }
    catch(error){

        res.status(500).json({

            message:error.message

        });

    }

};

exports.updateLeadStatus = async(req,res)=>{

    try{


        const lead = await Lead.findByIdAndUpdate(

            req.params.id,

            {
                status:req.body.status
            },

            {
                new:true
            }

        );


        res.json({

            message:"Status updated",

            lead

        });


    }
    catch(error){

        res.status(500).json({

            message:error.message

        });

    }

};

