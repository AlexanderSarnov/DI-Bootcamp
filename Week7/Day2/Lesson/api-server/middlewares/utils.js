const auth = (req, res, next) => {
    const { admin } = req.query;
    if (admin === 'true') {
        next();
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
};

const logger = (req, res, next) => {
    console.log(req.url, req.method);
    next();
};

module.exports = { auth, logger };
