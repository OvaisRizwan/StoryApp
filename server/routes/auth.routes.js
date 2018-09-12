import { Router } from 'express';
import passport from '../passport';
import jwt from 'jsonwebtoken';
import User from '../models/user';
import Story from '../models/story';
import cuid from 'cuid';

const router = new Router();

router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        session: false,
    }, (err, user, info) => {
        if (err) return next(err);
        if (!user) {
            return res.status(401).json({
                user: {
                    ok: false,
                },
                message: 'Login failed',
            });
        } else {
            console.log(user);
            const payload = {
                email: user.email,
                cuid: user._id ? user._id.toString() : '',
            };
            const token = jwt.sign(payload, 'secret');

            if (req.session) {
                req.session.token = token;
            }

            return res.json({
                message: '',
                user: {
                    ok: true,
                    token,
                    name: user.name,
                    role: user.role,
                    email: user.email,
                },
            });
        }
    })(req, res, next);
});

router.get('/me', passport.authenticate('jwt', {
    session: false,
}), (req, res) => {
    return res.json({
        user: {
            ok: true,
            name: user.name,
            role: user.role,
            email: user.email,
        },
    });
});

router.post("/createstory", passport.authenticate('jwt', {
    session: false,
}), (req, res) => {
    console.log(req)
    if (req.user.role === 'admin') {
        var newStory = new Story({
            title: req.body.title.trim(),
            description: req.body.description.trim(),
            video: req.body.video.trim(),
            dateAdded: Date.now(),
            status: req.body.status,
        });
        newStory.save().then(item => {
            res.json({
                status: 'SUCCESS'
            });
        });
    } else {
        res.status(401).send('Unauthorized');
    }
});

router.post("/changepassword", passport.authenticate('jwt', {
    session: false,
}), (req, res) => {
    if (req.user) {
        if (req.body.password) {
            User.findOne({
                'email': req.user.email
            }, function (err, user) {
                if (user) {
                    user.set({
                        password: user.generateHash(req.body.password)
                    });
                    user.save().then(item => {
                        res.json({
                            status: 'SUCCESS'
                        });
                    }).catch(err => {
                        res.status(400).json({
                            status: 'FAILED'
                        });
                    });
                }
            });
        } else {
            res.status(400).send('Bad Request');
        }
    } else {
        res.status(401).send('Unauthorized');
    }
});

export default router;
