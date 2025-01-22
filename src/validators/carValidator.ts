import * as Joi from "joi";


export const carValidator = Joi.object({
    brand: Joi.string().pattern(new RegExp('^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$'))
        .messages({'strong.pattern.base': 'Your brand value didnt match pattern'}),
    price: Joi.number().min(0).max(1000000).messages({
        "number.min": "0",
        "number.max": "100000",
    }),
    year: Joi.number().min(1990).max(2024).messages({

        "number.min": "1990",
        "number.max": "2024",
    }),
})