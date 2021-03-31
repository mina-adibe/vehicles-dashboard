import React, { useEffect } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
//import { connectModal } from "redux-modal";
//import { Button, Modal } from "react-bootstrap";
//import PropTypes from "prop-types";
import "./edit.scss";
import Modal from "react-modal";
//import Select from "react-select";
//import "react-select/dist/react-select.css";

Modal.setAppElement("#root");

const SignupSchema = yup.object().shape({
  vehicle: yup.string().required(),
  startdate: yup.string().required(),
  odometer: yup.string().required(),
  volume: yup.string().required(),
  fueltype: yup.string().required(),
});

const Edit = (props) => {
  //console.log("props >>$$$$$$$$", props?.info);

  //useEffect(() => {}, []);

  const { register, handleSubmit, errors, setValue } = useForm({
    resolver: yupResolver(SignupSchema),
  });

  setTimeout(() => {
    setValue("vehicle", props.info[0]);
    setValue("startdate", props.info[1]);
    setValue("odometer", props.info[2]);
    setValue("volume", props.info[3]);
    setValue("fueltype", props.info[4]);
  }, 0);

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Modal isOpen={props.show} contentLabel="test-modal">
        <h1>{props.info[2]}</h1>

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
          <button className="modal-exit-button" onClick={props.exit}>
            cancel
          </button>
          <input type="submit" />
        </form>
      </Modal>
    </div>
  );
};

export default Edit;
