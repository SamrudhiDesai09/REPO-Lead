import { View , ScrollView , StyleSheet } from 'react-native';
import Headercomp from './src1/components/HeaderComp.js';
import HoriCardcomp from './src1/components/HoriCardcomp';
import RectCardcomp from './src1/components/RectCardcomp.js';
import CustomText from './src1/components/CustomText.js';
import TextStyle from './src1/styles/TextStyle.js';



const App =()=>{
  return(
    <ScrollView style={style.container} showsVerticalScrollIndicator={false}>
      <View>
        <Headercomp/>
        <HoriCardcomp/>

        <View style={{marginTop: 25,}}>
        <View style={style.textlayout}>
          <View style={{ flex: 5, justifyContent: "flex-start" }}>
            <CustomText style={TextStyle.upComingUp} text={"Upcoming Meetings"} />
          </View>
          <View style={{ flex: 1 }}>
            <CustomText style={TextStyle.SeeallText} text={"See All"} />
          </View>
        </View>
        </View>

        <RectCardcomp/>

        <View style={style.textlayout}>
          <View style={{ flex: 5, justifyContent: "flex-start" }}>
            <CustomText style={TextStyle.upComingUp} text={"Upcoming Task"} />
          </View>
          <View style={{flex: 1}}>
            <CustomText style={TextStyle.SeeallText} text={"See All"} />
          </View>
        </View>

        <RectCardcomp/>

      </View>
    </ScrollView>
  );
};
export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  Frame1: {
    // gap: 24,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
  },
  textlayout: {
    gap: 12,
    paddingRight: 24,
    paddingLeft: 24,
    flexDirection: "row",
    flex: 1,
    paddingTop:20
  },
});













