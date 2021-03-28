import React, { useEffect } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import "./edit.scss";
//import { Formik } from "formik";
//import Select from "react-select";
//import "react-select/dist/react-select.css";

const SignupSchema = yup.object().shape({
  vehicle: yup.string().required(),
  startdate: yup.string().required(),
  odometer: yup.string().required(),
  volume: yup.string().required(),
  fueltype: yup.string().required(),
});

export default function Edit() {
  useEffect(() => {
    setValue("vehicle", "vehicle");
    setValue("startdate", "startdate");
    setValue("odometer", "odometer");
    setValue("volume", "volume");
    setValue("fueltype", "fueltype");
  }, []);

  const { register, handleSubmit, errors, setValue } = useForm({
    resolver: yupResolver(SignupSchema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>vehicle</label>
          <input type="text" name="vehicle" ref={register} />
          {errors.vehicle && <p>{errors.vehicle.message}</p>}
        </div>
        <div>
          <label>start date</label>
          <input type="text" name="startdate" ref={register} />
          {errors.startdate && <p>{errors.startdate.message}</p>}
        </div>
        <div>
          <label>Odometer</label>
          <input type="text" name="odometer" ref={register} />
          {errors.odometer && <p>{errors.odometer.message}</p>}
        </div>
        <div>
          <label>Volume</label>
          <input type="text" name="volume" ref={register} />
          {errors.volume && <p>{errors.volume.message}</p>}
        </div>
        <div>
          <label>Fuel Type (optional)</label>
          <input type="text" name="fueltype" ref={register} />
          {errors.fueltype && <p>{errors.fueltype.message}</p>}
        </div>

        <input type="submit" />
      </form>
    </>
  );
}
