import jwt from 'jsonwebtoken';
import createError from 'http-errors';
import dotenv from 'dotenv';

dotenv.config();

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET as string;

export  class JWTUtils{
    
    public static signAccessToken(payload: any): Promise<string> {
        return new Promise((resolve, reject) => {
            jwt.sign({ payload }, accessTokenSecret, {}, (err, token) => {
                if (err) {
                    reject(createError.InternalServerError());
                }
                resolve(token as string);
            });
        });
    }

    public static verifyAccessToken(token: string): Promise<any> {
        return new Promise((resolve, reject) => {
            jwt.verify(token, accessTokenSecret, (err, payload) => {
                if (err) {
                    const message = err.name === 'JsonWebTokenError' ? 'Unauthorized' : err.message;
                    return reject(createError.Unauthorized(message));
                }
                resolve(payload);
            });
        });
    }
}

