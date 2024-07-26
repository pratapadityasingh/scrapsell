const User = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const crypto = require("crypto");

const register = async (req, res) => {
  try {
    
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ msg: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      phone,
      password: hashedPassword,
    });

    const token = await newUser.generateToken();

    localStorage.setItem("token", token);

    res.status(201).json({ msg: "User created successfully" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the user" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(200).json({ error: "Invalid login credentials" });
    }

    const isPasswordMatch = await userExist.comparePassword(password);
    if (!isPasswordMatch) {
      return res.status(200).json({ error: "Invalid login credentials" });
    }

    if (isPasswordMatch && userExist.isStatus == true) {
      return res.status(200).json({ error: "You have been blocked" });
    }

    const token = await userExist.generateToken();

    res.status(201).json({
      token: token,
      message: "Login successful",
      success: true,
      userId: userExist._id.toString(),
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred during login" });
  }
};

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  jwt.verify(token, process.env.JWT_SEC_KEY, (err, decoded) => {
    if (err) {
      console.log("error");

      return res.status(401).json({ message: "Failed to authenticate token" });
    } else {
      // console.log("success");

      req.userId = decoded.userId;
      res.status(200).json({ message: "Token authenticated successfully" });
    }
  });
};



const requestPasswordReset = async (req, res) => {
  try {
    const { id } = req.params;
    

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const resetToken = crypto.randomBytes(32).toString("hex");
    const hashedToken = await bcrypt.hash(resetToken, 10);

    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        resetPasswordToken: hashedToken,
        resetPasswordExpires: Date.now() + 3600000,
      },
      { new: true }
    );
   

    if (!updatedUser) {
      return res
        .status(500)
        .json({ error: "Failed to update user with reset token" });
    }

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.GENERATE_EMAIL,
        pass: process.env.GENERATE_PASSWORD,
      },
    });

    const mailOptions = {
      to: user.email,
      from: process.env.MAIL_FROM,
      subject: "Password Reset",
      text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n
             Please click on the following link, or paste this into your browser to complete the process:\n\n
             http://localhost:3000/reset-password/${resetToken}/${id}\n\n
             If you did not request this, please ignore this email and your password will remain unchanged.\n`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Password reset token sent to email" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while requesting password reset" });
  }
};

const resetPassword = async (req, res) => {
  try {
    const { id, token } = req.params;
    const { password } = req.body;
    

    if (!id || !token) {
      return res.status(400).json({ error: "User ID and token are required" });
    }

    if (!password) {
      return res.status(400).json({ error: "Password is required" });
    }

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (!user.resetPasswordToken) {
      return res.status(400).json({ error: "No reset token found" });
    }
   
    let isTokenValid = false;
    if (token == user.resetPasswordToken) {
      
      isTokenValid = true;
    }
  
    // const isTokenValid = await bcrypt.compare(token, user.resetPasswordToken);
   
    if (!isTokenValid) {
      return res.status(400).json({ error: "Invalid token" });
    }
    if (user.resetPasswordExpires < Date.now()) {
      return res.status(400).json({ error: "Token has expired" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        password: hashedPassword,
        resetPasswordToken: "",
        resetPasswordExpires: Date.now(),
      },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(500).json({ error: "Failed to reset password" });
    }

    res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while resetting password" });
  }
};
const saveAddress = async (req, res) => {
  try {
    
    const { id } = req.params;

    const {
      fullName,
      addressLine1,
      addressLine2,
      city,
      state,
      postalCode,
      country,
    } = req.body;
    
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    user.address = {
      fullName,
      addressLine1,
      addressLine2,
      city,
      state,
      postalCode,
      country,
    };

    await user.save();

    res.status(200).json({ message: "Address saved successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred while saving address" });
  }
};

module.exports = {
  register,
  login,
  verifyToken,
  saveAddress,
  requestPasswordReset,
  resetPassword,
};
