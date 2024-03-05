const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SeatSchema = new Schema({
    cinemaId: {
        type: Schema.Types.ObjectId,
        ref: "Cinemas",
    },
    row: {
        type: String,
        required: true,
    },
    no: {
        type: String,
        required: true,
    },
    screenNo: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    status: {
        type: Number,
        default: 1, // 1 is available and 0 is taken
    },
    noOfSeat: {
        type: Number,
        default: 1,
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "Admins",
    },
    updatedBy: {
        type: Schema.Types.ObjectId,
        ref: "Admins",
    },
    created: {
        type: Date,
        default: Date.now(),
    },
    updated: {
        type: Date,
        default: Date.now(),
    },
});
module.exports = mongoose.model("Seats", SeatSchema);