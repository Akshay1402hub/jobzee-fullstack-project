import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide the job title."],
    minLength: [2, "Title must contain at least 2 Characters!"],
    maxLength: [30, "Title cannot exceed 30 Characters!"],
  },
  description: {
    type: String,
    required: [true, "Please provide the job decription."],
    minLength: [15, "Description must contain at least 15 Characters!"],
    maxLength: [500, "Description cannot exceed 500 Characters!"],
  },
  category: {
    type: String,
    required: [true, "Please provide the job category."],
  },
  country: {
    type: String,
    required: [true, "Please provide the required country."],
  },
  city: {
    type: String,
    required: [true, "Please provide the required city name."],
  },
  location: {
    type: String,
    required: [true, "Please provide the exact location."],
    minLength: [8, "Location must contian at least 8 characters!"],
  },
  fixedSalary: {
    type: Number,
    minLength: [4, "Salary must contain at least 4 digits"],
    maxLength: [20, "Salary cannot exceed 20 digits"],
  },
  salaryFrom: {
    type: Number,
    minLength: [4, "The Starting range of Salary must contain at least 4 digits"],
    maxLength: [20, "The Starting range of Salary cannot exceed 20 digits"],
  },
  salaryTo: {
    type: Number,
    minLength: [4, "The ending range of the salary must contain a minimum of 4 digits."],
    maxLength: [20, "The ending range of the salary cannot exceed of 20 digits."],
  },
  expired: {
    type: Boolean,
    default: false,
  },
  jobPostedOn: {
    type: Date,
    default: Date.now,
  },
  postedBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});

export const Job =mongoose.model("Job",jobSchema);