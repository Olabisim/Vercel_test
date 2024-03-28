
import jwt from 'jsonwebtoken'
import Business from '../models/Business.js';
import Client from '../models/Client.js';
import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/appError.js';

const signToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
};

const createSendToken = (user, statusCode, res, message) => {

    const token = signToken(user._id);

    const cookieOptions = {
      httpOnly: true,
    };

    res.cookie('jwt', token, cookieOptions);
  
    // removes the password from the output
    user.password = undefined;
  
    res.status(statusCode).json({
      status: true,
      message,
      data: {
        user,
      },
    });
};

  

const businessSignup =  async (req, res, next) => {
  
    const { name, email, password, description } = req.body;
  
    if (!name || !email || !description || !password) {
      next(new AppError('name, email, description and password required', 400));
    }
    
    const newUser = await Business.create({
        name,
        email: email.toLowerCase(),
        description,
        password
    });
  
    if(!newUser) {
      return  res.status(401).json({
        status: false,
        message: 'Unable to create data, please try again',
      });
    }
    let message = 'User Created Successfully'

    createSendToken(newUser, 201, res, message);

};
  

const businessLogin = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return next(new AppError('Please provide email and password!', 400));
    }
  
    const business = await Business.findOne({ email }).select('+password');
  
    if (!business || !(await business.correctPassword(password, business.password))) {
      return  res.status(401).json({
        status: false,
        message: 'username or password is not correct',
      });
    }

    let message = 'User LoggedIn Successfully'
  
    createSendToken(business, 200, res, message);
    
});


// removed client 

// const clientSignup = catchAsync(async (req, res, next) => {
  
//     const { name, email, password } = req.body;
  
//     if (!name || !email || !password) {
//       next(new AppError('name, email and password required', 400));
//     }
  
//     const newUser = await Client.create({
//       name,
//       email,
//       password,
//     });

//     if(!newUser) {
//       return  res.status(401).json({
//         status: false,
//         message: 'Unable to create data',
//       });
//     }
    
//     let message = 'User Created Successfully'
  
//     createSendToken(newUser, 201, res, message);
// });
  

const clientLogin = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return next(new AppError('Please provide email and password!', 400));
    }
  
    const client = await Client.findOne({ email }).select('+password');
  
    if (!client || !(await client.correctPassword(password, client.password))) {
      return  res.status(401).json({
        status: false,
        message: 'username or password is not correct',
      });
    }

    let message = 'User LoggedIn Successfully'
  
    createSendToken(client, 200, res, message);
  
});



export {businessLogin, businessSignup, clientLogin};