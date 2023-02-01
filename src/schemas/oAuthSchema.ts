import Joi from "joi";
export const oAuthSchema = Joi.object({
  OauthToken: Joi.string().required().trim(),
  dataUser: Joi.object({
    displayName: Joi.string().required().trim(),
    email: Joi.string().email().required(),
    phoneNumber: Joi.string().min(14).max(15).required(),
    photoURL: Joi.string().required().trim(),
    providerId: Joi.string().required().trim(),
    uid: Joi.string().required().trim(),
  }),
});
