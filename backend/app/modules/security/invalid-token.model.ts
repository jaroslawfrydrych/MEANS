import {pre, prop, Typegoose} from 'typegoose';
import {Jwt} from '../../../core/jwt';

@pre<InvalidToken>('save', function (next) {
    const decode = Jwt.decodeToken(this.token);
    this.expiresAt = new Date(decode.exp * 1000);
    next();
})

export class InvalidToken extends Typegoose {
    public static async checkToken(token): Promise<boolean> {
        try {
            const tokenModel = await InvalidTokenModel.find(<any>{
                token
            });

            return tokenModel.length > 0;
        } catch (error) {
            throw new Error(error);
        }
    }

    public static async addToken(token): Promise<any> {
        try {
            const invalidAccessToken = new InvalidTokenModel({token});
            return await invalidAccessToken.save();
        } catch(error) {
            return new Error(error);
        }
    }

    @prop(<any>{required: true, unique: true})
    public token: string;

    @prop(<any>{default: Date.now, expires: 0})
    public expiresAt: Date;
}

export const InvalidTokenModel = new InvalidToken().getModelForClass(InvalidToken);
