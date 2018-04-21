import {prop, Typegoose} from 'typegoose';

export class InvalidToken extends Typegoose {
    @prop({required: true, unique: true})
    public token: string;

    @prop({required: true, default: 'access'})
    public type: string;

    @prop({default: Date.now, expires: 0})
    public expiresAt: Date;
}

export const InvalidTokenModel = new InvalidToken().getModelForClass(InvalidToken);
