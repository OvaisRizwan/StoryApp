import { Router } from 'express';
import passport from '../passport';
import jwt from 'jsonwebtoken';
import Story from '../models/story';
import cuid from 'cuid';

const router = new Router();

router.get("/getstories", passport.authenticate('jwt', {
    session: false,
}), (req, res) => {
    console.log(req)
    if (req.user.role === 'admin') {
        Story.find({}).then(stories => {
            res.json(stories);
        }).catch(err => {
            console.log(err);
            res.status(500).json({
                status: 'FAILED'
            });
        });
    }
    else if (req.user.role === 'user') {
        Story.find({ status: true }).then(stories => {
            res.json(stories);
        }).catch(err => {
            console.log(err);
            res.status(500).json({
                status: 'FAILED'
            });
        });
    }
    else {
        res.status(401).send('Unauthorized');
    }
});

export default router;
