import * as React from "react";
import { View, useWindowDimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import TimelineCalendarScreen from "./CalendarTimeline";
const FirstRoute = () => <TimelineCalendarScreen weekView={false} />;

const SecondRoute = () => <TimelineCalendarScreen weekView={true} />;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const CalendarScreenTabs = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Timeline" },
    { key: "second", title: "Week" },
  ]);

  return (
    <View style={{ flex: 1 }}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </View>
  );
};
export default CalendarScreenTabs;
