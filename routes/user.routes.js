import { Router } from 'express';
import bodyParser from 'body-parser';
import { userController } from '../controllers/user.controller.js';

const router = Router();

const jsonParser = bodyParser.json()
 
const urlencodedParser = bodyParser.urlencoded({ extended: false })

/**
 * @openapi
 * '/api/user/create':
 *  post:
 *     tags:
 *     - User
 *     summary: Crea usuario
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - name
 *              - email
 *              - password
 *            properties:
 *              name:
 *                type: string
 *                default: prueba
 *              email:
 *                type: string
 *                default: prueba@gmail.com
 *              password:
 *                type: string
 *                default: prueba141189@
 *     responses:
 *      200:
 *        description: Create
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */

router.post('/create', (req, res) => userController.user_create(req, res));

router.post('/login', (req, res) => userController.user_login(req, res));

export default router;

