const User = require('../model/Authmodel')
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const generateToken = (user) => {
  return jwt.sign({ id: user._id, email: user.email}, jwtSecret, { expiresIn: "7d" });
};
const Register = async (req, res) => {
    try {
        const { username, password, email , phone, introduction  } = req.body;
        if (!phone || !/^\d{10}$/.test(phone)) {
            return res.status(400).json({ message: 'Số điện thoại không hợp lệ' });
        }
        
        if (phone){
            const existingPhone = await User.User.findOne({ phone });
            if (existingPhone) {
              return res.status(400).json({ message: 'Số điện thoại đã được đăng ký' });
            }
        }
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!email || !emailRegex.test(email)) {
              return res.status(400).json({ message: 'Email không hợp lệ' });
            }
          if (email) {
            const existingUser = await User.User.findOne({ email });
            if (existingUser) {
              return res.status(400).json({ message: 'Email đã được đăng ký' });
            }
          }
          const hashedPassword = await bcrypt.hash(password, 10);
          const user = new User.User({ 
                username, 
                email, 
                password: hashedPassword, 
                introduction : introduction,
              });     
              await user.save();
              res.json({ message: 'Đăng ký thành công', user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Đã xảy ra lỗi' });
    }
};
const Login = async (req, res) => {
    try {
       const { username, password } = req.body;
       const user = await User.User.findOne({ username });
   
       if (!user) {
         return res.status(400).json({ message: 'Không tìm thấy tên tài khoản' });
       }
       const isPasswordValid = await bcrypt.compare(password,user.password);
       if (!isPasswordValid) {
         return res.status(400).json({ message: 'Nhập sai mật khẩu' });
       }
   
       const jwtToken = generateToken(user);
   
       res.json({ token: jwtToken, user });
     } catch (error) {
       console.error(error);
       res.status(500).json({ message: 'Đã xảy ra lỗi' });
     }
};
const UpdateProfile = async (req, res) => {
    try {
        const userId = req.user.id; // Assuming you have authentication middleware that adds user to req
        const { username, email, phone } = req.body;
        
        const user = await User.User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'Không tìm thấy người dùng' });
        }
        
        // Validate phone if provided
        if (phone) {
            if (!/^\d{10}$/.test(phone)) {
                return res.status(400).json({ message: 'Số điện thoại không hợp lệ' });
            }
            
            // Check if phone is already used by another user
            const existingPhone = await User.User.findOne({ phone, _id: { $ne: userId } });
            if (existingPhone) {
                return res.status(400).json({ message: 'Số điện thoại đã được đăng ký bởi người dùng khác' });
            }
            user.phone = phone;
        }
        
        // Validate email if provided
        if (email) {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailRegex.test(email)) {
                return res.status(400).json({ message: 'Email không hợp lệ' });
            }
            
            // Check if email is already used by another user
            const existingEmail = await User.User.findOne({ email, _id: { $ne: userId } });
            if (existingEmail) {
                return res.status(400).json({ message: 'Email đã được đăng ký bởi người dùng khác' });
            }
            user.email = email;
        }
        
        // Update other fields if provided
        if (username) user.username = username; 
        await user.save();
        
        res.json({ message: 'Cập nhật thông tin thành công', user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Đã xảy ra lỗi khi cập nhật thông tin' });
    }
};

module.exports = { Register, Login, UpdateProfile };


