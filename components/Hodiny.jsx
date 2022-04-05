import { Text } from "react-native";
import { useState } from "react";

export default function Hodiny(props) {

    return (
    <Text>{props.hod}hod {props.min}min {props.sec}sec</Text>
    );
  }