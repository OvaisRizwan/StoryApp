import User from './models/user';
import cuid from 'cuid';

export default function () {
  User.findOne({
    'email': 'user@gmail.com'
  }, function(err, user) {
    if (!user) {
      const user = new User({
        email: 'user@gmail.com',
        isAdmin: true,
        role: 'user',
        name: 'ovais',
      });

      user.password = user.generateHash('ovais');

      user.save();
    }
  });

  User.findOne({
    'email': 'admin@gmail.com'
  }, function(err, user) {
    if (!user) {
      const user = new User({
        email: 'admin@gmail.com',
        isAdmin: true,
        role: 'admin',
        name: 'rizwan',
      });

      user.password = user.generateHash('rizwan');

      user.save();
    }
  });
}

  