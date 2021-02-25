const Bootcamp = require('../models/Bootcamp')



//@desc     create all bootcamps
//@route    POST /api/v1/bootcamps      
//@access   Public
exports.createBootcamps = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.create(req.body);
        res.status(200).json({ 'result': true, "response": bootcamp });
    } catch (error) {
        res.status(400).json({ 'result': false, "response": error.message });
    }
}

//@desc     get all bootcamps
//@route    GET /api/v1/bootcamps      
//@access   Public
exports.getBootcamps = async (req, res, next) => {
    try {
        const bootcamps = await Bootcamp.find();
        res.status(200).json({ 'result': true, "response": bootcamps })
    } catch (error) {
        res.status(400).json({ 'result': false, "response": error.message })
    }
}
//@desc     get single bootcamps
//@route    POST /api/v1/bootcamp     
//@access   Public
exports.getBootcamp = async (req, res, next) => {
    try {
        const bootcamps = await Bootcamp.findById(req.params.id);
        if (!bootcamps) {
            res.status(400).json({ 'result': false, "response": "No records found" })
        }
        res.status(200).json({ 'result': true, "response": bootcamps })
    } catch (error) {
        res.status(400).json({ 'result': false, "response": error.message })
    }
}
//@desc     update bootcamps
//@route    PUT /api/v1/bootcamps      
//@access   Public
exports.updateBootcamps = (req, res, next) => {
    try {
        const bootcamp= Bootcamp.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true
        })
        if(!bootcamp)
        {
            res.status(400).json({'result':false,'response':"No records found"});
        }
        res.status(200).json({'result':true,'response':bootcamp})
    } catch (error) {
        res.status(400).json({'result':false,'response':error});
    }
}

//@desc     get all bootcamps
//@route    DELETE /api/v1/bootcamps      
//@access   Public
exports.deleteBootcamps = (req, res, next) => {
    res.status(200).json({ 'result': true, "result": `deleting bootcamps ${req.params.id}` });

}