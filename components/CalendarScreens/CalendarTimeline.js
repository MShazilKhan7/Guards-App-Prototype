import React, { useEffect, useMemo, useState } from "react";
import { Modal, View, Text, TextInput, Button, StyleSheet } from "react-native";
import {
  TimelineList,
  CalendarProvider,
  WeekCalendar,
  AgendaList,
  CalendarUtils,
  Calendar,
} from "react-native-calendars";
import groupBy from "lodash/groupBy";
import { timelineEvents } from "../constants/timelineEvents";

const INITIAL_TIME = { hour: 9, minutes: 0 };
const EVENTS = timelineEvents;

const TimelineCalendarScreen = ({ weekView = false }) => {
  const getTodayString = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const [eventsByDate, setEventsByDate] = useState(
    groupBy(EVENTS, (e) => CalendarUtils.getCalendarDateString(e.start))
  );
  const [currentDate, setCurrentDate] = useState(getTodayString());
  const [isModalVisible, setModalVisible] = useState(false);
  const [newEventTitle, setNewEventTitle] = useState("");
  const [newEventSummary, setNewEventSummary] = useState("");
  const [selectedTime, setSelectedTime] = useState(null);
  const [customHour, setCustomHour] = useState("9");
  const [customMinute, setCustomMinute] = useState("0");

  const marked = {
    [getTodayString()]: { marked: true },
  };

  const onDateChanged = (date) => {
    setCurrentDate(date);
  };

  const onBackgroundLongPress = (timeString, timeObject) => {
    setSelectedTime({ timeString, timeObject });
    setModalVisible(true);
  };

  const onWeekCalendarLongPress = (date) => {
    setSelectedTime({ date });
    setModalVisible(true);
  };

  const addEvent = () => {
    if (!selectedTime) return;

    const { date } = selectedTime;
    const { timeString, timeObject } = selectedTime;
    let timeStr = "";
    let hour = -1;
    let minute = -1;
    if (weekView) {
      hour = parseInt(customHour, 10);
      minute = parseInt(customMinute, 10);
      timeStr = `${date} ${hour.toString().padStart(2, "0")}:${minute
        .toString()
        .padStart(2, "0")}:00`;
    } else {
      timeStr = timeString;
    }

    const newEvent = {
      id: Math.random().toString(),
      start: timeStr,
      end: `${
        weekView
          ? `${date} ${hour + 1}:00:00`
          : `${timeObject.date} ${timeObject.hour + 1}:00:00`
      }`,
      title: newEventTitle,
      summary: newEventSummary ? newEventSummary : "Custom Event",
      color: "lightgreen",
    };

    // Determine the appropriate date key for the event
    const dateKey = weekView ? date : timeObject.date;
    const updatedEvents = {
      ...eventsByDate,
      [dateKey]: [...(eventsByDate[dateKey] || []), newEvent],
    };

    setEventsByDate(updatedEvents); // Update the state to trigger a re-render
    setModalVisible(false);
    setNewEventTitle("");
    setNewEventSummary("");
    setCustomHour("9");
    setCustomMinute("0");
  };

  // Data for AgendaList

  const ITEMS = useMemo(() => {
    return Object.keys(eventsByDate)?.map((date) => ({
      title: date,
      data: eventsByDate[date],
    }));
  }, [eventsByDate]);

  // Function to render each item in AgendaList
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemSummary}>{item.summary}</Text>
      <Text style={styles.itemTime}>
        {new Date(item.start).toLocaleTimeString()} -{" "}
        {new Date(item.end).toLocaleTimeString()}
      </Text>
    </View>
  );

  return (
    <CalendarProvider
      date={currentDate}
      onDateChanged={onDateChanged}
      showTodayButton
    >
      {weekView ? (
        <>
          <WeekCalendar
            markedDates={marked}
            firstDay={1}
            onDayLongPress={({ dateString }) =>
              onWeekCalendarLongPress(dateString)
            }
          />
          <AgendaList
            sections={ITEMS}
            renderItem={renderItem}
            sectionStyle={styles.section}
            // Uncomment the following lines if needed
            // scrollToNextEvent
            // dayFormat={'yyyy-MM-d'}
          />
        </>
      ) : (
        <>
          <WeekCalendar markedDates={marked} />
          <TimelineList
            events={eventsByDate}
            timelineProps={{
              onBackgroundLongPress,
              format24h: true,
            }}
            initialTime={INITIAL_TIME}
            showNowIndicator
            scrollToFirst
          />
        </>
      )}

      <Modal
        visible={isModalVisible}
        animationType="slide"
        style={{ flex: 1, backgroundColor: "white" }}
        transparent
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Add New Event</Text>
            <TextInput
              placeholder="Event Title"
              value={newEventTitle}
              onChangeText={setNewEventTitle}
              style={styles.input}
            />
            <TextInput
              placeholder="Event Summary"
              value={newEventSummary}
              onChangeText={setNewEventSummary}
              style={styles.input}
            />
            {weekView && (
              <>
                <Text>Time:</Text>
                <View style={styles.timeInputContainer}>
                  <TextInput
                    placeholder="Hour"
                    value={customHour}
                    onChangeText={setCustomHour}
                    keyboardType="numeric"
                    style={styles.timeInput}
                  />
                  {/* <Text>:</Text> */}
                  <TextInput
                    placeholder="Minute"
                    value={customMinute}
                    onChangeText={setCustomMinute}
                    keyboardType="numeric"
                    style={styles.timeInput}
                  />
                </View>
              </>
            )}
            <View style={styles.buttonContainer}>
              <Button title="Add Event" onPress={addEvent} />
              <Button
                title="Cancel"
                onPress={() => setModalVisible(false)}
                color="red"
              />
            </View>
          </View>
        </View>
      </Modal>
    </CalendarProvider>
  );
};

const styles = StyleSheet.create({
  section: {
    backgroundColor: "#f0f0f0",
    padding: 10,
  },
  itemContainer: {
    padding: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemSummary: {
    fontSize: 14,
    color: "#888",
  },
  itemTime: {
    fontSize: 12,
    color: "#666",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  input: {
    width: "100%",
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  timeInputContainer: {
    flexDirection: "row",
    // justifyContent: "space-between",
    width: "100%",
    marginVertical: 10,
    columnGap: 10,
  },
  timeInput: {
    width: "48%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
  },
});

export default TimelineCalendarScreen;
