import Joi from "joi";

export default{
    create: {
        body: {
          schema: Joi.object({
            title: Joi.string()
              .max(50)
              .trim(),
  
            description: Joi.string()
              .lowercase()
              .min(50)
              .max(250),
  
            category: Joi.string()
              .uppercase()
              .required(),
  
            subCategory: Joi.string()
              .uppercase(),
  
            createdBy: Joi.string()  
              
          }),
        },
    },

    update: {
        body: {
          schema: Joi.object({
            description: Joi.string()
              .lowercase()
              .min(50)
              .max(250),
            category: Joi.string()
              .uppercase(),
            subCategory: Joi.string()
              .uppercase(),  
          }),
        },
        params: {
          id: Joi.number(),
        }
      },
  
      remove: {
        params: {
          schema: Joi.object({
            id: Joi.string()
              .required(),
          }),
        },
      },
}