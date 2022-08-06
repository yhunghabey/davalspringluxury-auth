'use strict';
import { Router } from 'express';
import { joiValidator } from 'iyasunday';
import { guard } from '../../utils/middleware';
import * as controller from './controller';
import validation from './validator';

const route = Router();

route.post(
    '/category/create',
    guard('all'),
    joiValidator(validation.create),
    controller.create);


route.get(
    '/category/all',
    guard('all'),
    controller.getAll);
    


export default route;






