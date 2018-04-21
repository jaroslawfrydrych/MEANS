import {prop, Typegoose} from 'typegoose';

export class RefreshToken extends Typegoose {
    @prop({required: true, unique: true})
    public token: string;

    @prop({default: Date.now, expires: 0})
    public expiresAt: Date;

}

export const RefreshTokenModel = new RefreshToken().getModelForClass(RefreshToken);
