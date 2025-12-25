const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://rahmatillaqobilov90_db_user:81kAltIRDeExHXQy@cluster0.hjhkgil.mongodb.net/",
        );
        console.log("MongoDB Connected ✅");
    } catch (err) {
        console.log("MongoDB Error ❌", err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
                                                                                                                                                                 