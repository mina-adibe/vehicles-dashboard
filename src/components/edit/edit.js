import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { editItem } from "../../redux/action";
import styled from "styled-components";
import styles from "./edit.module.scss";
import Modal from "react-modal";

Modal.setAppElement("#root");
//for review
// yup validation
const SignupSchema = yup.object().shape({
  vehicle: yup.string().required(),
  startdate: yup.string().required(),
  odometer: yup.string().required(),
  volume: yup.string().required(),
  fueltype: yup.string().required(),
});

const Edit = (props) => {
  const vehicle = props.info[0];
  const startdate = props.info[1];
  const odometer = props.info[2];
  const volume = props.info[3];
  const fueltype = props.info[4];
  const id = props.info[5];
  //form
  const { register, handleSubmit, errors, setValue } = useForm({
    resolver: yupResolver(SignupSchema),
  });

  setTimeout(() => {
    setValue("vehicle", vehicle);
    setValue("startdate", startdate);
    setValue("odometer", odometer);
    setValue("volume", volume);
    setValue("fueltype", fueltype);
  }, 0);

  //redux
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(editItem(data, id));
    props.exit();
  };

  // component style

  const Formn = styled(Modal)`
    background: #ffffff;
    // border: 0.3px solid #e8ecef;
    border-radius: 4px;
    width: 620px;
    height: 504px;
    position: absolute;
    top: 20.22%;
    left: 29.72%;
    right: 27.22%;
    bottom: 23.78%;
    padding: 25px;
  `;

  const Head = styled.h2`
    font-family: Rubik;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
    color: #252631;
  `;

  return (
    <div>
      <Formn isOpen={props.show} contentLabel="test-modal">
        <div>
          <Head>Edit Fuel Entry</Head>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.grid_container}>
            <div className={styles.div1}>
              <label className={styles.label}>vehicle</label>
              <input type="text" name="vehicle" ref={register} />
              {errors.vehicle && <p>{errors.vehicle.message}</p>}
            </div>
            <div className={styles.div2}>
              <label className={styles.label}>start date</label>
              <input
                type="text"
                name="startdate"
                ref={register}
                className={styles.input}
              />
              {errors.startdate && <p>{errors.startdate.message}</p>}
            </div>
            <div className={styles.div3}>
              <label className={styles.label}>Odometer</label>
              <input
                type="text"
                name="odometer"
                ref={register}
                className={styles.input}
              />
              {errors.odometer && <p>{errors.odometer.message}</p>}
            </div>
            <div className={styles.div4}>
              <label className={styles.label}>Volume</label>
              <input
                type="text"
                name="volume"
                ref={register}
                className={styles.input}
              />
              {errors.volume && <p>{errors.volume.message}</p>}
            </div>
            <div className={styles.div5}>
              <label className={styles.label}>Fuel Type (optional)</label>
              <input
                type="text"
                name="fueltype"
                ref={register}
                className={styles.input}
              />
              {errors.fueltype && <p>{errors.fueltype.message}</p>}
            </div>
          </div>
          <div className={styles.footer}>
            <button className={styles.button_cancel} onClick={props.exit}>
              cancel
            </button>
            <button type="submit">save</button>
          </div>
        </form>
      </Formn>
    </div>
  );
};

export default Edit;
