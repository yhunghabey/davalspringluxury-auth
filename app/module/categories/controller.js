import * as service from './service';

export async function create(req,res,next){
    try {
        return res.status(200).json(await service.create(req.user, req.body))
    } catch (err) {
        next(err);
    }
}

export async function getAll(req,res,next){
    try {
        return res.status(200).json(await service.getAll())
    } catch (err) {
        next(err);
    }
}
