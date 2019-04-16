import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { User } from '../models';

dotenv.config();

export default class UserController {
  static async signup(req, res) {
    try {
      const checkUser = await User.findAll({
        where: {
          email: req.body.email,
        },
      });

      if (checkUser.length > 0) {
        return res.status(200).json({
          error: 'Sorry, this account already exists',
        });
      }

      const newUser = await User.create({
        fullName: req.body.fullName,
        userName: req.body.userName || '',
        phone: req.body.phone,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        isAdmin: req.body.isAdmin || false,
      });

      if (Object.keys(newUser.dataValues).length > 0) {
        const token = jwt.sign({
          email: req.body.email,
          userType: req.body.isAdmin,
        }, process.env.SECRET_KEY, {
          expiresIn: 86400, // expires in 24 hours
        });

        delete newUser.dataValues.password;

        return res.status(200).json({
          data: [newUser.dataValues],
          token,
        });
      }
    } catch (error) {
      console.log(error);
    }

    return res.status(500).json({
      error: 'Oups, something went wrong!',
    });
  }

  static async login(req, res) {
    try {
      const checkUser = await User.findAll({
        where: {
          email: req.body.email,
        },
      });

      if (checkUser.length > 0
        && bcrypt.compareSync(req.body.password, checkUser[0].dataValues.password)) {
        const token = jwt.sign({
          email: checkUser[0].dataValues.email,
          userType: checkUser[0].dataValues.isAdmin,
        }, process.env.SECRET_KEY, {
          expiresIn: 86400, // expires in 24 hours
        });

        delete checkUser[0].dataValues.password;

        return res.status(200).json({
          data: [checkUser[0].dataValues],
          token,
        });
      }

      return res.status(200).json({
        error: 'Sorry, this account doesn\'t exist',
      });
    } catch (error) {
      console.log(error);
    }

    return res.status(500).json({
      error: 'Oups, something went wrong!',
    });
  }
}
