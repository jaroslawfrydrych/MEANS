import {pre, prop, Typegoose} from 'typegoose';
import {Jwt} from '../../../core/jwt';

@pre<RefreshToken>('save', function (next) {
    const decode = Jwt.decodeToken(this.token);
    this.expiresAt = new Date(decode.exp * 1000);
    next();
})

export class RefreshToken extends Typegoose {
    public static async removeToken(token): Promise<any> {
        try {
            const tokenModel = await RefreshTokenModel.findOne({
                token
            });

            return await tokenModel.remove();
        } catch (error) {
            throw new Error(error);
        }
    }

    public static async checkToken(token): Promise<boolean> {
        try {
            const tokenModel = await RefreshTokenModel.find({
                token
            });

            return tokenModel.length === 1;
        } catch (error) {
            throw new Error(error);
        }
    }

    @prop({required: true, unique: true})
    public token: string;

    @prop({default: Date.now, expires: 0})
    public expiresAt: Date;

}

export const RefreshTokenModel = new RefreshToken().getModelForClass(RefreshToken);
