import {useForm} from "react-hook-form";
import {ICar} from "../models/ICar.ts";
import {addCar} from "../services/api.service.ts";
import {carValidator} from "../validators/carValidator.ts";
import {joiResolver} from "@hookform/resolvers/joi";

export const CreateCarPage = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<ICar>({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });

    const createHandler = (data: ICar) => {
        addCar(data)
    }
    return (
        <>
            <form onSubmit={handleSubmit(createHandler)}>
                <div>
                    <input type='text'{...register('brand')} />
                    <div>{errors.brand?.message}</div>
                </div>
                <div>
                    <input type='text'{...register('price')} />
                    <div>{errors.price?.message}</div>
                </div>
                <div>
                    <input type='text'{...register('year')} />
                    <div>{errors.year?.message}</div>
                </div>
                <button>Save Car</button>
            </form>
        </>
    );
};