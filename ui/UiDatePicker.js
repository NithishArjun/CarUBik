import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  Modal,
  Pressable,
  Image,
  Text,
} from "react-native";

import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import UiLink from "./UiLink";

function UiDatePicker({ label, controlKey, value, onConfirmHandler }) {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(()=>{
    if(value){
      const dt = new Date(value);
      setDate(prevState=>dt);
      setSelectedDateFormatter(dt);
    }
  },[])

  const onChange = (event, date) => {
    const timestamp = event.nativeEvent.timestamp;
    const dtInput = new Date(timestamp);
    setDate(dtInput);
  };

  const setSelectedDateFormatter = (dt) => {
    const monthArray = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const day = dt.getDate();
    const mnth = monthArray[dt.getMonth()];
    const year = dt.getFullYear();
    setSelectedDate(prevState=>`${day}-${mnth}-${year}`);
  };

  return (
    <>
      <Pressable
        onPress={() => setOpen(true)}
        style={[styles.pickerContainer, open ? styles.openBorder : ""]}
      >
        <Text style={styles.labelText}>{label}</Text>
        <View style={styles.pickerTextBoxView}>
          <Text style={[styles.labelValue, open ? styles.openColor : ""]}>
            {selectedDate}
          </Text>
        </View>
        <Image source={require("../assets/images/calendar.png")} />
      </Pressable>
      <Modal visible={open} animationType="slide" transparent={true}>
        <View style={styles.overlay}>
          <View style={styles.topView}></View>
          <View style={styles.calenderView}>
            <View style={styles.buttonContainer}>
              <UiLink
                title="Cancel"
                className="secondary"
                onPress={() => {
                  setOpen(false);
                }}
              ></UiLink>
              <UiLink
                title="Confirm"
                onPress={() => {
                  setSelectedDateFormatter(date);
                  onConfirmHandler(controlKey,date);
                  setOpen(false);
                }}
              ></UiLink>
            </View>
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="date"
              display="spinner"
              themeVariant="light"
              onChange={onChange}
            />
          </View>
        </View>
      </Modal>
    </>
  );
}

export default UiDatePicker;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,.2)",
  },
  topView: {
    flexGrow: 8,
  },
  calenderView: {
    backgroundColor: "#FFF",
    paddingTop: 10,
    paddingBottom: 60,
  },
  buttonContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingBottom: 20,
    justifyContent: "space-between",
  },
  pickerContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    paddingVertical: 4,
    paddingHorizontal: 4,
    marginBottom: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  openBorder: {
    borderColor: "purple",
  },
  pickerTextBoxView: {
    flex: 1,
    marginLeft: 8,
  },
  labelText: {
    color: "#666",
  },
  labelValue: {
    color: "#000",
    fontWeight: "bold",
  },
  openColor: {
    color: "purple",
  },
});
